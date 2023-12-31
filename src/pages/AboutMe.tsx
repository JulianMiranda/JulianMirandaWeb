import {Common} from './Common';
import test1 from '../assets/img/Lia.png';
import test2 from '../assets/img/edgar.jpeg';
import {useContext} from 'react';
import {LanguageContext} from '../context/languages/LanguageContext';

export const AboutMe = () => {
	const {language} = useContext(LanguageContext);
	return (
		<>
			<Common>
				<section className="content__page content__about">
					<header className="about__header">
						<h1 className="about__title">
							{language.titleAbout}{' '}
							<span className="title__color">{language.titleAboutMe}</span>
						</h1>
					</header>
					<section className="about__personal-info">
						<article className="personal-info__bio">
							<p className="personal-info__description">{language.aboutText}</p>
						</article>
						<div className="personal-info__data">
							<ul className="personal-info__list">
								<li className="personal-info__option">
									<span className="personal-info__title">
										{language.aboutAge}
									</span>
									<span className="personal-info__value">30</span>
								</li>
								<li className="personal-info__option">
									<span className="personal-info__title">
										{language.aboutCountry}
									</span>
									<span className="personal-info__value">Cuba</span>
								</li>
								<li className="personal-info__option">
									<span className="personal-info__title">
										{language.aboutAddress}
									</span>
									<span className="personal-info__value">
										Quito, Pichincha, Ecuador
									</span>
								</li>
								<li className="personal-info__option">
									<span className="personal-info__title">
										{language.aboutPhone}
									</span>
									<span className="personal-info__value">+593 962914922</span>
								</li>
							</ul>
						</div>
					</section>

					<section className="about__services">
						<header className="services__header">
							<h2 className="services__title">
								{language.aboutWhatTitle}{' '}
								<span className="title__color">
									{language.aboutWhatTitleDo}
								</span>
							</h2>
						</header>

						<div className="services__container">
							<article className="services__sevice">
								<div className="service__icon">
									<i className="service__real-icon fa-solid fa-code"></i>
								</div>
								<div className="content">
									<h3 className="service__title">
										{language.aboutWhatSubtitle1}
									</h3>
									<p className="service__description">
										{language.aboutWhatSubtext1}
									</p>
								</div>
							</article>
							<article className="services__sevice">
								<div className="service__icon">
									<i className="service__real-icon fa-solid fa-chalkboard-user"></i>
								</div>
								<div className="content">
									<h3 className="service__title">
										{language.aboutWhatSubtitle2}
									</h3>
									<p className="service__description">
										{language.aboutWhatSubtext2}
									</p>
								</div>
							</article>
							<article className="services__sevice">
								<div className="service__icon">
									<i className="service__real-icon fa-solid fa-computer"></i>
								</div>
								<div className="content">
									<h3 className="service__title">
										{language.aboutWhatSubtitle3}
									</h3>
									<p className="service__description">
										{language.aboutWhatSubtext3}
									</p>
								</div>
							</article>
							<article className="services__sevice">
								<div className="service__icon">
									<i className="service__real-icon fa-solid fa-terminal"></i>
								</div>
								<div className="content">
									<h4 className="service__title">
										{language.aboutWhatSubtitle4}
									</h4>
									<p className="service__description">
										{language.aboutWhatSubtext4}
									</p>
								</div>
							</article>
						</div>
					</section>
					<section className="about__reviews">
						<header className="reviews__header">
							<h2 className="reviews__title">{language.aboutReviews}</h2>
						</header>
						<div className="reviews__container">
							<article className="reviews__review">
								<div className="review__image-container">
									<img
										src={test1}
										className="review__image gray__image"
										alt="Cara de cliente"
									/>
								</div>
								<div className="review__description">
									<p className="review__text">{language.aboutReviewText1}</p>
								</div>
								<div className="review__author">
									<div className="review__author-info">
										<h4 className="review__name">Lianet Vazquez</h4>
										<h5 className="review__company">Freelancer</h5>
									</div>
									<div className="review__author-icon">
										<i className="review__icon fa-solid fa-quote-right"></i>
									</div>
								</div>
							</article>
							<article className="reviews__review">
								<div className="review__image-container">
									<img
										src={test2}
										className="review__image"
										alt="Cara de cliente"
									/>
								</div>
								<div className="review__description">
									<p className="review__text">{language.aboutReviewText2}</p>
								</div>
								<div className="review__author">
									<div className="review__author-info">
										<h4 className="review__name">Edgar Aquine</h4>
										<h5 className="review__company">Co-founder, GTS Spain</h5>
									</div>
									<div className="review__author-icon">
										<i className="review__icon fa-solid fa-quote-right"></i>
									</div>
								</div>
							</article>
						</div>
					</section>
					{/* <section className="about__clients">
						<header className="clients__header">
							<h2 className="clients__title">Clientes</h2>
						</header>
						<div className="clients__container">
							<article className="clients__items">
								<a href="#" className="client__link">
									<img src={client1} className="clients__image" alt="Cliente" />
								</a>
							</article>
							<article className="clients__items">
								<a href="#" className="client__link">
									<img src={client2} className="clients__image" alt="Cliente" />
								</a>
							</article>
							<article className="clients__items">
								<a href="#" className="client__link">
									<img src={client3} className="clients__image" alt="Cliente" />
								</a>
							</article>
							<article className="clients__items">
								<a href="#" className="client__link">
									<img src={client4} className="clients__image" alt="Cliente" />
								</a>
							</article>
							<article className="clients__items">
								<a href="#" className="client__link">
									<img src={client5} className="clients__image" alt="Cliente" />
								</a>
							</article>
						</div>
					</section> */}
					{/* <section className="about__prices">
						<header className="prices__header">
							<h2 className="prices__title">Precios</h2>
						</header>
						<div className="prices__container">
							<article className="prices__box">
								<div className="prices__subtitle">
									<span className="prices__text">Normal</span>
								</div>
								<div className="prices__price">
									<span className="prices__number">20$</span>
									<small className="prices__advice">Al mes</small>
								</div>
								<div className="prices__buy">
									<a href="#" className="prices__btn">
										{' '}
										Prueba gratis{' '}
									</a>
								</div>
								<div className="prices__reward">Un curso de desarrollo web</div>
								<div className="prices__reward">
									Soporte a preguntas y dudas
								</div>
								<div className="prices__reward">
									Certificado de finalizacion
								</div>
							</article>
							<article className="prices__box">
								<div className="prices__subtitle">
									<span className="prices__text">Premium</span>
								</div>
								<div className="prices__price">
									<span className="prices__number">50$</span>
									<small className="prices__advice">Al mes</small>
								</div>
								<div className="prices__buy">
									<a href="#" className="prices__btn">
										{' '}
										Prueba gratis{' '}
									</a>
								</div>
								<div className="prices__reward">
									Cinco curso de desarrollo web
								</div>
								<div className="prices__reward">
									Soporte a preguntas y dudas prioritario
								</div>
								<div className="prices__reward">
									Certificado de finalizacion
								</div>
							</article>
						</div>
					</section>
					<section className="about__extra">
						<header className="extra__header">
							<h2 className="extra__title">
								Información <span className="title__color">extra</span>
							</h2>
						</header>
						<div className="extra__container">
							<article className="extra__info">
								<i className="extra__icon fa-solid fa-heart"></i>
								<h4 className="extra__subtitle">Alumnos contentos</h4>
								<span className="extra__quantity">37 500</span>
							</article>
							<article className="extra__info">
								<i className="extra__icon fa-solid fa-clock"></i>
								<h4 className="extra__subtitle">Horas de contenido</h4>
								<span className="extra__quantity">375,00</span>
							</article>
							<article className="extra__info">
								<i className="extra__icon fa-solid fa-star"></i>
								<h4 className="extra__subtitle">Puntuacion</h4>
								<span className="extra__quantity">10</span>
							</article>
						</div>
					</section> */}
				</section>
			</Common>
		</>
	);
};
