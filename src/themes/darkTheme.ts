'use client';
import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: blue[500],
		},
		layout: {
			commonLayout: {
				firstAccessBackDrop: {
					bg: '#000000',
				},
			},
			gameLayout: {
				mainDeck: {
					bg: '#000000',
				},
			},
		},
		background: {
			default: '#241f46',
		},
	},
});
