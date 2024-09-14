import { Box } from '@mui/material';
import { GameSubDeckCardTrack } from './GameSubDeckCardTrack';
import { GameMainDeckAvatar } from '../atom';

export const GameSubDeckDefenseArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
		>
			<GameSubDeckCardTrack bg="#00a" text="Defense">
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
