import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			commonLayout: {
				firstAccessBackDrop: {
					bg: string;
				};
			};
			gameLayout: {
				mainDeck: {
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
			gameLayout: {
				mainDeck: {
					bg: string;
				};
			};
		};
	}
}
