import { Avatar, Box } from '@mui/material';

export const GameMainDeckMyIcon = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
		>
			<Avatar
				sx={{
					width: '75%',
					height: '75%',
					cursor: 'pointer',
				}}
			/>
		</Box>
	);
};
