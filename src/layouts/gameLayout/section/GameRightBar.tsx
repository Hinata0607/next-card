'use client';
import { usePalette } from '@/hooks';
import { Box } from '@mui/material';
import { GameRightBarFieldInfoArea, GameRightBarStatusArea } from '../block';

export const GameRightBar = () => {
	const palette = usePalette();

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
			bgcolor={palette.layout.gameLayout.rightBar.bg}
		>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="100%"
				padding="15px 0"
				overflow="hidden"
				maxHeight="1500px"
			>
				<GameRightBarStatusArea />
				<GameRightBarFieldInfoArea />
				<GameRightBarStatusArea />
			</Box>
		</Box>
	);
};
