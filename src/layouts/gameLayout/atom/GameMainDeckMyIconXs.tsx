import { Avatar, Box } from '@mui/material';

export const GameMainDeckMyIconXs = () => {
	return (
		<Box
			height="calc(33.3333% - 10px)"
			sx={{
				aspectRatio: '1/1',
			}}
		>
			<Avatar
				sx={{
					width: '100%',
					height: '100%',
					cursor: 'pointer',
				}}
			/>
		</Box>
	);
};
