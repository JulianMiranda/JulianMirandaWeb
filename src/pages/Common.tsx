import {useContext} from 'react';
import yo from '../assets/img/yo2.jpeg';
import {LanguageContext} from '../context/languages/LanguageContext';
import {Idiom} from '../components/Idiom';

import pdf from '../assets/pdf/CV_JulianFullStackDeveloper.pdf';

export const Common = ({children}: any) => {
	const {language} = useContext(LanguageContext);
	return (
		<div className="layout">
			<Idiom />
			<aside className="layout__aside">
				<section className="aside__user-info">
					<div className="user-info__general">
						<div className="user-info__container-image">
							<img
								src={yo}
								alt="Perfil de Usuario"
								className="user-info__image"
							/>
						</div>
						<h2 className="user-info__name">Julian Miranda</h2>
						<h4 className="user-info__job">{language.textFullStack}</h4>
					</div>

					<div className="user-info__links">
						<ul className="links__social">
							<li className="social__option">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.facebook.com/profile.php?id=100095380963227"
									className="social__link"
								>
									<i className="social__icon fa-brands fa-facebook"></i>
								</a>
							</li>
							<li className="social__option">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.linkedin.com/in/julian-miranda-ur%C3%ADa-00b42a18a/"
									className="social__link"
								>
									<i className="social__icon fa-brands fa-linkedin"></i>
								</a>
							</li>
							<li className="social__option">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/JulianMiranda"
									className="social__link"
								>
									<i className="social__icon fa-brands fa-github"></i>
								</a>
							</li>
						</ul>
					</div>
					<div className="user-info__buttons">
						<a
							href={pdf}
							/* href={'#'} */
							rel="noopener noreferrer"
							download="Curriculum_JulianMiranda.pdf"
							className="user-info__btn"
						>
							{language.dowloadTextButton} CV
						</a>
					</div>
					<footer className="user-info__footer">
						&copy; {new Date().getFullYear()} Julian Miranda Web
					</footer>
				</section>
			</aside>

			<main className="layout__content">{children}</main>
		</div>
	);
};
