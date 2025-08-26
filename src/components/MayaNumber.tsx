import { Box, Typography } from '@mui/material';
import MayaDigit from './MayaDigit';

type Props = { digits: number[] };

export default function MayaNumber({ digits }: Props) {
    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: 0.5,
            p: 3,
            bgcolor: 'background.paper',
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            minHeight: 200,
            justifyContent: 'center'
        }}>
            <Typography variant="h6" color="primary.main" sx={{ mb: 2 }}>
                Maya Numeral Result
            </Typography>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: 0 
            }}>
                {digits.map((d, i) => (
                    <MayaDigit key={`${i}-${d}`} value={d} />
                ))}
            </Box>
        </Box>
    );
}
