import { Box } from '@mui/material';
import { GameEnemyDeckIcon } from '../atom';

export const GameEnemyDeckIconArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100%"
			sx={{
				aspectRatio: '1/1',
			}}
		>
			<GameEnemyDeckIcon />
		</Box>
	);
};
