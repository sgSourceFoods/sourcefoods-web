# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common commands

- Install dependencies: `npm install`
- Develop (Next.js with Turbopack): `npm run dev`
- Build (production): `npm run build`
- Start (serve production build): `npm run start`
- Lint/format check (Biome): `npm run format:check`
- Auto-format (Biome): `npm run format:write`

Notes
- No test runner is configured in this repo; there are no test scripts.

## Project architecture (high level)

This is a Next.js 15 App Router project with Tailwind CSS 4 and Biome for formatting/linting.

- App Router (`app/`)
  - `app/layout.tsx`: Root layout. Loads global styles (`app/globals.css`), Google fonts via `next/font` (Poppins, Nunito Sans) as CSS variables, and composes the shell with `NavigationBar` and `Footer` around a `<main className="pt-16">`.
  - Route segments: `about-us/`, `contact-us/`, `join-us/`, `partnerships/`, plus the root `app/page.tsx` (homepage). These are server components by default unless marked otherwise.
  - `app/template/`: Template wrapper for shared route-level UI (used by App Router for per-route wrapping when present).

- UI composition (`components/`)
  - `components/navigation-bar/navigation-bar.tsx`: Site-wide header/nav used in the root layout.
  - `components/footer/footer.tsx`: Site-wide footer used in the root layout.
  - `components/ui/`: Small focused client or server components (e.g., `animated-counter.tsx`, `newsletter-signup.tsx`, `client-only.tsx`).

- Security/middleware (`middleware.ts`)
  - Global middleware implementing:
    - Rate limiting (in-memory Map; comment notes to use Redis in production).
    - Basic bot detection and filters for suspicious request patterns.
    - Extra headers per request (`X-Request-ID`, masked `X-Client-IP`).
  - `config.matcher` excludes API/static assets and common SEO files so the middleware runs on page routes.

- Next.js config (`next.config.ts`)
  - Adds strict security headers including a detailed Content Security Policy, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy, and others. If you introduce new external scripts, styles, frames, or connect targets, update the CSP directives accordingly.
  - Image optimization: `images.domains` currently allows `localhost` and `vercel.app`; add domains here when using external images.
  - `poweredByHeader: false`, `reactStrictMode: true`, compression enabled.
  - Exposes an example `env.CUSTOM_KEY` and enables `experimental.optimizePackageImports`.

- Styling
  - Tailwind CSS 4 via PostCSS (`postcss.config.mjs`) and global styles in `app/globals.css`.
  - Fonts are loaded with `next/font/google` and applied via CSS variables to the `<body>`.

- Static assets
  - `public/` for static files; `assets/` for project-managed assets not directly served.

- Tooling
  - Biome (`biome.json`) handles formatting and linting with recommended domains for Next.js and React and repo-aware file inclusion/exclusion.
  - TypeScript configuration in `tsconfig.json`; type checking can be run ad-hoc with `npx tsc --noEmit` (no package script is defined).

## Operational considerations for agents

- Changes that add external resources (scripts/styles/fonts/frames/images or outbound connections) must be reflected in both `next.config.ts` CSP directives and the `images.domains` allowlist to avoid blocked content in production.
- Middleware rate limits are conservative defaults (100 req/min globally; 10 req/min for admin paths). Adjust if adding admin or API-heavy routes.
- When introducing API routes or server actions, ensure they are excluded or intentionally included in the middleware `config.matcher` based on behavior needs.
