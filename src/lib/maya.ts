const MAYA_ZERO_CODE_POINT = 0x1d2e0;

export const MAYA_BASE = 20;
export const MAX_DECIMAL = Number.MAX_SAFE_INTEGER;
export const MAYA_DIGIT_VALUES: readonly number[] = Array.from({ length: MAYA_BASE }, (_, i) => i);

export function convertToBase20(decimalNumber: number): number[] {
    const output: number[] = [];
    if (decimalNumber < 0) {
        throw new Error('Function does not support negative numbers.');
    }

    if (decimalNumber === 0) {
        output.unshift(0);
    } else {
        let remaining = Math.floor(decimalNumber);
        while (remaining > 0) {
            output.unshift(remaining % MAYA_BASE);
            remaining = Math.floor(remaining / MAYA_BASE);
        }
    }

    return output;
}

/** Converts base-20 digits (most significant first) to a decimal number. */
export function convertFromBase20(digits: readonly number[]): number {
    return digits.reduce((total, digit) => total * MAYA_BASE + digit, 0);
}

export function mayaGlyph(digit: number): string {
    if (!Number.isInteger(digit) || digit < 0 || digit >= MAYA_BASE) {
        throw new Error('Maya digit must be an integer between 0 and 19.');
    }
    return String.fromCodePoint(MAYA_ZERO_CODE_POINT + digit);
}

/** Maya numeral as plain Unicode text, one level per line, highest level first. */
export function mayaText(digits: readonly number[]): string {
    return digits.map(mayaGlyph).join('\n');
}

export function placeValue(power: number): number {
    return Math.pow(MAYA_BASE, power);
}

export type DigitParts = { bars: number; dots: number };

/** How a single Maya digit is drawn: bars worth five and dots worth one. */
export function digitParts(digit: number): DigitParts {
    return { bars: Math.floor(digit / 5), dots: digit % 5 };
}

export function describeDigit(digit: number): string {
    if (digit === 0) return 'shell (zero)';
    const { bars, dots } = digitParts(digit);
    const barText = bars === 0 ? '' : `${bars} ${bars === 1 ? 'bar' : 'bars'}`;
    const dotText = dots === 0 ? '' : `${dots} ${dots === 1 ? 'dot' : 'dots'}`;
    return [barText, dotText].filter(Boolean).join(', ');
}

export function formatNumber(value: number): string {
    return value.toLocaleString('en-US');
}

export type DecimalParseResult =
    | { status: 'empty' }
    | { status: 'invalid'; message: string }
    | { status: 'too-large'; message: string }
    | { status: 'ok'; value: number };

const DIGIT_SEPARATORS = /[\s,_']/g;

/** Parses user input as a non-negative integer, allowing common digit-group separators. */
export function parseDecimalInput(raw: string): DecimalParseResult {
    const compact = raw.replace(DIGIT_SEPARATORS, '');
    if (compact === '') return { status: 'empty' };

    if (!/^\d+$/.test(compact)) {
        return {
            status: 'invalid',
            message: 'Enter a whole number using the digits 0 to 9. Negative numbers and decimals are not supported.',
        };
    }

    const value = Number(compact);
    if (!Number.isSafeInteger(value)) {
        return {
            status: 'too-large',
            message: `That number is too large. The maximum is ${formatNumber(MAX_DECIMAL)}.`,
        };
    }

    return { status: 'ok', value };
}
