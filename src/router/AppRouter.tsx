import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Home} from '../pages/Home';
import {AboutMe} from '../pages/AboutMe';
import {Contact} from '../pages/Contact';
import {Curriculum} from '../pages/Curriculum';
import {Portfolio} from '../pages/Portfolio';
import {Navbar} from '../components/Navbar';

export const AppRouter = () => {
	return (
		<>
			<Navbar />
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
