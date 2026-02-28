import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Slide,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Close, Cookie, Settings } from '@mui/icons-material';

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

declare global {
  interface Window {
    grantAnalyticsConsent?: () => void;
  }
}

const CookieConsent = ({ onAccept, onDecline }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const consent = localStorage.getItem('gdpr-analytics-consent');
    const hasChoiceMade = consent === 'true' || consent === 'false';
    if (!hasChoiceMade) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    if (window.grantAnalyticsConsent) {
      window.grantAnalyticsConsent();
    }
    setIsVisible(false);
    onAccept?.();
  };

  const handleDecline = () => {
    localStorage.setItem('gdpr-analytics-consent', 'false');
    setIsVisible(false);
    onDecline?.();
  };

  const handleClose = () => {
    handleDecline();
  };

  if (!isVisible) return null;

  return (
    <Slide direction="up" in={isVisible} timeout={500}>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          p: { xs: 1.5, md: 2.5 },
        }}
      >
        <Box
          sx={{
            maxWidth: 820,
            mx: 'auto',
            bgcolor: '#FFFFFF',
            border: '1px solid rgba(123,63,30,0.2)',
            boxShadow: '0 -4px 40px rgba(123,63,30,0.12), 0 -1px 0 rgba(123,63,30,0.08)',
            p: { xs: 2.5, md: 3.5 },
            position: 'relative',
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={handleClose}
            size="small"
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
          >
            <Close fontSize="small" />
          </IconButton>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Cookie sx={{ color: 'primary.main', mt: 0.3, opacity: 0.6, flexShrink: 0 }} />

            <Box sx={{ flex: 1, pr: 3 }}>
              {/* Eyebrow */}
              <Typography sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '0.875rem',
                letterSpacing: '0.15em',
                fontWeight: 600,
                color: 'primary.main',
                mb: 0.8,
                textTransform: 'uppercase',
                opacity: 0.8,
              }}>
                Privacy
              </Typography>

              <Typography sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '0.95rem',
                color: 'text.primary',
                mb: 1,
                letterSpacing: '0.04em',
              }}>
                Cookie Information
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8, fontSize: '0.85rem' }}>
                This website uses Google Analytics to understand how visitors interact with our site.
                Your data is anonymized and compliant with GDPR.
              </Typography>

              {/* Expandable details */}
              {showDetails && (
                <Box sx={{
                  mb: 2.5,
                  p: 2.5,
                  border: '1px solid rgba(123,63,30,0.12)',
                  bgcolor: 'rgba(123,63,30,0.025)',
                }}>
                  <Typography variant="body2" sx={{ color: 'primary.main', mb: 1.5, fontFamily: '"Playfair Display", serif', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em' }}>
                    WHAT WE COLLECT
                  </Typography>
                  <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                    {[
                      'Anonymous page visit data',
                      'Device and browser type',
                      'Time spent on the site',
                      'Anonymized traffic sources',
                    ].map((item) => (
                      <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.8 }}>
                        <Box sx={{ width: 3, height: 3, bgcolor: 'rgba(123,63,30,0.4)', transform: 'rotate(45deg)', flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.82rem', lineHeight: 1.6 }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.82rem', lineHeight: 1.7, mt: 1.5 }}>
                    You may withdraw consent at any time. All data is processed in accordance with GDPR.
                  </Typography>
                </Box>
              )}

              {/* Action buttons */}
              <Box sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: 1.5,
                alignItems: isMobile ? 'stretch' : 'center',
              }}>
                <Button
                  variant="contained"
                  onClick={handleAccept}
                  sx={{ minWidth: 110, py: 1.1, fontSize: '0.875rem' }}
                >
                  Accept
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleDecline}
                  sx={{ minWidth: 110, py: 1.1, fontSize: '0.875rem' }}
                >
                  Decline
                </Button>
                <Button
                  variant="text"
                  startIcon={<Settings fontSize="small" />}
                  onClick={() => setShowDetails(!showDetails)}
                  size="small"
                  sx={{ fontSize: '0.875rem', ml: isMobile ? 0 : 0.5 }}
                >
                  {showDetails ? 'Hide details' : 'More information'}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Slide>
  );
};

export default CookieConsent;
