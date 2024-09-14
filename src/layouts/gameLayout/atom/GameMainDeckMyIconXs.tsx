'use client';
import { useLayout } from '@/hooks';
import { Avatar, Box } from '@mui/material';

export const GameMainDeckMyIconXs = () => {
	const { isExpandMainDeck } = useLayout();

	return (
		<Box
			height={isExpandMainDeck ? 'calc(20% - 10px)' : 'calc(50% - 10px)'}
			sx={{
				aspectRatio: '1/1',
			}}
		>
			<Avatar
				sx={{
					width: '100%',
					height: '100%',
					cursor: 'pointer',
				}}
			/>
		</Box>
	);
};
