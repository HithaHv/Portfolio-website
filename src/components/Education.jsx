import React from 'react';
import services from '../data/education';
import SectionTitle from './SectionTitle';
import ServiceItem from './EducationItem';

function Education() {
	return (
		<section id='education' className='py-36'>
		<div className="py-12">
			<SectionTitle>Education</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{services.map(service => (
					<ServiceItem
						key={service.title}
						title={service.title}
						icon={service.icon}
						description={service.description}
					/>
				))}
			</div>
		</div>
		</section>
	);
}

export default Education;
