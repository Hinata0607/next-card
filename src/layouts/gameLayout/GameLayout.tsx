'use client';
import { GameLayoutProps } from '@/interfaces';
import { Box } from '@mui/material';
import {
	GameEnemyDeck,
	GameEnemyStatusBarXs,
	GameMainDeck,
	GameMainDeckXs,
	GameRightBar,
	GameSubDeck,
	GameSubDeckXs,
} from './section';
import { useBreakPoint } from '@/hooks';

export const GameLayout = ({ children }: GameLayoutProps) => {
	const breakpoint = useBreakPoint();
	const isSm: boolean = ['xs', 'sm'].includes(breakpoint);
	const isXs: boolean = ['xs'].includes(breakpoint);

	return (
		<>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="100vh"
			>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					width={isSm ? '100%' : 'calc(100% - 300px)'}
					height="100%"
				>
					<GameEnemyDeck />
					{isXs && <GameEnemyStatusBarXs />}
					<Box width="100%" flexGrow={1}>
						{children}
					</Box>
					{!isXs ? <GameSubDeck /> : <GameSubDeckXs />}
					{!isXs ? <GameMainDeck /> : <GameMainDeckXs />}
				</Box>
				<Box
					position={isSm ? 'fixed' : 'static'}
					width={isSm ? '100%' : '300px'}
					height="100vh"
				>
					{!isSm && <GameRightBar />}
				</Box>
			</Box>
		</>
	);
};
