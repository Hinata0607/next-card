'use client';
import { usePalette } from '@/hooks';
import { TopHeaderIconButtonProps } from '@/interfaces';
import { IconButton } from '@mui/material';

export const TopHeaderIconButton = ({
	icon,
	onClick,
}: TopHeaderIconButtonProps) => {
	const palette = usePalette();

	return (
		<IconButton
			onClick={onClick}
			disableTouchRipple
			sx={{
				borderRadius: '10px',
				border: `solid 1px ${palette.layout.topLayout.header.border}`,
			}}
		>
			{icon}
		</IconButton>
	);
};
