'use client';
import { Box } from '@mui/material';
import { useLayout, usePalette } from '@/hooks';
import { GameMainDeckListXs } from '../block/GameMainDeckListXs';
import { GameMainDeckListXsKnob } from '../atom';

export const GameMainDeckXs = () => {
	const palette = usePalette();
	const { isExpandMainDeck } = useLayout();

	return (
		<>
			<Box
				zIndex={100}
				position="fixed"
				bottom={0}
				left={0}
				display="flex"
				justifyContent="start"
				alignItems="center"
				width="100%"
				height={isExpandMainDeck ? '400px' : '150px'}
				padding={isExpandMainDeck ? '20px 0 0 0' : '0px'}
				bgcolor={palette.layout.gameLayout.mainDeck.bg}
				sx={{
					transition: 'height 0.3s ease',
					borderRadius: isExpandMainDeck ? '10px 10px 0 0' : '0',
				}}
			>
				<GameMainDeckListXs />

				<GameMainDeckListXsKnob />
			</Box>
			<Box width="100%" height="150px" />
		</>
	);
};
