'use client';
import { useBreakPoint } from '@/hooks';
import { Box } from '@mui/material';
import { GameEnemyStatusAreaXs } from '../block';

export const GameEnemyStatusBarXs = () => {
	const breakpoint = useBreakPoint();

	return (
		<>
			<Box
				zIndex={50}
				position="fixed"
				top={'60px'}
				left={0}
				display="flex"
				justifyContent="center"
				alignItems="center"
				width={
					['xs', 'sm'].includes(breakpoint) ? '100%' : 'calc(100% - 300px)'
				}
				height="60px"
			>
				<GameEnemyStatusAreaXs />
			</Box>

			<Box width="100%" height="60px" />
		</>
	);
};
