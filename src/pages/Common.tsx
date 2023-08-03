import {Link, NavLink} from 'react-router-dom';
import yo from '../assets/img/yo2.jpeg';
import useScreenSize from '../hooks/useScreenSize';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Common = ({children}: any) => {
	const {width} = useScreenSize();
	return (
		<div className="layout">
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
						<h4 className="user-info__job">Desarrollador FullStack</h4>
					</div>
					{/* <nav className="layout__menu">
						<ul className="menu__list">
							<li className="menu__option">
								<NavLink to="home" className="menu__link menu__link--active">
									<i className="menu__icon fa-solid fa-house"></i>
									<span className="menu__overlay">Home</span>
								</NavLink>
							</li>

							<li className="menu__option">
								<NavLink to="about-me" className="menu__link">
									<i className="menu__icon fa-solid fa-user"></i>
									<span className="menu__overlay">Sobre mi</span>
								</NavLink>
							</li>

							<li className="menu__option">
								<NavLink to="curriculum" className="menu__link">
									<i className="menu__icon fa-solid fa-graduation-cap"></i>
									<span className="menu__overlay">Curriculum</span>
								</NavLink>
							</li>

							<li className="menu__option">
								<NavLink to="portfolio" className="menu__link">
									<i className="menu__icon fa-solid fa-briefcase"></i>
									<span className="menu__overlay">Portafolio</span>
								</NavLink>
							</li>

							<li className="menu__option">
								<NavLink to="contact" className="menu__link">
									<i className="menu__icon fa-solid fa-envelope"></i>
									<span className="menu__overlay">Contacto</span>
								</NavLink>
							</li>
						</ul>
					</nav> */}
					<div className="user-info__links">
						<ul className="links__social">
							<li className="social__option">
								<a href="#" className="social__link">
									<i className="social__icon fa-brands fa-facebook"></i>
								</a>
							</li>
							<li className="social__option">
								<a href="#" className="social__link">
									<i className="social__icon fa-brands fa-linkedin"></i>
								</a>
							</li>
							<li className="social__option">
								<a href="#" className="social__link">
									<i className="social__icon fa-brands fa-instagram"></i>
								</a>
							</li>
						</ul>
					</div>
					<div className="user-info__buttons">
						<a href="#" className="user-info__btn">
							Descargar CV
						</a>
					</div>
					<footer className="user-info__footer">
						&copy; 2023 Julian Miranda Web
					</footer>
				</section>
			</aside>

			<main className="layout__content">{children}</main>
		</div>
	);
};
