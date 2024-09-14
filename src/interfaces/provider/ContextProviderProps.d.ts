export interface ContextProviderProps {
	mainDeckScrollRef: React.RefObject<HTMLDivElement>;
	enemyDeckScrollRef: React.RefObject<HTMLDivElement>;
	isAccessed: boolean;
	setIsAccessed: React.Dispatch<React.SetStateAction<boolean>>;
	isLogoFadeOut: boolean;
	setIsLogoFadeOut: React.Dispatch<React.SetStateAction<boolean>>;
	displayMode: displayModeProps;
	setDisplayMode: React.Dispatch<React.SetStateAction<displayModeProps>>;
}

export type displayModeProps = 'top' | 'lobby' | 'game';
