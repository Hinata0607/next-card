import { Box } from '@mui/material';
import { GameSubDeckCardnfo, GameSubDeckTurn } from '../atom';

export const GameSubDeckInfoArea = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="end"
			alignItems="start"
			gap="15px"
			width="20%"
			height="100%"
			padding="10px"
		>
			<GameSubDeckCardnfo />
			<GameSubDeckTurn />
		</Box>
	);
};
