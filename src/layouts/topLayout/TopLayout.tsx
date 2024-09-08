'use client';
import { TopLayoutProps } from '@/interfaces';
import { Box } from '@mui/material';
import { TopHeader, TopMain } from './section';
import { FirstAccessBackDrop } from '../commonLayout';
import { useLayout } from '@/hooks';

export const TopLayout = ({ children }: TopLayoutProps) => {
	const { isAccessed } = useLayout();

	return (
		<>
			{isAccessed ? (
				<Box width="100%" height="100vh">
					<TopHeader />
					<TopMain>{children}</TopMain>
				</Box>
			) : (
				<FirstAccessBackDrop />
			)}
		</>
	);
};
