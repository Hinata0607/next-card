'use client';
import { usePalette } from '@/hooks';
import { Key } from '@mui/icons-material';
import {
	Avatar,
	Box,
	Button,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	TextField,
} from '@mui/material';

export const TopSelectListItemMakeRoom = () => {
	const palette = usePalette();

	return (
		<ListItemButton
			disableTouchRipple
			sx={{
				cursor: 'pointer',
				width: '100%',
				height: '150px',
				borderRadius: '10px',
				border: `solid 1px ${palette.warning.dark}`,
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
						backgroundColor: palette.warning.dark,
					}}
				>
					<Key />
				</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={'キーを入力してルームを作成もしくは参加'}
				secondary={'キーを知っている人のみ参加可能のプライベートマッチです。'}
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
				<TextField
					variant="outlined"
					label="キーを入力"
					size="small"
					color="warning"
					fullWidth
				/>
				<Button
					fullWidth
					variant="outlined"
					color="warning"
					sx={{
						textOverflow: 'ellipsis',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
						display: 'block',
					}}
				>
					作成
				</Button>
			</Box>
		</ListItemButton>
	);
};
