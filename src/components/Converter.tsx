import { useEffect, useId, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import MayaNumeral from './MayaNumeral';
import PlaceValueTable from './PlaceValueTable';
import CopyButton from './CopyButton';
import GlyphPad from './GlyphPad';
import Icon from './Icon';
import { SITE_URL } from '../lib/seo';
import {
  convertToBase20,
  convertFromBase20,
  parseDecimalInput,
  mayaText,
  formatNumber,
  MAX_DECIMAL,
} from '../lib/maya';

type Mode = 'to-maya' | 'to-decimal';

const MODES: readonly Mode[] = ['to-maya', 'to-decimal'];
const MODE_LABELS: Record<Mode, string> = {
  'to-maya': 'Decimal to Maya',
  'to-decimal': 'Maya to Decimal',
};
const EXAMPLE_NUMBERS: readonly number[] = [7, 20, 365, 2026, 8000];
/** Above this many levels the numeral sits above the breakdown table instead of beside it. */
const STACKED_LAYOUT_MIN_LEVELS = 5;
const URL_PARAM_DECIMAL = 'n';
const URL_PARAM_MAYA = 'maya';

/** Reads ?n=365 or ?maya=18.5 so results can be shared as links. */
function readInitialStateFromUrl(): { mode: Mode; decimal: string; digits: number[] } | null {
  const params = new URLSearchParams(window.location.search);
  const decimalParam = params.get(URL_PARAM_DECIMAL);
  if (decimalParam !== null) {
    return { mode: 'to-maya', decimal: decimalParam, digits: [] };
  }

  const mayaParam = params.get(URL_PARAM_MAYA);
  if (mayaParam === null) return null;

  const digits = mayaParam
    .split('.')
    .map(Number)
    .filter((digit) => Number.isInteger(digit) && digit >= 0 && digit < 20);
  if (digits.length === 0 || convertFromBase20(digits) > MAX_DECIMAL) return null;
  return { mode: 'to-decimal', decimal: '', digits };
}

function writeStateToUrl(mode: Mode, decimal: string, digits: readonly number[]) {
  const url = new URL(window.location.href);
  url.searchParams.delete(URL_PARAM_DECIMAL);
  url.searchParams.delete(URL_PARAM_MAYA);

  const decimalValue = decimal.trim();
  if (mode === 'to-maya' && decimalValue !== '') {
    url.searchParams.set(URL_PARAM_DECIMAL, decimalValue);
  }
  if (mode === 'to-decimal' && digits.length > 0) {
    url.searchParams.set(URL_PARAM_MAYA, digits.join('.'));
  }
  window.history.replaceState(window.history.state, '', url);
}

export default function Converter() {
  const [mode, setMode] = useState<Mode>('to-maya');
  const [decimalInput, setDecimalInput] = useState('');
  const [padDigits, setPadDigits] = useState<number[]>([]);
  const [padError, setPadError] = useState<string | null>(null);
  const [activeLevel, setActiveLevel] = useState<number | null>(null);
  const [hasReadUrl, setHasReadUrl] = useState(false);
  const tabRefs = useRef<Record<Mode, HTMLButtonElement | null>>({ 'to-maya': null, 'to-decimal': null });
  const baseId = useId();

  useEffect(() => {
    const initial = readInitialStateFromUrl();
    if (initial) {
      setMode(initial.mode);
      setDecimalInput(initial.decimal);
      setPadDigits(initial.digits);
    }
    setHasReadUrl(true);
  }, []);

  useEffect(() => {
    if (!hasReadUrl) return;
    writeStateToUrl(mode, decimalInput, padDigits);
  }, [hasReadUrl, mode, decimalInput, padDigits]);

  const parsed = useMemo(() => parseDecimalInput(decimalInput), [decimalInput]);
  const decimalDigits = parsed.status === 'ok' ? convertToBase20(parsed.value) : null;

  /** Switching tabs carries the current number across, so the user can check it the other way round. */
  const switchMode = (next: Mode) => {
    if (next === mode) return;
    if (next === 'to-decimal' && decimalDigits) {
      setPadDigits(decimalDigits);
      setPadError(null);
    }
    if (next === 'to-maya' && padDigits.length > 0) {
      setDecimalInput(String(convertFromBase20(padDigits)));
    }
    setActiveLevel(null);
    setMode(next);
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const isArrow = event.key === 'ArrowLeft' || event.key === 'ArrowRight';
    if (!isArrow) return;
    event.preventDefault();
    const next: Mode = mode === 'to-maya' ? 'to-decimal' : 'to-maya';
    switchMode(next);
    tabRefs.current[next]?.focus();
  };

  const addPadDigit = (digit: number) => {
    const nextDigits = [...padDigits, digit];
    if (convertFromBase20(nextDigits) > MAX_DECIMAL) {
      setPadError(`Another level would go past the maximum of ${formatNumber(MAX_DECIMAL)}.`);
      return;
    }
    setPadError(null);
    setPadDigits(nextDigits);
  };

  const undoPadDigit = () => {
    setPadError(null);
    setPadDigits(padDigits.slice(0, -1));
  };

  const clearPad = () => {
    setPadError(null);
    setPadDigits([]);
  };

  const isTallResult = (decimalDigits?.length ?? 0) > STACKED_LAYOUT_MIN_LEVELS;
  const resultSplitClass = isTallResult ? 'result-split result-split--stacked' : 'result-split';
  const toMayaBodyClass = isTallResult ? 'converter__body converter__body--single' : 'converter__body';

  const inputId = `${baseId}-decimal`;
  const inputHintId = `${baseId}-decimal-hint`;
  const inputErrorId = `${baseId}-decimal-error`;
  const hasInputError = parsed.status === 'invalid' || parsed.status === 'too-large';
  const inputDescribedBy = hasInputError ? inputErrorId : inputHintId;

  return (
    <section className="converter" id="converter" aria-labelledby={`${baseId}-title`}>
      <h2 id={`${baseId}-title`} className="visually-hidden">Converter</h2>

      <div className="tabs" role="tablist" aria-label="Conversion direction">
        {MODES.map((tabMode) => {
          const isSelected = tabMode === mode;
          return (
            <button
              key={tabMode}
              ref={(node) => {
                tabRefs.current[tabMode] = node;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${tabMode}`}
              aria-selected={isSelected}
              aria-controls={`${baseId}-panel-${tabMode}`}
              tabIndex={isSelected ? 0 : -1}
              className="tabs__tab"
              onClick={() => switchMode(tabMode)}
              onKeyDown={handleTabKeyDown}
            >
              {MODE_LABELS[tabMode]}
            </button>
          );
        })}
      </div>

      {mode === 'to-maya' && (
        <div
          className={toMayaBodyClass}
          role="tabpanel"
          id={`${baseId}-panel-to-maya`}
          aria-labelledby={`${baseId}-tab-to-maya`}
        >
          <div className="converter__input">
            <label className="field-label" htmlFor={inputId}>
              Decimal number
            </label>
            <input
              id={inputId}
              className="text-input"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              spellCheck={false}
              placeholder="e.g. 365"
              value={decimalInput}
              onChange={(event) => setDecimalInput(event.target.value)}
              aria-invalid={hasInputError}
              aria-describedby={inputDescribedBy}
            />
            {hasInputError ? (
              <p className="field-error" id={inputErrorId}>
                {parsed.message}
              </p>
            ) : (
              <p className="field-hint" id={inputHintId}>
                Whole numbers up to {formatNumber(MAX_DECIMAL)}.
              </p>
            )}

            <div className="examples">
              <span className="examples__label">Examples</span>
              {EXAMPLE_NUMBERS.map((example) => (
                <button
                  key={example}
                  type="button"
                  className="chip"
                  onClick={() => setDecimalInput(String(example))}
                >
                  {formatNumber(example)}
                </button>
              ))}
            </div>
          </div>

          <div className="converter__result">
            {decimalDigits && parsed.status === 'ok' ? (
              <>
                <div className="result-head">
                  <p className="result-head__title">
                    <span className="result-head__value">{formatNumber(parsed.value)}</span> in Maya numerals
                  </p>
                  <div className="result-head__actions">
                    <CopyButton text={mayaText(decimalDigits)} label="Copy numeral" />
                    <CopyButton text={`${SITE_URL}/?${URL_PARAM_DECIMAL}=${parsed.value}`} label="Copy link" />
                  </div>
                </div>
                <div className={resultSplitClass}>
                  <MayaNumeral digits={decimalDigits} activeLevel={activeLevel} onLevelHover={setActiveLevel} />
                  <PlaceValueTable digits={decimalDigits} activeLevel={activeLevel} onLevelHover={setActiveLevel} />
                </div>
                <p className="visually-hidden" aria-live="polite">
                  {formatNumber(parsed.value)} is {decimalDigits.join(', ')} in base 20.
                </p>
              </>
            ) : (
              <div className="empty-state">
                <p className="empty-state__title">Your Maya numeral appears here</p>
                <p className="empty-state__text">
                  Type a number or pick an example. You get the stacked glyphs and the place value of every
                  level.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {mode === 'to-decimal' && (
        <div
          className="converter__body"
          role="tabpanel"
          id={`${baseId}-panel-to-decimal`}
          aria-labelledby={`${baseId}-tab-to-decimal`}
        >
          <div className="converter__input">
            <GlyphPad
              digits={padDigits}
              error={padError}
              onAdd={addPadDigit}
              onUndo={undoPadDigit}
              onClear={clearPad}
            />
          </div>

          <div className="converter__result">
            {padDigits.length > 0 ? (
              <>
                <div className="result-head">
                  <p className="result-head__title">Decimal value</p>
                  <div className="result-head__actions">
                    <CopyButton text={String(convertFromBase20(padDigits))} label="Copy number" />
                    <CopyButton text={`${SITE_URL}/?${URL_PARAM_MAYA}=${padDigits.join('.')}`} label="Copy link" />
                  </div>
                </div>
                <p className="decimal-result" aria-live="polite">
                  {formatNumber(convertFromBase20(padDigits))}
                </p>
                <PlaceValueTable digits={padDigits} activeLevel={activeLevel} onLevelHover={setActiveLevel} />
              </>
            ) : (
              <div className="empty-state">
                <p className="empty-state__title">The decimal value appears here</p>
                <p className="empty-state__text">
                  Build the numeral with the keypad, top level first. Each tap adds a level below the last one.
                </p>
                <button type="button" className="button button--text" onClick={() => setPadDigits([18, 5])}>
                  Try 18 over 5
                  <Icon name="arrow-right" size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
