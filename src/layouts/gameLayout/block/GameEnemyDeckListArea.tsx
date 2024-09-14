import { Box } from '@mui/material';
import {
	GameEnemyMainDeckListArrowLeft,
	GameEnemyMainDeckListArrowRight,
} from '../atom';
import { GameEnemyDeckList } from './GameEnemyDeckList';

export const GameEnemyDeckListArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexGrow={1}
			height="100%"
		>
			<GameEnemyMainDeckListArrowLeft />
			<GameEnemyDeckList />
			<GameEnemyMainDeckListArrowRight />
		</Box>
	);
};
