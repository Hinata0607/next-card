'use client';
import { Box } from '@mui/material';
import { GameAddCardArea, GameMainDeckListArea, GameTurnArea } from '../block';
import { useBreakPoint, usePalette } from '@/hooks';

export const GameMainDeck = () => {
	const palette = usePalette();
	const breakpoint = useBreakPoint();

	return (
		<>
			<Box
				position="fixed"
				bottom={0}
				left={0}
				display="flex"
				justifyContent="center"
				alignItems="center"
				width={
					['xs', 'sm'].includes(breakpoint) ? '100%' : 'calc(100% - 300px)'
				}
				height="60px"
				bgcolor={palette.layout.gameLayout.mainDeck.bg}
			>
				<GameTurnArea />
				<GameMainDeckListArea />
				<GameAddCardArea />
			</Box>

			<Box width="100%" height="60px" />
		</>
	);
};
