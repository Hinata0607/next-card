'use client';
import { Box } from '@mui/material';
import { GameRightBarStatusRow } from '../atom';
import { BugReport, Favorite, Paid } from '@mui/icons-material';
import { useBreakPoint } from '@/hooks';

export const GameRightBarStatusArea = () => {
	const breakpoint = useBreakPoint();
	const fontSize = ['xs'].includes(breakpoint) ? 'medium' : 'small';

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			gap="5px"
			width="100%"
			minHeight="100px"
		>
			<GameRightBarStatusRow
				icon={<Favorite fontSize={fontSize} sx={{ cursor: 'pointer' }} />}
				text="HP"
			/>
			<GameRightBarStatusRow
				icon={<Paid fontSize={fontSize} sx={{ cursor: 'pointer' }} />}
				text="MONEY"
			/>
			<GameRightBarStatusRow
				icon={<BugReport fontSize={fontSize} sx={{ cursor: 'pointer' }} />}
				text="BUG"
			/>
		</Box>
	);
};
