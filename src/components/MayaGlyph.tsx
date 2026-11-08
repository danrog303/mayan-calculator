import { digitParts } from '../lib/maya';

/*
 * One Maya digit (0-19) drawn as SVG: dots worth 1 above bars worth 5, or a shell for 0.
 * The drawing is sized in em (1em wide), so the surrounding font-size sets its scale.
 * Geometry is in viewBox units on a 60-unit-wide grid; the height hugs the ink so every
 * level of a stacked numeral sits at an even distance from the next.
 */

const WIDTH = 60;
const BAR_HEIGHT = 9;
const BAR_GAP = 5;
const DOT_RADIUS = 5;
const DOT_PITCH = 14;
const DOT_ROW_GAP = 5;
const SHELL_HEIGHT = 26;

type Props = { digit: number; className?: string };

function Shell() {
  const outline = 'M3 13 C 10 1, 50 1, 57 13 C 50 25, 10 25, 3 13 Z';
  const innerArcs = ['M14 9.5 C 24 13, 36 13, 46 9.5', 'M14 16.5 C 24 13, 36 13, 46 16.5', 'M30 4.5 V 21.5'];
  return (
    <g fill="none" stroke="currentColor" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round">
      <path d={outline} />
      {innerArcs.map((d) => (
        <path key={d} d={d} strokeWidth={2.4} />
      ))}
    </g>
  );
}

export default function MayaGlyph({ digit, className }: Props) {
  const glyphClass = className ? `maya-glyph ${className}` : 'maya-glyph';

  if (digit === 0) {
    return (
      <svg
        className={glyphClass}
        viewBox={`0 0 ${WIDTH} ${SHELL_HEIGHT}`}
        style={{ height: `${SHELL_HEIGHT / WIDTH}em` }}
        aria-hidden="true"
        focusable="false"
      >
        <Shell />
      </svg>
    );
  }

  const { bars, dots } = digitParts(digit);
  const dotRowHeight = dots > 0 ? DOT_RADIUS * 2 : 0;
  const dotGap = dots > 0 && bars > 0 ? DOT_ROW_GAP : 0;
  const barsHeight = bars > 0 ? bars * BAR_HEIGHT + (bars - 1) * BAR_GAP : 0;
  const height = dotRowHeight + dotGap + barsHeight;

  const dotsWidth = (dots - 1) * DOT_PITCH;
  const firstDotX = (WIDTH - dotsWidth) / 2;
  const dotCenters = Array.from({ length: dots }, (_, i) => firstDotX + i * DOT_PITCH);
  const barTops = Array.from({ length: bars }, (_, i) => dotRowHeight + dotGap + i * (BAR_HEIGHT + BAR_GAP));

  return (
    <svg
      className={glyphClass}
      viewBox={`0 0 ${WIDTH} ${height}`}
      style={{ height: `${height / WIDTH}em` }}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        {dotCenters.map((cx) => (
          <circle key={cx} cx={cx} cy={DOT_RADIUS} r={DOT_RADIUS} />
        ))}
        {barTops.map((y) => (
          <rect key={y} x={2} y={y} width={WIDTH - 4} height={BAR_HEIGHT} rx={2.5} />
        ))}
      </g>
    </svg>
  );
}
