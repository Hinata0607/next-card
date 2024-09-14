'use client';
import { Box } from '@mui/material';
import { GameSubDeckAttackArea, GameSubDeckInfoArea } from '../block';
import { GameSubDeckListArea } from '../block/GameSubDeckListArea';
import { useBreakPoint } from '@/hooks';

export const GameSubDeck = () => {
	const breakpoint = useBreakPoint();

	return (
		<Box
			zIndex={50}
			position="fixed"
			bottom={'60px'}
			display="flex"
			justifyContent="center"
			alignItems="center"
			width={['xs', 'sm'].includes(breakpoint) ? '100%' : 'calc(100% - 300px)'}
			height="100px"
		>
			<>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					width="100%"
					maxWidth="1500px"
					margin="0 auto"
					height="100%"
				>
					<GameSubDeckInfoArea />
					<GameSubDeckListArea />
					<GameSubDeckAttackArea />
				</Box>
			</>
		</Box>
	);
};
