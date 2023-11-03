import React from 'react';
import { FaJava, FaJs, FaHtml5, FaCss3, FaGithub, FaDatabase, FaFilePowerpoint, FaFileWord, FaFileExcel, FaBootstrap, FaCode, FaCoffee } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const skills = [
  {
    name: 'Java',
    icon: <FaJava />,
  },
  {
    name: 'JavaScript',
    icon: <FaJs />,
  },
  {
    name: 'HTML/CSS',
    icon: <FaHtml5 />,
  },
  {
    name: 'GitHub Copilot',
    icon: <FaGithub />,
  },
  {
    name: 'MySQL',
    icon: <FaDatabase />,
  },
  {
    name: 'MS PowerPoint',
    icon: <FaFilePowerpoint />,
  },
  {
    name: 'MS Word',
    icon: <FaFileWord />,
  },
  {
    name: 'MS Excel',
    icon: <FaFileExcel />,
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap />,
  },
  {
    name: 'Tailwind CSS',
    icon: <FaCode />,
  },
  {
    name: 'Jasper',
    icon: <FaCoffee />,
  },
  {
    name: 'Tabnine',
    icon: <FaCode />,
  },
];

function Skills() {
    return (
      <section id='skills' className='py-6'>
      <SectionTitle id="works">Skills</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="p-6 text-center dark:text-gray-300 bg-indigo-200 dark:bg-slate-800 rounded-lg flex flex-col items-center justify-center hover:bg-indigo-300 dark:hover:bg-slate-700 transform hover:scale-105 transition-transform duration-300">
            {skill.icon}
            <p className="text-lg font-semibold mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
    
  );
}

export default Skills;
