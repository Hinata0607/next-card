'use client';
import { usePalette } from '@/hooks';
import { Box, Typography } from '@mui/material';

export const GameSubDeckTurn = () => {
	const palette = usePalette();

	return (
		<Box
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			width="90%"
		>
			<Typography variant="body2" color={palette.text.primary}>
				残り行動回数:
			</Typography>
			<Typography variant="body1" color={palette.text.primary}>
				X
			</Typography>
		</Box>
	);
};
