import { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Link,
  Slide,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Close, Cookie, Settings } from '@mui/icons-material';

interface CookieConsentProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

const CookieConsent = ({ onAccept, onDecline }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('gdpr-analytics-consent');
    const hasChoiceMade = consent === 'true' || consent === 'false';
    
    if (!hasChoiceMade) {
      // Show banner after a short delay
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
    // If user closes without choosing, default to decline
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
          p: 2
        }}
      >
        <Card
          sx={{
            maxWidth: 800,
            mx: 'auto',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <CardContent sx={{ p: 3, position: 'relative' }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: 'text.secondary',
              }}
              size="small"
            >
              <Close />
            </IconButton>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
              <Cookie sx={{ color: 'primary.main', mt: 0.5 }} />
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Cookie Information
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  This website uses Google Analytics to analyze traffic. Cookies help us 
                  understand how users interact with our site and improve its functionality.
                </Typography>

                {showDetails && (
                  <Box sx={{ mb: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                    <Typography variant="body2" gutterBottom>
                      <strong>What data we collect:</strong>
                    </Typography>
                    <Typography variant="body2" component="ul" sx={{ pl: 2, mb: 1 }}>
                      <li>Anonymous data about page visits</li>
                      <li>Device and browser information</li>
                      <li>Time spent on the website</li>
                      <li>Traffic sources (anonymized)</li>
                    </Typography>
                    <Typography variant="body2">
                      <strong>Your rights:</strong> You can change your cookie preferences 
                      at any time. Data is anonymized and compliant with GDPR.
                    </Typography>
                  </Box>
                )}

                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: 1,
                  alignItems: isMobile ? 'stretch' : 'center',
                  flexWrap: 'wrap'
                }}>
                  <Button
                    variant="contained"
                    onClick={handleAccept}
                    sx={{ minWidth: 120 }}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleDecline}
                    sx={{ minWidth: 120 }}
                  >
                    Decline
                  </Button>
                  <Button
                    variant="text"
                    startIcon={<Settings />}
                    onClick={() => setShowDetails(!showDetails)}
                    size="small"
                    sx={{ ml: isMobile ? 0 : 1 }}
                  >
                    {showDetails ? 'Hide details' : 'More information'}
                  </Button>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Slide>
  );
};

export default CookieConsent;
