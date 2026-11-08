# mayan-calculator
> 🧮 Free online tool for converting between decimal numbers and the ancient Maya number system.

## 🌟 Features
- Decimal to Maya and Maya to decimal conversion, live as you type.
- Base-20 place-value breakdown for every result.
- Glyph keypad for building a Maya numeral level by level.
- Copy results as Unicode Maya numeral characters (U+1D2E0 to U+1D2F3).
- Shareable results via `?n=365` or `?maya=18.5`.
- Maya numerals chart (0 to 19), worked examples, how-to guides and FAQ.
- Reserved, layout-stable placements for Google AdSense.

## 🚀 Live Demo
- Visit the live application: [Maya Numeral Converter](https://mayacalc.danielrogowski.net/).

## 🛠️ Technology Stack
- **Frontend**: React 19 with TypeScript 7 (requires Node.js 22.22 or newer)
- **Routing / SSG**: React Router v8 (framework mode, static prerender)
- **Build Tool**: Vite
- **Styling**: Plain CSS with custom properties (`src/styles/global.css`)
- **Numerals and icons**: Inline SVG components, no icon or glyph fonts

## 📢 Ad placements
`src/components/AdSlot.tsx` reserves space for three AdSense units:

| Placement | Where | Size |
|---|---|---|
| `below-converter` | Under the converter | 728×90 from 768px, 336×280 / 300×250 below |
| `in-article` | Between the examples table and the how-to | 728×90 from 768px, 336×280 / 300×250 below |
| `sidebar` | Sticky right column, from 1200px | 300×600 |

To serve ads, render the AdSense `<ins class="adsbygoogle">` element inside `.ad-slot__frame`, allow the AdSense hosts in the CSP in `public/_headers`, and update the privacy policy and cookie consent for advertising cookies.

## 🎨 Design context
- `PRODUCT.md`: product facts for design work.
- `.impeccable/`: Impeccable design tooling context (surface briefs, design system sidecar).
