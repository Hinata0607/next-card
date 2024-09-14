import { Box } from '@mui/material';

export const GameRightBarConsole = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
			maxHeight="100%"
			sx={{
				overflowX: 'hidden',
				overflowY: 'overlay',
			}}
		>
			<Box height="10000px"></Box>
		</Box>
	);
};
