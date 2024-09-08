'use client';
import { ContextProviderProps } from '@/interfaces';
import { ReactNode, createContext, useState } from 'react';

export const Context = createContext<ContextProviderProps | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [isAccessed, setIsAccessed] = useState<boolean>(false);
	const [isLogoFadeOut, setIsLogoFadeOut] = useState<boolean>(false);

	const contextValue = {
		isAccessed,
		setIsAccessed,
		isLogoFadeOut,
		setIsLogoFadeOut,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
