import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			commonLayout: {
				firstAccessBackDrop: {
					bg: string;
				};
			};
			topLayout: {
				header: {
					border: string;
				};
			};
			gameLayout: {
				mainDeck: {
					bg: string;
				};
				subDeck: {
					track: {
						defense: string;
						project: string;
						magic: string;
					};
				};
				enemyDeck: {
					bg: string;
				};
				rightBar: {
					bg: string;
				};
			};
		};
	}
	interface PaletteOptions {
		layout: {
			commonLayout: {
				firstAccessBackDrop: {
					bg: string;
				};
			};
			topLayout: {
				header: {
					border: string;
				};
			};
			gameLayout: {
				mainDeck: {
					bg: string;
				};
				subDeck: {
					track: {
						defense: string;
						project: string;
						magic: string;
					};
				};
				enemyDeck: {
					bg: string;
				};
				rightBar: {
					bg: string;
				};
			};
		};
	}
}
