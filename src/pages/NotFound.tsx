import { Box, Typography, Fade } from '@mui/material';
import { Link } from 'react-router-dom';
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "404 Page Not Found | Maya Numeral Converter" },
    { name: "description", content: "The requested page vanished like an inscription lost to time. Return to the ancient Maya numeral converter." },
    { property: "og:title", content: "404 Page Not Found | Maya Numeral Converter" },
    { property: "og:description", content: "The requested page vanished like an inscription lost to time. Return to the ancient Maya numeral converter." },
    { name: "twitter:title", content: "404 Page Not Found" },
    { name: "twitter:description", content: "The requested page vanished like an inscription lost to time. Return to the ancient Maya numeral converter." },
    { name: "robots", content: "noindex, follow" }
  ];
};

// 404 in Maya vigesimal (base-20):
//   404 = 1×400 + 0×20 + 4×1
//   Glyphs: U+1D2E1 (1), U+1D2E0 (0), U+1D2E4 (4)
const GLYPH_1 = String.fromCodePoint(0x1D2E1);
const GLYPH_0 = String.fromCodePoint(0x1D2E0);
const GLYPH_4 = String.fromCodePoint(0x1D2E4);

export default function NotFound() {
  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: 'background.default',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflowX: 'hidden',
      px: 2,
      pb: 8,
      '&::before': {
        content: '""',
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: '55vh',
        background: 'radial-gradient(ellipse at 50% -10%, rgba(123,63,30,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      },
    }}>

      {/* Background watermark */}
      <Box sx={{
        position: 'fixed',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: { xs: '18rem', md: '28rem' },
        fontFamily: '"Noto Sans Symbols 2", sans-serif',
        color: 'rgba(123,63,30,0.035)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        {GLYPH_0}
      </Box>

      {/* Card */}
      <Fade in timeout={700}>
        <Box sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: 520,
          width: '100%',
          p: { xs: 4, md: 6 },
          border: '1px solid rgba(123,63,30,0.15)',
          bgcolor: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(4px)',
        }}>

          {/* Eyebrow */}
          <Typography sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '0.875rem',
            letterSpacing: '0.15em',
            fontWeight: 600,
            color: 'primary.main',
            textTransform: 'uppercase',
            opacity: 0.8,
            mb: 2.5,
          }}>
            Error · 404
          </Typography>

          {/* Maya numeral stack for 404 */}
          <Box
            role="img"
            aria-label="404 written as Maya numerals"
            sx={{ mb: 1 }}
          >
            {[GLYPH_1, GLYPH_0, GLYPH_4].map((glyph, i) => (
              <Typography key={i} sx={{
                fontFamily: '"Noto Sans Symbols 2", sans-serif',
                fontSize: { xs: '3.8rem', md: '5rem' },
                color: 'primary.main',
                lineHeight: 0.9,
                display: 'block',
                textShadow: '0 2px 8px rgba(123,63,30,0.15)',
                animation: `glyphPulse 4s ease-in-out ${i * 0.4}s infinite`,
                '@keyframes glyphPulse': {
                  '0%, 100%': { textShadow: '0 2px 8px rgba(123,63,30,0.15)' },
                  '50%': { textShadow: '0 2px 20px rgba(123,63,30,0.3)' },
                },
              }}>
                {glyph}
              </Typography>
            ))}
          </Box>

          <Typography sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            fontWeight: 600,
            color: 'rgba(123,63,30,0.5)',
            textTransform: 'uppercase',
            mb: 0.5,
          }}>
            four hundred and four · Maya vigesimal
          </Typography>

          {/* Diamond ornament */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, my: 3 }}>
            <Box sx={{ flex: 1, maxWidth: 60, height: '1px', bgcolor: 'rgba(123,63,30,0.25)' }} />
            <Box sx={{ width: 5, height: 5, border: '1px solid rgba(123,63,30,0.4)', transform: 'rotate(45deg)' }} />
            <Box sx={{ width: 8, height: 8, bgcolor: 'primary.main', transform: 'rotate(45deg)' }} />
            <Box sx={{ width: 5, height: 5, border: '1px solid rgba(123,63,30,0.4)', transform: 'rotate(45deg)' }} />
            <Box sx={{ flex: 1, maxWidth: 60, height: '1px', bgcolor: 'rgba(123,63,30,0.25)' }} />
          </Box>

          {/* Heading */}
          <Typography variant="h2" component="h1" sx={{
            fontSize: { xs: '1.8rem', md: '2.6rem' },
            color: 'text.primary',
            mb: 1.5,
          }}>
            Page <Box component="span" sx={{ color: 'primary.main' }}>Not Found</Box>
          </Typography>

          <Typography variant="body1" sx={{
            color: 'text.secondary',
            lineHeight: 1.9,
            fontSize: '0.95rem',
            mb: 3.5,
            maxWidth: 360,
            mx: 'auto',
          }}>
            This page has vanished like an inscription lost to time.
            The path you followed leads nowhere — but the converter awaits.
          </Typography>

          {/* CTA */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'inline-block',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              fontFamily: '"Lora", serif',
              fontWeight: 600,
              fontSize: '1rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              px: 4,
              py: 1.75,
              transition: 'background 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                bgcolor: 'primary.dark',
                boxShadow: '0 4px 20px rgba(123,63,30,0.22)',
              },
            }}
          >
            Return to Converter
          </Box>
        </Box>
      </Fade>

    </Box>
  );
}
