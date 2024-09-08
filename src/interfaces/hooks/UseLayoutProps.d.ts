export interface UseLayoutProps {
	isAccessed: boolean;
	setIsAccessed: React.Dispatch<React.SetStateAction<boolean>>;
	isLogoFadeOut: boolean;
	setIsLogoFadeOut: React.Dispatch<React.SetStateAction<boolean>>;
	displayMode: displayModeProps;
	setDisplayMode: React.Dispatch<React.SetStateAction<displayModeProps>>;

	handleLogoExited: () => () => void;
}
