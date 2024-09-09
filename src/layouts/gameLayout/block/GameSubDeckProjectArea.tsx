import { Box } from '@mui/material';
import { GameSubDeckCardTrack } from './GameSubDeckCardTrack';
import { GameMainDeckAvatar } from '../atom';

export const GameSubDeckProjectArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="start"
			alignItems="center"
			width="20%"
			height="100%"
			maxWidth="100%"
		>
			<GameSubDeckCardTrack bg="#aa0">
				<GameMainDeckAvatar />
			</GameSubDeckCardTrack>
		</Box>
	);
};
