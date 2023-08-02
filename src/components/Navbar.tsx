import {Link, NavLink} from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="layout__menu">
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
		</nav>
	);
};
{
	/* <nav className="layout__menu">
			<div className="menu__list">
				<div className="menu__option">
					<NavLink
						className="{({isActive})=>`menu__link  ${isActive ? 'active': ''}`}"
						to="/home"
					>
						Home
					</NavLink>
				</div>

				<NavLink
					className="{({isActive})=>`menu__link  ${isActive ? 'active': ''}`}"
					to="/about-me"
				>
					Sobre mi
				</NavLink>
				<NavLink
					className="{({isActive})=>`menu__link  ${isActive ? 'active': ''}`}"
					to="/curriculum"
				>
					Curriculum
				</NavLink>
				<NavLink
					className="{({isActive})=>`menu__link  ${isActive ? 'active': ''}`}"
					to="/portfolio"
				>
					Portfolio
				</NavLink>
				<NavLink
					className="{({isActive})=>`menu__link  ${isActive ? 'active': ''}`}"
					to="/contact"
				>
					Contact
				</NavLink>
			</div>
		</nav> */
}
