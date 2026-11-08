import { useId } from 'react';
import Icon from './Icon';
import MayaNumeral from './MayaNumeral';
import MayaGlyph from './MayaGlyph';
import { MAYA_DIGIT_VALUES, describeDigit } from '../lib/maya';

type Props = {
  digits: readonly number[];
  error: string | null;
  onAdd: (digit: number) => void;
  onUndo: () => void;
  onClear: () => void;
};

/** Builds a Maya numeral level by level from the twenty digit glyphs. */
export default function GlyphPad({ digits, error, onAdd, onUndo, onClear }: Props) {
  const baseId = useId();
  const hasDigits = digits.length > 0;
  const levelWord = digits.length === 1 ? 'level' : 'levels';

  return (
    <div className="glyph-pad">
      <div className="field-label" id={`${baseId}-built`}>
        Maya numeral
        <span className="field-label__meta">
          {hasDigits ? `${digits.length} ${levelWord}` : 'empty'}
        </span>
      </div>
      <div className="numeral-well" aria-labelledby={`${baseId}-built`}>
        {hasDigits ? (
          <MayaNumeral digits={digits} size="md" />
        ) : (
          <span className="numeral-well__empty">Tap a digit below</span>
        )}
      </div>

      <div className="glyph-pad__actions">
        <button type="button" className="button button--secondary button--small" onClick={onUndo} disabled={!hasDigits}>
          <Icon name="undo" size={16} />
          Remove last level
        </button>
        <button type="button" className="button button--secondary button--small" onClick={onClear} disabled={!hasDigits}>
          <Icon name="clear" size={16} />
          Clear
        </button>
      </div>

      {error && (
        <p className="field-error" role="alert">
          {error}
        </p>
      )}

      <div className="glyph-pad__grid" role="group" aria-label="Maya digits 0 to 19">
        {MAYA_DIGIT_VALUES.map((digit) => (
          <button
            key={digit}
            type="button"
            className="glyph-key"
            onClick={() => onAdd(digit)}
            aria-label={`Add ${digit} (${describeDigit(digit)})`}
          >
            <span className="glyph-key__glyph" aria-hidden="true">
              <MayaGlyph digit={digit} />
            </span>
            <span className="glyph-key__value" aria-hidden="true">{digit}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
