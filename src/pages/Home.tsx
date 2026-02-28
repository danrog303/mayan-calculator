import { useMemo, useState, useRef } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import type { MetaFunction } from "react-router";
import MayaNumber from '../components/MayaNumber';
import { convertToBase20 } from '../lib/maya';

export const meta: MetaFunction = () => {
  return [
    { title: "Maya Numeral Converter — Convert Decimal to Maya Numbers" },
    { name: "description", content: "Convert decimal numbers to Maya numerals instantly. Free online calculator using authentic Maya Unicode characters. Learn the ancient base-20 vigesimal number system." },
    { name: "keywords", content: "Maya numeral converter, decimal to Maya, Maya number system, Maya numerals calculator, vigesimal converter, ancient Maya numbers, Maya mathematics, base-20" },
    { tagName: "link", rel: "canonical", href: "https://mayacalc.danielrogowski.net/" },
    { property: "og:title", content: "Maya Numeral Converter — Convert Decimal to Maya Numbers" },
    { property: "og:description", content: "Convert decimal numbers to Maya numerals instantly. Free online calculator using authentic Maya Unicode characters. Learn the ancient base-20 number system." },
    { name: "twitter:title", content: "Maya Numeral Converter" },
    { name: "twitter:description", content: "Convert decimal numbers to Maya numerals instantly. Free calculator with authentic Unicode glyphs." }
  ];
};

// Decorative geometric divider — Mayan step motif
function StepDivider() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: { xs: 5, md: 8 } }}>
      <Box sx={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(123,63,30,0.25))' }} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mx: 2 }}>
        <Box sx={{ width: 5, height: 5, border: '1px solid rgba(123,63,30,0.4)', transform: 'rotate(45deg)' }} />
        <Box sx={{ width: 9, height: 9, border: '1px solid rgba(123,63,30,0.6)', transform: 'rotate(45deg)' }} />
        <Box sx={{ width: 5, height: 5, border: '1px solid rgba(123,63,30,0.4)', transform: 'rotate(45deg)' }} />
      </Box>
      <Box sx={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(123,63,30,0.25))' }} />
    </Box>
  );
}

function Eyebrow({ children }: { children: string }) {
  return (
    <Typography sx={{
      fontFamily: '"Playfair Display", serif',
      fontSize: '0.875rem',
      letterSpacing: '0.15em',
      color: 'primary.main',
      mb: 1.5,
      textTransform: 'uppercase',
      fontWeight: 600,
      opacity: 0.9,
    }}>
      {children}
    </Typography>
  );
}

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [hasCalculated, setHasCalculated] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const resultRef = useRef<HTMLDivElement>(null);

  const mayaDigits = useMemo(() => {
    const n = Number(inputValue);
    if (Number.isNaN(n) || n < 0) return [0];
    return convertToBase20(n);
  }, [inputValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setHasCalculated(true);
      if (isMobile && resultRef.current) {
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setHasCalculated(false);
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: 'background.default',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: '50vh',
        background: 'radial-gradient(ellipse at 50% -10%, rgba(123,63,30,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 0,
      }
    }}>

      {/* ── HERO HEADER ─────────────────────────────────────────────── */}
      <>
        <Box sx={{
          position: 'relative',
          pt: { xs: 7, md: 12 },
          pb: { xs: 7, md: 11 },
          textAlign: 'center',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(123,63,30,0.3), transparent)',
          },
        }}>
          <Box sx={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: { xs: '14rem', md: '22rem' },
            fontFamily: '"Noto Sans Symbols 2", sans-serif',
            color: 'rgba(123,63,30,0.04)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}>
            {String.fromCodePoint(0x1D2E0)}
          </Box>

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Eyebrow>Ancient Mesoamerican Mathematics</Eyebrow>

            <Typography variant="h1" component="h1" sx={{
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4.5rem' },
              color: 'text.primary',
              lineHeight: 1.05,
              mb: 0.3,
            }}>
              Maya Numeral
            </Typography>
            <Typography variant="h1" component="span" sx={{
              fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4.5rem' },
              color: 'primary.main',
              display: 'block',
              lineHeight: 1.05,
              mb: 3.5,
            }}>
              Converter
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1.5, mb: 3.5 }}>
              <Box sx={{ width: 50, height: '1px', bgcolor: 'rgba(123,63,30,0.3)' }} />
              <Box sx={{ width: 5, height: 5, bgcolor: 'primary.light', transform: 'rotate(45deg)', opacity: 0.7 }} />
              <Box sx={{ width: 8, height: 8, bgcolor: 'primary.main', transform: 'rotate(45deg)' }} />
              <Box sx={{ width: 5, height: 5, bgcolor: 'primary.light', transform: 'rotate(45deg)', opacity: 0.7 }} />
              <Box sx={{ width: 50, height: '1px', bgcolor: 'rgba(123,63,30,0.3)' }} />
            </Box>

            <Typography variant="body1" sx={{
              color: 'text.secondary',
              maxWidth: 440,
              mx: 'auto',
              px: 2,
              lineHeight: 1.9,
              fontSize: '0.95rem',
            }}>
              Decode the ancient vigesimal system of the Maya civilization.
              Convert any decimal number into authentic Unicode glyphs.
            </Typography>
          </Box>
        </Box>
      </>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 5, md: 8 } }}>

        {/* ── CONVERTER PANEL ──────────────────────────────────────────── */}
        <Box sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          mb: 6,
          border: '1px solid rgba(123,63,30,0.15)',
          bgcolor: 'background.paper',
          boxShadow: '0 2px 30px rgba(123,63,30,0.07)',
        }}>
          <>
            <Box sx={{
              flex: 1,
              p: { xs: 3.5, md: 5.5 },
              borderRight: isMobile ? 'none' : '1px solid rgba(123,63,30,0.15)',
              borderBottom: isMobile ? '1px solid rgba(123,63,30,0.15)' : 'none',
            }}>
              <Eyebrow>Input</Eyebrow>
              <Typography variant="h4" component="h2" sx={{ color: 'text.primary', mb: 4, fontSize: { xs: '1.15rem', md: '1.45rem' } }}>
                Enter Decimal Number
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  type="number"
                  label="Decimal Number"
                  value={inputValue}
                  onChange={handleInputChange}
                  variant="outlined"
                  inputProps={{ min: 0, step: 1 }}
                  sx={{ mb: 3 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={!inputValue.trim()}
                  sx={{ py: 2, fontSize: '1rem' }}
                >
                  Reveal in Maya
                </Button>
              </form>
            </Box>
          </>

          <>
            <Box
              sx={{
                flex: 1,
                p: { xs: 3.5, md: 5.5 },
                minHeight: { xs: 260, md: 320 },
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                bgcolor: hasCalculated && inputValue ? 'rgba(123,63,30,0.025)' : 'transparent',
                transition: 'background 0.6s ease',
              }}
              ref={resultRef}
            >
              <Eyebrow>Result</Eyebrow>
              <Typography variant="h4" component="h2" sx={{ color: 'text.primary', mb: 4, fontSize: { xs: '1.15rem', md: '1.45rem' } }}>
                Maya Representation
              </Typography>

              <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {inputValue && hasCalculated ? (
                  <>
                    <Box sx={{ width: '100%' }}>
                      <MayaNumber digits={mayaDigits} />
                    </Box>
                  </>
                ) : (
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{
                      fontFamily: '"Noto Sans Symbols 2", sans-serif',
                      fontSize: '3.5rem',
                      color: 'rgba(123,63,30,0.1)',
                      lineHeight: 1,
                      mb: 2,
                    }}>
                      {String.fromCodePoint(0x1D2E0)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic', opacity: 0.5 }}>
                      Awaiting your number
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </>
        </Box>

        {/* ── AD BANNER ─────────────────────────────────────────────────── */}
        <Box sx={{ mb: 2 }}>
          <Box sx={{
            width: '100%', height: 250,
            bgcolor: 'rgba(123,63,30,0.03)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px dashed rgba(123,63,30,0.12)',
          }}>
            <Typography sx={{ color: 'rgba(123,63,30,0.6)', fontFamily: '"Playfair Display", serif', letterSpacing: '0.2em', fontSize: '0.875rem', fontWeight: 600 }}>
              ADVERTISEMENT
            </Typography>
          </Box>
        </Box>

        <StepDivider />

        {/* ── CHARACTER REFERENCE GRID ──────────────────────────────────── */}
        <>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Eyebrow>Reference</Eyebrow>
              <Typography variant="h3" component="h2" sx={{ color: 'text.primary', fontSize: { xs: '1.25rem', md: '1.85rem' }, mb: 1 }}>
                The Complete Vigesimal Codex
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                All twenty glyphs of the Maya base-20 system
              </Typography>
            </Box>

            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(4, 1fr)', sm: 'repeat(5, 1fr)', md: 'repeat(10, 1fr)' },
              border: '1px solid rgba(123,63,30,0.12)',
              bgcolor: 'background.paper',
              boxShadow: '0 2px 20px rgba(123,63,30,0.06)',
            }}>
              {Array.from({ length: 20 }, (_, i) => (
                <Box key={i} sx={{
                  textAlign: 'center',
                  p: { xs: 2, md: 2.5 },
                  borderRight: '1px solid rgba(123,63,30,0.12)',
                  borderBottom: '1px solid rgba(123,63,30,0.12)',
                  cursor: 'default',
                  transition: 'background 0.2s ease',
                  '&:hover': {
                    bgcolor: 'rgba(123,63,30,0.04)',
                    '& .codex-glyph': { color: 'primary.dark' },
                  },
                }}>
                  <Typography className="codex-glyph" sx={{
                    fontSize: { xs: '1.9rem', md: '2.3rem' },
                    fontFamily: '"Noto Sans Symbols 2", sans-serif',
                    color: 'primary.main',
                    lineHeight: 1,
                    transition: 'color 0.2s ease',
                    display: 'block',
                  }}>
                    {String.fromCodePoint(0x1D2E0 + i)}
                  </Typography>
                  <Typography sx={{
                    fontSize: '1rem',
                    fontFamily: '"Playfair Display", serif',
                    color: 'text.primary',
                    mt: 0.75,
                    opacity: 0.85,
                    letterSpacing: '0.05em',
                    fontWeight: 600,
                  }}>
                    {i}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </>

        <StepDivider />

        {/* ── ABOUT SECTION ─────────────────────────────────────────────── */}
        <>
          <Box sx={{ mb: 2 }}>
            <Box sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: { xs: 5, md: 10 },
              alignItems: 'flex-start',
            }}>
              <Box sx={{ flex: 1 }}>
                <Eyebrow>Knowledge</Eyebrow>
                <Typography variant="h3" component="h2" sx={{ color: 'text.primary', fontSize: { xs: '1.25rem', md: '1.85rem' }, mb: 3.5 }}>
                  About the Maya Number System
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.95, fontSize: '0.97rem' }}>
                  The Maya number system is a{' '}
                  <Box component="em" sx={{ color: 'primary.main', fontStyle: 'normal', fontWeight: 500 }}>base-20 (vigesimal)</Box>
                  {' '}positional system — one of only a handful developed independently in human history.
                  Digits are stacked vertically, with the highest-order position at the top.
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.95, fontSize: '0.97rem' }}>
                  Each glyph corresponds to a Unicode character in the range{' '}
                  <Box component="span" sx={{ fontFamily: 'monospace', color: 'primary.main', fontSize: '0.88em', bgcolor: 'rgba(123,63,30,0.07)', px: 0.8, py: 0.2 }}>U+1D2E0</Box>
                  {' '}–{' '}
                  <Box component="span" sx={{ fontFamily: 'monospace', color: 'primary.main', fontSize: '0.88em', bgcolor: 'rgba(123,63,30,0.07)', px: 0.8, py: 0.2 }}>U+1D2F3</Box>,
                  {' '}representing values 0 through 19 — the twenty fundamental symbols of the ancient codex.
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.95, fontSize: '0.97rem' }}>
                  One of the most remarkable achievements of Maya mathematics was the{' '}
                  <Box component="em" sx={{ color: 'primary.main', fontStyle: 'normal', fontWeight: 500 }}>independent invention of zero</Box>
                  {' '}— centuries before it reached Europe. The zero glyph (𝋠) served as both a placeholder and a true numerical concept, enabling the Maya to represent arbitrarily large numbers with just three symbols: a dot (1), a bar (5), and the shell-shaped zero.
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.95, fontSize: '0.97rem' }}>
                  Compared to other ancient systems, the Maya approach was remarkably efficient. Roman numerals have no zero and no positional value — writing 400 as CDXCIX requires nine symbols. In the Maya system, 400 is simply written as two vertically stacked glyphs: 1 (= 1 × 20²) above 0 (= 0 × 20¹) above 0 (= 0 × 20⁰), reading top to bottom.
                </Typography>
              </Box>

              <Box sx={{
                width: { xs: '100%', md: 200 },
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                py: 5,
                border: '1px solid rgba(123,63,30,0.15)',
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <Box sx={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(ellipse at 50% 50%, rgba(123,63,30,0.04) 0%, transparent 70%)',
                }} />
                <Typography sx={{
                  fontFamily: '"Noto Sans Symbols 2", sans-serif',
                  fontSize: '5rem',
                  color: 'primary.main',
                  lineHeight: 1,
                  position: 'relative',
                }}>
                  {String.fromCodePoint(0x1D2F3)}
                </Typography>
                <Box sx={{ height: '1px', width: 36, bgcolor: 'rgba(123,63,30,0.25)', my: 2 }} />
                <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 600, color: 'text.secondary', opacity: 0.8 }}>
                  NINETEEN
                </Typography>
                <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'primary.main', mt: 0.5 }}>
                  Highest single digit
                </Typography>
              </Box>
            </Box>
          </Box>
        </>

        <StepDivider />

        {/* ── HOW IT WORKS SECTION ──────────────────────────────────────── */}
        <>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Eyebrow>Worked Example</Eyebrow>
              <Typography variant="h3" component="h2" sx={{ color: 'text.primary', fontSize: { xs: '1.25rem', md: '1.85rem' }, mb: 1 }}>
                How to Read Maya Numerals
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 480, mx: 'auto' }}>
                Maya digits are stacked vertically. Each position is a power of 20, read from top (highest) to bottom (units).
              </Typography>
            </Box>

            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 0,
              border: '1px solid rgba(123,63,30,0.12)',
              bgcolor: 'background.paper',
              boxShadow: '0 2px 20px rgba(123,63,30,0.06)',
            }}>
              {[
                {
                  decimal: 7,
                  label: 'Seven dots',
                  note: '7 × 20⁰ = 7',
                  desc: 'Numbers 1–4 are shown as dots. Numbers 5–19 use bars (worth 5 each) plus dots.',
                },
                {
                  decimal: 20,
                  label: 'One position up',
                  note: '1 × 20¹ + 0 = 20',
                  desc: 'Twenty cannot fit in the units position, so a 1 moves to the next level and a zero shell fills the bottom.',
                },
                {
                  decimal: 365,
                  label: 'The Maya calendar year',
                  note: '18 × 20¹ + 5 = 365',
                  desc: 'The Maya solar calendar (haab) had 365 days — a number they expressed effortlessly in their own script.',
                },
              ].map(({ decimal, label, note, desc }, i, arr) => (
                <Box key={decimal} sx={{
                  p: { xs: 3, md: 4 },
                  borderRight: !isMobile && i < arr.length - 1 ? '1px solid rgba(123,63,30,0.12)' : 'none',
                  borderBottom: isMobile && i < arr.length - 1 ? '1px solid rgba(123,63,30,0.12)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 2,
                }}>
                  <Box sx={{ mb: 1 }}>
                    <MayaNumber digits={convertToBase20(decimal)} compact />
                  </Box>
                  <Box>
                    <Typography sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'primary.main',
                      lineHeight: 1,
                      mb: 0.5,
                    }}>
                      {decimal}
                    </Typography>
                    <Typography sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: '0.8rem',
                      letterSpacing: '0.08em',
                      fontWeight: 600,
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      mb: 1,
                    }}>
                      {label}
                    </Typography>
                    <Typography sx={{
                      fontFamily: 'monospace',
                      fontSize: '0.82rem',
                      color: 'primary.main',
                      bgcolor: 'rgba(123,63,30,0.06)',
                      px: 1.2,
                      py: 0.4,
                      display: 'inline-block',
                      mb: 1.5,
                    }}>
                      {note}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75, fontSize: '0.88rem' }}>
                      {desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </>

        <StepDivider />

        {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
        <>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Eyebrow>Questions</Eyebrow>
              <Typography variant="h3" component="h2" sx={{ color: 'text.primary', fontSize: { xs: '1.25rem', md: '1.85rem' }, mb: 1 }}>
                Frequently Asked Questions
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid rgba(123,63,30,0.12)', bgcolor: 'background.paper', boxShadow: '0 2px 20px rgba(123,63,30,0.06)' }}>
              {[
                {
                  q: 'What base is the Maya number system?',
                  a: 'The Maya number system uses base 20, also called vigesimal. Each positional level represents a power of 20: the bottom position is 20⁰ (units), the next is 20¹ (twenties), then 20² (four hundreds), and so on.',
                },
                {
                  q: 'How many symbols does the Maya number system use?',
                  a: 'Just three: a dot representing 1, a horizontal bar representing 5, and a shell-shaped glyph representing 0. Combinations of these three symbols express any digit from 0 to 19. To write larger numbers, digits are stacked vertically.',
                },
                {
                  q: 'Did the Maya invent zero?',
                  a: 'Yes — the Maya independently developed a concept of zero, one of the earliest civilizations to do so. Their zero was not merely a placeholder but a true number used in calculations. This innovation enabled the positional nature of their system and appeared in Maya inscriptions as early as the 4th century BCE.',
                },
                {
                  q: 'What is the largest number this converter supports?',
                  a: 'The converter handles any non-negative integer your browser\'s JavaScript engine can represent exactly as an integer (up to 2⁵³ − 1, or about 9 quadrillion). In practice, numbers in the billions already produce many positional levels and are uncommon in historical Maya texts.',
                },
                {
                  q: 'How do I read Maya numerals — top to bottom or bottom to top?',
                  a: 'Top to bottom, from the most significant position to the least significant. The highest power of 20 sits at the top of the stack, and the units (ones) position is at the bottom. This converter labels each level with its positional value so you can verify the reading direction.',
                },
                {
                  q: 'Are the glyphs shown here historically accurate?',
                  a: 'The glyphs are the standardized Unicode representations (U+1D2E0–U+1D2F3) from the Mayan Numerals block, added in Unicode 7.0 (2014). They faithfully reflect the abstract dot-bar-shell system used in Maya codices, though decorative variants exist in carved monuments.',
                },
              ].map(({ q, a }, i, arr) => (
                <Box key={i} component="details" sx={{
                  borderBottom: i < arr.length - 1 ? '1px solid rgba(123,63,30,0.12)' : 'none',
                  '&[open] summary::after': { transform: 'rotate(180deg)' },
                }}>
                  <Box component="summary" sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: { xs: 3, md: 4 },
                    cursor: 'pointer',
                    listStyle: 'none',
                    '&::-webkit-details-marker': { display: 'none' },
                    '&::after': {
                      content: '"›"',
                      fontFamily: 'serif',
                      fontSize: '1.4rem',
                      color: 'rgba(123,63,30,0.5)',
                      transform: 'rotate(90deg)',
                      display: 'inline-block',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                      ml: 2,
                    },
                  }}>
                    <Typography component="h3" sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      fontWeight: 600,
                      color: 'text.primary',
                      lineHeight: 1.5,
                    }}>
                      {q}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{
                    color: 'text.secondary',
                    px: { xs: 3, md: 4 },
                    pb: { xs: 3, md: 4 },
                    lineHeight: 1.9,
                    fontSize: '0.97rem',
                    borderTop: '1px solid rgba(123,63,30,0.07)',
                    pt: 2.5,
                  }}>
                    {a}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </>

        <StepDivider />

        {/* ── SOURCES SECTION ────────────────────────────────────────────── */}
        <>
          <Box sx={{ mb: 8 }}>
            <Eyebrow>References</Eyebrow>
            <Typography variant="h3" component="h2" sx={{ color: 'text.primary', fontSize: { xs: '1.25rem', md: '1.85rem' }, mb: 4 }}>
              Sources &amp; Credits
            </Typography>

            <Box sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              border: '1px solid rgba(123,63,30,0.12)',
              bgcolor: 'background.paper',
            }}>
              {[
                { label: 'Article Reference', text: 'Wikipedia — Maya numerals', href: 'https://en.wikipedia.org/wiki/Maya_numerals' },
                { label: 'Icon Source', text: 'maxpixel.net (CC0 Public Domain)', href: 'https://www.maxpixel.net/Aztec-Symbol-Skull-Symbol-Maya-Toltec-Aztec-37936' },
                { label: 'Numeral Graphics', text: 'Wikipedia — Bryan Derksen (CC BY-SA 3.0)', href: 'https://pl.wikipedia.org/wiki/Cyfry_Maj%C3%B3w#/media/Plik:Maya.svg' },
              ].map((source, i, arr) => (
                <Box key={i} sx={{
                  flex: 1,
                  p: { xs: 3, md: 4 },
                  borderRight: !isMobile && i < arr.length - 1 ? '1px solid rgba(123,63,30,0.12)' : 'none',
                  borderBottom: isMobile && i < arr.length - 1 ? '1px solid rgba(123,63,30,0.12)' : 'none',
                }}>
                  <Typography sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: '0.875rem',
                    letterSpacing: '0.1em',
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 1.5,
                    textTransform: 'uppercase',
                  }}>
                    {source.label}
                  </Typography>
                  <Typography
                    component="a"
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      transition: 'color 0.2s ease',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {source.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </>

        {/* ── FOOTER ────────────────────────────────────────────────────── */}
        <>
          <Box sx={{
            textAlign: 'center',
            pt: 4,
            pb: 8,
            borderTop: '1px solid rgba(123,63,30,0.1)',
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Box sx={{ width: 28, height: '1px', bgcolor: 'rgba(123,63,30,0.25)' }} />
              <Box sx={{ width: 4, height: 4, bgcolor: 'primary.main', transform: 'rotate(45deg)', opacity: 0.5 }} />
              <Box sx={{ width: 28, height: '1px', bgcolor: 'rgba(123,63,30,0.25)' }} />
            </Box>

            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5, opacity: 0.8, lineHeight: 2 }}>
              Created by{' '}
              <Box component="a" href="https://danielrogowski.net/" target="_blank" sx={{
                color: 'primary.main', textDecoration: 'none',
                fontFamily: '"Playfair Display", serif', fontSize: '0.8rem',
                '&:hover': { color: 'primary.dark' },
              }}>
                Daniel Rogowski
              </Box>
              {' '}·{' '}
              <Box component="a" href="https://pbs.edu.pl" target="_blank" sx={{
                color: 'text.secondary', textDecoration: 'none',
                '&:hover': { color: 'primary.main' },
              }}>
                Bydgoszcz University of Science and Technology
              </Box>
              , Poland.
            </Typography>

            <Typography variant="body2" sx={{
              color: 'text.secondary',
              maxWidth: 580,
              mx: 'auto',
              px: 2,
              opacity: 0.8,
              fontSize: '0.75rem',
              lineHeight: 1.9,
              mb: 2,
            }}>
              A free educational tool for exploring the ancient vigesimal mathematics of the Maya civilization.
            </Typography>

            <Box component={Link} to="/privacy-policy" sx={{
              display: 'inline-block',
              fontSize: '0.875rem',
              color: 'text.secondary',
              textDecoration: 'none',
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em',
              transition: 'color 0.2s',
              '&:hover': { color: 'primary.main' },
            }}>
              Privacy Policy
            </Box>
          </Box>
        </>
      </Container>
    </Box>
  );
}
