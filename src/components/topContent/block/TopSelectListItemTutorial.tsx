'use client';
import { usePalette } from '@/hooks';
import { Book } from '@mui/icons-material';
import {
	Avatar,
	Box,
	Button,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from '@mui/material';

export const TopSelectListItemTutorial = () => {
	const palette = usePalette();

	return (
		<ListItemButton
			disableTouchRipple
			sx={{
				cursor: 'pointer',
				width: '100%',
				height: '150px',
				borderRadius: '10px',
				border: `solid 1px ${palette.success.dark}`,
				backgroundColor: palette.content.topContent.list.item.bg,
				'&:hover': {
					backgroundColor: palette.content.topContent.list.item.bg,
				},
				'&:active': {
					backgroundColor: palette.content.topContent.list.item.bg,
				},
				'&:focus-within': {
					backgroundColor: palette.content.topContent.list.item.bg,
				},
			}}
		>
			<ListItemAvatar>
				<Avatar
					sx={{
						color: palette.text.primary,
						backgroundColor: palette.success.dark,
					}}
				>
					<Book />
				</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={'チュートリアルを開始'}
				secondary={'ゲームの基本動作を学ぶことができます。'}
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

			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				gap="15px"
				width="200px"
			>
				<Button
					fullWidth
					variant="outlined"
					color="success"
					sx={{
						textOverflow: 'ellipsis',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
						display: 'block',
					}}
				>
					開始
				</Button>
			</Box>
		</ListItemButton>
	);
};
