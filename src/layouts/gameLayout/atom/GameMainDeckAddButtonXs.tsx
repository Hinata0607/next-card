'use client';
import { useLayout } from '@/hooks';
import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const GameMainDeckAddButtonXs = () => {
	const { isExpandMainDeck } = useLayout();

	return (
		<IconButton
			sx={{
				aspectRatio: '1/1',
				height: isExpandMainDeck ? 'calc(20% - 10px)' : 'calc(50% - 10px)',
				borderRadius: '5px',
			}}
		>
			<Add />
		</IconButton>
	);
};
