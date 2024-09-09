import { Box } from '@mui/material';
import { GameSubDeckProjectArea } from './GameSubDeckProjectArea';
import { GameSubDeckMagicArea } from './GameSubDeckMagicArea';
import { GameSubDeckDefenseArea } from './GameSubDeckDefenseArea';

export const GameSubDeckListArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="end"
			flexGrow={1}
			height="100%"
		>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="end"
				gap="20px"
				width="100%"
				height="fit-content"
				padding="10px"
			>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					width="100%"
					height="60px"
				>
					<GameSubDeckDefenseArea />
				</Box>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					width="100%"
					height="60px"
				>
					<GameSubDeckProjectArea />
					<GameSubDeckMagicArea />
				</Box>
			</Box>
		</Box>
	);
};
