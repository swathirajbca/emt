# Responsive and Accessibility QA Report

## Result

**Passed: 16 of 16 requested viewport sizes.**

The automated audit reported zero horizontal overflow at every tested size. It also verified couple-card order, doll positioning, doll/card non-overlap, centered “weds” placement, hero descender clearance, marquee separation, 48 px map-button height, and the 1440 px maximum content width on large displays.

## Viewports checked

| Viewport | Result | Horizontal overflow | Maximum content width |
|---|---:|---:|---:|
| 320 × 568 | Pass | 0 px | 320 px |
| 360 × 640 | Pass | 0 px | 360 px |
| 375 × 667 | Pass | 0 px | 375 px |
| 390 × 844 | Pass | 0 px | 390 px |
| 412 × 915 | Pass | 0 px | 412 px |
| 430 × 932 | Pass | 0 px | 430 px |
| 768 × 1024 | Pass | 0 px | 768 px |
| 820 × 1180 | Pass | 0 px | 820 px |
| 1024 × 768 | Pass | 0 px | 1024 px |
| 1280 × 720 | Pass | 0 px | 1280 px |
| 1366 × 768 | Pass | 0 px | 1366 px |
| 1440 × 900 | Pass | 0 px | 1440 px |
| 1536 × 864 | Pass | 0 px | 1440 px |
| 1920 × 1080 | Pass | 0 px | 1440 px |
| 2560 × 1440 | Pass | 0 px | 1440 px |
| 3840 × 2160 | Pass | 0 px | 1440 px |

## Additional checks

| Check | Result |
|---|---:|
| 125% zoom equivalent | Pass |
| 150% zoom equivalent | Pass |
| 200% zoom equivalent | Pass |
| Long unbroken bride/groom names | Pass |
| Slow/missing image placeholders | Pass |
| `prefers-reduced-motion: reduce` | Pass |
| Map button minimum tap height | 48 px |
| Large-screen content cap | 1440 px |

Zoom was tested by reducing the effective CSS viewport to the dimensions produced by 125%, 150%, and 200% zoom on a 1280 × 720 browser window. Raw machine-readable measurements are included in `qa/audit-results.json`.

## Responsive fixes verified

- Mobile-first page shell with safe-area padding and a 1440 px content cap.
- Hero uses viewport-relative minimum height instead of the original fixed 640 px floor.
- Fluid hero typography uses `clamp()` and extra reveal-mask clearance so `g`, `y`, `p`, and `j` descenders are not cut.
- Bride and groom profiles use grid tracks reserved for each doll; text cards cannot occupy the doll tracks.
- Profiles stack as bride → weds → groom below 1024 px and become a balanced three-column arrangement at desktop width.
- Countdown uses a two-by-two grid on narrow screens and four columns at tablet width.
- Venue art and map card retain space during slow loading using `aspect-ratio`, intrinsic dimensions, `object-fit`, and `max-width`.
- Timeline is single-column on mobile and alternates around a centered line on wider screens.
- Marquees use duplicated non-overlapping groups with explicit spacing and a readable reduced-motion fallback.
- Long content uses `minmax(0, 1fr)`, `min-width: 0`, `overflow-wrap`, and flexible gaps.
- Buttons and links expose visible keyboard focus and the Google Maps control remains at least 48 px high.
- Motion-heavy effects are disabled or flattened for reduced-motion users.

## Custom media queries

- `@media (min-width: 40rem)` — tablet details and four-column countdown.
- `@media (min-width: 56.25rem)` — alternating desktop timeline.
- `@media (min-width: 64rem)` — desktop couple cards, venue split, and larger image ratios.
- `@media (min-width: 120rem)` — stable spacing on 4K/TV displays without stretching content.
- `@media (orientation: landscape) and (max-height: 42.5rem)` — compact hero for short landscape screens.
- `@media (max-height: 42.5rem)` — hides the nonessential scroll cue on short screens.
- `@media (max-width: 22rem)` — extreme narrow/zoom fallback.
- `@media (prefers-reduced-motion: reduce)` — accessible static-motion mode.
