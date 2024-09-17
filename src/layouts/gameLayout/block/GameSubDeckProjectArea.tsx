'use client';
import { Box } from '@mui/material';
import { GameSubDeckCardTrack } from './GameSubDeckCardTrack';
import { GameMainDeckAvatar } from '../atom';
import { usePalette } from '@/hooks';

export const GameSubDeckProjectArea = () => {
	const palette = usePalette();

	return (
		<Box
			display="flex"
			justifyContent="start"
			alignItems="center"
			width="20%"
			height="100%"
			maxWidth="100%"
		>
			<GameSubDeckCardTrack
				bg={palette.layout.gameLayout.subDeck.track.project}
				text="Project"
			>
				<GameMainDeckAvatar />
			</GameSubDeckCardTrack>
		</Box>
	);
};
