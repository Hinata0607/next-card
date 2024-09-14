import { Box } from '@mui/material';
import { GameSubDeckXsStatus } from '../atom';
import { BugReport, Favorite, Paid } from '@mui/icons-material';

export const GameSubDeckXsStatusArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexGrow={1}
			flexWrap="wrap-reverse"
			width="100%"
			height="100%"
		>
			<GameSubDeckXsStatus icon={<Favorite />} />
			<GameSubDeckXsStatus icon={<Paid />} />
			<GameSubDeckXsStatus icon={<BugReport />} />
		</Box>
	);
};
