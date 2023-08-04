type LanguageAction =
	| {type: 'set_spanish_language'}
	| {type: 'set_english_language'};

export interface LanguageState {
	currentLanguage: 'spanish' | 'english';
	/* Common */
	dowloadTextButton: 'Descargar' | 'Download';
	textFullStack: 'Desarrollador FullStack' | 'FullStack Developer';
	menuAbout: 'Sobre mi' | 'About me';
	menuPortfolio: 'Portafolio' | 'Portfolio';
	menuContact: 'Contacto' | 'Contact';
	/* About me */
	titleAbout: 'Sobre' | 'About';
	titleAboutMe: 'mi' | 'me';
	aboutText:
		| 'Desarrollador fullstack especializado en aplicaciones móviles. Destaco por mi habilidad para crear soluciones interactivas y de alta calidad tanto en el frontend como en el backend. Siempre busco aprender y estar al día con las últimas tecnologías.'
		| 'Fullstack developer specialized in mobile applications. I stand out for my ability to create interactive and high-quality solutions both on the frontend and backend. I am always seeking to learn and stay up-to-date with the latest technologies.';
	aboutAge: 'Edad' | 'Age';
	aboutCountry: 'País' | 'Country';
	aboutAddress: 'Dirección' | 'Address';
	aboutPhone: 'Teléfono' | 'Phone number';
	aboutWhatTitle: 'Lo que' | 'What I';
	aboutWhatTitleDo: 'hago' | 'do';
	aboutWhatSubtitle1: 'Programación' | 'Programming';
	aboutWhatSubtext1:
		| 'Como apasionado desarrollador web full stack, mi enfoque radica en la creación de soluciones digitales innovadoras y funcionales que impulsan resultados significativos para los usuarios.'
		| 'As a passionate full stack web developer, my focus lies in creating innovative and functional digital solutions that drive meaningful outcomes for users.';
	aboutWhatSubtitle2: 'Formación' | 'Education';
	aboutWhatSubtext2:
		| 'Graduado en Ingeniería Automática por la Universidad Central de las Villas, mi formación sólida me capacita para abordar desafíos tecnológicos de manera integral.'
		| 'Graduated in Automation Engineering from the Central University of Las Villas, my solid education equips me to tackle technological challenges comprehensively.';
	aboutWhatSubtitle3: 'Desarrollo' | 'Development';
	aboutWhatSubtext3:
		| 'Mi especialidad es el desarrollo de aplicaciones móviles y web de alta calidad, diseñadas para brindar experiencias fluidas y atractivas que superen expectativas.'
		| 'My specialty is the development of high-quality mobile and web applications, designed to provide seamless and engaging experiences that exceed expectations.';

	aboutWhatSubtitle4: 'Administración' | 'Management';
	aboutWhatSubtext4:
		| 'Gestiono mis proyectos con precisión y creatividad, equilibrando una visión estratégica con una implementación técnica sólida para lograr resultados exitosos y duraderos.'
		| 'I manage my projects with precision and creativity, balancing a strategic vision with a strong technical implementation to achieve successful and lasting results.';

	aboutReviews: 'Reseñas' | 'Reviews';
	aboutReviewText1:
		| '"Trabajar con Julian Miranda fue un placer absoluto. Su seriedad y profesionalismo se destacaron desde el principio. Demostró un buen desempeño en cada etapa del proyecto y cumplió con todas las tareas dentro de los plazos establecidos. ¡Altamente recomendado!"'
		| '"Working with Julian Miranda was an absolute pleasure. His seriousness and professionalism stood out from the beginning. He performed well in every stage of the project and completed all tasks within the established deadlines. Highly recommended!"';
	aboutReviewText2:
		| '"No puedo estar más contento con los resultados que Julian Miranda entregó. Es un desarrollador web excepcionalmente competente y cumplidor. Su enfoque serio y habilidades profesionales garantizan un desempeño sobresaliente en cada proyecto."'
		| '"I could not be happier with the results delivered by Julian Miranda. They are an exceptionally skilled and reliable web developer. Their serious approach and professional abilities ensure outstanding performance in every project."';
	/* Curriculum */
	curriculumTitle: 'Formación' | 'Education';
	curriculumUniversity: 'Universidad Martha Abreu' | 'Martha Abreu University';
	curriculumEduTitle1: 'Master desarrollo web' | "Master's in Web Development";
	curriculumEduText1:
		| 'Aprendizaje de habilidades avanzadas para diseñar, desarrollar y mantener aplicaciones y sitios web de alta calidad. El plan de estudios incluyó temas como lenguajes de programación (HTML, CSS, JavaScript, etc.), frameworks y bibliotecas populares, desarrollo frontend y backend, bases de datos, seguridad web, experiencia de usuario (UX), optimización y despliegue de aplicaciones, entre otros. Preparación para enfrentar desafíos complejos en el campo de la programación web y contribuir al desarrollo de proyectos web innovadores.'
		| 'Learning advanced skills to design, develop, and maintain high-quality applications and websites. The curriculum included topics such as programming languages (HTML, CSS, JavaScript, etc.), popular frameworks and libraries, frontend and backend development, databases, web security, user experience (UX), application optimization, and deployment, among others. Prepared to tackle complex challenges in the field of web programming and contribute to the development of innovative web projects.';
	curriculumEduTitle2: 'Automation Engineer' | 'Ingeniero Automático';
	curriculumEduText2:
		| 'Especializado en diseñar, desarrollar y mantener sistemas automáticos que regulan y ajustan procesos y dispositivos sin intervención humana. Capaz de optimizar el rendimiento, la eficiencia y la precisión de sistemas complejos, como máquinas industriales, vehículos autónomos, sistemas de energía y más, a través del uso de algoritmos, sensores y actuadores.'
		| 'Specialized in designing, developing, and maintaining automatic systems that regulate and adjust processes and devices without human intervention. Capable of optimizing the performance, efficiency, and accuracy of complex systems such as industrial machines, autonomous vehicles, power systems, and more, through the use of algorithms, sensors, and actuators.';
	curriculumExperience: 'Experiencia' | 'Experience';
	curriculumExpPlace: 'Cofundador GTS Spain' | 'Co-founder GTS Spain';

	curriculumExpTitle1:
		| 'Desarrollo de aplicaciones móviles'
		| 'Mobile application development';
	curriculumExpText1:
		| 'Cofundador y desarrollador en una empresa de vanguardia especializada en aplicaciones móviles. Creamos soluciones personalizadas y líderes en la industria, proporcionando experiencias móviles excepcionales para impulsar el éxito de nuestros clientes.'
		| "Co-founder and developer at a cutting-edge company specialized in mobile applications. We create customized, industry-leading solutions, delivering exceptional mobile experiences to drive our clients ' success.";
	curriculumExpTitle2:
		| 'Desarrollo de aplicaciones móviles'
		| 'Mobile application development';
	curriculumExpText2:
		| 'Desarrollador de aplicaciones y páginas web en una destacada empresa de tecnología. Contribuí a crear soluciones innovadoras y funcionales, brindando servicios web de alta calidad y experiencias móviles excepcionales para satisfacer las necesidades de los clientes.'
		| "Developer of mobile applications and web pages at a prominent technology company. I contributed to creating innovative and functional solutions, providing high-quality web services and exceptional mobile experiences to meet clients' needs.";
	curriculumExpTitle3: 'Desarrollo de redes' | 'Network development';
	curriculumExpText3:
		| 'Instalación de redes ofreciendo soluciones integrales en implementación y configuración de redes de datos, voz e infraestructura. Desarrollo profesional garantizando conexiones seguras y eficientes para clientes.'
		| 'Network installation offering comprehensive solutions in data, voice, and infrastructure network implementation and configuration. Professional development ensuring secure and efficient connections for clients.';
	curriculumHabilityTitle1: 'Habilidades de' | 'Coding';
	curriculumHabilitySubtitle1: 'código' | 'skills';
	curriculumHabilityTitle2: 'Habilidades de' | 'Desing';
	curriculumHabilitySubtitle2: 'diseño' | 'skills';
	curriculumHabilityText1: 'Diseño HTML y CSS' | 'HTML and CSS design';
	curriculumHabilityText2: 'Diseño Responsivo' | 'Responsive design';
	curriculumHabilityText3: 'Experiencia de Usuario' | 'User Experience (UX)';
	curriculumHabilityText4: 'Gestión de Estado' | 'State Management';
	curriculumKnowTitle: 'Conocimientos' | ' Expertise';
	curriculumKnow1: 'Desarrollo de apps' | 'Apps development';
	curriculumKnow2: 'Desarrollo web' | 'Web development';
	curriculumKnow3: 'Redes sociales' | 'Social media';
	curriculumKnow4: 'Comunicación' | 'Communication';
	curriculumKnow5: 'Administración' | 'Management';
	curriculumKnow6: 'Trabajo en equipo' | 'Teamwork';
	curriculumKnow7: 'Diseño' | 'Desing';
	curriculumCertificates: 'Certificados' | 'Certificates';
	/* Portfolio*/
	portfolioTitle: 'Portafolio' | 'Portfolio';
	/* Contact*/
	contactTitle: 'Contacto' | 'Contact';
	contactDev: 'Desarrollador FullStack' | 'FullStack Developer';

	contactSubtitle1: 'Cómo puedo' | 'How can I';
	contactSubtitle2: 'ayudarte' | 'help you';
	contactName: 'Nombre' | 'Name';
	contactEmail: 'Correo' | 'Email';
	contactSubject: 'Asunto' | 'Subject';
	contactMessage: 'Mensaje' | 'Message';
	contactSend: 'Enviar mensaje' | 'Send message';
}

export const spanishLanguage: LanguageState = {
	currentLanguage: 'spanish',
	dowloadTextButton: 'Descargar',
	textFullStack: 'Desarrollador FullStack',
	menuAbout: 'Sobre mi',
	menuPortfolio: 'Portafolio',
	menuContact: 'Contacto',
	titleAbout: 'Sobre',
	titleAboutMe: 'mi',
	aboutText:
		'Desarrollador fullstack especializado en aplicaciones móviles. Destaco por mi habilidad para crear soluciones interactivas y de alta calidad tanto en el frontend como en el backend. Siempre busco aprender y estar al día con las últimas tecnologías.',
	aboutAge: 'Edad',
	aboutCountry: 'País',
	aboutAddress: 'Dirección',
	aboutPhone: 'Teléfono',
	aboutWhatTitle: 'Lo que',
	aboutWhatTitleDo: 'hago',
	aboutWhatSubtitle1: 'Programación',
	aboutWhatSubtext1:
		'Como apasionado desarrollador web full stack, mi enfoque radica en la creación de soluciones digitales innovadoras y funcionales que impulsan resultados significativos para los usuarios.',
	aboutWhatSubtitle2: 'Formación',
	aboutWhatSubtext2:
		'Graduado en Ingeniería Automática por la Universidad Central de las Villas, mi formación sólida me capacita para abordar desafíos tecnológicos de manera integral.',
	aboutWhatSubtitle3: 'Desarrollo',
	aboutWhatSubtext3:
		'Mi especialidad es el desarrollo de aplicaciones móviles y web de alta calidad, diseñadas para brindar experiencias fluidas y atractivas que superen expectativas.',
	aboutWhatSubtitle4: 'Administración',
	aboutWhatSubtext4:
		'Gestiono mis proyectos con precisión y creatividad, equilibrando una visión estratégica con una implementación técnica sólida para lograr resultados exitosos y duraderos.',
	aboutReviews: 'Reseñas',
	aboutReviewText1:
		'"Trabajar con Julian Miranda fue un placer absoluto. Su seriedad y profesionalismo se destacaron desde el principio. Demostró un buen desempeño en cada etapa del proyecto y cumplió con todas las tareas dentro de los plazos establecidos. ¡Altamente recomendado!"',
	aboutReviewText2:
		'"No puedo estar más contento con los resultados que Julian Miranda entregó. Es un desarrollador web excepcionalmente competente y cumplidor. Su enfoque serio y habilidades profesionales garantizan un desempeño sobresaliente en cada proyecto."',
	curriculumTitle: 'Formación',
	curriculumUniversity: 'Universidad Martha Abreu',
	curriculumEduTitle1: 'Master desarrollo web',
	curriculumEduTitle2: 'Ingeniero Automático',
	curriculumEduText1:
		'Aprendizaje de habilidades avanzadas para diseñar, desarrollar y mantener aplicaciones y sitios web de alta calidad. El plan de estudios incluyó temas como lenguajes de programación (HTML, CSS, JavaScript, etc.), frameworks y bibliotecas populares, desarrollo frontend y backend, bases de datos, seguridad web, experiencia de usuario (UX), optimización y despliegue de aplicaciones, entre otros. Preparación para enfrentar desafíos complejos en el campo de la programación web y contribuir al desarrollo de proyectos web innovadores.',
	curriculumEduText2:
		'Especializado en diseñar, desarrollar y mantener sistemas automáticos que regulan y ajustan procesos y dispositivos sin intervención humana. Capaz de optimizar el rendimiento, la eficiencia y la precisión de sistemas complejos, como máquinas industriales, vehículos autónomos, sistemas de energía y más, a través del uso de algoritmos, sensores y actuadores.',
	curriculumExperience: 'Experiencia',
	curriculumExpPlace: 'Cofundador GTS Spain',

	curriculumExpTitle1: 'Desarrollo de aplicaciones móviles',
	curriculumExpText1:
		'Cofundador y desarrollador en una empresa de vanguardia especializada en aplicaciones móviles. Creamos soluciones personalizadas y líderes en la industria, proporcionando experiencias móviles excepcionales para impulsar el éxito de nuestros clientes.',
	curriculumExpTitle2: 'Desarrollo de aplicaciones móviles',
	curriculumExpText2:
		'Desarrollador de aplicaciones y páginas web en una destacada empresa de tecnología. Contribuí a crear soluciones innovadoras y funcionales, brindando servicios web de alta calidad y experiencias móviles excepcionales para satisfacer las necesidades de los clientes.',
	curriculumExpTitle3: 'Desarrollo de redes',
	curriculumExpText3:
		'Instalación de redes ofreciendo soluciones integrales en implementación y configuración de redes de datos, voz e infraestructura. Desarrollo profesional garantizando conexiones seguras y eficientes para clientes.',
	curriculumHabilityTitle1: 'Habilidades de',
	curriculumHabilitySubtitle1: 'código',
	curriculumHabilityTitle2: 'Habilidades de',
	curriculumHabilitySubtitle2: 'diseño',
	curriculumHabilityText1: 'Diseño HTML y CSS',
	curriculumHabilityText2: 'Diseño Responsivo',
	curriculumHabilityText3: 'Experiencia de Usuario',
	curriculumHabilityText4: 'Gestión de Estado',
	curriculumKnowTitle: 'Conocimientos',
	curriculumKnow1: 'Desarrollo de apps',
	curriculumKnow2: 'Desarrollo web',
	curriculumKnow3: 'Redes sociales',
	curriculumKnow4: 'Comunicación',
	curriculumKnow5: 'Administración',
	curriculumKnow6: 'Trabajo en equipo',
	curriculumKnow7: 'Diseño',
	curriculumCertificates: 'Certificados',
	/* Portfolio*/
	portfolioTitle: 'Portafolio',
	/* Contact*/
	contactTitle: 'Contacto',
	contactDev: 'Desarrollador FullStack',

	contactSubtitle1: 'Cómo puedo',
	contactSubtitle2: 'ayudarte',
	contactName: 'Nombre',
	contactEmail: 'Correo',
	contactSubject: 'Asunto',
	contactMessage: 'Mensaje',
	contactSend: 'Enviar mensaje'
};

export const englishLanguage: LanguageState = {
	currentLanguage: 'english',
	dowloadTextButton: 'Download',
	textFullStack: 'FullStack Developer',
	menuAbout: 'About me',
	menuPortfolio: 'Portfolio',
	menuContact: 'Contact',
	titleAbout: 'About',
	titleAboutMe: 'me',
	aboutText:
		'Fullstack developer specialized in mobile applications. I stand out for my ability to create interactive and high-quality solutions both on the frontend and backend. I am always seeking to learn and stay up-to-date with the latest technologies.',
	aboutAge: 'Age',
	aboutCountry: 'Country',
	aboutAddress: 'Address',
	aboutPhone: 'Phone number',
	aboutWhatTitle: 'What I',
	aboutWhatTitleDo: 'do',
	aboutWhatSubtitle1: 'Programming',
	aboutWhatSubtext1:
		'As a passionate full stack web developer, my focus lies in creating innovative and functional digital solutions that drive meaningful outcomes for users.',
	aboutWhatSubtitle2: 'Education',
	aboutWhatSubtext2:
		'Graduated in Automation Engineering from the Central University of Las Villas, my solid education equips me to tackle technological challenges comprehensively.',
	aboutWhatSubtitle3: 'Development',
	aboutWhatSubtext3:
		'My specialty is the development of high-quality mobile and web applications, designed to provide seamless and engaging experiences that exceed expectations.',
	aboutWhatSubtitle4: 'Management',
	aboutWhatSubtext4:
		'I manage my projects with precision and creativity, balancing a strategic vision with a strong technical implementation to achieve successful and lasting results.',
	aboutReviews: 'Reviews',
	aboutReviewText1:
		'"Working with Julian Miranda was an absolute pleasure. His seriousness and professionalism stood out from the beginning. He performed well in every stage of the project and completed all tasks within the established deadlines. Highly recommended!"',
	aboutReviewText2:
		'"I could not be happier with the results delivered by Julian Miranda. They are an exceptionally skilled and reliable web developer. Their serious approach and professional abilities ensure outstanding performance in every project."',
	curriculumTitle: 'Education',
	curriculumUniversity: 'Martha Abreu University',
	curriculumEduTitle1: "Master's in Web Development",
	curriculumEduText1:
		'Learning advanced skills to design, develop, and maintain high-quality applications and websites. The curriculum included topics such as programming languages (HTML, CSS, JavaScript, etc.), popular frameworks and libraries, frontend and backend development, databases, web security, user experience (UX), application optimization, and deployment, among others. Prepared to tackle complex challenges in the field of web programming and contribute to the development of innovative web projects.',
	curriculumEduTitle2: 'Automation Engineer',
	curriculumEduText2:
		'Specialized in designing, developing, and maintaining automatic systems that regulate and adjust processes and devices without human intervention. Capable of optimizing the performance, efficiency, and accuracy of complex systems such as industrial machines, autonomous vehicles, power systems, and more, through the use of algorithms, sensors, and actuators.',

	curriculumExperience: 'Experience',
	curriculumExpPlace: 'Co-founder GTS Spain',

	curriculumExpTitle1: 'Mobile application development',
	curriculumExpText1:
		"Co-founder and developer at a cutting-edge company specialized in mobile applications. We create customized, industry-leading solutions, delivering exceptional mobile experiences to drive our clients ' success.",
	curriculumExpTitle2: 'Mobile application development',
	curriculumExpText2:
		"Developer of mobile applications and web pages at a prominent technology company. I contributed to creating innovative and functional solutions, providing high-quality web services and exceptional mobile experiences to meet clients' needs.",
	curriculumExpTitle3: 'Network development',
	curriculumExpText3:
		'Network installation offering comprehensive solutions in data, voice, and infrastructure network implementation and configuration. Professional development ensuring secure and efficient connections for clients.',
	curriculumHabilityTitle1: 'Coding',
	curriculumHabilitySubtitle1: 'skills',
	curriculumHabilityTitle2: 'Desing',
	curriculumHabilitySubtitle2: 'skills',
	curriculumHabilityText1: 'HTML and CSS design',
	curriculumHabilityText2: 'Responsive design',
	curriculumHabilityText3: 'User Experience (UX)',
	curriculumHabilityText4: 'State Management',
	curriculumKnowTitle: ' Expertise',
	curriculumKnow1: 'Apps development',
	curriculumKnow2: 'Web development',
	curriculumKnow3: 'Social media',
	curriculumKnow4: 'Communication',
	curriculumKnow5: 'Management',
	curriculumKnow6: 'Teamwork',
	curriculumKnow7: 'Desing',
	curriculumCertificates: 'Certificates',
	/* Portfolio*/
	portfolioTitle: 'Portfolio',
	/* Contact*/
	contactTitle: 'Contact',
	contactDev: 'FullStack Developer',

	contactSubtitle1: 'How can I',
	contactSubtitle2: 'help you',
	contactName: 'Name',
	contactEmail: 'Email',
	contactSubject: 'Subject',
	contactMessage: 'Message',
	contactSend: 'Send message'
};

export const languageReducer = (
	state: LanguageState,
	action: LanguageAction
): LanguageState => {
	switch (action.type) {
		case 'set_spanish_language':
			return {...spanishLanguage};

		case 'set_english_language':
			return {...englishLanguage};

		default:
			return state;
	}
};
