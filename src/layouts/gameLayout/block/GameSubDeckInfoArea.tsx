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
			height="100%"
			maxWidth="50%"
			padding="10px"
			sx={{
				aspectRatio: '2.5/1',
			}}
		>
			<GameSubDeckCardnfo />
			<GameSubDeckTurn />
		</Box>
	);
};
