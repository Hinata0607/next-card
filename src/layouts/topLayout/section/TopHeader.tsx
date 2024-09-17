import { SiteLogo } from '@/layouts/commonLayout';
import { Box } from '@mui/material';
import { TopHeaderRightCommands } from '../block';

export const TopHeader = () => {
	return (
		<>
			<Box
				position="fixed"
				top={0}
				left={0}
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				width="100vw"
				height="100px"
				padding="0 15px"
			>
				<SiteLogo width="150px" height="auto" maxWidth="40vw" />
				<TopHeaderRightCommands />
			</Box>

			<Box width="100%" height="100px" />
		</>
	);
};
