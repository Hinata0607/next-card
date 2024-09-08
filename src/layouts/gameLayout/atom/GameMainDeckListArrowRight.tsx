'use client';
import { useLayout } from '@/hooks';
import { ArrowRight } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const GameMainDeckListArrowRight = () => {
	const { handleMainDeckScroll } = useLayout();
	return (
		<IconButton
			onClick={() => handleMainDeckScroll({ scrollNum: 300 })}
			sx={{
				aspectRatio: '1/1.5',
				height: '100%',
				borderRadius: '0px',
			}}
		>
			<ArrowRight />
		</IconButton>
	);
};
