import {Common} from './Common';
import test1 from '../assets/img/testimonio1.jpg';
import test2 from '../assets/img/testimonio2.jpg';

export const AboutMe = () => {
	return (
		<>
			<Common>
				<section className="content__page content__about">
					<header className="about__header">
						<h1 className="about__title">
							Sobre <span className="title__color">mi</span>
						</h1>
					</header>
					<section className="about__personal-info">
						<article className="personal-info__bio">
							<p className="personal-info__description">
								Desarrollador fullstack especializado en aplicaciones móviles.
								Destaco por mi habilidad para crear soluciones interactivas y de
								alta calidad tanto en el frontend como en el backend. Siempre
								busco aprender y estar al día con las últimas tecnologías.
							</p>
						</article>
						<div className="personal-info__data">
							<ul className="personal-info__list">
								<li className="personal-info__option">
									<span className="personal-info__title">Edad</span>
									<span className="personal-info__value">30</span>
								</li>
								<li className="personal-info__option">
									<span className="personal-info__title">País</span>
									<span className="personal-info__value">Cuba</span>
								</li>
								<li className="personal-info__option">
									<span className="personal-info__title">Dirección</span>
									<span className="personal-info__value">
										Quito, Pichincha, Ecuador
									</span>
								</li>
								<li className="personal-info__option">
									<span className="personal-info__title">Teléfono</span>
									<span className="personal-info__value">+593 962914922</span>
								</li>
							</ul>
						</div>
					</section>

					<section className="about__services">
						<header className="services__header">
							<h2 className="services__title">
								Lo que <span className="title__color">hago</span>
							</h2>
						</header>

						<div className="services__container">
							<article className="services__sevice">
								<div className="service__icon">
									<i className="service__real-icon fa-solid fa-code"></i>
								</div>
								<div className="content">
									<h3 className="service__title">Programación</h3>
									<p className="service__description">
										Como apasionado desarrollador web full stack, mi enfoque
										radica en la creación de soluciones digitales innovadoras y
										funcionales que impulsan resultados significativos para los
										usuarios.
									</p>
								</div>
							</article>
							<article className="services__sevice">
								<div className="service__icon">
									<i className="service__real-icon fa-solid fa-chalkboard-user"></i>
								</div>
								<div className="content">
									<h3 className="service__title">Formación</h3>
									<p className="service__description">
										Graduado en Ingeniería Automática por la Universidad Central
										de las Villas, mi formación sólida me capacita para abordar
										desafíos tecnológicos de manera integral.
									</p>
								</div>
							</article>
							<article className="services__sevice">
								<div className="service__icon">
									<i className="service__real-icon fa-solid fa-computer"></i>
								</div>
								<div className="content">
									<h3 className="service__title">Desarrollo</h3>
									<p className="service__description">
										Mi especialidad es el desarrollo de aplicaciones móviles y
										web de alta calidad, diseñadas para brindar experiencias
										fluidas y atractivas que superen expectativas.
									</p>
								</div>
							</article>
							<article className="services__sevice">
								<div className="service__icon">
									<i className="service__real-icon fa-solid fa-terminal"></i>
								</div>
								<div className="content">
									<h4 className="service__title">Administracion</h4>
									<p className="service__description">
										Gestiono mis proyectos con precisión y creatividad,
										equilibrando una visión estratégica con una implementación
										técnica sólida para lograr resultados exitosos y duraderos.
									</p>
								</div>
							</article>
						</div>
					</section>
					<section className="about__reviews">
						<header className="reviews__header">
							<h2 className="reviews__title">Reseñas</h2>
						</header>
						<div className="reviews__container">
							<article className="reviews__review">
								<div className="review__image-container">
									<img
										src={test1}
										className="review__image"
										alt="Cara de cliente"
									/>
								</div>
								<div className="review__description">
									<p className="review__text">
										Trabajar con Julian Miranda fue un placer absoluto. Su
										seriedad y profesionalismo se destacaron desde el principio.
										Demostró un buen desempeño en cada etapa del proyecto y
										cumplió con todas las tareas dentro de los plazos
										establecidos. ¡Altamente recomendado!"
									</p>
								</div>
								<div className="review__author">
									<div className="review__author-info">
										<h4 className="review__name">Lianet Vazquez</h4>
										<h5 className="review__company">Developers S.A</h5>
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
									<p className="review__text">
										"No puedo estar más contento con los resultados que [Tu
										Nombre] entregó. Es un desarrollador web excepcionalmente
										competente y cumplidor. Su enfoque serio y habilidades
										profesionales garantizan un desempeño sobresaliente en cada
										proyecto."
									</p>
								</div>
								<div className="review__author">
									<div className="review__author-info">
										<h4 className="review__name">Miguel Oy</h4>
										<h5 className="review__company">CEO Way | U2</h5>
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
