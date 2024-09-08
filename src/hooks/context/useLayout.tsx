'use client';
import { UseLayoutProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useLayout = (): UseLayoutProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const handleLogoExited = (): (() => void) => {
		const timer = setTimeout(() => {
			setIsAccessed(true);
		}, 100);
		return () => clearTimeout(timer);
	};

	const {
		isAccessed,
		setIsAccessed,
		isLogoFadeOut,
		setIsLogoFadeOut,
		displayMode,
		setDisplayMode,
	} = context;

	return {
		isAccessed,
		setIsAccessed,
		isLogoFadeOut,
		setIsLogoFadeOut,
		displayMode,
		setDisplayMode,

		handleLogoExited,
	};
};
