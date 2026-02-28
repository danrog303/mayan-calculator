import { Box, Typography } from '@mui/material';

type Props = { value: number };

// Maya Unicode characters: U+1D2E0 to U+1D2F3
const MAYA_CHARS = [
    '\u{1D2E0}', // 0
    '\u{1D2E1}', // 1
    '\u{1D2E2}', // 2
    '\u{1D2E3}', // 3
    '\u{1D2E4}', // 4
    '\u{1D2E5}', // 5
    '\u{1D2E6}', // 6
    '\u{1D2E7}', // 7
    '\u{1D2E8}', // 8
    '\u{1D2E9}', // 9
    '\u{1D2EA}', // 10
    '\u{1D2EB}', // 11
    '\u{1D2EC}', // 12
    '\u{1D2ED}', // 13
    '\u{1D2EE}', // 14
    '\u{1D2EF}', // 15
    '\u{1D2F0}', // 16
    '\u{1D2F1}', // 17
    '\u{1D2F2}', // 18
    '\u{1D2F3}', // 19
];

export default function MayaDigit({ value }: Props) {
    if (value > 19 || value < 0) {
        throw new Error('Maya digit must be between 0 and 19.');
    }

    return (
        <Box sx={{
            textAlign: 'center',
            px: 2,
            py: 0.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Typography sx={{
                fontSize: { xs: '3.8rem', md: '4.8rem' },
                fontFamily: '"Noto Sans Symbols 2", sans-serif',
                color: 'primary.main',
                lineHeight: 1,
                display: 'block',
                // Subtle warm shadow — like ink on parchment
                textShadow: '0 2px 8px rgba(123,63,30,0.15)',
            }}>
                {MAYA_CHARS[value]}
            </Typography>
        </Box>
    );
}
