import React from 'react';
import myImg from '../images/hero.jpg';
function HeroSection() {
    return (
		<section id='Hero'>
    <div className="flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 p-4">
            <img
                src={myImg}
                alt="Your Image"
                className="w-full rounded-lg max-w-sm mx-auto mb-10 mt-24"
            />
        </div>
        <div className="w-full md:w-1/2 p-4">
            <div id="hero" className="py-20">
                <div className="text-center">
                    <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
                        Hitha H V
                    </h1>
                    <p className="text-md md:text-xl max-w-md mb-3 text-gray-900 dark:text-gray-300">
                        In pursuit of a degree in Information Science and Engineering at RNSIT, I am fueled by a relentless passion for the software field.
                        As an eager and quick learner, I am dedicated to pushing boundaries and contributing innovative solutions to any software project I undertake.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1dbUFNIYnYLVOWotZQo08VwFbBGPDhmci/view?usp=sharing"
                        className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover.bg-indigo-700 md:text-md"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

    );
}

export default HeroSection;
