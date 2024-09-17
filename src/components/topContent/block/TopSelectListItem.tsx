'use client';
import { usePalette } from '@/hooks';
import {
	Avatar,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	TextField,
} from '@mui/material';

export const TopSelectListItem = () => {
	const palette = usePalette();

	return (
		<ListItemButton
			disableTouchRipple
			sx={{
				cursor: 'pointer',
				width: '100%',
				height: '150px',
				borderRadius: '10px',
				border: `solid 2px ${palette.content.topContent.list.item.border}`,
			}}
		>
			<ListItemAvatar>
				<Avatar />
			</ListItemAvatar>
			<ListItemText
				primary={'aaaaaaaaaaaaaaaaaaaaaaaaaa'}
				secondary={'ssssssssssssssssssssssssssss'}
				sx={{
					marginRight: '10px',
				}}
				primaryTypographyProps={{
					sx: {
						wordBreak: 'break-all',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						display: '-webkit-box',
						WebkitLineClamp: 2,
						WebkitBoxOrient: 'vertical',
					},
				}}
				secondaryTypographyProps={{
					sx: {
						wordBreak: 'break-all',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						display: '-webkit-box',
						WebkitLineClamp: 2,
						WebkitBoxOrient: 'vertical',
					},
				}}
			/>

			<TextField
				variant="outlined"
				label="Input Text"
				sx={{
					flexGrow: 1,
				}}
			/>
		</ListItemButton>
	);
};
