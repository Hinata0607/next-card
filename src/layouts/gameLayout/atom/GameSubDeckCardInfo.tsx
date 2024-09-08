'use client';
import { usePalette } from '@/hooks';
import { Box, Typography } from '@mui/material';

export const GameSubDeckCardnfo = () => {
	const palette = usePalette();

	return (
		<Box display="flex" alignItems="end">
			<Typography
				variant="body2"
				color={palette.text.primary}
				sx={{
					width: '100%',
					wordBreak: 'break-all',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					display: '-webkit-box',
					WebkitLineClamp: 5,
					WebkitBoxOrient: 'vertical',
				}}
			>
				omnis laborum? Quasi nisi dicta consequuntur? Eum numquam vel qui
				doloribus nisi maxime? Quas, nam reprehenderit!
			</Typography>
		</Box>
	);
};
