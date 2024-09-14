import { Avatar, Box } from '@mui/material';

export const GameEnemyDeckAvatar = () => {
	return (
		<Box
			height="80%"
			sx={{
				aspectRatio: '1/1',
			}}
		>
			<Avatar
				variant="square"
				sx={{
					width: '100%',
					height: '100%',
					borderRadius: '5px',
					cursor: 'pointer',
				}}
			/>
		</Box>
	);
};
