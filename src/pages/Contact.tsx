import {useContext} from 'react';
import {LanguageContext} from '../context/languages/LanguageContext';
import {Common} from './Common';
export const Contact = () => {
	const {language} = useContext(LanguageContext);
	return (
		<Common>
			<section className="content__page content__contact">
				<header className="contact__header">
					<h1 className="contact__title">{language.contactTitle}</h1>
				</header>
				<div className="contact__container">
					<section className="contact__info">
						<div className="contact__data">
							<i className="contact__icon fa-solid fa-location-dot"></i>
							<h1 className="contact__subtitle">Quito</h1>
						</div>
						<div className="contact__data">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://wa.me/+593962914922"
							>
								<i className="contact__icon fa-brands fa-whatsapp"></i>
								<h1 className="contact__subtitle">+593 962914922</h1>
							</a>
						</div>
						<div className="contact__data">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="mailto:jmirandauria@gmail.com?Subject=Oportunidad%20de%20desarrollo%20web"
							>
								<i className="contact__icon fa-solid fa-envelope"></i>
								<h1 className="contact__subtitle">jmirandauria@gmail.com</h1>
							</a>
						</div>
						<div className="contact__data">
							<i className="contact__icon fa-solid fa-circle-check"></i>
							<h1 className="contact__subtitle">{language.contactDev}</h1>
						</div>
					</section>
					<section className="contact__form-box">
						<header className="contact__form-header">
							<h3 className="form-header__title">
								{language.contactSubtitle1}
								<span className="subtitle__color">
									{' '}
									{language.contactSubtitle2}?
								</span>
							</h3>
						</header>
						<form className="contact__form">
							<div className="form__container">
								<section className="form__left">
									<div className="form__group">
										<input
											type="text"
											className="form__input"
											placeholder="Nombre"
											name="name"
											required
										/>
										<label htmlFor="name" className="form__label">
											{language.contactName}
										</label>
									</div>

									<div className="form__group">
										<input
											type="email"
											className="form__input"
											placeholder="Email"
											name="email"
											required
										/>
										<label htmlFor="email" className="form__label">
											{language.contactEmail}
										</label>
									</div>
									<div className="form__group">
										<input
											type="text"
											className="form__input"
											placeholder="Asunto"
											name="subject"
											required
										/>
										<label htmlFor="name" className="form__label">
											{language.contactSubject}
										</label>
									</div>
								</section>
								<section className="form__right">
									<div className="form__group form__group-textarea">
										<textarea
											className="form__input form__input-textarea"
											placeholder="Mensaje"
											name="message"
											required
										></textarea>
										<label htmlFor="message" className="form__label">
											{language.contactMessage}
										</label>
									</div>
								</section>
							</div>
							<input
								type="submit"
								className="form__button"
								value={language.contactSend}
								onSubmit={(event) => console.log(event)}
							/>
							{/* <div className="wrapper">
								<svg className="animated-check" viewBox="0 0 24 24">
									<path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />{' '}
								</svg>
							</div> */}
						</form>
						<div className="contact__map" id="load-iframe-map">
							<iframe
								className="contact__iframe"
								frameBorder={0}
								scrolling="no"
								marginHeight={0}
								marginWidth={0}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4536.097330800159!2d-78.50189596059214!3d-0.14772436143168075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1690686255170!5m2!1ses-419!2sec"
							></iframe>
							{/* <div className="lds-dual-ring"></div> */}
						</div>
					</section>
				</div>
			</section>
		</Common>
	);
};
