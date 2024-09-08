'use client';
import { GameLayoutProps } from '@/interfaces';
import { Box } from '@mui/material';
import { GameMainDeck, GameRightBar } from './section';
import { useBreakPoint } from '@/hooks';

export const GameLayout = ({ children }: GameLayoutProps) => {
	const breakpoint = useBreakPoint();
	const isResponsive: boolean = ['xs', 'sm'].includes(breakpoint);

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
					width={isResponsive ? '100%' : 'calc(100% - 300px)'}
					height="100%"
				>
					<Box width="100%" height="100%" flexGrow={1}>
						{children}
					</Box>
					<GameMainDeck />
				</Box>
				<Box
					position={isResponsive ? 'fixed' : 'static'}
					width={isResponsive ? '100%' : '300px'}
					height="100vh"
				>
					<GameRightBar />
				</Box>
			</Box>
		</>
	);
};
