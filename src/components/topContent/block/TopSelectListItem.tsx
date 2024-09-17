'use client';
import { usePalette } from '@/hooks';
import {
	Avatar,
	Box,
	Button,
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
				<Avatar />
			</ListItemAvatar>
			<ListItemText
				primary={'aaaaaaaaaaaaaaaaaaaaaaaaaa'}
				secondary={'ssssssssssssssssssssssssssss'}
				sx={{
					marginRight: '10px',
					width: '30%',
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
				flexGrow={1}
				width="100px"
			>
				<TextField
					variant="outlined"
					label="Input Text"
					size="small"
					fullWidth
				/>
				<Button
					fullWidth
					variant="outlined"
					sx={{
						textOverflow: 'ellipsis',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
						display: 'block',
					}}
				>
					参加する
				</Button>
			</Box>
		</ListItemButton>
	);
};
