'use client';
import {
	handleEnemyDeckScrollProps,
	handleMainDeckScrollProps,
	UseLayoutProps,
} from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useLayout = (): UseLayoutProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		mainDeckScrollRef,
		enemyDeckScrollRef,
		isAccessed,
		setIsAccessed,
		isLogoFadeOut,
		setIsLogoFadeOut,
		displayMode,
		setDisplayMode,
	} = context;

	const handleLogoExited = (): (() => void) => {
		const timer = setTimeout(() => {
			setIsAccessed(true);
		}, 100);
		return () => clearTimeout(timer);
	};

	const handleMainDeckScroll = ({
		scrollNum,
	}: handleMainDeckScrollProps): void => {
		if (mainDeckScrollRef && mainDeckScrollRef.current) {
			mainDeckScrollRef.current.scrollBy({
				left: scrollNum,
				behavior: 'smooth',
			});
		}
	};

	const handleEnemyDeckScroll = ({
		scrollNum,
	}: handleEnemyDeckScrollProps): void => {
		if (enemyDeckScrollRef && enemyDeckScrollRef.current) {
			enemyDeckScrollRef.current.scrollBy({
				left: scrollNum,
				behavior: 'smooth',
			});
		}
	};

	return {
		mainDeckScrollRef,
		enemyDeckScrollRef,
		isAccessed,
		setIsAccessed,
		isLogoFadeOut,
		setIsLogoFadeOut,
		displayMode,
		setDisplayMode,

		handleLogoExited,
		handleMainDeckScroll,
		handleEnemyDeckScroll,
	};
};
