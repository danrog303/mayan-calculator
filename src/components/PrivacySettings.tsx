import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  Alert,
  Chip,
} from '@mui/material';
import { Security, Analytics, Cookie } from '@mui/icons-material';

const PrivacySettings = () => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(
    localStorage.getItem('gdpr-analytics-consent') === 'true'
  );
  const [showSaved, setShowSaved] = useState(false);

  const handleAnalyticsToggle = (enabled: boolean) => {
    setAnalyticsEnabled(enabled);
    
    if (enabled) {
      if (window.grantAnalyticsConsent) {
        window.grantAnalyticsConsent();
      }
    } else {
      if (window.revokeAnalyticsConsent) {
        window.revokeAnalyticsConsent();
      }
    }
    
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 3000);
  };

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Security sx={{ mr: 2, color: 'primary.main' }} />
          <Typography variant="h5" component="h2">
            Ustawienia prywatności
          </Typography>
        </Box>

        {showSaved && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Ustawienia zostały zapisane
          </Alert>
        )}

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Niezbędne pliki cookie
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Te pliki cookie są niezbędne do prawidłowego działania strony i nie można ich wyłączyć.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Chip
              icon={<Cookie />}
              label="Zawsze aktywne"
              color="primary"
              variant="outlined"
              size="small"
            />
            <Typography variant="body2" color="text.secondary">
              Preferencje użytkownika, sesja
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Analytics sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">
                Google Analytics
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={analyticsEnabled}
                  onChange={(e) => handleAnalyticsToggle(e.target.checked)}
                  color="primary"
                />
              }
              label=""
            />
          </Box>
          <Typography variant="body2" color="text.secondary" paragraph>
            Analiza ruchu na stronie, statystyki odwiedzin, optymalizacja wydajności.
            Wszystkie dane są anonimizowane i zgodne z RODO.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Chip label="Anonimizacja IP" size="small" variant="outlined" />
            <Chip label="Zgodność z RODO" size="small" variant="outlined" />
            <Chip label="Brak danych osobowych" size="small" variant="outlined" />
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box>
          <Typography variant="h6" gutterBottom>
            Twoje prawa
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Zgodnie z RODO masz prawo do:
          </Typography>
          <Typography variant="body2" component="ul" sx={{ color: 'text.secondary', pl: 2 }}>
            <li>Dostępu do swoich danych</li>
            <li>Sprostowania nieprawidłowych danych</li>
            <li>Usunięcia danych (prawo do bycia zapomnianym)</li>
            <li>Ograniczenia przetwarzania</li>
            <li>Przenośności danych</li>
            <li>Sprzeciwu wobec przetwarzania</li>
          </Typography>
        </Box>

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="outlined"
            onClick={() => {
              // Clear all analytics data
              if (window.revokeAnalyticsConsent) {
                window.revokeAnalyticsConsent();
              }
              setAnalyticsEnabled(false);
              setShowSaved(true);
            }}
            sx={{ mr: 2 }}
          >
            Wyczyść wszystkie dane
          </Button>
          <Button
            variant="text"
            href="mailto:contact@danielrogowski.net?subject=RODO - Prawa użytkownika"
          >
            Skontaktuj się w sprawie RODO
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PrivacySettings;
