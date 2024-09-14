'use client';
import { useBreakPoint } from '@/hooks';
import { Box } from '@mui/material';
import { GameSubDeckXsStatusArea, GameSubDeckXsTurnArea } from '../block';

export const GameSubDeckXs = () => {
	const breakpoint = useBreakPoint();

	return (
		<Box
			zIndex={50}
			position="fixed"
			bottom={'150px'}
			display="flex"
			justifyContent="center"
			alignItems="center"
			width={['xs', 'sm'].includes(breakpoint) ? '100%' : 'calc(100% - 300px)'}
			height="60px"
			padding="0 10px"
		>
			<GameSubDeckXsTurnArea />
			<GameSubDeckXsStatusArea />
		</Box>
	);
};
