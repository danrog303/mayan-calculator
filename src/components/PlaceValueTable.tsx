import { Fragment } from 'react';
import MayaGlyph from './MayaGlyph';
import { placeValue, formatNumber, convertFromBase20 } from '../lib/maya';

type Props = {
  digits: readonly number[];
  activeLevel?: number | null;
  onLevelHover?: (level: number | null) => void;
};

/**
 * Formats a number with a single line-break opportunity after the middle digit-group comma,
 * so a very long place value wraps onto at most two even lines on narrow screens.
 */
function BreakableNumber({ value }: { value: number }) {
  const groups = formatNumber(value).split(',');
  const breakAfter = Math.ceil(groups.length / 2) - 1;
  return (
    <>
      {groups.map((group, index) => {
        const isLast = index === groups.length - 1;
        const comma = isLast ? '' : ',';
        return (
          <Fragment key={index}>
            {group}
            {comma}
            {index === breakAfter && !isLast && <wbr />}
          </Fragment>
        );
      })}
    </>
  );
}

/**
 * The working behind a conversion: one row per level, top level first,
 * showing place value × digit = subtotal, and the decimal total.
 * The digit cell carries the level's glyph; narrow screens hide the glyph
 * (the numeral beside the table already shows it) so the values always fit.
 */
export default function PlaceValueTable({ digits, activeLevel = null, onLevelHover }: Props) {
  const total = convertFromBase20(digits);
  const highestPower = digits.length - 1;

  return (
    <div className="ledger-scroll">
      <table className="ledger">
        <caption className="visually-hidden">Place-value breakdown, highest level first</caption>
        <thead>
          <tr>
            <th scope="col">Place value</th>
            <th scope="col" className="num">Digit</th>
            <th scope="col" className="num">Value</th>
          </tr>
        </thead>
        <tbody>
          {digits.map((digit, level) => {
            const power = highestPower - level;
            const place = placeValue(power);
            const subtotal = digit * place;
            const isActive = activeLevel === level;
            return (
              <tr
                key={level}
                className={isActive ? 'is-active' : undefined}
                onMouseEnter={onLevelHover ? () => onLevelHover(level) : undefined}
                onMouseLeave={onLevelHover ? () => onLevelHover(null) : undefined}
              >
                <td className="ledger__power">
                  20<sup>{power}</sup>
                  <span className="ledger__place">
                    <BreakableNumber value={place} />
                  </span>
                </td>
                <td className="num">
                  <span className="ledger__digit">
                    <span className="ledger__glyph" aria-hidden="true">
                      <MayaGlyph digit={digit} />
                    </span>
                    × {digit}
                  </span>
                </td>
                <td className="num">{formatNumber(subtotal)}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan={2}>
              Total
            </th>
            <td className="num ledger__total">{formatNumber(total)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
