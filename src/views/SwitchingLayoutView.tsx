'use client';
import { useLayout } from '@/hooks';
import { SwitchingLayoutViewProps } from '@/interfaces';
import {
	FirstAccessBackDrop,
	GameLayout,
	LobbyLayout,
	TopLayout,
} from '@/layouts';

export const SwitchingLayoutView = ({ children }: SwitchingLayoutViewProps) => {
	const { isAccessed, displayMode } = useLayout();

	return (
		<>
			{isAccessed ? (
				displayMode === 'top' ? (
					<TopLayout>top{children}</TopLayout>
				) : displayMode === 'lobby' ? (
					<LobbyLayout>lobby{children}</LobbyLayout>
				) : displayMode === 'game' ? (
					<GameLayout>game{children}</GameLayout>
				) : (
					<></>
				)
			) : (
				<FirstAccessBackDrop />
			)}
		</>
	);
};
