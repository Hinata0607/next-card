'use client';
import { useLayout, usePalette } from '@/hooks';
import { Box, Fade } from '@mui/material';
import { useEffect } from 'react';
import { SiteLogo } from '../atom';

export const FirstAccessBackDrop = () => {
	const palette = usePalette();
	const { isLogoFadeOut, setIsLogoFadeOut, handleLogoExited } = useLayout();

	useEffect(() => {
		if (!isLogoFadeOut) {
			const timer = setTimeout(() => {
				setIsLogoFadeOut(true);
			}, 1250);
			return () => clearTimeout(timer);
		}
	}, [isLogoFadeOut, setIsLogoFadeOut]);

	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			display="flex"
			justifyContent="center"
			alignItems="center"
			width="100vw"
			height="100vh"
			bgcolor={palette.layout.commonLayout.firstAccessBackDrop.bg}
		>
			<Fade
				in={!isLogoFadeOut}
				timeout={{
					enter: 1250,
					exit: 1250,
				}}
				onExited={handleLogoExited}
			>
				<Box
					sx={{
						animation: 'scaleDown 2.5s ease-out forwards',
						'@keyframes scaleDown': {
							'0%': {
								transform: 'scale(1)',
							},
							'100%': {
								transform: 'scale(0.85)',
							},
						},
					}}
				>
					<SiteLogo width="250px" height="auto" maxWidth="50vw" />
				</Box>
			</Fade>
		</Box>
	);
};
