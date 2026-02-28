import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { MetaFunction } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CookieConsent from "./components/CookieConsent";

export const meta: MetaFunction = () => {
  return [
    { name: "author", content: "Daniel Rogowski" },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://mayacalc.danielrogowski.net/" },
    { property: "og:site_name", content: "Maya Numeral Converter" },
    { property: "og:locale", content: "en_US" },
    { property: "og:image", content: "https://mayacalc.danielrogowski.net/favicon.png" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:image", content: "https://mayacalc.danielrogowski.net/favicon.png" }
  ];
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7B3F1E",
      light: "#A05A30",
      dark: "#552910",
      contrastText: "#FAF6EF",
    },
    secondary: {
      main: "#B8913A",
      light: "#D4AF60",
      dark: "#8B6914",
    },
    background: {
      default: "#FAF6EF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#231812",
      secondary: "#7A6555",
    },
    divider: "rgba(123, 63, 30, 0.14)",
  },
  typography: {
    fontFamily: '"Lora", Georgia, serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Lora", Georgia, serif',
      fontWeight: 600,
      letterSpacing: "0.06em",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #FAF6EF;
        }
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: #FAF6EF;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(123, 63, 30, 0.2);
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(123, 63, 30, 0.4);
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
      `,
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundImage: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 1px 0 rgba(123,63,30,0.1), 0 4px 24px rgba(123,63,30,0.06)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "uppercase",
          fontFamily: '"Lora", serif',
          fontWeight: 600,
          letterSpacing: "0.08em",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: "#7B3F1E",
          color: "#FAF6EF",
          "&:hover": {
            backgroundColor: "#552910",
            boxShadow: "0 4px 20px rgba(123,63,30,0.2)",
          },
          "&.Mui-disabled": {
            backgroundColor: "rgba(123,63,30,0.1)",
            color: "rgba(123,63,30,0.3)",
          },
        },
        outlined: {
          borderColor: "rgba(123,63,30,0.35)",
          color: "#7B3F1E",
          "&:hover": {
            borderColor: "#7B3F1E",
            backgroundColor: "rgba(123,63,30,0.05)",
          },
        },
        text: {
          color: "#7A6555",
          "&:hover": {
            backgroundColor: "rgba(123,63,30,0.05)",
            color: "#7B3F1E",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            fontSize: "1.4rem",
            fontFamily: '"Lora", serif',
            backgroundColor: "#FFFFFF",
            "& fieldset": {
              borderColor: "rgba(123,63,30,0.22)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(123,63,30,0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#7B3F1E",
              borderWidth: "1px",
            },
            "& input": {
              color: "#231812",
              padding: "18px 20px",
            },
          },
          "& .MuiInputLabel-root": {
            fontFamily: '"Lora", serif',
            fontSize: "0.875rem",
            letterSpacing: "0.12em",
            color: "#7A6555",
            "&.Mui-focused": {
              color: "#7B3F1E",
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          color: "#7A6555",
          "&:hover": {
            backgroundColor: "rgba(123,63,30,0.07)",
            color: "#7B3F1E",
          },
        },
      },
    },
  },
});

const gaScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  function loadAnalytics() {
    if (window.gtagInitialized) return;
    window.gtagInitialized = true;
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-38K3HDMFV9';
    document.head.appendChild(script);
    script.onload = function() {
      gtag('js', new Date());
      gtag('config', 'G-38K3HDMFV9', {
        anonymize_ip: true,
        cookie_flags: 'max-age=7776000;secure;samesite=none'
      });
    };
  }

  var hasConsent = localStorage.getItem('gdpr-analytics-consent') === 'true';
  if (hasConsent) { loadAnalytics(); }

  window.grantAnalyticsConsent = function() {
    localStorage.setItem('gdpr-analytics-consent', 'true');
    loadAnalytics();
  };

  window.revokeAnalyticsConsent = function() {
    localStorage.setItem('gdpr-analytics-consent', 'false');
    document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = '_ga_G-38K3HDMFV9=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };
`;

const ldJson = JSON.stringify({
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
});

export default function Root() {
  return (
    <html lang="en">
      <head>
        {/* GDPR Consent Management / Google Analytics */}
        <script dangerouslySetInnerHTML={{ __html: gaScript }} />

        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#7B3F1E" />



        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=Noto+Sans+Symbols+2&display=swap"
          rel="stylesheet"
        />

        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Outlet />
          <CookieConsent />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
