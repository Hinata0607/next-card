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
