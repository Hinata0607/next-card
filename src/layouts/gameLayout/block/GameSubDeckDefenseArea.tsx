'use client';
import { Box } from '@mui/material';
import { GameSubDeckCardTrack } from './GameSubDeckCardTrack';
import { GameMainDeckAvatar } from '../atom';
import { usePalette } from '@/hooks';

export const GameSubDeckDefenseArea = () => {
	const palette = usePalette();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
		>
			<GameSubDeckCardTrack
				bg={palette.layout.gameLayout.subDeck.track.defense}
				text="Defense"
			>
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
