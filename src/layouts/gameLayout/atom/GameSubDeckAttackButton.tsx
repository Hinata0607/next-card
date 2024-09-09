'use client';
import { usePalette } from '@/hooks';
import { Button, Typography } from '@mui/material';

export const GameSubDeckAttackButton = () => {
	const palette = usePalette();

	return (
		<Button fullWidth variant="contained" color="primary">
			<Typography variant="body1" color={palette.text.primary}>
				Attack
			</Typography>
		</Button>
	);
};
