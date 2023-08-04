import {Common} from './Common';
import certificate from '../assets/img/certificado-1.png';
import {LanguageContext} from '../context/languages/LanguageContext';
import {useContext} from 'react';

export const Curriculum = () => {
	const {language} = useContext(LanguageContext);
	return (
		<Common>
			<section className="content__page content__resume">
				<header className="resume__header">
					<h1 className="resume__title">Curriculum</h1>
				</header>
				<div className="resume__container">
					<section className="resume__left">
						<header className="resume__subheader">
							<h2 className="resume__subtitle">{language.curriculumTitle}</h2>
						</header>
						<div className="resume__timelines">
							<article className="timelines__timeline">
								<header className="timeline__header">
									<h4 className="timeline__year">2018</h4>
									<span className="timeline__company">
										{language.curriculumUniversity}
									</span>
								</header>
								<div className="timeline__divider"></div>
								<div className="timeline__description">
									<h3 className="timeline__title">
										{language.curriculumEduTitle1}
									</h3>
									<p className="timeline__text">
										{language.curriculumEduText1}
									</p>
								</div>
							</article>
							<article className="timelines__timeline">
								<header className="timeline__header">
									<h4 className="timeline__year">2017</h4>
									<span className="timeline__company">
										{language.curriculumUniversity}
									</span>
								</header>
								<div className="timeline__divider"></div>
								<div className="timeline__description">
									<h3 className="timeline__title">
										{language.curriculumEduTitle2}
									</h3>
									<p className="timeline__text">
										{language.curriculumEduText2}
									</p>
								</div>
							</article>
						</div>
						<header className="resume__subheader">
							<h2 className="resume__subtitle">
								{language.curriculumExperience}
							</h2>
						</header>
						<div className="resume__timeline">
							<article className="timelines__timeline">
								<header className="timeline__header">
									<h4 className="timeline__year">2019-Act</h4>
									<span className="timeline__company">GTS Spain</span>
								</header>
								<div className="timeline__divider"></div>
								<div className="timeline__description">
									<h3 className="timeline__title">
										{language.curriculumExpTitle1}
									</h3>
									<p className="timeline__text">
										{language.curriculumExpText1}
									</p>
								</div>
							</article>
							<article className="timelines__timeline">
								<header className="timeline__header">
									<h4 className="timeline__year">2020-2022</h4>
									<span className="timeline__company">Way | U2</span>
								</header>
								<div className="timeline__divider"></div>
								<div className="timeline__description">
									<h3 className="timeline__title">
										{language.curriculumExpTitle2}
									</h3>
									<p className="timeline__text">
										{language.curriculumExpText2}
									</p>
								</div>
							</article>
							<article className="timelines__timeline">
								<header className="timeline__header">
									<h4 className="timeline__year">2017-2019</h4>
									<span className="timeline__company">CEDAI</span>
								</header>
								<div className="timeline__divider"></div>
								<div className="timeline__description">
									<h3 className="timeline__title">
										{language.curriculumExpTitle3}
									</h3>
									<p className="timeline__text">
										{language.curriculumExpText3}
									</p>
								</div>
							</article>
						</div>
					</section>
					<section className="resume__right">
						<header className="resume__subheader">
							<h2 className="resume__subtitle">
								{language.curriculumHabilityTitle1}{' '}
								<span className="subtitle__color">
									{language.curriculumHabilitySubtitle1}
								</span>
							</h2>
						</header>
						<div className="resume__skills">
							<article className="skills__title">
								<h4 className="skills__text">Typescript</h4>
								<span className="skills__number">99%</span>
							</article>
							<div className="skills__progressbar">
								<div className="skills__percentage skills__percentage-p1"></div>
							</div>
							<article className="skills__title">
								<h4 className="skills__text">NodeJs</h4>
								<span className="skills__number">95%</span>
							</article>
							<div className="skills__progressbar">
								<div className="skills__percentage skills__percentage-p2"></div>
							</div>
							<article className="skills__title">
								<h4 className="skills__text">NestJs</h4>
								<span className="skills__number">97%</span>
							</article>
							<div className="skills__progressbar">
								<div className="skills__percentage skills__percentage-p3"></div>
							</div>
							<article className="skills__title">
								<h4 className="skills__text">MongoDB</h4>
								<span className="skills__number">96%</span>
							</article>
							<div className="skills__progressbar">
								<div className="skills__percentage skills__percentage-p4"></div>
							</div>
							<article className="skills__title">
								<h4 className="skills__text">React-Native</h4>
								<span className="skills__number">99%</span>
							</article>
							<div className="skills__progressbar">
								<div className="skills__percentage skills__percentage-p5"></div>
							</div>
							<article className="skills__title">
								<h4 className="skills__text">Firebase</h4>
								<span className="skills__number">95%</span>
							</article>
							<div className="skills__progressbar">
								<div className="skills__percentage skills__percentage-p6"></div>
							</div>
						</div>
						<header className="resume__subheader">
							<h2 className="resume__subtitle">
								{language.curriculumHabilityTitle2}{' '}
								<span className="subtitle__color">
									{language.curriculumHabilitySubtitle2}
								</span>
							</h2>
						</header>
						<div className="resume__skills">
							<article className="skills__title">
								<h4 className="skills__text">
									{language.curriculumHabilityText1}
								</h4>
								<span className="skills__number">90%</span>
							</article>
							<div className="skills__progressbar">
								<div className="skills__percentage skills__percentage-p7"></div>
							</div>
							<article className="skills__title">
								<h4 className="skills__text">
									{language.curriculumHabilityText2}
								</h4>
								<span className="skills__number">100%</span>
							</article>
							<div className="skills__progressbar">
								<div className="skills__percentage skills__percentage-p8"></div>
							</div>
							<article className="skills__title">
								<h4 className="skills__text">
									{language.curriculumHabilityText3}
								</h4>
								<span className="skills__number">100%</span>
							</article>
							<div className="skills__progressbar">
								<div className="skills__percentage skills__percentage-p9"></div>
							</div>
							<article className="skills__title">
								<h4 className="skills__text">
									{language.curriculumHabilityText4}
								</h4>
								<span className="skills__number">100%</span>
							</article>
							<div className="skills__progressbar">
								<div className="skills__percentage skills__percentage-p10"></div>
							</div>
						</div>
						<header className="resume__subheader">
							<h2 className="resume__subtitle">
								{language.curriculumKnowTitle}
							</h2>
						</header>
						<div className="resume__knowledges">
							<ul className="knowledges__list">
								<li className="knowledges__option">
									{language.curriculumKnow1}
								</li>
								<li className="knowledges__option">
									{language.curriculumKnow2}
								</li>
								<li className="knowledges__option">
									{language.curriculumKnow3}
								</li>
								<li className="knowledges__option">
									{language.curriculumKnow4}
								</li>
								<li className="knowledges__option">
									{language.curriculumKnow5}
								</li>
								<li className="knowledges__option">
									{language.curriculumKnow6}
								</li>
								<li className="knowledges__option">
									{language.curriculumKnow7}
								</li>
							</ul>
						</div>
					</section>
				</div>
				<div className="resume__cercificates">
					<header className="resume__subheader">
						<h2 className="resume__subtitle">
							{language.curriculumCertificates}
						</h2>
					</header>
					<section className="certificates_container">
						<article className="certificates__certificate">
							<div className="certificate__logo">
								<img
									src={certificate}
									className="certificate__image"
									alt="Certificado"
								/>
							</div>
							<div className="certificate__content">
								<h4 className="certificate__title">Master NodeJs</h4>
								<span className="certificate__id">
									Teacher: Fernando Herrera
								</span>
								<span className="certificate__date">10 de agosto 2021</span>
							</div>
						</article>
						<article className="certificates__certificate">
							<div className="certificate__logo">
								<img
									src={certificate}
									className="certificate__image"
									alt="Certificado"
								/>
							</div>
							<div className="certificate__content">
								<h4 className="certificate__title">Master AWS</h4>
								<span className="certificate__id">Teacher: Amira Mekkaoui</span>
								<span className="certificate__date">23 de mayo 2021</span>
							</div>
						</article>
						<article className="certificates__certificate">
							<div className="certificate__logo">
								<img
									src={certificate}
									className="certificate__image"
									alt="Certificado"
								/>
							</div>
							<div className="certificate__content">
								<h4 className="certificate__title">Master React-Native</h4>
								<span className="certificate__id">
									Teacher: Fernando Herrera
								</span>
								<span className="certificate__date">12 de enero 2021</span>
							</div>
						</article>
						<article className="certificates__certificate">
							<div className="certificate__logo">
								<img
									src={certificate}
									className="certificate__image"
									alt="Certificado"
								/>
							</div>
							<div className="certificate__content">
								<h4 className="certificate__title">Master CSS3</h4>
								<span className="certificate__id">Teacher: Victor Robles</span>
								<span className="certificate__date">25 octubre 2020</span>
							</div>
						</article>
					</section>
				</div>
			</section>
		</Common>
	);
};
