import React from 'react';
import SectionTitle from './SectionTitle';
import img2 from '../images/2.jpg';

function About() {
	return (
		<section id='about' className='py-8'>
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-8/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-900 dark:text-gray-300 text-justify">
				I am currently on a dynamic journey towards obtaining my degree in Information Science and Engineering at RNSIT. My educational path has instilled in me a profound passion for the world of software, and I am committed to harnessing this enthusiasm to make a lasting impact.
				<br/>One of my defining characteristics is my unwavering eagerness to delve into the software field. Whether it's developing applications, solving complex problems, or exploring new technologies, I approach each task with a genuine sense of excitement.
				<br/>My ability to quickly grasp new concepts and technologies is one of my strengths. Adapting to the ever-evolving software landscape is not a challenge, but a thrilling endeavor. This agility enables me to contribute effectively to projects, even in rapidly changing environments.
				<br/>Furthermore, I possess excellent communication skills, which allow me to collaborate seamlessly with teams, convey complex ideas clearly, and engage with stakeholders effectively. This skill set, combined with my eagerness, quick learning ability, and dedication, makes me a valuable asset to any software project. I am poised to bring innovation, dedication, and a strong work ethic to any role in the software field, while fostering productive communication within the team.</p>
				<a
					href="mailto:1rn20is062.hithahv@gmail.com"
					className="block mt-3 text-md md:text-lg text-gray-900 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					1rn20is062.hithahv@gmail.com
				</a>
			</div>

			<img
				src={img2}
				alt="Hitha"
				className="w-full md:w-5/12 rounded-full object-cover"
			/>
		</div>
		</section>
	);
}

export default About;
