import { LobbyLayoutProps } from '@/interfaces';
import { Box } from '@mui/material';

export const LobbyLayout = ({ children }: LobbyLayoutProps) => {
	return (
		<Box width="100%" height="100vh">
			{children}
		</Box>
	);
};
