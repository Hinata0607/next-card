import { GameSubDeckCardTrackProps } from '@/interfaces';
import { Box } from '@mui/material';

export const GameSubDeckCardTrack = ({
	children,
	bg,
	text,
}: GameSubDeckCardTrackProps) => {
	return (
		<Box
			position="relative"
			display="flex"
			justifyContent="center"
			alignItems="center"
			gap="10px"
			width="fit-content"
			height="100%"
			padding="0 10px"
			bgcolor={bg}
			borderRadius="0 5px 5px 5px"
		>
			{children}
			<Box
				position="absolute"
				top={0}
				left={0}
				maxWidth="90%"
				padding="0 20px 0 10px"
				fontSize="0.75rem"
				bgcolor={bg}
				borderRadius="5px 5px 0 0"
				sx={{
					transform: 'translateY(-90%)',
				}}
			>
				{text}
			</Box>
		</Box>
	);
};
