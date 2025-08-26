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
            output.unshift(remaining % 20);
            remaining = Math.floor(remaining / 20);
        }
    }

    return output;
}
