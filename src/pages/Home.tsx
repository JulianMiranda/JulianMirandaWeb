import '../assets/css/styles.css';
import {LanguageContext} from '../context/languages/LanguageContext';
import {Common} from './Common';
import {useContext} from 'react';

export const Home = () => {
	const {language} = useContext(LanguageContext);
	return (
		<>
			<Common>
				<section className="content__page home__content">
					<h1 className="page__name">Julian Miranda</h1>
					<h2 className="page__job">{language.textFullStack}</h2>
				</section>
			</Common>
		</>
	);
};
