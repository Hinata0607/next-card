import { darkTheme } from '@/themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ContextProvider } from '@/provider';
import { SwitchingLayoutView } from '@/views';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="jp">
			<ThemeProvider theme={darkTheme}>
				<body>
					<AppRouterCacheProvider>
						<ContextProvider>
							<CssBaseline />
							<SwitchingLayoutView>{children}</SwitchingLayoutView>
						</ContextProvider>
					</AppRouterCacheProvider>
				</body>
			</ThemeProvider>
		</html>
	);
}