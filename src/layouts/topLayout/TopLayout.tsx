'use client';
import { TopLayoutProps } from '@/interfaces';
import { Box } from '@mui/material';
import { TopHeader } from './section';

export const TopLayout = ({ children }: TopLayoutProps) => {
	return (
		<>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				width="100%"
				height="100vh"
			>
				<TopHeader />
				<Box width="100%" height="calc(100% - 100px)">
					{children}
				</Box>
			</Box>
		</>
	);
};
