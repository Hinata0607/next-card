import { GameSubDeckCardTrackProps } from '@/interfaces';
import { Box } from '@mui/material';

export const GameSubDeckCardTrack = ({
	children,
	bg,
}: GameSubDeckCardTrackProps) => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			gap="10px"
			width="fit-content"
			height="100%"
			padding="0 10px"
			bgcolor={bg}
			borderRadius="5px"
		>
			{children}
		</Box>
	);
};
