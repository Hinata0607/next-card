import { TopSelectList } from '@/components';
import { Box } from '@mui/material';

export const TopContent = () => {
	return (
		<Box
			width="100%"
			height="100%"
			sx={{
				overflowX: 'hidden',
				overflowY: 'overlay',
				'&:not(:hover)': {
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: 'transparent',
					},
				},
			}}
		>
			<TopSelectList />
		</Box>
	);
};
