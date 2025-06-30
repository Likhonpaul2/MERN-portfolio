import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
    SiMongodb, SiExpress, SiReact, SiRedux, SiReactquery,
    SiNodedotjs, SiJavascript, SiFirebase, SiTailwindcss,
    SiGit, SiHtml5, SiCss3, SiJsonwebtokens
} from 'react-icons/si';

const skills = [
    { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
    { name: 'Express.js', icon: <SiExpress color="#ffffff" /> },
    { name: 'React.js', icon: <SiReact color="#61DBFB" /> },
    { name: 'Redux RTK', icon: <SiRedux color="#764ABC" /> },
    { name: 'TanStack Query', icon: <SiReactquery color="#FF4154" /> },
    { name: 'Node.js', icon: <SiNodedotjs color="#3C873A" /> },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'Firebase', icon: <SiFirebase color="#FFA611" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38BDF8" /> },
    { name: 'Git', icon: <SiGit color="#F05032" /> },
    {
        name: 'HTML & CSS', icon: (
            <div className="flex gap-1">
                <SiHtml5 color="#E34F26" /> <SiCss3 color="#1572B6" />
            </div>
        )
    },
    { name: 'JWT', icon: <SiJsonwebtokens color="#6E57E0" /> },
];

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div id='skills' className="py-10 px-4 max-w-6xl mx-auto">
            <h2 className='text-xl my-[40px] text-black relative inline-block font-bold' data-aos="fade-up">
                Skills
                <span className="absolute left-0 -bottom-0.5 h-[0.5px] bg-black transition-all duration-300 w-[50%]"></span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-[#111111] rounded-xl text-white flex flex-col items-center justify-center py-6 shadow-md transition hover:scale-105"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                    >
                        <div className="text-4xl mb-2">{skill.icon}</div>
                        <p className="text-sm font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
