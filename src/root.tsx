import { lazy, Suspense } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { MetaFunction } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { gaScript } from "./lib/analytics";
import { ldJson } from "./lib/structured-data";
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/400-italic.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/lora/400.css';
import '@fontsource/lora/400-italic.css';
import '@fontsource/lora/500.css';
import '@fontsource/lora/500-italic.css';
import '@fontsource/lora/600.css';

const CookieConsent = lazy(() => import("./components/CookieConsent"));

export const meta: MetaFunction = () => {
  return [
    { name: "author", content: "Daniel Rogowski" },
    { name: "application-name", content: "Maya Numeral Converter" },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://mayacalc.danielrogowski.net/" },
    { property: "og:site_name", content: "Maya Numeral Converter" },
    { property: "og:locale", content: "en_US" },
    { property: "og:image", content: "https://mayacalc.danielrogowski.net/favicon.png" },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:alt", content: "Maya Numeral Converter — Convert decimal to ancient Maya numerals" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:image", content: "https://mayacalc.danielrogowski.net/favicon.png" },
    { name: "twitter:image:alt", content: "Maya Numeral Converter" }
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
      secondary: "#5A4030",
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


export default function Root() {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: gaScript }} />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#7B3F1E" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Symbols+2&display=swap" />

        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main>
            <Outlet />
          </main>
          <Suspense fallback={null}>
            <CookieConsent />
          </Suspense>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
