import { Box } from '@mui/material';
import { GameSubDeckAttackButton } from '../atom';

export const GameSubDeckAttackAreaXs = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100%"
			width="100%"
			padding="10px"
		>
			<GameSubDeckAttackButton />
		</Box>
	);
};
