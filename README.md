# SourceFoods Website

🌱 **Reducing Food Waste, Strengthening Communities**

The official website for SourceFoods - Singapore's smart food distribution platform that connects food donors, NGOs, and volunteers to reduce waste and feed communities.

## 🚀 Features

- **Modern Design**: Clean, responsive interface built with Next.js 15 and Tailwind CSS
- **Security First**: Comprehensive security headers, rate limiting, and bot protection
- **Performance Optimized**: Image optimization, compression, and efficient loading
- **Accessibility**: WCAG-compliant design with proper semantic markup
- **SEO Ready**: Optimized meta tags, structured data, and search engine friendly
- **Community Integration**: Direct links to Telegram and Instagram communities
- **Volunteer Portal**: Streamlined volunteer registration and onboarding

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with custom design system
- **Typography**: Poppins and Nunito Sans fonts via Google Fonts
- **Deployment**: Optimized for [Vercel](https://vercel.com)
- **Security**: Custom middleware with rate limiting and attack prevention

## 🏗️ Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/sourcefoods-website.git
cd sourcefoods-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

## 🔒 Security Features

### Security Headers
- **Content Security Policy (CSP)**: Prevents XSS attacks
- **Strict Transport Security (HSTS)**: Forces HTTPS connections
- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME confusion attacks
- **Permissions Policy**: Controls browser features

### Middleware Protection
- **Rate Limiting**: 100 requests per minute per IP
- **Bot Detection**: Filters malicious bots while allowing legitimate crawlers
- **Attack Prevention**: Detects and blocks common attack patterns
- **IP Tracking**: Monitors suspicious activity

### Security Files
- `robots.txt`: Proper crawling guidelines
- `.well-known/security.txt`: Vulnerability disclosure information

## 📁 Project Structure

```
sourcefoods-website/
├── app/                    # Next.js App Router
│   ├── about-us/          # About page
│   ├── contact-us/        # Contact page
│   ├── join-us/           # Volunteer registration
│   ├── partnerships/      # Business partnerships
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── footer/           # Site footer
│   ├── navigation-bar/   # Navigation header
│   └── ui/              # UI components
├── assets/               # Static assets
├── public/              # Public files
├── middleware.ts        # Security middleware
├── next.config.ts      # Next.js configuration
└── tailwind.config.ts  # Tailwind configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📧 Contact & Community

- **Website**: [https://sourcefoods.sg](https://sourcefoods.sg)
- **Email**: info@sourcefoods.sg
- **Telegram**: [https://t.me/SourceFoods](https://t.me/SourceFoods)
- **Instagram**: [@sgsourcefoods](https://instagram.com/sgsourcefoods)
- **Volunteer Form**: [https://forms.gle/gsWQmRi6qT9nYqX36](https://forms.gle/gsWQmRi6qT9nYqX36)

## 🔐 Security

For security-related issues, please see our [security.txt](/.well-known/security.txt) file or contact us directly at info@sourcefoods.sg.

## 📄 License

This project is proprietary software. All rights reserved by SourceFoods.

---

**Built with ❤️ by the SourceFoods team to reduce food waste and strengthen Singapore's communities.**
