export const ldJson = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What base is the Maya number system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Maya number system uses base 20, also called vigesimal. Each positional level represents a power of 20: the bottom position is 20⁰ (units), the next is 20¹ (twenties), then 20² (four hundreds), and so on.",
        },
      },
      {
        "@type": "Question",
        name: "How many symbols does the Maya number system use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Just three: a dot representing 1, a horizontal bar representing 5, and a shell-shaped glyph representing 0. Combinations of these three symbols express any digit from 0 to 19. To write larger numbers, digits are stacked vertically.",
        },
      },
      {
        "@type": "Question",
        name: "Did the Maya invent zero?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — the Maya independently developed a concept of zero, one of the earliest civilizations to do so. Their zero was not merely a placeholder but a true number used in calculations, appearing in Maya inscriptions as early as the 4th century BCE.",
        },
      },
      {
        "@type": "Question",
        name: "What is the largest number this converter supports?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The converter handles any non-negative integer JavaScript can represent exactly (up to 2⁵³ − 1, or about 9 quadrillion). In practice, numbers in the billions already produce many positional levels and are uncommon in historical Maya texts.",
        },
      },
      {
        "@type": "Question",
        name: "How do I read Maya numerals — top to bottom or bottom to top?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Top to bottom, from the most significant position to the least significant. The highest power of 20 sits at the top of the stack, and the units (ones) position is at the bottom.",
        },
      },
      {
        "@type": "Question",
        name: "Are the glyphs shown here historically accurate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The glyphs are the standardized Unicode representations (U+1D2E0–U+1D2F3) from the Mayan Numerals block, added in Unicode 7.0 (2014). They faithfully reflect the abstract dot-bar-shell system used in Maya codices, though decorative variants exist in carved monuments.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Maya Numeral Converter",
    description:
      "Free online tool to convert decimal numbers to the ancient Maya vigesimal (base-20) number system using authentic Maya Unicode characters.",
    url: "https://mayacalc.danielrogowski.net/",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web Browser",
    inLanguage: "en",
    isAccessibleForFree: true,
    datePublished: "2024-01-01",
    dateModified: "2026-02-01",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    potentialAction: {
      "@type": "UseAction",
      target: "https://mayacalc.danielrogowski.net/",
    },
    author: {
      "@type": "Person",
      name: "Daniel Rogowski",
      url: "https://danielrogowski.net/",
      affiliation: {
        "@type": "Organization",
        name: "Bydgoszcz University of Science and Technology",
        url: "https://pbs.edu.pl",
      },
    },
    keywords: [
      "Maya numeral converter",
      "decimal to Maya",
      "Maya number system",
      "vigesimal converter",
      "Maya numerals calculator",
      "ancient Maya numbers",
      "base-20 system",
    ],
    featureList: [
      "Convert decimal numbers to Maya numerals",
      "Authentic Maya Unicode characters (U+1D2E0–U+1D2F3)",
      "Educational information about the Maya vigesimal system",
      "Free to use, no registration required",
      "Instant conversion results",
    ],
  },
]);
