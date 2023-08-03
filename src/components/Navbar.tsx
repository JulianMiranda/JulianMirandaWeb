import {NavLink} from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="layout__menu">
			<ul className="menu__list">
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
		</nav>
	);
};
