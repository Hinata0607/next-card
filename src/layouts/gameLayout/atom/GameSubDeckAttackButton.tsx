'use client';
import { useBreakPoint, usePalette } from '@/hooks';
import { Button, Typography } from '@mui/material';

export const GameSubDeckAttackButton = () => {
	const palette = usePalette();
	const breakpoint = useBreakPoint();

	return (
		<Button
			variant="contained"
			color="primary"
			sx={{
				height: ['xs'].includes(breakpoint) ? '50%' : '100%',
				width: '100%',
			}}
		>
			<Typography variant="body1" color={palette.text.primary}>
				Attack
			</Typography>
		</Button>
	);
};
