'use client';
import { useLayout } from '@/hooks';
import { Box } from '@mui/material';
import { GameEnemyDeckAvatar } from '../atom';

export const GameEnemyDeckList = () => {
	const { enemyDeckScrollRef } = useLayout();

	return (
		<Box
			ref={enemyDeckScrollRef}
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
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
			<GameEnemyDeckAvatar />
		</Box>
	);
};
