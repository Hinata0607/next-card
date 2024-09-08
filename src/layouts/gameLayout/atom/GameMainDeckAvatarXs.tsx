import { Avatar, Box } from '@mui/material';

export const GameMainDeckAvatarXs = () => {
	return (
		<Box
			height="calc(33.3333% - 10px)"
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
