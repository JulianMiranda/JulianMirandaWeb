import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import yo from '../assets/img/yo2.jpeg'; /* 
import pdf from '../assets/pdf/Curriculum_domitila.pdf'; */

export const Drawerbar = () => {
	const [openDrawer, setOpenDrawer] = useState(true);
	const _handleButton = () => {
		setOpenDrawer(!openDrawer);
	};

	return (
		<>
			<nav
				style={{
					right: openDrawer ? 0 : '-45vw'
				}}
				className="layout__menu-drawer"
			>
				<section className="aside__user-info-drawer">
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
					<ul className="menu__list-drawer">
						<li className="menu__option">
							<NavLink
								to="home"
								className={({isActive}) =>
									`menu__link ${isActive ? 'menu__link--active' : ''}`
								}
							>
								<i className="menu__icon fa-solid fa-house"></i>
								<span className="menu__overlay">Home</span>
							</NavLink>
						</li>

						<li className="menu__option">
							<NavLink
								to="about-me"
								className={({isActive}) =>
									`menu__link ${isActive ? 'menu__link--active' : ''}`
								}
							>
								<i className="menu__icon fa-solid fa-user"></i>
								<span className="menu__overlay">Sobre mi</span>
							</NavLink>
						</li>

						<li className="menu__option">
							<NavLink
								to="curriculum"
								className={({isActive}) =>
									`menu__link ${isActive ? 'menu__link--active' : ''}`
								}
							>
								<i className="menu__icon fa-solid fa-graduation-cap"></i>
								<span className="menu__overlay">Curriculum</span>
							</NavLink>
						</li>

						<li className="menu__option">
							<NavLink
								to="portfolio"
								className={({isActive}) =>
									`menu__link ${isActive ? 'menu__link--active' : ''}`
								}
							>
								<i className="menu__icon fa-solid fa-briefcase"></i>
								<span className="menu__overlay">Portafolio</span>
							</NavLink>
						</li>

						<li className="menu__option">
							<NavLink
								to="contact"
								className={({isActive}) =>
									`menu__link ${isActive ? 'menu__link--active' : ''}`
								}
							>
								<i className="menu__icon fa-solid fa-envelope"></i>
								<span className="menu__overlay">Contacto</span>
							</NavLink>
						</li>
					</ul>
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
							/* href={pdf} */
							href={'#'}
							rel="noopener noreferrer"
							download="Curriculum_JulianMiranda.pdf"
							className="user-info__btn"
						>
							Descargar CV
						</a>
					</div>
					<footer className="user-info__footer">
						&copy; {new Date().getFullYear()} Julian Miranda Web
					</footer>
				</section>
			</nav>

			<div className="layout__menu-toggle-drawer" onClick={_handleButton}>
				{openDrawer ? (
					<i className="menu-toggle__icon fa-solid fa-xmark"></i>
				) : (
					<i className="menu-toggle__icon fa-solid fa-bars"></i>
				)}
			</div>
		</>
	);
};
