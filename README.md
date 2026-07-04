# Nilachal Tech Solutions

Premium 3D motion business website for Nilachal Tech Solutions — a digital growth and technology studio based in Guwahati, Assam.

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- **React Three Fiber** + Three.js + Drei (3D experience)
- **Motion for React** (animations)
- **Lucide React** (icons)
- **React Hook Form** + Zod (forms)
- **next-themes** (dark/light)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck

# Lint
npm run lint
```

## Project Structure

```
src/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Design tokens
│   ├── services/            # Services page
│   ├── work/                # Work + dynamic case studies
│   ├── about/               # About page
│   ├── insights/            # Insights + articles
│   ├── contact/             # Contact page
│   ├── privacy/             # Privacy policy
│   ├── sitemap.ts           # Auto-generated sitemap
│   └── robots.ts            # Robots.txt
├── components/
│   ├── layout/              # Header, footer, theme, skip-link
│   ├── sections/            # Homepage sections
│   ├── forms/               # Contact form
│   └── three/               # 3D components (future)
├── content/                 # Typed content data modules
│   ├── site.ts              # Site config, nav, contact
│   ├── services.ts          # Service definitions
│   ├── projects.ts          # Project case studies
│   ├── principles.ts        # Company principles
│   └── insights.ts          # Articles
├── lib/
│   ├── seo.ts               # Metadata generator
│   └── schema.ts            # JSON-LD structured data
└── types/                   # Shared TypeScript types
```

## Design System

See `DESIGN.md` for the full design system. Key tokens:

- **Colors:** ink `#0A0A0A`, bone `#F5F3EE`, gold `#D6A936`, forest `#132A23`, moss `#234238`, terracotta `#9B5F42`
- **Fonts:** Space Grotesk (headings), Inter (body), IBM Plex Mono (technical)
- **Theme:** Dark (default) and light via `next-themes`

## Implementation Plan

See `PLAN.md` for the full task breakdown across 6 phases (36 tasks).

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SITE_URL=https://nilachaltech.com
```

## Deployment

Optimised for Vercel:

```bash
npx vercel
```

## License

Proprietary — Nilachal Tech Solutions.
