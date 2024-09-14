'use client';
import { usePalette } from '@/hooks';
import { GameRightBarStatusRowProps } from '@/interfaces';
import { Box, Slider, Typography } from '@mui/material';

export const GameRightBarStatusRow = ({
	icon,
	text,
}: GameRightBarStatusRowProps) => {
	const palette = usePalette();

	return (
		<Box
			position="relative"
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
		>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="auto"
				height="100%"
				padding="0 5px"
			>
				{icon}
			</Box>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexGrow={1}
				height="100%"
				padding="0 5px"
			>
				<Slider
					sx={{
						userSelect: 'none',
						'& .MuiSlider-thumb': {
							width: 0,
							height: 0,
							borderRadius: '0%',
							boxShadow: 'none',
							outline: 'none',
							display: 'none',
						},
						'& .MuiSlider-rail': {
							height: '5px',
							opacity: 1,
							backgroundColor: palette.text.primary,
						},
					}}
				/>
			</Box>

			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				width="40%"
				sx={{
					position: 'absolute',
					bottom: 0,
					right: 0,
					transform: 'translateY(50%)',
					padding: '0 5px',
				}}
			>
				<Typography
					variant="body2"
					sx={{
						fontSize: '0.8rem',
					}}
				>
					{text}
				</Typography>
				<Typography
					sx={{
						fontSize: '0.8rem',
					}}
				>
					XX / XX
				</Typography>
			</Box>
		</Box>
	);
};
