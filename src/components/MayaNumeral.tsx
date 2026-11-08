import MayaGlyph from './MayaGlyph';
import { convertFromBase20, formatNumber } from '../lib/maya';

type Size = 'xl' | 'lg' | 'md' | 'sm';

type Props = {
  digits: readonly number[];
  size?: Size;
  /** Index of the level to highlight (0 = top level). */
  activeLevel?: number | null;
  onLevelHover?: (level: number | null) => void;
};

/** Size step down for tall numerals so a 13-level result still fits the panel. */
function sizeForLevels(size: Size, levels: number): Size {
  if (size !== 'xl') return size;
  if (levels > 6) return 'md';
  if (levels > 3) return 'lg';
  return 'xl';
}

/**
 * A Maya numeral drawn as a vertical stack of digit glyphs, highest level on top.
 * Exposed to assistive technology as one image labelled with its decimal value.
 */
export default function MayaNumeral({ digits, size = 'xl', activeLevel = null, onLevelHover }: Props) {
  const value = convertFromBase20(digits);
  const levelWord = digits.length === 1 ? 'level' : 'levels';
  const label = `Maya numeral for ${formatNumber(value)}, ${digits.length} ${levelWord}: ${digits.join(', ')}`;
  const effectiveSize = sizeForLevels(size, digits.length);
  const className = `numeral numeral--${effectiveSize}`;

  return (
    <div className={className} role="img" aria-label={label}>
      {digits.map((digit, level) => {
        const isActive = activeLevel === level;
        const levelClass = isActive ? 'numeral__level is-active' : 'numeral__level';
        return (
          <span
            key={level}
            className={levelClass}
            aria-hidden="true"
            onMouseEnter={onLevelHover ? () => onLevelHover(level) : undefined}
            onMouseLeave={onLevelHover ? () => onLevelHover(null) : undefined}
          >
            <MayaGlyph digit={digit} />
          </span>
        );
      })}
    </div>
  );
}
