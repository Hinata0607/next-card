'use client';
import { TopContent } from '@/contents';
import { useLayout } from '@/hooks';
import { Box } from '@mui/material';

export const SwitchingContentView = () => {
	const { isAccessed, displayMode } = useLayout();

	return (
		<Box width="100%" height="100%">
			<>{isAccessed && (displayMode === 'top' ? <TopContent /> : <></>)}</>
		</Box>
	);
};
