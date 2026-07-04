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
# Install dependencies (requires --legacy-peer-deps due to R3F 8.x + React 19)
npm install --legacy-peer-deps

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
│   ├── layout.tsx           # Root layout (fonts, theme, header/footer)
│   ├── page.tsx             # Homepage (3D + 9 sections)
│   ├── globals.css          # Tailwind v4 design tokens
│   ├── services/            # Services page
│   ├── work/                # Work + dynamic case studies
│   ├── about/               # About page
│   ├── insights/            # Insights + articles
│   ├── contact/             # Contact page
│   ├── privacy/             # Privacy policy
│   ├── sitemap.ts           # Auto-generated sitemap
│   └── robots.ts            # Robots.txt
├── components/
│   ├── layout/              # Header, footer, theme, skip-link, sticky CTA
│   ├── sections/            # Homepage sections (hero, problems, services, etc.)
│   ├── forms/               # Contact form (RHF + Zod)
│   ├── three/               # 3D scene (terrain, road, checkpoints, studio)
│   └── motion/              # Logo animation
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

## 3D Experience

Three experience modes:
- **Desktop:** Full 3D scroll-driven terrain with road, hills, vegetation, service checkpoints, and studio
- **Mobile:** Simplified 2.5D mode with reduced geometry and vegetation
- **Reduced motion:** Static SVG landscape fallback — no 3D, no animation

The 3D canvas is decorative (`aria-hidden`) — all content is real HTML layered on top.

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
