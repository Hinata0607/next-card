'use client';
import { ContextProviderProps, displayModeProps } from '@/interfaces';
import { ReactNode, createContext, useRef, useState } from 'react';

export const Context = createContext<ContextProviderProps | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const mainDeckScrollRef = useRef<HTMLDivElement>(null);
	const enemyDeckScrollRef = useRef<HTMLDivElement>(null);
	const [isAccessed, setIsAccessed] = useState<boolean>(false);
	const [isLogoFadeOut, setIsLogoFadeOut] = useState<boolean>(false);
	const [displayMode, setDisplayMode] = useState<displayModeProps>('game');
	const [isExpandMainDeck, setIsExpandMainDeck] = useState<boolean>(false);

	const contextValue = {
		mainDeckScrollRef,
		enemyDeckScrollRef,
		isAccessed,
		setIsAccessed,
		isLogoFadeOut,
		setIsLogoFadeOut,
		displayMode,
		setDisplayMode,
		isExpandMainDeck,
		setIsExpandMainDeck,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
