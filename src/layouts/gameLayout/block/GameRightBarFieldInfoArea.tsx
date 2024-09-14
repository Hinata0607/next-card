import { Box } from '@mui/material';
import { GameRightBarConsole } from './GameRightBarConsole';

export const GameRightBarFieldInfoArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexGrow={1}
			gap="10px"
			width="100%"
			height="100px"
			padding="20px 0 10px 10px"
		>
			<GameRightBarConsole />
		</Box>
	);
};
