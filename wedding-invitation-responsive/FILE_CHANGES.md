# File Modification Report

## Production static website — rewritten or added

- `site/index.html` — semantic, accessible, de-branded invitation markup; all sections preserved.
- `site/styles.css` — mobile-first responsive system, fluid typography, safe areas, grid/flex layouts, media queries, focus styles, reduced-motion support, and 4K width cap.
- `site/script.js` — dependency-free loader, reveal, parallax, countdown, marquee-supporting behaviour, and reduced-motion handling.
- `site/assets/temple-backdrop.svg` — local traditional temple artwork replacing the remote image dependency.
- `site/.nojekyll` — prevents static hosts from applying Jekyll processing.

## Deployment and documentation — added

- `netlify.toml` — publishes `site` directly and adds baseline security headers.
- `.gitignore` — excludes local build/cache output.
- `README.md` — local viewing, GitHub setup, Netlify continuous deployment, and update instructions.
- `QA_REPORT.md` — viewport, zoom, slow-image, long-text, and reduced-motion results.
- `qa/audit-results.json` — raw automated audit measurements.
- `FILE_CHANGES.md` — this complete file report.

## React/Tailwind maintainable source — modified

- `source/package.json` — removed Emergent packages and CRACO; retained only normal front-end dependencies.
- `source/postcss.config.js` — standard Tailwind/PostCSS configuration.
- `source/tailwind.config.js` — responsive theme, breakpoints, colours, fonts, and content scanning.
- `source/public/index.html` — removed Emergent script, badge, analytics injection, and platform markup.
- `source/src/index.js` — standard React entry point.
- `source/src/App.js` — semantic page assembly, skip link, reduced-motion behaviour, and cleaned runtime initialization.
- `source/src/App.css` — application-level visual effects without platform code.
- `source/src/index.css` — full responsive CSS layer and all custom media queries.
- `source/src/components/Loader.jsx` — accessible loader with reduced-motion compatibility.
- `source/src/components/Reveal.jsx` — reusable reveal/mask components.
- `source/src/components/decor/FloatingPetals.jsx` — decorative noninteractive petals.
- `source/src/components/decor/HangingBells.jsx` — responsive fixed bells.
- `source/src/components/decor/Ornaments.jsx` — local SVG ornamental components.
- `source/src/components/decor/WalkingDolls.jsx` — responsive doll image component.
- `source/src/sections/Hero.jsx` — fluid hero typography, local temple asset, safe-area layout, and descender-safe masks.
- `source/src/sections/MarqueeStrip.jsx` — readable non-overlapping ceremonial marquee.
- `source/src/sections/Blessing.jsx` — responsive image/text split using local artwork.
- `source/src/sections/Details.jsx` — dedicated doll/card grid tracks and mobile/desktop ordering.
- `source/src/sections/Timeline.jsx` — mobile-first timeline with desktop alternation.
- `source/src/sections/Countdown.jsx` — fluid countdown grid and accessible timer text.
- `source/src/sections/Venue.jsx` — responsive venue layout, accessible address/map links, and aspect-ratio media.
- `source/src/sections/FriendsMarquee.jsx` — accessible friends marquee.
- `source/src/sections/ThankYou.jsx` — responsive closing section.
- `source/src/assets/temple-backdrop.svg` — local copy of the replacement temple artwork.

## Preserved content/configuration

- `source/src/config/weddingConfig.js` — wedding names, families, dates, venue, timeline, and invitation copy retained as the edit point.

## Media copied without visual modification

- `site/assets/doll-it.png`
- `site/assets/doll-lawyer.png`
- `site/assets/gold-lotus.png`
- `source/src/assets/doll-it.png`
- `source/src/assets/doll-lawyer.png`
- `source/src/assets/gold-lotus.png`

## Removed from the original platform project

- `.emergent/` metadata, cron hooks, and platform configuration.
- `frontend/craco.config.js` and both Emergent health-check plugin files.
- `@emergentbase/visual-edits` and other platform-only package entries.
- Injected `assets.emergent.sh` script, fixed badge/watermark markup, and PostHog analytics injection from the original HTML shell.
- The unused Python/FastAPI backend, test scaffolding, platform memory files, and background-removal helper script; none were required by the invitation.
- Remote Unsplash image URLs; the final site uses the local `temple-backdrop.svg` asset.
