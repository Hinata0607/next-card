'use client';
import { Box } from '@mui/material';
import {
	GameAddCardArea,
	GameGitSkillArea,
	GameMainDeckListArea,
} from '../block';
import { useBreakPoint, usePalette } from '@/hooks';

export const GameMainDeck = () => {
	const palette = usePalette();
	const breakpoint = useBreakPoint();

	return (
		<>
			<Box
				position="fixed"
				bottom={0}
				left={0}
				display="flex"
				justifyContent="center"
				alignItems="center"
				width={
					['xs', 'sm'].includes(breakpoint) ? '100%' : 'calc(100% - 300px)'
				}
				height="60px"
				bgcolor={palette.layout.gameLayout.mainDeck.bg}
			>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="100%"
					width="100%"
					maxWidth="1500px"
					margin="0 auto"
				>
					<GameGitSkillArea />
					<GameMainDeckListArea />
					<GameAddCardArea />
				</Box>
			</Box>

			<Box width="100%" height="60px" />
		</>
	);
};
