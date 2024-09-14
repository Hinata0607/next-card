export interface UseLayoutProps {
	mainDeckScrollRef: React.RefObject<HTMLDivElement>;
	enemyDeckScrollRef: React.RefObject<HTMLDivElement>;
	isAccessed: boolean;
	setIsAccessed: React.Dispatch<React.SetStateAction<boolean>>;
	isLogoFadeOut: boolean;
	setIsLogoFadeOut: React.Dispatch<React.SetStateAction<boolean>>;
	displayMode: displayModeProps;
	setDisplayMode: React.Dispatch<React.SetStateAction<displayModeProps>>;

	handleLogoExited: () => () => void;
	handleMainDeckScroll: ({ scrollNum }: handleMainDeckScrollProps) => void;
	handleEnemyDeckScroll: ({ scrollNum }: handleEnemyDeckScrollProps) => void;
}

export interface handleMainDeckScrollProps {
	scrollNum: number;
}

export interface handleEnemyDeckScrollProps {
	scrollNum: number;
}
