# Design System: Nilachal Tech Solutions — "Digital Nilachal"

> Assam-inspired terrain · premium architectural visualisation · dark editorial layouts · controlled golden highlights · cinematic depth. 60% business website, 25% storytelling, 15% experimental 3D.

## Concept

**The Road to Digital Growth.** A business travels from disconnected, traditional operations toward modern digital systems. The journey begins at Nilachal-inspired hills; a mountain silhouette + winding road subtly form the letter **N**. The road connects every section as checkpoints, ending at a hillside studio where the contact form lives on a desktop monitor.

**Symbolism:** Hill = foundation/identity · Road = transformation · Golden signal = connected tech · Checkpoints = services · Viewpoints = completed work · Studio = partnership · Desktop screen = conversion.

## Color Tokens

| Token | Value | Use |
|------|-------|-----|
| `--color-ink` | `#0A0A0A` | Near-black background (dark theme) |
| `--color-bone` | `#F5F3EE` | Warm white text / light bg |
| `--color-grey` | `#8C8C8C` | Neutral grey, secondary text |
| `--color-gold` | `#D6A936` | Primary buttons, road signal, key markers (use sparingly) |
| `--color-forest` | `#132A23` | Deep forest green surfaces |
| `--color-moss` | `#234238` | Hill green |
| `--color-terracotta` | `#9B5F42` | Muted terracotta accents |

**Gold discipline:** gold is reserved for primary CTAs, the road signal, important nav states, section markers, key icons, and conversion elements. Never decorative fills or大面积 gradients.

**Semantic mapping (Tailwind tokens):**
- `bg-surface` → ink (dark) / bone (light)
- `text-primary` → bone (dark) / ink (light)
- `text-muted` → grey
- `accent` → gold
- `surface-elevated` → forest / moss

## Typography

| Role | Font | Notes |
|------|------|-------|
| Headings | Space Grotesk (or Sora) | Large editorial, tight tracking on display |
| Body | Inter (or Manrope) | 16px base, 1.6 line-height |
| Technical labels / coordinates / system indicators | IBM Plex Mono | Caps, small, muted |

**Type scale (rem):** 0.75 · 0.875 · 1 · 1.125 · 1.25 · 1.5 · 2 · 2.5 · 3.5 · 5 · 7

Rules: large editorial headlines, short paragraphs, strong spacing, thin borders, structured grids, controlled text widths (60–75 chars), clear visual hierarchy. One `h1` per page; no level skips.

## Layout & Spacing

- Mobile-first. Breakpoints: `sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`.
- 4/8px spacing rhythm. Container `max-w-7xl` on desktop.
- No horizontal overflow on mobile. `min-h-dvh` not `100vh`.
- Sticky header reserves offset for underlying content. Sticky mobile CTA.
- Content width: mobile 35–60 chars, desktop 60–75 chars.

## Motion

**Use:** gentle mist, road light travelling forward, camera following road curves, hills through fog, panels fading in, building lights turning on, subtle card depth, smooth page transitions, button feedback.

**Avoid:** fast camera rotations, scroll locking, excessive particles, constant background movement, text flying in multiple directions, long unskippable intros, loud auto music, heavy parallax, motion that blocks reading.

- Duration 150–300ms (micro), ≤400ms (complex), >500ms forbidden.
- `transform`/`opacity` only. Ease-out enter, ease-in exit.
- All animation gated by `prefers-reduced-motion`.

## Experience Modes

1. **Full desktop 3D** — real-time terrain, camera, road animation, service checkpoints.
2. **Simplified mobile 2.5D** — reduced canvas, same story, shortened journey.
3. **Static fallback** — illustrated landscape, normal vertical scroll.

All content (nav, services, projects, contact, CTAs) accessible in every mode. Site never depends on WebGL.

## Component Patterns

- Composition over configuration (composable `<Card>`, `<CardHeader>`, `<CardBody>`).
- Separate data-fetching containers from presentation components.
- Loading = skeleton (not spinner for content); empty/error states required.
- Touch targets ≥44px, 8px+ gaps, `cursor-pointer` on clickables.
- Icon-only buttons need `aria-label`. No emoji as icons — Lucide SVG only.
- One primary CTA per screen; secondary actions visually subordinate.

## Accessibility (WCAG 2.1 AA)

Keyboard nav · visible focus rings (2–4px) · semantic landmarks · proper heading hierarchy · descriptive alt text · accessible forms (visible labels, errors below field, focus management) · ≥4.5:1 contrast · skip-to-content link · reduced-motion support · screen-reader-friendly nav · 3D canvas is decorative `aria-hidden` with non-3D content parity.

## Logo / Hero Formation

Two connected hill ridges form the outer verticals of **N**; a winding illuminated road forms the diagonal stroke. The N feels embedded in terrain, not a literal giant letter. Transitions into the typographic wordmark **NILACHAL / TECH SOLUTIONS** during the opening animation.

## Anti-patterns to Avoid

Generic agency templates · stock office photos · excessive gradients/glassmorphism · meaningless floating 3D · AI robot-head imagery · glowing brains · cyberpunk cities · religious structures/temple recreations · fantasy mountains · game-style nav · gold overuse · hidden contact info · unreadable type · long loading · fake testimonials/stats/rankings/revenue.

## Final Experience Standard

> A sophisticated boutique technology studio from Assam guiding businesses along a clear road from outdated operations to practical digital growth. Local but globally designed. Cinematic but usable. Premium but practical.
