export type FaqItem = { question: string; answer: string };

/** Single source for the visible FAQ and the FAQPage structured data. */
export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: 'What base is the Maya number system?',
    answer:
      'The Maya number system uses base 20, also called vigesimal. Each level of a numeral is worth 20 times the level below it: the bottom level counts units (1), the next counts twenties (20), then four hundreds (400), eight thousands (8,000), and so on.',
  },
  {
    question: 'How many symbols does the Maya number system use?',
    answer:
      'Just three: a dot worth 1, a horizontal bar worth 5, and a shell-shaped sign for 0. Combining dots and bars gives every digit from 0 to 19. Larger numbers stack digits vertically, one level per power of 20.',
  },
  {
    question: 'How do I convert Maya numerals to decimal?',
    answer:
      'Multiply the digit on each level by its place value and add the results. Reading from the bottom, the place values are 1, 20, 400, 8,000 and so on. For example, 18 on the second level and 5 on the bottom level make 18 × 20 + 5 × 1 = 365. In this converter, choose "Maya to decimal" and tap the digits from the top level down.',
  },
  {
    question: 'How do I read Maya numerals: top to bottom or bottom to top?',
    answer:
      'Top to bottom, from the most significant level to the least significant. The highest power of 20 sits at the top of the stack and the units level is at the bottom. The place-value table in this converter lists the levels in the same order.',
  },
  {
    question: 'Did the Maya invent zero?',
    answer:
      'The Maya are one of the few civilizations known to have developed zero independently. Zero appears in Mesoamerican Long Count dates from the first century BCE, and the Maya used it both as a placeholder and as a number in its own right, centuries before zero reached Europe.',
  },
  {
    question: 'Why do Maya calendar dates use 360 instead of 400?',
    answer:
      'The Long Count calendar is not pure base 20. Its third level counts periods of 18 × 20 = 360 days (a tun) instead of 400, so the year-like unit stays close to the solar year. This converter uses the pure base-20 number system the Maya used for counting, where every level is worth 20 times the level below it.',
  },
  {
    question: 'What is the largest number this converter supports?',
    answer:
      'Any whole number from 0 up to 9,007,199,254,740,991 (2 to the power of 53, minus 1), the largest integer a browser can represent exactly. That is a 13-level Maya numeral. Numbers in the millions already need five or more levels and are rare in historical Maya texts.',
  },
  {
    question: 'Are the glyphs shown here historically accurate?',
    answer:
      'The numerals here use the abstract dot, bar and shell forms found in the Maya codices. Carved monuments often use more decorative variants, including head glyphs for each number. Copied results use the standard Unicode characters from the Mayan Numerals block (U+1D2E0 to U+1D2F3), added in Unicode 7.0 in 2014.',
  },
];
