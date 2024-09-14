'use client';
import { useLayout, usePalette } from '@/hooks';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box } from '@mui/material';

export const GameMainDeckListXsKnob = () => {
	const palette = usePalette();
	const { isExpandMainDeck, setIsExpandMainDeck } = useLayout();

	return (
		<Box
			onClick={() => setIsExpandMainDeck((prev) => !prev)}
			position="absolute"
			top={0}
			right={0}
			bgcolor={palette.layout.gameLayout.mainDeck.bg}
			padding="10px"
			sx={{
				borderRadius: '10px',
			}}
		>
			{isExpandMainDeck ? <ExpandMore /> : <ExpandLess />}
		</Box>
	);
};
