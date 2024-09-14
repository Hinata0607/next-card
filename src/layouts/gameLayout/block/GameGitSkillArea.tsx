import { Box } from '@mui/material';
import { GameMainDeckMyIcon } from '../atom';

export const GameGitSkillArea = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100%"
			sx={{
				aspectRatio: '1/1',
			}}
		>
			<GameMainDeckMyIcon />
		</Box>
	);
};
