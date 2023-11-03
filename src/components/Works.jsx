import React from 'react';
import works from '../data/works';
import SectionTitle from './SectionTitle';
import WorkItem from './WorkItem';

function Works() {
	return (
		<section id='work'>
		<div className="py-8 mb-16">
			<SectionTitle id="works">Recent Works</SectionTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				{works.map(work => (
					<WorkItem
						key={work.title}
						imgUrl={work.imgUrl}
						title={work.title}
						tech={work.tech}
						workUrl={work.workUrl}
					/>
				))}
			</div>
		</div>
		</section>
	);
}

export default Works;
