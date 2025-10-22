import { NextRequest, NextResponse } from 'next/server';

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; timestamp: number }>();

// Bot detection patterns
const BOT_PATTERNS = [
  /bot/i,
  /crawler/i,
  /spider/i,
  /scraper/i,
  /wget/i,
  /curl/i,
  /python-requests/i,
  /headless/i
];

// Suspicious patterns that might indicate attacks
const SUSPICIOUS_PATTERNS = [
  /\.\.\//,  // Directory traversal
  /<script/i,  // XSS attempt
  /union.*select/i,  // SQL injection
  /javascript:/i,  // XSS attempt
  /onload=/i,  // XSS attempt
  /eval\(/i,  // Code injection
];

function isRateLimited(ip: string, limit: number = 100, windowMs: number = 60000): boolean {
  const now = Date.now();
  const key = `${ip}:${Math.floor(now / windowMs)}`;
  
  const current = rateLimitStore.get(key) || { count: 0, timestamp: now };
  
  // Clean up old entries
  for (const [k, v] of rateLimitStore.entries()) {
    if (now - v.timestamp > windowMs) {
      rateLimitStore.delete(k);
    }
  }
  
  if (current.count >= limit) {
    return true;
  }
  
  current.count++;
  current.timestamp = now;
  rateLimitStore.set(key, current);
  
  return false;
}

function detectBot(userAgent: string): boolean {
  if (!userAgent) return true; // No user agent is suspicious
  
  return BOT_PATTERNS.some(pattern => pattern.test(userAgent));
}

function detectSuspiciousContent(url: string, userAgent: string): boolean {
  const combined = `${url} ${userAgent}`.toLowerCase();
  return SUSPICIOUS_PATTERNS.some(pattern => pattern.test(combined));
}

function getClientIP(request: NextRequest): string {
  // Check various headers for the real IP
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (cfConnectingIP) return cfConnectingIP;
  if (realIP) return realIP;
  if (forwarded) return forwarded.split(',')[0].trim();
  
  // Fallback to a default value since NextRequest doesn't have ip property
  return 'unknown';
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Get client information
  const ip = getClientIP(request);
  const userAgent = request.headers.get('user-agent') || '';
  const url = request.url;
  const path = request.nextUrl.pathname;
  
  // Skip middleware for static assets and API routes that need different handling
  if (path.startsWith('/_next/') || path.startsWith('/api/') || path.includes('.')) {
    return response;
  }
  
  // Rate limiting
  if (isRateLimited(ip, 100, 60000)) { // 100 requests per minute
    return new NextResponse(JSON.stringify({ 
      error: 'Too many requests', 
      message: 'Please try again later.' 
    }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': '60',
        'X-RateLimit-Limit': '100',
        'X-RateLimit-Remaining': '0'
      }
    });
  }
  
  // Basic bot detection (allow good bots, block suspicious ones)
  const isBot = detectBot(userAgent);
  if (isBot && !userAgent.includes('Googlebot') && !userAgent.includes('facebookexternalhit')) {
    // Log suspicious bot activity
    console.warn(`Suspicious bot detected: ${userAgent} from ${ip}`);
    
    // Return minimal response for bots
    return new NextResponse('Access denied', { status: 403 });
  }
  
  // Detect suspicious content patterns
  if (detectSuspiciousContent(url, userAgent)) {
    console.warn(`Suspicious content detected from ${ip}: ${url}`);
    return new NextResponse('Bad request', { status: 400 });
  }
  
  // Add security headers that weren't covered in next.config.ts
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    response.headers.set('X-Request-ID', crypto.randomUUID());
  }
  response.headers.set('X-Client-IP', ip.substring(0, 10) + '***'); // Partial IP for debugging
  
  // Additional security for sensitive paths
  if (path.startsWith('/admin') || path.startsWith('/api/admin')) {
    // Extra protection for admin routes
    if (isRateLimited(ip, 10, 60000)) { // Stricter rate limiting
      return new NextResponse('Admin access rate limited', { status: 429 });
    }
  }
  
  return response;
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (SEO file)
     * - sitemap.xml (SEO file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
