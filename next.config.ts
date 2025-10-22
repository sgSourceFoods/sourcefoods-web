import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security headers for production
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          // Content Security Policy - helps prevent XSS attacks
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live https://forms.gle",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https: http:",
              "media-src 'self'",
              "connect-src 'self' https://www.google-analytics.com https://vercel.live https://api.telegram.org https://www.instagram.com",
              "frame-src 'self' https://docs.google.com https://forms.gle",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://forms.gle",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
          // HTTP Strict Transport Security - forces HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          // Prevent clickjacking attacks
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // Prevent MIME type confusion attacks
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Enable XSS filtering
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Permissions Policy - control browser features
          {
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=(self)',
              'interest-cohort=()',
              'payment=()',
              'usb=()'
            ].join(', ')
          },
          // DNS prefetch control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // Hide server information
          {
            key: 'Server',
            value: 'SourceFoods'
          }
        ],
      },
    ];
  },
  
  // Image optimization and security
  images: {
    domains: ['localhost', 'vercel.app'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  
  // Compress responses
  compress: true,
  
  // Production optimizations
  poweredByHeader: false, // Hide X-Powered-By header
  reactStrictMode: true,
  
  // Environmental optimizations
  env: {
    CUSTOM_KEY: 'sourcefoods-security'
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@/components'],
  }
};

export default nextConfig;
