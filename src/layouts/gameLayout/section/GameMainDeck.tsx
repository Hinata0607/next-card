'use client';
import { Box } from '@mui/material';
import { GameAddCardArea, GameMainDeckListArea, GameTurnArea } from '../block';
import { usePalette } from '@/hooks';

export const GameMainDeck = () => {
	const palette = usePalette();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="80px"
			bgcolor={palette.layout.gameLayout.mainDeck.bg}
		>
			<GameTurnArea />
			<GameMainDeckListArea />
			<GameAddCardArea />
		</Box>
	);
};
