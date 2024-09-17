import { List } from '@mui/material';
import {
	TopSelectListItem,
	TopSelectListItemMakeRoom,
	TopSelectListItemRandomMatch,
} from '../block';

export const TopSelectList = () => {
	return (
		<List
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'start',
				alignItems: 'center',
				gap: '20px',
				width: '1000px',
				maxWidth: '90vw',
				padding: '20px 0',
				margin: '0 auto',
			}}
		>
			<TopSelectListItemMakeRoom />
			<TopSelectListItemRandomMatch />
			<TopSelectListItem />
			<TopSelectListItem />
			<TopSelectListItem />
			<TopSelectListItem />
			<TopSelectListItem />
			<TopSelectListItem />
			<TopSelectListItem />
			<TopSelectListItem />
			<TopSelectListItem />
			<TopSelectListItem />
		</List>
	);
};
