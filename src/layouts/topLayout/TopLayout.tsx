'use client';
import { TopLayoutProps } from '@/interfaces';
import { Box } from '@mui/material';
import { FirstAccessBackDrop } from '../commonLayout';
import { useLayout } from '@/hooks';

export const TopLayout = ({ children }: TopLayoutProps) => {
	const { isAccessed } = useLayout();

	return (
		<>
			{isAccessed ? (
				<Box width="100%" height="100vh">
					{children}
				</Box>
			) : (
				<FirstAccessBackDrop />
			)}
		</>
	);
};
