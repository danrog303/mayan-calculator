import { Box, Typography } from '@mui/material';
import MayaDigit from './MayaDigit';

type Props = { digits: number[]; compact?: boolean };

export default function MayaNumber({ digits, compact = false }: Props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            py: 2,
        }}>
            {/* Digit column */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0.5,
                position: 'relative',
                zIndex: 1,
            }}>
                {/* Top position marker */}
                {!compact && digits.length > 1 && (
                    <Typography sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        color: 'rgba(123,63,30,0.5)',
                        mb: 0.5,
                        textTransform: 'uppercase',
                    }}>
                        ↑ highest order
                    </Typography>
                )}

                {digits.map((d, i) => (
                    <MayaDigit key={`${i}-${d}`} value={d} />
                ))}

                {/* Bottom position marker */}
                {!compact && digits.length > 1 && (
                    <Typography sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        color: 'rgba(123,63,30,0.5)',
                        mt: 0.5,
                        textTransform: 'uppercase',
                    }}>
                        ↓ units
                    </Typography>
                )}
            </Box>

            {/* Digit count badge */}
            {!compact && digits.length > 0 && (
                <Box sx={{
                    mt: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                }}>
                    <Box sx={{ width: 20, height: '1px', bgcolor: 'rgba(123,63,30,0.2)' }} />
                    <Typography sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        color: 'rgba(123,63,30,0.6)',
                        textTransform: 'uppercase',
                    }}>
                        {digits.length === 1 ? '1 digit · Base 20' : `${digits.length} digits · Base 20`}
                    </Typography>
                    <Box sx={{ width: 20, height: '1px', bgcolor: 'rgba(123,63,30,0.2)' }} />
                </Box>
            )}
        </Box>
    );
}
