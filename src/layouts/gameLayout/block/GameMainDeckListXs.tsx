'use client';
import { Box } from '@mui/material';
import { GameMainDeckAddButtonXs, GameMainDeckAvatarXs } from '../atom';
import { useLayout } from '@/hooks';

export const GameMainDeckListXs = () => {
	const { mainDeckScrollRef } = useLayout();

	return (
		<Box
			ref={mainDeckScrollRef}
			display="flex"
			flexDirection="column"
			justifyContent="start"
			alignItems="start"
			flexWrap="wrap"
			gap="10px"
			height="100%"
			padding="10px"
			sx={{
				overflowX: 'auto',
				overflowY: 'hidden',
				'&::-webkit-scrollbar': {
					display: 'none',
				},
			}}
		>
			<GameMainDeckAddButtonXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
			<GameMainDeckAvatarXs />
		</Box>
	);
};
