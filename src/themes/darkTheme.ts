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
			topLayout: {
				header: {
					border: '#21263a',
				},
			},
			gameLayout: {
				mainDeck: {
					bg: '#1a1e2e',
				},
				subDeck: {
					track: {
						defense: '#499ab2',
						project: '#26ad8d',
						magic: '#a91686',
					},
				},
				enemyDeck: {
					bg: '#1a1e2e',
				},
				rightBar: {
					bg: '#1a1e2e',
				},
			},
		},
		background: {
			default: '#0a0b11',
		},
	},
});
