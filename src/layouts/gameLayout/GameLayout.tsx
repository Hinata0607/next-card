import { GameLayoutProps } from '@/interfaces';
import { Box } from '@mui/material';

export const GameLayout = ({ children }: GameLayoutProps) => {
	return (
		<Box width="100%" height="100vh">
			{children}
		</Box>
	);
};
