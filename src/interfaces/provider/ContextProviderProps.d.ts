export interface ContextProviderProps {
	isAccessed: boolean;
	setIsAccessed: React.Dispatch<React.SetStateAction<boolean>>;
	isLogoFadeOut: boolean;
	setIsLogoFadeOut: React.Dispatch<React.SetStateAction<boolean>>;
}
