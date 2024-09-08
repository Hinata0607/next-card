import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const GameMainDeckAddButton = () => {
	return (
		<IconButton
			sx={{
				aspectRatio: '1/1',
				height: '100%',
				borderRadius: '0px',
			}}
		>
			<Add />
		</IconButton>
	);
};
