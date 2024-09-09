import { Box } from '@mui/material';
import { GameSubDeckCardTrack } from './GameSubDeckCardTrack';
import { GameMainDeckAvatar } from '../atom';

export const GameSubDeckMagicArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="80%"
			height="100%"
		>
			<GameSubDeckCardTrack bg="#a0a">
				<GameMainDeckAvatar />
				<GameMainDeckAvatar />
				<GameMainDeckAvatar />
				<GameMainDeckAvatar />
				<GameMainDeckAvatar />
				<GameMainDeckAvatar />
			</GameSubDeckCardTrack>
		</Box>
	);
};
