import {Link, NavLink} from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				Asociaciones
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						className="{({isActive})=>`nav-item nav-link ${isActive ? 'active': ''}`}"
						to="/home"
					>
						Home
					</NavLink>

					<NavLink
						className="{({isActive})=>`nav-item nav-link ${isActive ? 'active': ''}`}"
						to="/about-me"
					>
						Sobre mi
					</NavLink>
					<NavLink
						className="{({isActive})=>`nav-item nav-link ${isActive ? 'active': ''}`}"
						to="/curriculum"
					>
						Curriculum
					</NavLink>
					<NavLink
						className="{({isActive})=>`nav-item nav-link ${isActive ? 'active': ''}`}"
						to="/portfolio"
					>
						Portfolio
					</NavLink>
					<NavLink
						className="{({isActive})=>`nav-item nav-link ${isActive ? 'active': ''}`}"
						to="/contact"
					>
						Contact
					</NavLink>
				</div>
			</div>
		</nav>
	);
};
