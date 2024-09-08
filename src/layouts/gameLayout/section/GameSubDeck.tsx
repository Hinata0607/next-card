'use client';
import { Box } from '@mui/material';
import { GameSubDeckAttackArea, GameSubDeckInfoArea } from '../block';
import { GameSubDeckListArea } from '../block/GameSubDeckListArea';

export const GameSubDeck = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="60px"
		>
			<>
				<GameSubDeckInfoArea />
				<GameSubDeckListArea />
				<GameSubDeckAttackArea />
			</>
		</Box>
	);
};
