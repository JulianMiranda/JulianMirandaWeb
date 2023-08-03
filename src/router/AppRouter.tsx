import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Home} from '../pages/Home';
import {AboutMe} from '../pages/AboutMe';
import {Contact} from '../pages/Contact';
import {Curriculum} from '../pages/Curriculum';
import {Portfolio} from '../pages/Portfolio';
import {Navbar} from '../components/Navbar';
import useScreenSize from '../hooks/useScreenSize';
import {Drawerbar} from '../components/Drawerbar';

export const AppRouter = () => {
	const {width} = useScreenSize();
	return (
		<>
			{width <= 1060 ? <Drawerbar /> : <Navbar />}
			<Routes>
				<Route path="home" element={<Home />} />
				<Route path="about-me" element={<AboutMe />} />
				<Route path="contact" element={<Contact />} />
				<Route path="curriculum" element={<Curriculum />} />
				<Route path="portfolio" element={<Portfolio />} />
				<Route path="/*" element={<Navigate to="/home" />} />
			</Routes>
		</>
	);
};
