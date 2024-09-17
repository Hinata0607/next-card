import { SiteLogoProps } from '@/interfaces';
import { Avatar } from '@mui/material';

export const SiteLogo = ({ width, height, maxWidth }: SiteLogoProps) => {
	return (
		<Avatar
			src="/SOZO_logo_transparent2.svg"
			variant="square"
			sx={{
				width: width,
				height: height,
				maxWidth: maxWidth,
			}}
		/>
	);
};
