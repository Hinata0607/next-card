'use client';
import { useBreakPoint, usePalette } from '@/hooks';
import { Box } from '@mui/material';
import { GameEnemyDeckIconArea, GameEnemyDeckListArea } from '../block';

export const GameEnemyDeck = () => {
	const breakpoint = useBreakPoint();
	const palette = usePalette();

	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			display="flex"
			justifyContent="center"
			alignItems="center"
			width={['xs', 'sm'].includes(breakpoint) ? '100%' : 'calc(100% - 300px)'}
			height="60px"
			bgcolor={palette.layout.gameLayout.enemyDeck.bg}
		>
			<GameEnemyDeckIconArea />
			<GameEnemyDeckListArea />
		</Box>
	);
};
