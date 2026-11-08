# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Students (school and university) doing homework or coursework on number systems and positional notation. They arrive from a search engine with a specific number to convert or a specific Maya numeral to read, want the answer fast, and often need to show the working (place values, powers of 20).
- Teachers preparing lessons or materials on the Maya vigesimal system. They need correct worked examples and a clean reference table of the twenty digits.

## Product Purpose

Maya Numeral Converter is a free online tool that converts between decimal numbers and Maya numerals in both directions, instantly as the user types. Success means a visitor from search gets a correct, readable result within seconds, understands how it was derived, and can copy it.

## Positioning

A fast, single-purpose converter that shows the Maya numeral (dot, bar and shell forms; copyable as Unicode U+1D2E0 to U+1D2F3) together with the place-value breakdown, plus a compact reference of the system. It is a utility first and an explainer second.

## Operating Context

- Most traffic comes from search engines (queries like "maya numeral converter", "decimal to maya", "maya to decimal", "maya numbers 1 to 20"). SEO is a primary business concern.
- Used on phones and on classroom or home desktops.
- The site is monetised with Google AdSense; the layout must reserve at least two ad placements without hurting the tool or causing layout shift.
- Google Analytics runs only after cookie consent (GDPR).

## Capabilities and Constraints

- Decimal to Maya: any non-negative integer up to Number.MAX_SAFE_INTEGER (2^53 - 1).
- Maya to decimal: user builds a numeral level by level from the twenty digit glyphs.
- Live conversion while typing, place-value breakdown, copy result.
- Stack: React 19 + React Router 8 framework mode, TypeScript 7, Node.js 22.22+, static prerender (`/`, `/privacy-policy`, `/404`), Vite, deployed to Cloudflare Pages. Styling is plain CSS (MUI was removed in the 2026 redesign for performance).
- Maya digits are drawn as inline SVG (dots, bars, shell) by `src/components/MayaGlyph.tsx`; no glyph web font is loaded. Copied results use the Unicode Mayan Numerals characters (U+1D2E0 to U+1D2F3).
- Content language: English.
- AdSense: only reserved slots for now; publisher and slot IDs are not decided yet.

## Brand Commitments

- Name: "Maya Numeral Converter". Author: Daniel Rogowski, Bydgoszcz University of Science and Technology. These credits stay.
- The owner explicitly wants the look of a typical, trustworthy online converter tool, not an ancient Maya / parchment aesthetic.

## Evidence on Hand

- Existing educational copy: about section, worked examples (7, 20, 365), FAQ (mirrored in FAQPage JSON-LD), sources and credits (Wikipedia, maxpixel icon, Bryan Derksen numeral graphics).
- Logo mark and favicon: `public/favicon.svg` (Maya numeral 8 on a jade tile), with PNG renders `favicon.png` (512), `favicon-32.png` and `apple-touch-icon.png`. Open Graph image: `public/og-image.png`.
- No testimonials, usage numbers, or press. Do not invent any.

## Product Principles

1. The converter is the page: input and result are above the fold on every viewport.
2. Show the working: every result can be verified through its place values.
3. Search-first content: real, accurate explanatory text that answers the queries people search for.
4. Ads never interrupt the task: they sit between task and content, with reserved space.
5. Fast on cheap phones: minimal JavaScript, static HTML first.

## Accessibility & Inclusion

- Glyphs are images of meaning for most users: every numeral needs a text alternative (its decimal value).
- Keyboard-operable glyph picker; WCAG 2.2 AA contrast.
