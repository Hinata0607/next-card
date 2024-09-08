'use client';
import { ContextProviderProps, displayModeProps } from '@/interfaces';
import { ReactNode, createContext, useState } from 'react';

export const Context = createContext<ContextProviderProps | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [isAccessed, setIsAccessed] = useState<boolean>(false);
	const [isLogoFadeOut, setIsLogoFadeOut] = useState<boolean>(false);
	const [displayMode, setDisplayMode] = useState<displayModeProps>('game');

	const contextValue = {
		isAccessed,
		setIsAccessed,
		isLogoFadeOut,
		setIsLogoFadeOut,
		displayMode,
		setDisplayMode,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
