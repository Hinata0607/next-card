'use client';
import { Box } from '@mui/material';
import { usePalette } from '@/hooks';
import { GameMainDeckListXs } from '../block/GameMainDeckListXs';

export const GameMainDeckXs = () => {
	const palette = usePalette();

	return (
		<>
			<Box
				zIndex={100}
				position="fixed"
				bottom={0}
				left={0}
				display="flex"
				justifyContent="start"
				alignItems="center"
				width="100%"
				height="200px"
				bgcolor={palette.layout.gameLayout.mainDeck.bg}
			>
				<GameMainDeckListXs />
			</Box>
			<Box width="100%" height="200px" bgcolor="#dad" />
		</>
	);
};
