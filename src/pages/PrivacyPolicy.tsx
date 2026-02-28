import { Box, Container, Typography, Fade } from '@mui/material';
import { Link } from 'react-router-dom';
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy Policy | Maya Numeral Converter" },
    { name: "description", content: "Privacy policy and GDPR compliance information for the Maya Numeral Converter tool." },
    { tagName: "link", rel: "canonical", href: "https://mayacalc.danielrogowski.net/privacy-policy" },
    { property: "og:title", content: "Privacy Policy | Maya Numeral Converter" },
    { property: "og:description", content: "Privacy policy and GDPR compliance information for the Maya Numeral Converter tool." },
    { name: "twitter:title", content: "Privacy Policy | Maya Numeral Converter" },
    { name: "twitter:description", content: "Privacy policy and GDPR compliance information for the Maya Numeral Converter tool." }
  ];
};

function StepDivider() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: { xs: 4, md: 6 } }}>
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

function SectionTitle({ children }: { children: string }) {
  return (
    <Typography variant="h3" component="h2" sx={{
      color: 'text.primary',
      fontSize: { xs: '1.1rem', md: '1.4rem' },
      mb: 2.5,
      mt: 0,
    }}>
      {children}
    </Typography>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="body1" sx={{
      color: 'text.secondary',
      lineHeight: 1.95,
      fontSize: '0.97rem',
      mb: 2,
    }}>
      {children}
    </Typography>
  );
}

const LAST_UPDATED = 'February 2026';

export default function PrivacyPolicy() {
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
      },
    }}>

      {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
      <Fade in timeout={700}>
        <Box sx={{
          position: 'relative',
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 9 },
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
          {/* Back navigation */}
          <Box sx={{ position: 'absolute', top: { xs: 20, md: 28 }, left: { xs: 16, md: 32 } }}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                color: 'text.secondary',
                textDecoration: 'none',
                fontFamily: '"Playfair Display", serif',
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                fontWeight: 600,
                opacity: 0.6,
                transition: 'opacity 0.2s, color 0.2s',
                '&:hover': { opacity: 1, color: 'primary.main' },
              }}
            >
              ← Converter
            </Box>
          </Box>

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '0.875rem',
              letterSpacing: '0.15em',
              fontWeight: 600,
              color: 'primary.main',
              mb: 1.5,
              textTransform: 'uppercase',
              opacity: 0.8,
            }}>
              Legal
            </Typography>

            <Typography variant="h1" component="h1" sx={{
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.8rem' },
              color: 'text.primary',
              lineHeight: 1.05,
              mb: 2.5,
            }}>
              Privacy <Box component="span" sx={{ color: 'primary.main' }}>Policy</Box>
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
              <Box sx={{ width: 40, height: '1px', bgcolor: 'rgba(123,63,30,0.3)' }} />
              <Box sx={{ width: 6, height: 6, bgcolor: 'primary.main', transform: 'rotate(45deg)' }} />
              <Box sx={{ width: 40, height: '1px', bgcolor: 'rgba(123,63,30,0.3)' }} />
            </Box>

            <Typography variant="body2" sx={{ color: 'text.secondary', opacity: 0.7, fontSize: '0.875rem' }}>
              Last updated: {LAST_UPDATED}
            </Typography>
          </Box>
        </Box>
      </Fade>

      {/* ── CONTENT ──────────────────────────────────────────────────── */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, py: { xs: 5, md: 7 } }}>
        <Fade in timeout={900}>
          <Box>

            {/* 1. Overview */}
            <SectionTitle>1. Overview</SectionTitle>
            <Body>
              This privacy policy explains how Maya Numeral Converter (available at{' '}
              <Box component="a" href="https://mayacalc.danielrogowski.net/" target="_blank" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                mayacalc.danielrogowski.net
              </Box>
              ) collects and processes personal data. We are committed to protecting your privacy and
              handling your data in full compliance with the General Data Protection Regulation (GDPR)
              and applicable Polish data protection law.
            </Body>
            <Body>
              This website is a free educational tool. We collect minimal data and only with your
              explicit consent. You may use the converter without accepting any cookies.
            </Body>

            <StepDivider />

            {/* 2. Data Controller */}
            <SectionTitle>2. Data Controller</SectionTitle>
            <Body>
              The data controller responsible for your personal data is:
            </Body>
            <Box sx={{
              p: { xs: 2.5, md: 3.5 },
              border: '1px solid rgba(123,63,30,0.15)',
              bgcolor: 'background.paper',
              mb: 2,
            }}>
              <Typography sx={{ color: 'text.primary', lineHeight: 2, fontSize: '0.95rem' }}>
                <strong>Daniel Rogowski</strong><br />
                Bydgoszcz University of Science and Technology<br />
                Bydgoszcz, Poland<br />
                Website:{' '}
                <Box component="a" href="https://danielrogowski.net/" target="_blank" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  danielrogowski.net
                </Box>
              </Typography>
            </Box>

            <StepDivider />

            {/* 3. What Data We Collect */}
            <SectionTitle>3. What Data We Collect</SectionTitle>
            <Body>
              We only collect analytics data, and only if you explicitly consent. We do{' '}
              <Box component="strong" sx={{ color: 'text.primary' }}>not</Box> collect:
            </Body>
            <Box component="ul" sx={{ pl: 0, mb: 2, listStyle: 'none' }}>
              {[
                'Names, email addresses, or any directly identifying information',
                'Payment or financial data',
                'Content you enter into the converter (numbers are processed locally in your browser)',
              ].map((item) => (
                <Box component="li" key={item} sx={{ display: 'flex', gap: 2, mb: 1.5, alignItems: 'flex-start' }}>
                  <Box sx={{ width: 4, height: 4, bgcolor: 'primary.main', transform: 'rotate(45deg)', mt: 0.8, flexShrink: 0, opacity: 0.6 }} />
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '0.95rem' }}>{item}</Typography>
                </Box>
              ))}
            </Box>
            <Body>
              If you consent to analytics, Google Analytics collects the following anonymous data:
            </Body>
            <Box component="ul" sx={{ pl: 0, mb: 2, listStyle: 'none' }}>
              {[
                'Pages visited and time spent on each page',
                'Approximate geographic location (country/city level only)',
                'Device type, operating system, and browser',
                'Traffic source (e.g. search engine, direct)',
                'Session duration and interaction patterns',
              ].map((item) => (
                <Box component="li" key={item} sx={{ display: 'flex', gap: 2, mb: 1.5, alignItems: 'flex-start' }}>
                  <Box sx={{ width: 4, height: 4, bgcolor: 'primary.main', transform: 'rotate(45deg)', mt: 0.8, flexShrink: 0, opacity: 0.6 }} />
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '0.95rem' }}>{item}</Typography>
                </Box>
              ))}
            </Box>
            <Body>
              All data is collected with IP anonymization enabled. Your full IP address is never stored.
            </Body>

            <StepDivider />

            {/* 4. Legal Basis */}
            <SectionTitle>4. Legal Basis for Processing</SectionTitle>
            <Body>
              Analytics data is processed solely on the basis of your{' '}
              <Box component="strong" sx={{ color: 'text.primary' }}>freely given, informed consent</Box>
              {' '}(Article 6(1)(a) of the GDPR). The cookie consent banner appears when you first
              visit the site. You may accept or decline, and you may change your choice at any time
              by clearing your browser's local storage or cookies.
            </Body>
            <Body>
              If you decline or ignore the banner, no analytics cookies are set and no data is
              sent to Google Analytics.
            </Body>

            <StepDivider />

            {/* 5. Google Analytics */}
            <SectionTitle>5. Third-Party Service: Google Analytics</SectionTitle>
            <Body>
              With your consent, this site uses Google Analytics 4, provided by Google Ireland Limited
              (Gordon House, Barrow Street, Dublin 4, Ireland). Google acts as a data processor on
              our behalf under Google's Data Processing Terms.
            </Body>
            <Body>
              Google may transfer analytics data to servers in the United States and other countries.
              Such transfers are covered by Standard Contractual Clauses approved by the European
              Commission. For more information, see{' '}
              <Box component="a" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Google's Privacy Policy
              </Box>.
            </Body>

            <StepDivider />

            {/* 6. Cookies */}
            <SectionTitle>6. Cookies</SectionTitle>
            <Body>
              Cookies are only placed if you accept analytics. No cookies are used for advertising,
              profiling, or any purpose other than anonymous usage statistics.
            </Body>
            <Box sx={{
              border: '1px solid rgba(123,63,30,0.12)',
              bgcolor: 'background.paper',
              mb: 2,
              overflow: 'hidden',
            }}>
              {[
                { name: '_ga', purpose: 'Distinguishes unique users', expiry: '2 years' },
                { name: `_ga_*`, purpose: 'Maintains session state for Google Analytics 4', expiry: '2 years' },
              ].map((cookie, i, arr) => (
                <Box key={cookie.name} sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 2fr 1fr' },
                  borderBottom: i < arr.length - 1 ? '1px solid rgba(123,63,30,0.1)' : 'none',
                }}>
                  <Box sx={{ p: { xs: 2, md: 2.5 }, borderRight: { sm: '1px solid rgba(123,63,30,0.1)' } }}>
                    <Typography sx={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'primary.main' }}>{cookie.name}</Typography>
                  </Box>
                  <Box sx={{ p: { xs: 2, md: 2.5 }, borderRight: { sm: '1px solid rgba(123,63,30,0.1)' } }}>
                    <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary' }}>{cookie.purpose}</Typography>
                  </Box>
                  <Box sx={{ p: { xs: 2, md: 2.5 } }}>
                    <Typography sx={{ fontSize: '0.88rem', color: 'text.secondary' }}>{cookie.expiry}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Body>
              You can delete existing cookies at any time through your browser settings. You can
              also withdraw consent by clearing the key{' '}
              <Box component="code" sx={{ fontFamily: 'monospace', fontSize: '0.85em', bgcolor: 'rgba(123,63,30,0.07)', px: 0.8, py: 0.1, color: 'primary.main' }}>
                gdpr-analytics-consent
              </Box>
              {' '}from your browser's local storage.
            </Body>

            <StepDivider />

            {/* 7. Data Retention */}
            <SectionTitle>7. Data Retention</SectionTitle>
            <Body>
              Analytics data is retained in Google Analytics for 26 months, after which it is
              automatically deleted. Aggregated, anonymized reports may be retained indefinitely.
              We do not maintain any separate database of personal data.
            </Body>

            <StepDivider />

            {/* 8. Your Rights */}
            <SectionTitle>8. Your Rights Under GDPR</SectionTitle>
            <Body>
              As a data subject, you have the following rights regarding your personal data:
            </Body>
            <Box component="ul" sx={{ pl: 0, mb: 2, listStyle: 'none' }}>
              {[
                { right: 'Right of access', desc: 'You may request a copy of the data we hold about you.' },
                { right: 'Right to erasure', desc: 'You may request deletion of your personal data ("right to be forgotten").' },
                { right: 'Right to restriction', desc: 'You may request that we restrict processing of your data in certain circumstances.' },
                { right: 'Right to object', desc: 'You may object to processing based on legitimate interests.' },
                { right: 'Right to withdraw consent', desc: 'You may withdraw your analytics consent at any time, without affecting the lawfulness of prior processing.' },
                { right: 'Right to lodge a complaint', desc: 'You have the right to lodge a complaint with the Polish supervisory authority: the President of the Personal Data Protection Office (UODO), ul. Stawki 2, 00-193 Warsaw, Poland — uodo.gov.pl.' },
              ].map((item) => (
                <Box component="li" key={item.right} sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'flex-start' }}>
                  <Box sx={{ width: 4, height: 4, bgcolor: 'primary.main', transform: 'rotate(45deg)', mt: 0.9, flexShrink: 0, opacity: 0.6 }} />
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '0.95rem' }}>
                    <Box component="strong" sx={{ color: 'text.primary' }}>{item.right}:</Box> {item.desc}
                  </Typography>
                </Box>
              ))}
            </Box>

            <StepDivider />

            {/* 9. Changes */}
            <SectionTitle>9. Changes to This Policy</SectionTitle>
            <Body>
              We may update this privacy policy from time to time. The "Last updated" date at the
              top of this page will always reflect the most recent revision. Continued use of the
              site after changes are posted constitutes acceptance of the updated policy.
            </Body>

            <StepDivider />

            {/* Footer */}
            <Box sx={{ textAlign: 'center', pt: 2, pb: 8 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <Box sx={{ width: 28, height: '1px', bgcolor: 'rgba(123,63,30,0.25)' }} />
                <Box sx={{ width: 4, height: 4, bgcolor: 'primary.main', transform: 'rotate(45deg)', opacity: 0.5 }} />
                <Box sx={{ width: 28, height: '1px', bgcolor: 'rgba(123,63,30,0.25)' }} />
              </Box>

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
                Back to Converter
              </Box>
            </Box>

          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
