import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const GameMainDeckAddButtonXs = () => {
	return (
		<IconButton
			sx={{
				aspectRatio: '1/1',
				height: 'calc(33.3333% - 10px)',
				borderRadius: '5px',
			}}
		>
			<Add />
		</IconButton>
	);
};
