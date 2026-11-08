---
version: 1
slug: "src-pages-home-tsx"
primary_target: "src/pages/Home.tsx"
related_targets: ["src/root.tsx"]
---

# Surface: Home (converter)

Mode: Operate. The visitor arrives from search to convert a number (either direction) and leave with a correct, verifiable result. Secondary: read the reference chart and the how-to.

Audience and job: students checking homework, teachers preparing examples. Both need the working (place values) and a clean 0-19 chart.

Constraints: at least two AdSense placements with reserved space (no CLS); static prerender; minimal JS; English copy; credits to Daniel Rogowski / PBS stay.

Pinned by owner: look like a typical, trustworthy online converter (bar: RapidTables, Omni Calculator, dCode), not an ancient Maya aesthetic.

## Direction contract

THESIS: A plain, fast converter page that a student trusts on sight. Refuses the parchment-and-serif "ancient civilisation" treatment and the marketing hero; the tool is the first thing on the page.

OWN-WORLD: Cool white ground, white panels with 1px slate borders, a solid deep-jade header bar and jade primary buttons, slate text, system UI sans for everything, tabular numerals. Maya digits drawn as authored SVG (dots, bars, shell) with a dashed hairline between levels; this replaced the planned Noto Sans Symbols 2 glyphs during the build because the font's ink sits unevenly in its glyph boxes, which made stacked levels misread, and SVG removes the font payload and renders the same on every OS. Copy still yields Unicode. Small radii (6 to 12px), no ornament, no gradients.

STORY: Visitor types a number (or taps glyphs), sees the Maya numeral and its place-value breakdown instantly, copies it, then scrolls to the chart, how-to and FAQ if they need to understand it.

FIRST VIEWPORT: Header bar (logo, name, in-page nav). H1 plus one-line intro. Converter panel: direction tabs with swap, input on the left, live result on the right (stacked glyphs beside a place-value table), copy button. Desktop: right sidebar ad 300x600 sticky. Mobile: converter fully above the fold, ad below it.

FORM: Category canon played straight (user pinned). Signature move: the place-value ledger, each glyph level aligned in a row with its power of 20, digit and subtotal, summing to the decimal. seed: none (direction pinned by user; per new-work a pinned direction beats the roll, so concept-seed was not run)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
