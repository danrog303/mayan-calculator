import type { MetaFunction } from 'react-router';
import Converter from '../components/Converter';
import AdSlot from '../components/AdSlot';
import MayaNumeral from '../components/MayaNumeral';
import MayaGlyph from '../components/MayaGlyph';
import { FAQ_ITEMS } from '../content/faq';
import { buildMeta } from '../lib/seo';
import { homeLdJson } from '../lib/structured-data';
import {
  MAYA_DIGIT_VALUES,
  convertToBase20,
  describeDigit,
  formatNumber,
  placeValue,
} from '../lib/maya';

const CONTENT_UPDATED = 'November 2026';
const PAGE_TITLE = 'Maya Numeral Converter: Decimal to Maya and Maya to Decimal';
const PAGE_DESCRIPTION =
  'Free Maya numeral converter: decimal to Maya numerals and back, with a base-20 place-value breakdown, a 0 to 19 chart and worked examples.';

export const meta: MetaFunction = () => {
  const pageMeta = buildMeta({ title: PAGE_TITLE, description: PAGE_DESCRIPTION, path: '/' });
  const structuredData = { 'script:ld+json': JSON.parse(homeLdJson) };
  return [...pageMeta, structuredData];
};

type ExampleRow = { value: number; note?: string };

const EXAMPLE_ROWS: readonly ExampleRow[] = [
  { value: 20, note: 'The first two-level number' },
  { value: 25 },
  { value: 40 },
  { value: 100 },
  { value: 360, note: 'Length of a tun in the Long Count calendar' },
  { value: 365, note: "Days in the Haab' solar calendar" },
  { value: 400, note: 'The first three-level number' },
  { value: 1000 },
  { value: 2026 },
  { value: 8000, note: 'The first four-level number' },
];

type DivisionStep = { dividend: number; quotient: number; remainder: number };

function divisionSteps(value: number): DivisionStep[] {
  const steps: DivisionStep[] = [];
  let dividend = value;
  do {
    const quotient = Math.floor(dividend / 20);
    steps.push({ dividend, quotient, remainder: dividend % 20 });
    dividend = quotient;
  } while (dividend > 0);
  return steps;
}

const HOW_TO_VALUE = 2026;
const HOW_TO_STEPS = divisionSteps(HOW_TO_VALUE);
const HOW_TO_DIGITS = convertToBase20(HOW_TO_VALUE);

function calculationText(digits: readonly number[]): string {
  const highestPower = digits.length - 1;
  const terms = digits.map((digit, level) => `${digit} × ${formatNumber(placeValue(highestPower - level))}`);
  return terms.join(' + ');
}

type Source = { label: string; text: string; href: string };

const SOURCES: readonly Source[] = [
  { label: 'Article reference', text: 'Wikipedia: Maya numerals', href: 'https://en.wikipedia.org/wiki/Maya_numerals' },
  {
    label: 'Numeral reference',
    text: 'Wikipedia: Bryan Derksen (CC BY-SA 3.0)',
    href: 'https://pl.wikipedia.org/wiki/Cyfry_Maj%C3%B3w#/media/Plik:Maya.svg',
  },
];

export default function Home() {
  return (
    <div className="page page--with-aside">
      <main id="main" className="page__main">
        <div className="page-intro">
          <h1>Maya Numeral Converter</h1>
          <p className="lede">
            Convert decimal numbers to Maya numerals and back, with the base-20 place value of every level.
          </p>
          <p className="byline">
            By <a href="https://danielrogowski.net/">Daniel Rogowski</a>. Updated {CONTENT_UPDATED}.
          </p>
        </div>

        <Converter />

        <AdSlot name="below-converter" variant="horizontal" />

        <section className="content-section" id="chart" aria-labelledby="chart-title">
          <h2 id="chart-title">Maya numerals chart: 0 to 19</h2>
          <p>
            Every Maya digit is built from three signs: a dot worth 1, a bar worth 5 and a shell for 0. Four dots
            make the most you can write before a bar replaces them, and three bars plus four dots make 19, the
            largest single digit.
          </p>
          <ul className="digit-chart">
            {MAYA_DIGIT_VALUES.map((digit) => (
              <li key={digit} className="digit-chart__cell">
                <span className="digit-chart__glyph" aria-hidden="true">
                  <MayaGlyph digit={digit} />
                </span>
                <span className="digit-chart__value">{digit}</span>
                <span className="digit-chart__parts">{describeDigit(digit)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="content-section" id="examples" aria-labelledby="examples-title">
          <h2 id="examples-title">Maya numbers above 19</h2>
          <p>
            From 20 upward a Maya numeral needs more than one level. Each level is worth 20 times the one below it,
            so the levels count ones, twenties, four hundreds and eight thousands.
          </p>
          <div className="table-scroll">
            <table className="data-table data-table--examples">
              <caption className="visually-hidden">Decimal numbers and their Maya numerals</caption>
              <thead>
                <tr>
                  <th scope="col" className="num">Decimal</th>
                  <th scope="col">Maya numeral</th>
                  <th scope="col">Base-20 digits</th>
                  <th scope="col">Calculation</th>
                </tr>
              </thead>
              <tbody>
                {EXAMPLE_ROWS.map(({ value, note }) => {
                  const digits = convertToBase20(value);
                  return (
                    <tr key={value}>
                      <th scope="row" className="num">{formatNumber(value)}</th>
                      <td>
                        <MayaNumeral digits={digits} size="sm" />
                      </td>
                      <td className="nowrap">{digits.join(', ')}</td>
                      <td className="data-table__calc">
                        <span className="calc">{calculationText(digits)}</span>
                        {note && <span className="data-table__note">{note}</span>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <AdSlot name="in-article" variant="horizontal" />

        <section className="content-section" id="how-to" aria-labelledby="how-to-title">
          <h2 id="how-to-title">How to convert decimal to Maya numerals</h2>
          <ol className="steps">
            <li>Divide the number by 20. Write down the remainder; it is the digit for the bottom level.</li>
            <li>Divide the quotient by 20 again. The new remainder is the digit for the next level up.</li>
            <li>Repeat until the quotient is 0.</li>
            <li>Stack the remainders with the last one on top, and draw each with dots and bars.</li>
          </ol>
          <p>Worked example for {formatNumber(HOW_TO_VALUE)}:</p>
          <div className="table-scroll">
            <table className="data-table data-table--compact">
              <caption className="visually-hidden">Repeated division of {HOW_TO_VALUE} by 20</caption>
              <thead>
                <tr>
                  <th scope="col">Division</th>
                  <th scope="col" className="num">Quotient</th>
                  <th scope="col" className="num">Remainder</th>
                  <th scope="col">Level</th>
                </tr>
              </thead>
              <tbody>
                {HOW_TO_STEPS.map(({ dividend, quotient, remainder }, index) => (
                  <tr key={dividend}>
                    <td className="calc nowrap">{formatNumber(dividend)} ÷ 20</td>
                    <td className="num">{formatNumber(quotient)}</td>
                    <td className="num">{remainder}</td>
                    <td className="nowrap">
                      20<sup>{index}</sup> ({formatNumber(placeValue(index))}s)
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Reading the remainders from the last to the first gives {HOW_TO_DIGITS.join(', ')}, so{' '}
            {formatNumber(HOW_TO_VALUE)} is written as {HOW_TO_DIGITS[0]} on the top level,{' '}
            {HOW_TO_DIGITS[1]} in the middle and {HOW_TO_DIGITS[2]} at the bottom.
          </p>

          <h2 id="maya-to-decimal">How to convert Maya numerals to decimal</h2>
          <ol className="steps">
            <li>Read the value of each level: count 5 for every bar and 1 for every dot. A shell is 0.</li>
            <li>Give the levels their place values from the bottom: 1, 20, 400, 8,000, 160,000 and so on.</li>
            <li>Multiply each digit by its place value and add the results.</li>
          </ol>
          <p>
            For the numeral above: {calculationText(HOW_TO_DIGITS)} = {formatNumber(HOW_TO_VALUE)}. To check any
            numeral, open the <a href="#converter">Maya to Decimal</a> tab and tap its digits from the top.
          </p>
        </section>

        <section className="content-section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">How the Maya number system works</h2>
          <p>
            The Maya number system is a base-20 (vigesimal) positional system, one of only a handful developed
            independently in human history. Digits are stacked vertically and read from top to bottom, with the
            highest place value at the top.
          </p>
          <p>
            A positional system needs a zero, and the Maya had one: the shell sign fills an empty level, the way 0
            does in 101. With dots, bars and the shell, any whole number can be written using only three symbols.
          </p>
          <p>
            Compare this with Roman numerals, which have no zero and no place value. 1,999 is MCMXCIX in Roman
            numerals, seven symbols that must be read with subtraction rules. In Maya numerals it is three levels: 4
            (4 × 400), 19 (19 × 20) and 19 at the bottom.
          </p>
          <p>
            Unicode encodes the twenty digits as the characters U+1D2E0 to U+1D2F3. When you copy a result from the
            converter, you get these characters, one level per line, so the numeral pastes as real text in any app
            with a font that supports them.
          </p>
        </section>

        <section className="content-section" id="faq" aria-labelledby="faq-title">
          <h2 id="faq-title">Frequently asked questions</h2>
          <div className="faq">
            {FAQ_ITEMS.map(({ question, answer }) => (
              <details key={question} className="faq__item">
                <summary>
                  <h3>{question}</h3>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="content-section" id="sources" aria-labelledby="sources-title">
          <h2 id="sources-title">Sources and credits</h2>
          <ul className="sources">
            {SOURCES.map((source) => (
              <li key={source.href}>
                <span className="sources__label">{source.label}</span>
                <a href={source.href} target="_blank" rel="noopener">
                  {source.text}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <div className="page__aside">
        <AdSlot name="sidebar" variant="sidebar" />
      </div>
    </div>
  );
}
