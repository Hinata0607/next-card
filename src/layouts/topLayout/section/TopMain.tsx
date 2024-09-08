import { TopMainProps } from '@/interfaces';
import { Box } from '@mui/material';

export const TopMain = ({ children }: TopMainProps) => {
	return (
		<Box width="100%" height="calc(100% - 150px)">
			{children}
		</Box>
	);
};
