import { GameSubDeckXsStatusProps } from '@/interfaces';
import { Box, Typography } from '@mui/material';

export const GameSubDeckXsStatus = ({ icon }: GameSubDeckXsStatusProps) => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			gap="10px"
			padding="0 10px"
		>
			{icon}
			<Typography
				variant="body2"
				sx={{
					fontSize: '0.8rem',
				}}
			>
				XX / XX
			</Typography>
		</Box>
	);
};
