import MayaGlyph from './MayaGlyph';
import { placeValue, formatNumber, convertFromBase20 } from '../lib/maya';

type Props = {
  digits: readonly number[];
  activeLevel?: number | null;
  onLevelHover?: (level: number | null) => void;
};

/**
 * The working behind a conversion: one row per level, top level first,
 * showing digit × place value = subtotal, and the decimal total.
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
            <th scope="col" className="ledger__glyph-col">Glyph</th>
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
                  <span className="ledger__place">{formatNumber(place)}</span>
                </td>
                <td className="ledger__glyph" aria-hidden="true">
                  <MayaGlyph digit={digit} />
                </td>
                <td className="num">× {digit}</td>
                <td className="num">{formatNumber(subtotal)}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan={3}>Total (decimal)</th>
            <td className="num ledger__total">{formatNumber(total)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
