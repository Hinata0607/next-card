import { Box } from '@mui/material';
import { TopHeaderIconButton } from '../atom';
import { Apps, Login } from '@mui/icons-material';

export const TopHeaderRightCommands = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			gap="10px"
			height="100%"
			maxWidth="60vw"
			padding="0 10px"
		>
			<TopHeaderIconButton icon={<Apps />} onClick={() => console.log('')} />
			<TopHeaderIconButton icon={<Login />} onClick={() => console.log('')} />
		</Box>
	);
};
