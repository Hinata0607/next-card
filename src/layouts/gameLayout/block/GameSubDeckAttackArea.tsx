import { Box } from '@mui/material';
import { GameSubDeckAttackButton } from '../atom';

export const GameSubDeckAttackArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100%"
			maxWidth="50%"
			padding="10px"
			sx={{
				aspectRatio: '2.5/1',
			}}
		>
			<GameSubDeckAttackButton />
		</Box>
	);
};
