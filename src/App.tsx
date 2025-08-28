import { useMemo, useState, useRef } from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
  Fade,
  Slide,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Calculate, History, Info, School } from '@mui/icons-material';
import MayaNumber from './components/MayaNumber';
import CookieConsent from './components/CookieConsent';
import { convertToBase20 } from './lib/maya';

function App() {
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
      
      // Auto-scroll to result on mobile devices
      if (isMobile && resultRef.current) {
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }, 100);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setHasCalculated(false);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Fade in timeout={800}>
          <Card sx={{ mb: 4, textAlign: 'center', position: 'relative', overflow: 'visible' }}>
            <CardContent sx={{ py: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 600 }}>
                  Maya Numeral Converter
                </Typography>
              </Box>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                Free online Maya numeral converter. Convert decimal numbers to the ancient Maya number system instantly.
              </Typography>
            </CardContent>
          </Card>
        </Fade>

        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 4, mb: 4 }}>
          {/* Input Section */}
          <Box sx={{ flex: 1 }}>
            <Slide direction="up" in timeout={1000}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Calculate sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="h5" component="h2">
                      Enter Decimal Number
                    </Typography>
                  </Box>
                  
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
                      sx={{ 
                        py: 1.5,
                        fontSize: '1.1rem',
                        bgcolor: 'primary.main',
                        '&:hover': {
                          bgcolor: 'primary.dark',
                        },
                        '&:disabled': {
                          bgcolor: 'action.disabledBackground',
                          color: 'action.disabled',
                        }
                      }}
                    >
                      Convert to Maya
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Slide>
          </Box>

          {/* Result Section */}
          <Box sx={{ flex: 1 }} ref={resultRef}>
            <Slide direction="up" in timeout={1200}>
              <Card>
                <CardContent sx={{ p: 4, minHeight: 200 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <History sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="h5" component="h2">
                      Maya Result
                    </Typography>
                  </Box>
                  
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 3, 
                      bgcolor: 'grey.50', 
                      borderRadius: 2,
                      minHeight: 120,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {inputValue && hasCalculated ? (
                      <Fade in timeout={500}>
                        <Box>
                          <MayaNumber digits={mayaDigits} />
                        </Box>
                      </Fade>
                    ) : (
                      <Typography variant="body1" color="text.secondary">
                        Enter a number and click convert to see the result
                      </Typography>
                    )}
                  </Paper>
                </CardContent>
              </Card>
            </Slide>
          </Box>
        </Box>

        {/* Advertisement Placeholder - Middle */}
        <Slide direction="up" in timeout={1300}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Box sx={{
              width: '100%',
              height: 250,
              bgcolor: 'grey.200',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px dashed',
              borderColor: 'grey.400'
            }}>
              <Typography variant="body2" color="text.secondary">
                Large Advertisement Banner
              </Typography>
            </Box>
          </Box>
        </Slide>

        {/* Information Section */}
        <Slide direction="up" in timeout={1400}>
          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 3, alignItems: 'flex-start' }}>
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Info sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant="h5" component="h2">
                      About the Maya Number System
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" paragraph>
                    The Maya number system is a base-20 (vigesimal) system where digits are written 
                    vertically, with the highest weight at the top and lowest weight at the bottom.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Each digit uses authentic Maya Unicode characters (U+1D2E0 to U+1D2F3) 
                    to represent numbers from 0 to 19.
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, textAlign: 'center' }}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: 2,
                    p: 3,
                    bgcolor: 'grey.50',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider'
                  }}>
                    <Typography variant="h6" color="primary.main">
                      Maya Unicode Characters
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((num) => (
                        <Box key={num} sx={{ textAlign: 'center', p: 1, minWidth: 40 }}>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontSize: '1.5rem',
                              color: 'primary.main',
                              fontWeight: 'bold',
                              fontFamily: 'serif'
                            }}
                          >
                            {String.fromCodePoint(0x1D2E0 + num)}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {num}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Slide>

        {/* Advertisement Placeholder - Sidebar Style */}
        <Slide direction="up" in timeout={1500}>
          <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{
                width: '100%',
                height: 300,
                bgcolor: 'grey.200',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed',
                borderColor: 'grey.400'
              }}>
                <Typography variant="body2" color="text.secondary">
                  Sidebar Advertisement
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{
                width: '100%',
                height: 300,
                bgcolor: 'grey.200',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed',
                borderColor: 'grey.400'
              }}>
                <Typography variant="body2" color="text.secondary">
                  Sidebar Advertisement
                </Typography>
              </Box>
            </Box>
          </Box>
        </Slide>

        {/* Sources Section */}
        <Slide direction="up" in timeout={1600}>
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <School sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="h5" component="h2">
                  Sources & Credits
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" color="primary.main" gutterBottom>
                    Article Reference
                  </Typography>
                  <Typography variant="body2" component="a" 
                    href="https://en.wikipedia.org/wiki/Maya_numerals" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    Wikipedia - Maya numerals
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" color="primary.main" gutterBottom>
                    Icon Source
                  </Typography>
                  <Typography variant="body2" component="a" 
                    href="https://www.maxpixel.net/Aztec-Symbol-Skull-Symbol-Maya-Toltec-Aztec-37936" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    maxpixel.net (CC0 Public Domain)
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" color="primary.main" gutterBottom>
                    Numeral Graphics
                  </Typography>
                  <Typography variant="body2" component="a" 
                    href="https://pl.wikipedia.org/wiki/Cyfry_Maj%C3%B3w#/media/Plik:Maya.svg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    Wikipedia - Bryan Derksen (CC BY-SA 3.0)
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Slide>

        {/* Footer */}
        <Fade in timeout={1800}>
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary" paragraph>
              Author: <a href="https://danielrogowski.net/" target="_blank" style={{ 
                textDecoration: 'none', 
                fontWeight: 'bold', 
                color: 'inherit' 
              }}>Daniel Rogowski</a> from <a href="https://pbs.edu.pl" target="_blank" style={{ 
                textDecoration: 'none', 
                fontWeight: 'bold', 
                color: 'inherit' 
              }}>Bydgoszcz University of Science and Technology</a>, Poland.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', px: 2 }}>
              This Maya numeral converter is a free educational tool for converting decimal numbers to the ancient Maya number system. 
              Perfect for students, researchers, and anyone interested in Maya mathematics and history.
            </Typography>
          </Box>
        </Fade>
      </Container>
      
      {/* GDPR Cookie Consent Banner */}
      <CookieConsent />
    </Box>
  );
}

export default App;
