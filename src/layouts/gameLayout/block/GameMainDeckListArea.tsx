import { Box } from '@mui/material';
import { GameMainDeckListArrowLeft, GameMainDeckListArrowRight } from '../atom';
import { GameMainDeckList } from './GameMainDeckList';

export const GameMainDeckListArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexGrow={1}
			height="100%"
		>
			<GameMainDeckListArrowLeft />
			<GameMainDeckList />
			<GameMainDeckListArrowRight />
		</Box>
	);
};
