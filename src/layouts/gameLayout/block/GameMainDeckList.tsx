'use client';
import { Box } from '@mui/material';
import { GameMainDeckAvatar } from '../atom';
import { useLayout } from '@/hooks';

export const GameMainDeckList = () => {
	const { mainDeckScrollRef } = useLayout();

	return (
		<Box
			ref={mainDeckScrollRef}
			display="flex"
			justifyContent="start"
			alignItems="center"
			flexGrow={1}
			gap="10px"
			height="100%"
			width="1px"
			sx={{
				overflowX: 'auto',
				overflowY: 'hidden',
				'&::-webkit-scrollbar': {
					display: 'none',
				},
			}}
		>
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
			<GameMainDeckAvatar />
		</Box>
	);
};
