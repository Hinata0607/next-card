'use client';
import { TopLayoutProps } from '@/interfaces';
import { Box } from '@mui/material';

export const TopLayout = ({ children }: TopLayoutProps) => {
	return (
		<>
			<Box width="100%" height="100vh">
				{children}
			</Box>
		</>
	);
};
