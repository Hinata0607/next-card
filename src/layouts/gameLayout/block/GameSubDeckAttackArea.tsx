import { Box } from '@mui/material';
import { GameSubDeckAttackButton } from '../atom';

export const GameSubDeckAttackArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="end"
			width="20%"
			height="100%"
			maxWidth="50%"
			padding="10px"
		>
			<GameSubDeckAttackButton />
		</Box>
	);
};
