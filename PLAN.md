# Implementation Plan: Nilachal Tech Solutions Website

## Overview

A premium, cinematic, scroll-driven 3D business website for Nilachal Tech Solutions, a digital growth & technology studio based in Guwahati, Assam. The site tells a "Road to Digital Growth" story inspired by Nilachal Hill, combining real business communication with lightweight real-time 3D, conversion-focused UX, and accessible fallback experiences. Built with Next.js App Router, TypeScript, Tailwind CSS v4, React Three Fiber, and Motion for React.

## Architecture Decisions

- **Next.js App Router + Server Components**: Content-heavy pages render as Server Components; 3D and interactive UI isolate as Client Components to minimise hydration cost.
- **Tailwind CSS v4**: Centralised design tokens via `@theme` in `globals.css`; semantic color tokens, not raw hex in components.
- **Three experience modes**: Full 3D desktop, reduced 2.5D mobile, static fallback for low-power/reduced-motion. All content is real HTML layered over the 3D canvas — never rendered only inside WebGL.
- **Content/presentation split**: All copy and data live in `src/content/*.ts` typed modules. Components read content, never hard-code it.
- **No scroll hijacking**: Scroll-driven 3D uses `useScroll`/progress values to advance the camera; native vertical scroll stays predictable and reversible.
- **Lazy 3D**: The homepage shows meaningful HTML content before the 3D scene hydrates. The office interior is lazy-loaded near the end of the journey.
- **Dual theme**: Dark (cinematic) and light (editorial) via `next-themes`, both with accessible contrast.
- **Motion**: Motion for React (Framer Motion) for UI; `prefers-reduced-motion` gates all non-essential animation.

## Tech Stack

Next.js 15 (App Router) · TypeScript 5 · Tailwind CSS v4 · React Three Fiber + Drei + Three.js · Motion for React · Lucide React · next-themes · Zod (form validation) · React Hook Form.

## Task List

### Phase 1: Foundation

- [ ] **Task 1 — Project init & tooling**: Scaffold Next.js App Router + TS, install deps (tailwind v4, r3f, drei, motion, lucide, next-themes, zod, rhf), configure `tsconfig` paths, ESLint, Prettier.
  - Verify: `npm run dev` boots, `npm run build` passes, `tsc --noEmit` clean.
- [ ] **Task 2 — Design tokens & global styles**: `globals.css` with `@theme` tokens (colors, type scale, spacing, radii, shadows, z-index scale), base typography, focus rings, reduced-motion base, font loading (Space Grotesk/Sora, Inter/Manrope, IBM Plex Mono).
- [ ] **Task 3 — Theme provider & toggle**: `next-themes` provider, theme toggle button, no flash of wrong theme.
- [ ] **Task 4 — Layout shell**: Root layout, `<SkipLink>`, sticky `<SiteHeader>` (wordmark + nav + "Start a Project"), `<SiteFooter>`, mobile nav drawer, route progress indicator.
- [ ] **Task 5 — Content data modules**: `content/services.ts`, `content/projects.ts`, `content/principles.ts`, `content/insights.ts`, `content/site.ts` (nav, contact, social) with strict TS types.
- [ ] **Task 6 — SEO & schema utilities**: `lib/seo.ts` (metadata helper), `lib/schema.ts` (LocalBusiness, Service, Article, Breadcrumb JSON-LD), `app/sitemap.ts`, `app/robots.ts`.

### Checkpoint: Foundation
- [ ] Site shell renders, nav works, theme toggles, build clean.

### Phase 2: Homepage HTML Sections (no 3D yet)

- [ ] **Task 7 — Hero section**: Headline, supporting copy, primary/secondary CTAs, location label, scroll indicator. Real HTML, animates in with Motion.
- [ ] **Task 8 — Problems section**: Four problem cards (poor visibility, no presence, manual ops, disconnected tools), restrained Motion reveals.
- [ ] **Task 9 — Services journey section**: Four service checkpoints (Digital Presence, Websites & Experiences, Business Systems, Automation & Strategy) with description, benefit, deliverables, suitable clients, "Learn More" links.
- [ ] **Task 10 — Process section**: Discover → Plan → Build → Improve, sequential markers.
- [ ] **Task 11 — Featured case study section**: Puspanjali Guest House (challenge / solution / outcome), tech tags, related services, real dashboard mockup panel.
- [ ] **Task 12 — Founder section**: Headline, copy, role tags, abstract geometry/initials (no portrait required).
- [ ] **Task 13 — Principles section**: Five editorial principles, calmer environment.
- [ ] **Task 14 — Final CTA + Studio section**: CTA headline/copy, "Request a Free Digital Audit", WhatsApp/email/Explore-work secondary actions.

### Checkpoint: Homepage Content
- [ ] Full homepage reads top-to-bottom as a normal scroll site, all CTAs wired.

### Phase 3: Contact & Forms

- [ ] **Task 15 — Contact form component**: RHF + Zod, fields per brief (name, business, phone/WhatsApp, email, service, problem, budget, contact method), validation, loading/success/error states, spam protection (honeypot), privacy acknowledgement. Accessible labels, error placement, focus management.
- [ ] **Task 16 — Contact page**: `/contact` route with form + WhatsApp deep link + email fallback. Reachable without 3D journey.
- [ ] **Task 17 — Form submission handler**: API route or server action with validation, rate limiting, success/error response.

### Checkpoint: Conversion Path
- [ ] Form submits, validates, shows states; contact reachable from nav and homepage.

### Phase 4: Internal Pages

- [ ] **Task 18 — Services page**: `/services` with detailed sections, scoping notes, per-service CTA. Lighter visual system (terrain lines, road motifs).
- [ ] **Task 19 — Work page**: `/work` reusable project grid, project cards (name, industry, problem, services, outcome, image, link).
- [ ] **Task 20 — Dynamic case study**: `/work/[slug]` template rendering project data; `generateStaticParams`, `generateMetadata`.
- [ ] **Task 21 — About page**: `/about` — why, name meaning, Guwahati/Assam connection, founder, approach, vision. No religious claims.
- [ ] **Task 22 — Insights page + article**: `/insights` index (title, category, summary, reading time, date) and `/insights/[slug]` template with Article schema.
- [ ] **Task 23 — Privacy page**: `/privacy` policy content.

### Checkpoint: All Pages
- [ ] Every route in nav renders, metadata unique, build clean.

### Phase 5: 3D Experience

- [ ] **Task 24 — 3D canvas + scroll controller**: `<RoadJourney>` R3F canvas, scroll progress hook, camera path, reduced-motion gate, loading state that doesn't block content.
- [ ] **Task 25 — Terrain & road**: Nilachal-inspired low-poly terrain, winding road forming subtle N, instanced vegetation, baked-ish lighting, golden signal travelling the road.
- [ ] **Task 26 — Service checkpoints & props**: Checkpoint structures per service, transformation props (paper→dashboard, scattered→organised).
- [ ] **Task 27 — Project viewpoint & studio exterior**: Pavilion for featured work; hillside studio exterior (stone, timber, glass, sloped roof, terracotta).
- [ ] **Task 28 — Studio interior + contact desk**: Lazy-loaded interior, camera moves inside, desktop monitor hosts the HTML contact form overlay.
- [ ] **Task 29 — Mobile 2.5D mode**: Reduced-complexity layered canvas, shortened camera journey.
- [ ] **Task 30 — Static fallback**: Static illustrated landscape fallback for reduced-motion/low-power, full content accessible.

### Checkpoint: 3D Integrated
- [ ] 3D decorates but never blocks content; all three modes work; reduced-motion respected.

### Phase 6: Polish & Ship

- [ ] **Task 31 — Logo & hero formation**: Landscape-derived N → wordmark transition animation.
- [ ] **Task 32 — Accessibility pass**: Keyboard nav, focus states, heading hierarchy, alt text, ARIA, 3D canvas `aria-hidden` decorative, skip link, screen-reader content parity.
- [ ] **Task 33 — Performance pass**: Lazy 3D, compressed assets (Draco/KTX2 where applicable), image optimisation, font loading, no CLS, Core Web Vitals check.
- [ ] **Task 34 — SEO pass**: Unique metadata, OG/Twitter, sitemap, robots, structured data, local keywords, semantic headings.
- [ ] **Task 35 — Deployment config**: `next.config`, env example, README with setup/build/deploy, OG assets, `vercel.json` if needed.
- [ ] **Task 36 — Web Interface Guidelines review**: Run `web-design-guidelines` skill against key pages.

### Checkpoint: Complete
- [ ] Builds without errors, all deliverables present, ready for review.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| 3D blocks content/accessibility | High | All content in HTML; 3D canvas is decorative `aria-hidden`; static fallback always available. |
| Mobile performance on low-end Android | High | 2.5D mode, lazy 3D, compressed assets, reduced vegetation/shadows, sticky CTA. |
| Scope creep on 3D models | Medium | Use low-poly/instanced geometry; defer Blender assets to placeholders initially. |
| Overuse of gold / cinematic noise | Medium | Design tokens cap gold usage; review against brand rules. |
| Contact form spam/abuse | Medium | Honeypot + rate limit + validation. |

## Open Questions

- Hosting target (Vercel vs other)? Assumed Vercel.
- Email/WhatsApp endpoints for form submission — to be provided.
- Real project imagery beyond Puspanjali — placeholders until supplied.
- Ambient sound — included only if desired; toggle provided.
