'use client';
import { useLayout } from '@/hooks';
import { ArrowLeft } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const GameEnemyMainDeckListArrowLeft = () => {
	const { handleEnemyDeckScroll } = useLayout();
	return (
		<IconButton
			onClick={() => handleEnemyDeckScroll({ scrollNum: -300 })}
			sx={{
				aspectRatio: '1/1.5',
				height: '100%',
				borderRadius: '0px',
			}}
		>
			<ArrowLeft />
		</IconButton>
	);
};
