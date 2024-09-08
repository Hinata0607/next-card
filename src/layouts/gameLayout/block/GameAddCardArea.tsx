import { Box } from '@mui/material';
import { GameMainDeckAddButton } from '../atom';

export const GameAddCardArea = () => {
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
			<GameMainDeckAddButton />
		</Box>
	);
};
