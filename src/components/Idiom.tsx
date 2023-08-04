import {useContext} from 'react';
import {LanguageContext} from '../context/languages/LanguageContext';

export const Idiom = () => {
	const {language, setEngilshLanguage, setSpanishLanguage} =
		useContext(LanguageContext);
	/* console.log(language); */
	return (
		<>
			<div
				onClick={() =>
					language.currentLanguage === 'english'
						? setSpanishLanguage()
						: setEngilshLanguage()
				}
				/* style={{
					backgroundColor: 'var(--color-secondary)',
					display: 'block',
					width: '100px',
					textAlign: 'center',
					color: 'var(--color-principal)',
					borderRadius: '50px',
					cursor: 'pointer'
				}} */
				className="idiom__btn"
			>
				<p>{language.currentLanguage === 'english' ? 'es' : 'en'}</p>
			</div>
		</>
	);
};
