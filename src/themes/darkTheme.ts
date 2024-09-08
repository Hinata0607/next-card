'use client';
import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
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
