import React from 'react';

function Footer() {
	return (
		<div className="py-5 text-center text-gray-900 dark:text-gray-300 rounded-t-lg">
			<a href="#hero" className="block text-xl md:text-2xl font-semibold">
				Hitha H V
			</a>
			<a
				href="1rn20is062.hithahv@gmail.com"
				className="text-sm md:text-md hover:text-indigo-500"
			>
				1rn20is062.hithahv@gmail.com
			</a>
			<p className="text-xs mt-2 text-gray-900 dark:text-gray-300">
				© {new Date().getFullYear()} <br/>
				Made by Hitha 
			</p>
		</div>
	);
}

export default Footer;