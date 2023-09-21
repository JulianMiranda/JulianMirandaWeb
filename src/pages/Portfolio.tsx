import {Common} from './Common';
import app1 from '../assets/img/bariaenvios.png';
import app2 from '../assets/img/encargaEnvios.png';
import app3 from '../assets/img/encarga.png';
import app4 from '../assets/img/mariachis.png';
import app5 from '../assets/img/bariaios.png';
import {LanguageContext} from '../context/languages/LanguageContext';
import {useContext} from 'react';

export const Portfolio = () => {
	const {language} = useContext(LanguageContext);
	return (
		<Common>
			<section className="content__page content__portfolio">
				<header className="portfolio__header">
					<h1 className="portfolio__title">{language.portfolioTitle}</h1>
				</header>
				<section className="portfolio__gallery">
					<figure className="gallery__item">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://apps.apple.com/us/app/baria-envios/id6443852982?l=es-MX"
							className="gallery__link"
						>
							<div className="gallery__container-image">
								<img
									className="gallery__image animate__animated animate__fadeIn"
									src={app5}
									alt="Baria Envios"
								/>
							</div>
							<figcaption className="gallery__title">
								Baria Envios IOS
							</figcaption>
							<i className="gallery__icon fa-solid fa-code-commit"></i>
							<span className="gallery__category">
								{language.portfolioDownload}
							</span>
						</a>
					</figure>
					<figure className="gallery__item">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://play.google.com/store/apps/details?id=com.bariaenvios"
							className="gallery__link"
						>
							<div className="gallery__container-image">
								<img
									className="gallery__image animate__animated animate__fadeIn"
									src={app1}
									alt=""
								/>
							</div>
							<figcaption className="gallery__title">
								Baria Envios Android
							</figcaption>
							<i className="gallery__icon fa-solid fa-code-commit"></i>
							<span className="gallery__category">
								{language.portfolioDownload}
							</span>
						</a>
					</figure>
					<figure className="gallery__item">
						<div className="gallery__container-image">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://apps.apple.com/us/app/encargaapp/id6444244340?l=es-MX"
								className="gallery__link"
							>
								<img
									className="gallery__image animate__animated animate__fadeIn"
									src={app2}
									alt=""
								/>
							</a>
						</div>
						<figcaption className="gallery__title">Encarga IOS</figcaption>
						<i className="gallery__icon fa-solid fa-code-commit"></i>
						<span className="gallery__category">
							{language.portfolioDownload}
						</span>
					</figure>
					<figure className="gallery__item">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://play.google.com/store/apps/details?id=com.enviosencarga"
							className="gallery__link"
						>
							<div className="gallery__container-image">
								<img
									className="gallery__image animate__animated animate__fadeIn"
									src={app3}
									alt=""
								/>
							</div>
							<figcaption className="gallery__title">
								Encarga Android
							</figcaption>
							<i className="gallery__icon fa-solid fa-code-commit"></i>
							<span className="gallery__category">
								{language.portfolioDownload}
							</span>
						</a>
					</figure>
					<figure className="gallery__item">
						<div className="gallery__container-image">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://play.google.com/store/apps/details?id=com.cormapiapp.app"
								className="gallery__link"
							>
								<img
									className="gallery__image animate__animated animate__fadeIn"
									src={app4}
									alt=""
								/>
							</a>
						</div>
						<figcaption className="gallery__title">
							Mariachis en Quito
						</figcaption>
						<i className="gallery__icon fa-solid fa-code-commit"></i>
						<span className="gallery__category">
							{language.portfolioDownload}
						</span>
					</figure>
				</section>
			</section>
		</Common>
	);
};
