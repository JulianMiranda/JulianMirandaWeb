import {Common} from './Common';
import app1 from '../assets/img/galeria-1.jpg';
import app2 from '../assets/img/galeria-2.jpg';
import app3 from '../assets/img/galeria-3.jpg';
import app4 from '../assets/img/galeria-4.jpg';
import app5 from '../assets/img/galeria-5.jpg';

export const Portfolio = () => {
	return (
		<Common>
			<section className="content__page content__portfolio">
				<header className="portfolio__header">
					<h1 className="portfolio__title">Portafolio</h1>
				</header>
				<section className="portfolio__gallery">
					<figure className="gallery__item">
						<div className="gallery__container-image">
							<a href="#" className="gallery__link">
								<img className="gallery__image" src={app5} alt="" />
							</a>
						</div>
						<figcaption className="gallery__title">Baria Envios</figcaption>
						<i className="gallery__icon fa-solid fa-code-commit"></i>
						<span className="gallery__category">App</span>
					</figure>
					<figure className="gallery__item">
						<div className="gallery__container-image">
							<a href="#" className="gallery__link">
								<img className="gallery__image" src={app1} alt="" />
							</a>
						</div>
						<figcaption className="gallery__title">Encarga Envios</figcaption>
						<i className="gallery__icon fa-solid fa-code-commit"></i>
						<span className="gallery__category">App</span>
					</figure>
					<figure className="gallery__item">
						<div className="gallery__container-image">
							<a href="#" className="gallery__link">
								<img className="gallery__image" src={app2} alt="" />
							</a>
						</div>
						<figcaption className="gallery__title">Baria</figcaption>
						<i className="gallery__icon fa-solid fa-code-commit"></i>
						<span className="gallery__category">App</span>
					</figure>
					<figure className="gallery__item">
						<div className="gallery__container-image">
							<a href="#" className="gallery__link">
								<img className="gallery__image" src={app3} alt="" />
							</a>
						</div>
						<figcaption className="gallery__title">Encarga</figcaption>
						<i className="gallery__icon fa-solid fa-code-commit"></i>
						<span className="gallery__category">Videos</span>
					</figure>
					<figure className="gallery__item">
						<div className="gallery__container-image">
							<a href="#" className="gallery__link">
								<img className="gallery__image" src={app4} alt="" />
							</a>
						</div>
						<figcaption className="gallery__title">GTS</figcaption>
						<i className="gallery__icon fa-solid fa-code-commit"></i>
						<span className="gallery__category">App</span>
					</figure>
				</section>
			</section>
		</Common>
	);
};
