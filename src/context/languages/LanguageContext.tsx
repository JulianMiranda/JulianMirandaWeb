import React, {createContext, useEffect, useReducer, useState} from 'react';
import {
	LanguageState,
	languageReducer,
	spanishLanguage,
	englishLanguage
} from './languageReducer';

interface LanguageContextProps {
	language: LanguageState;
	setEngilshLanguage: () => void;
	setSpanishLanguage: () => void;
}

export const LanguageContext = createContext({} as LanguageContextProps);

export const LanguageProvider = ({children}: any) => {
	const [languageBackend, setLanguageBackend] = useState('DEFAULT');
	const preference = {language: 'ENGLISH'};

	const [language, dispatch] = useReducer(
		languageReducer,
		languageBackend === 'english' ? englishLanguage : spanishLanguage
	);

	useEffect(() => {
		if (preference) {
			setLanguageBackend(preference.language);
		}
	}, [preference]);

	useEffect(() => {
		switch (preference?.language) {
			case 'DEFAULT':
				setSpanishLanguage();
				break;
			/* case 'DEFAULT':
				Appearance.getColorScheme() === 'spanish'
					? setSpanishLanguage()
					: setEngilshLanguage();
				break; */
			case 'ENGLISH':
				setEngilshLanguage();
				break;
			case 'SPANISH':
				setSpanishLanguage();
				break;
			default:
				break;
		}
	}, []);

	const setEngilshLanguage = () => {
		dispatch({type: 'set_english_language'});
		console.log('setEngilshLanguage');
	};

	const setSpanishLanguage = () => {
		dispatch({type: 'set_spanish_language'});
		console.log('setSpanishLanguage');
	};

	return (
		<LanguageContext.Provider
			value={{
				language,
				setEngilshLanguage,
				setSpanishLanguage
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
};
