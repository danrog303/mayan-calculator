---
name: Maya Numeral Converter
description: A plain, trustworthy two-way converter between decimal numbers and Maya numerals, with the working shown.
colors:
  jade-950: "#082c25"
  jade-900: "#0b4a3e"
  jade-800: "#0c5a4a"
  jade-700: "#0f6e5a"
  jade-200: "#b5dccf"
  jade-100: "#d6ede5"
  jade-50: "#edf7f3"
  ink: "#15202b"
  ink-2: "#3a4855"
  ink-3: "#5a6977"
  line-strong: "#7d8b99"
  line: "#d9dfe5"
  line-soft: "#e8ecf0"
  bg: "#f2f5f7"
  surface: "#ffffff"
  surface-2: "#f7f9fa"
  ad: "#e9edf1"
  danger: "#b42318"
  danger-bg: "#fef3f2"
  on-dark: "#ffffff"
  on-dark-2: "#c6ddd5"
typography:
  display:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  headline:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  title:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.25
  input-value:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    fontFeature: "tnum"
  lede:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
  small:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
  caption:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
  headline-mobile:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  title-mobile:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title-prose:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
  value-strong:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    fontFeature: "tnum"
  micro:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.3
  # Glyph scale: Maya digits are SVG sized at 1em wide, so these font-sizes set
  # the drawn digit width, not text. Used by .numeral--xl/lg/md/sm, the chart,
  # the keypad and the ledger.
  glyph-xl:
    fontFamily: "inherit"
    fontSize: "4.5rem"
  glyph-lg:
    fontFamily: "inherit"
    fontSize: "3.5rem"
  glyph-result-mobile:
    fontFamily: "inherit"
    fontSize: "3rem"
  glyph-md:
    fontFamily: "inherit"
    fontSize: "2.5rem"
  glyph-chart:
    fontFamily: "inherit"
    fontSize: "2.25rem"
  glyph-key:
    fontFamily: "inherit"
    fontSize: "1.75rem"
  glyph-sm:
    fontFamily: "inherit"
    fontSize: "1.5rem"
rounded:
  focus: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  gutter-wide: "24px"
  xl: "40px"
  section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.jade-700}"
    textColor: "{colors.on-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0 18px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.jade-800}"
    textColor: "{colors.on-dark}"
  button-primary-active:
    backgroundColor: "{colors.jade-900}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0 18px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-2}"
  button-secondary-small:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "36px"
  button-text:
    textColor: "{colors.jade-700}"
    padding: "0 4px"
    height: "36px"
  button-text-hover:
    textColor: "{colors.jade-800}"
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.input-value}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
    height: "56px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-2}"
    typography: "{typography.small}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
    height: "32px"
  chip-hover:
    backgroundColor: "{colors.jade-50}"
    textColor: "{colors.jade-800}"
  tab:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
    padding: "0 24px"
    height: "52px"
  tab-selected:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.jade-700}"
  converter-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "24px"
  site-header:
    backgroundColor: "{colors.jade-900}"
    textColor: "{colors.on-dark}"
    height: "52px"
  nav-link:
    textColor: "{colors.on-dark-2}"
    typography: "{typography.small}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
  nav-link-hover:
    textColor: "{colors.on-dark}"
  site-footer:
    backgroundColor: "{colors.jade-950}"
    textColor: "{colors.on-dark-2}"
    typography: "{typography.small}"
    padding: "32px 24px 40px"
  glyph-key:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "6px 2px"
    height: "64px"
  glyph-key-hover:
    backgroundColor: "{colors.jade-50}"
  glyph-key-active:
    backgroundColor: "{colors.jade-100}"
  numeral-level-active:
    backgroundColor: "{colors.jade-100}"
    textColor: "{colors.jade-800}"
    rounded: "{rounded.focus}"
  ledger-row-active:
    backgroundColor: "{colors.jade-50}"
    textColor: "{colors.ink}"
  ad-slot-rectangle:
    backgroundColor: "{colors.ad}"
    rounded: "{rounded.sm}"
    width: "336px"
    height: "280px"
  ad-slot-leaderboard:
    backgroundColor: "{colors.ad}"
    rounded: "{rounded.sm}"
    width: "728px"
    height: "90px"
  ad-slot-sidebar:
    backgroundColor: "{colors.ad}"
    rounded: "{rounded.sm}"
    width: "300px"
    height: "600px"
---

# Design System: Maya Numeral Converter

## Overview

**Creative North Star: "The Trusted Worksheet"**

The site is a plain, fast online converter that a student trusts on sight. It plays the utility-tool canon straight: a solid jade header bar, a cool grey-white ground, white panels with 1px slate borders, slate text in the system UI sans, tabular numerals everywhere a number appears. The tool is the first thing on every page; the explanatory content follows it as calm, readable reference.

The one authored element is the Maya digit itself. Dots, bars and the shell are drawn as SVG on a 60-unit grid and stacked into numerals with a dashed hairline between levels, so no level can be misread as part of its neighbour. The signature component is the place-value ledger: each level of the numeral sits in a row with its power of 20, its digit and its subtotal, summing to the decimal total. Hovering a level lights the same level in both the numeral and the ledger.

The owner rejected an ancient Maya, parchment-and-serif treatment; the system reads as a modern reference tool, not a museum label. Light only, flat by default, no ornament, no gradients, no decorative motion.

**Key Characteristics:**
- Light only (`color-scheme: light`); jade appears as the shell (header and footer) and as the action color, never as a content background.
- One font stack: the platform system UI sans, no web fonts.
- Tabular, right-aligned numbers in every table and result.
- Maya digits drawn as SVG by one component, sized in em.
- Small radii (6, 8, 12px), 1px slate borders, one soft panel shadow.
- Ad space reserved at fixed sizes so nothing shifts when ads load.

## Colors

A cool slate-and-white working surface framed by a deep jade shell, with one jade action color and a single red for errors.

### Primary
- **Deep Jade Bar** (jade-900): the solid header bar, the logo tile in the favicon, the pressed state of primary buttons.
- **Forest Floor Jade** (jade-950): the footer band, the darkest step, closing the page under the content.
- **Working Jade** (jade-700): primary buttons, links, the selected tab label and its 3px underline, focus rings, list markers, caret and `accent-color`.
- **Pressed Jade** (jade-800): hover for primary buttons, links and text buttons; the ink of a highlighted numeral level and ledger glyph.
- **Jade Wash** (jade-100): the highlighted numeral level, the input focus halo, text selection, the pressed glyph key.
- **Jade Mist** (jade-50): the highlighted ledger row, chip and glyph-key hover fills.
- **Jade Edge** (jade-200): the border of chips and glyph keys on hover.

### Neutral
- **Slate Ink** (ink): headings, body text on panels, numerals, input values.
- **Slate Ink 2** (ink-2): ledes, section paragraphs, chip text, secondary table text.
- **Slate Ink 3** (ink-3): hints, captions, table head labels, inactive tabs, ad labels, the FAQ chevron.
- **Slate Rule** (line-strong): input and numeral-well borders, secondary-button border, the dashed hairline between numeral levels, the ledger total rule.
- **Panel Line** (line): panel, card, FAQ, table-frame and tab borders.
- **Soft Line** (line-soft): row dividers inside tables and the border around the result numeral.
- **Cool Ground** (bg): the page background behind all panels.
- **Panel White** (surface): converter panel, tables, FAQ, inputs, keys.
- **Recessed White** (surface-2): tab strip, table heads, the result numeral tile, empty states, secondary-button hover.
- **Reserved Grey** (ad): the fill of every reserved ad frame, a placeholder only.
- **On-Jade White** (on-dark) and **On-Jade Mint** (on-dark-2): text on the header and footer; mint for nav links and footer body, white for the brand, footer name and footer links.

### Semantic
- **Error Red** (danger) with **Error Wash** (danger-bg): invalid input border, error text, and the focus halo of an invalid input. Used for nothing else.

### Named Rules
**The Jade Frame Rule.** Saturated jade lives on the shell bars and on interactive affordances (buttons, links, selected tab, focus). Content areas stay white and slate; a jade fill inside a panel only ever means "this is the active level" or "hovered".

**The Same-Level Light Rule.** A highlighted level is lit in the numeral (jade-100 with jade-800 ink) and in the ledger (jade-50 row) at the same time. Highlight is a pairing, never one side alone.

## Typography

**Display Font:** system-ui (with -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif)
**Body Font:** the same stack
**Label/Mono Font:** inline `code` only uses ui-monospace, SFMono-Regular, Menlo, Consolas

**Character:** One familiar sans, set firmly: bold headings with slight negative tracking, regular body at a comfortable 1.6 line height, and tabular figures wherever numbers align. It reads as the operating system's own voice, which is exactly the trust signal a tool wants.

### Hierarchy
- **Display** (700, 2.5rem, 1.1, -0.02em, tabular): the decimal result in the Maya-to-decimal direction.
- **Headline** (700, 1.75rem under 768px, 2rem from 768px, 1.25, -0.015em): the page H1, one per page.
- **Title** (700, 1.375rem under 768px, 1.5rem from 768px, 1.25, -0.01em): section H2s. Prose pages step H2 down to 1.25rem.
- **Title small** (600, 1.0625rem): H3s, FAQ questions, the brand name in the header.
- **Input value** (600, 1.5rem, tabular): the decimal number typed in the converter input.
- **Lede** (400, 1.0625rem, ink-2, max 68ch): the one-line intro under the H1.
- **Body** (400, 1rem, 1.6): paragraphs, max 70ch in content sections.
- **Label** (600, 0.9375rem): field labels, button text, tab text, result-head titles.
- **Small** (400 or 500, 0.875rem): hints, chips, nav links, footer, breadcrumbs, bylines, small buttons.
- **Caption** (600, 0.8125rem, ink-3): table head labels, place-value sublines, glyph-key values. Sentence case, no tracking, no uppercase.

### Named Rules
**The One Stack Rule.** Everything is set in the system UI stack. No web font is loaded for text or for digits; Maya digits are drawings, not type.

**The Tabular Rule.** Every number that can sit next to another number uses tabular figures (`font-variant-numeric: tabular-nums`), and numeric table columns align right.

## Layout

A centered page column of max 1200px with a 16px gutter that widens to 24px from 768px. From 1200px the home page becomes a two-column grid: main content plus a 300px sticky aside (top 24px) with a 40px gap; below 1200px the aside is not rendered and the column is single.

The converter panel comes first after a short intro (H1, lede, byline). Inside it, a tab strip picks the direction; from 900px the body splits input and result 5:7 with a 1px divider, and below 900px they stack with the result under a top border. The result places the numeral beside the ledger at every width (numeral auto, ledger fills the rest; 12px gap, 20px from 560px), so on a phone the total is visible without scrolling; very tall numerals stack instead.

Content sections follow at 48px intervals: digit chart (4 columns, 5 from 560px, 10 from 1000px), examples table, how-to steps, about, FAQ, sources (3 columns from 768px). Paragraph measure is capped at 68 to 70ch. Rhythm uses 4, 6, 8, 12, 16, 20, 24, 40 and 48px; 8 and 16 dominate.

Ad placements: one horizontal slot sits between the converter and the content (336x280 rectangle under 768px, 728x90 leaderboard from 768px, 28px vertical margin), and one 300x600 sidebar slot sticks in the aside from 1200px. Every slot carries a small centered "Advertisement" disclosure above its frame.

Breakpoints in use: 480, 560, 640, 768, 900, 1000 and 1200px.

### Named Rules
**The Tool-First Rule.** The converter input and its result are inside the first viewport on every width; nothing decorative sits above the tool.

**The Reserved Box Rule.** Every ad slot reserves its full size with a min-height before any ad loads. Ads sit between the task and the reference content, never inside the converter.

## Elevation & Depth

The system is flat with tonal layering: cool ground, white panels, recessed off-white strips, separated by 1px lines. Only two shadows exist. The converter panel carries a barely-there ambient lift so the tool reads as the object on the page; overlays (cookie banner, skip link) carry a stronger float shadow because they actually sit above content. Focus on inputs is shown with a 3px jade-100 halo, not a shadow.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 1px 2px rgba(16, 32, 40, 0.06), 0 2px 8px rgba(16, 32, 40, 0.04)`): the converter panel only.
- **Float** (`box-shadow: 0 8px 28px rgba(16, 32, 40, 0.18)`): fixed overlays, the cookie consent bar and the skip link.

### Named Rules
**The One Lift Rule.** The converter is the only in-flow surface with a shadow. Tables, FAQ, cards and chart cells are bordered, not lifted.

## Shapes

Small, consistent radii: 6px for nav links and ad frames, 8px for buttons, inputs, glyph keys, tables, FAQ, chart and panels inside the flow, 12px for the converter panel, the cookie bar and the 404 numeral tile. Chips are the only full pill. Focus outlines round at 4px. Borders are 1px solid slate; dashed lines are reserved for the hairline between numeral levels and the empty-state outline. The digit chart uses a 1px gap over a line-colored ground to draw its grid.

The Maya digit geometry is fixed: a 60-unit-wide grid, bars 56 units long and 9 units tall with 2.5 unit corners and 5 units between them, dots of radius 5 on a 14-unit pitch sitting 5 units above the bars, and a shell drawn as an outlined lens with three inner strokes (3.2 and 2.4 unit strokes, round caps). The logo is the numeral 8 (three dots over a bar) in a 7px-radius rounded tile.

## Components

### Buttons
Solid, compact and plain.
- **Shape:** gently rounded (8px), 44px tall, 18px horizontal padding, label weight 600 at 0.9375rem, optional 16px stroke icon with an 8px gap.
- **Primary:** jade-700 fill with white text; hover jade-800, pressed jade-900. Used for the main affirmative action (cookie accept, 404 home link).
- **Secondary:** white with a 1px slate-rule border and ink text; hover recessed white with an ink-3 border. The copy actions are secondary small (36px tall, 12px padding, 0.875rem).
- **Text:** jade-700 text, no fill, underlines on hover; for inline helper actions such as "try an example".
- **Hover / Focus:** 150ms ease color transitions; focus is a 2px jade-700 outline offset 2px. Disabled drops to 50% opacity.

### Chips
- **Style:** example values as 32px pills, white fill, 1px line border, ink-2 text at 0.875rem 500, tabular figures, introduced by a plain "Examples" text label.
- **State:** hover turns jade-50 with a jade-200 border and jade-800 text. Chips are actions, not toggles; they have no selected state.

### Cards / Containers
- **Corner Style:** 12px for the converter panel, 8px for tables, FAQ, digit chart and panels.
- **Background:** surface white on the cool ground; recessed white for tab strips, table heads, the result tile and empty states.
- **Shadow Strategy:** see Elevation; only the converter is lifted.
- **Border:** 1px line.
- **Internal Padding:** 16px on phones, 24px from 900px inside the converter; 16 to 18px in FAQ and panels.

### Inputs / Fields
- **Style:** 56px tall, 1px slate-rule border, 8px radius, white, value at 1.5rem 600 tabular; placeholder ink-3 at 400. Label above in label style with an optional ink-3 meta note on the right; hint below in small ink-3.
- **Focus:** border turns jade-700 with a 3px jade-100 halo; no outline.
- **Error:** border turns danger, halo turns danger-bg, the message below in danger 500.

### Tabs
- **Style:** a recessed strip at the top of the converter, 52px tall, ink-3 label text, 1px dividers between tabs. Equal width on phones, auto width with 24px padding from 640px.
- **Selected:** white fill, jade-700 text and a 3px jade-700 bar on the bottom edge.

### Navigation
- **Style:** the brand (logo tile plus name, white 700) on the left of the 52px jade-900 bar; in-page links on the right in on-dark-2 at 0.9375rem 500. Hover is white text on a 10% white wash with a 6px radius; focus outline turns white.
- **Mobile:** under 900px the links drop to a second row under a 12% white hairline, 0.875rem, horizontally scrollable without a visible scrollbar.
- **Footer:** jade-950 band, on-dark-2 small text, white underlined links, the site name in white 700.

### Maya Numeral (signature)
A vertical stack of SVG digits, highest level on top, each level in its own row separated by a 1px dashed slate-rule hairline. The glyph is 1em wide, so the font size sets the scale: 4.5rem, 3.5rem, 2.5rem, 1.5rem steps (3rem for the large size under 560px), stepping down automatically for tall numerals. In results it sits in an 8px recessed tile with a soft-line border. Every numeral is a single image with a text alternative giving its decimal value and digits. An active level turns jade-100 with jade-800 ink over 120ms.

### Place-Value Ledger (signature)
The working behind every conversion. A borderless table, 0.9375rem tabular: columns "Place value" (20 with a superscript power over the place value in caption style), "Digit" (the level's glyph at 1.75rem beside "× n", right-aligned), and "Value" (the subtotal, right-aligned). Rows are divided by soft lines; the foot row "Total" sits above a slate-rule line with the total at 1.125rem 700. Hovering a row lights it jade-50 and lights the matching numeral level. Under 560px the row glyph is hidden because the numeral beside the table already shows it; under 480px padding and type tighten.

### Glyph Keypad
Twenty keys in a 5-column grid with 6px gaps, each 64px tall: the SVG digit at 1.75rem over its value in caption style. Hover jade-50 with a jade-200 border; pressed jade-100 with a 1px downward nudge. Above the keys, a numeral well (1px slate-rule border, 8px radius, min 112px tall) shows the numeral being built, with secondary small undo and clear actions.

### Digit Chart
The twenty digits 0 to 19 as a gridded list: white cells separated by 1px line gaps inside an 8px frame, each cell showing the glyph at 2.25rem, the value at 1.125rem 700, and its composition in caption style.

### Ad Slot
A reserved grey (ad) frame with a 6px radius under a 0.75rem ink-3 "Advertisement" label. Sizes are fixed by placement (see Layout); the frame is a placeholder until a unit is served.

### Named Rules
**The Drawn Digit Rule.** Maya digits are always rendered by the one SVG glyph component in currentColor, never as a font, emoji or raster. Copying a result yields Unicode Mayan Numerals characters.

**The Hairline Level Rule.** Levels of a stacked numeral are always separated by the 1px dashed slate-rule hairline; spacing alone is never trusted to separate levels.

## Do's and Don'ts

### Do:
- **Do** keep the tool first: converter input and result inside the first viewport at every width.
- **Do** use jade-700 for every primary action, link and selected state, and jade-900 / jade-950 only for the header and footer bands.
- **Do** set every number in tabular figures and right-align numeric columns.
- **Do** draw Maya digits with the SVG glyph component and separate stacked levels with the dashed slate-rule hairline.
- **Do** pair every numeral with its place-value ledger when a result is shown, and highlight the same level in both.
- **Do** reserve ad space at its full size (336x280 under 768px, 728x90 from 768px, 300x600 sticky sidebar from 1200px) with an "Advertisement" label.
- **Do** keep transitions to state feedback: 150ms ease for color, 120ms for level highlights, the ease-out curve only for the FAQ chevron and the cookie bar entry, and respect reduced motion.

### Don't:
- **Don't** load web fonts; the system UI stack is the only text face.
- **Don't** use the ancient Maya look: no parchment textures, no serif display faces, no stone or glyph ornament around the tool.
- **Don't** add gradients, decorative motion, or illustrations.
- **Don't** put small uppercase labels or eyebrows above headings; headings stand on their own.
- **Don't** add a dark theme or dark content panels; the UI is light only and jade fills are reserved for the shell bars and actions.
- **Don't** lift tables, FAQ or cards with shadows; only the converter panel and true overlays carry shadow.
- **Don't** let an ad slot collapse or resize the layout when it fills.
