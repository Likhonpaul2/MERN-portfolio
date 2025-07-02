import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectsList = [
    {
        id: 1,
        name: "Hobby Hub Client",
        repo: "https://github.com/Likhonpaul2/hobby-hub-client",
        website: "https://hobby-hub-client-fcf7f.web.app/",
        description: "Hobby Hub is a web application designed to connect people with similar hobbies and interests. Users can discover, share, and join various hobby groups, participate in events, and build a community around their passions."
    },
    {
        id: 2,
        name: "B2B Wholesale Platform",
        repo: "https://github.com/Likhonpaul2/b2b-wholesale-plateform-client",
        website: "https://b2b-wholesale-marketplace.web.app/",
        description: "A B2B wholesale platform designed to connect businesses with suppliers and streamline the wholesale purchasing process. The platform offers product listing, order management, user authentication, and secure transactions to simplify bulk buying and enhance business-to-business interactions."
    },
    {
        id: 3,
        name: "Event Explorer",
        repo: "https://github.com/Likhonpaul2/event-explorer",
        website: "https://event-explorer-6b96f.web.app/",
        description: "Event Explorer is a single-page application (SPA) built using React and Firebase that allows users to discover and explore local events such as conferences, workshops, exhibitions, sports matches, and more. Users can log in, browse events, view details, reserve seats, and update their profile — all through a beautiful, responsive interface."
    },
    {
        id: 4,
        name: "Dragon Braking News",
        repo: "https://github.com/Likhonpaul2/dragon-breaking-news",
        website: "https://dragon-breaking-news-31a4c.web.app/category/1",
        description: "Dragon News is a web application designed to deliver the latest news articles and updates in an organized and user-friendly interface. Built with modern web technologies, this project demonstrates best practices in frontend and backend development."
    },
];

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div id='projects'>
            <div>
                <h2 className='text-xl my-[40px] text-black dark:text-dark-primary-text relative inline-block font-bold' data-aos="fade-up">
                    Projects
                    <span className="absolute left-0 -bottom-0.5 h-[0.5px] bg-black dark:bg-white transition-all duration-300 w-[50%]"></span>
                </h2>

                <div className='grid gap-[50px]'>
                    {
                        projectsList.map((project, index) => (
                            <div
                                key={project.id}
                                className="py-[30px] border border-border-color rounded-xl duration-300 bg-secondary-text/15 overflow-hidden hover:scale-x-110 hover:scale-y-110 p-10"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className='justify-between flex mb-[15px] gap-4'>
                                    <div className="">
                                        <a href={project.repo} target='_blank' rel="noreferrer" className='text-xl font-bold text-primary-text dark:text-dark-primary-text duration-300 hover:text-secondary-text '>
                                            {project.name}
                                        </a>
                                    </div>
                                    <div className="text-secondary-text border border-secondary-text px-[12px] rounded-full bg-slate-100">MERN</div>
                                </div>
                                <div className='text-secondary-text mb-[20px] text-[14px]'>
                                    {project.description}
                                </div>
                                <div className="flex items-center gap-4 flex-wrap">
                                    <a href={project.repo} className='inline-flex items-center gap-2 text-secondary-text text-[13px] font-medium font-mono px-[12px] py-[6px] rounded-full border border-secondary-text/60 bg-bg-color hover:shadow-xl' target="_blank" rel="noopener noreferrer">
                                        <span>🔗</span>
                                        <span>github</span>
                                    </a>
                                    <a href={project.website} className='inline-flex items-center gap-2 text-[13px] font-medium font-mono px-[12px] py-[6px] rounded-full border border-secondary-text/60 bg-[#000000] text-white hover:shadow-xl' target="_blank" rel="noopener noreferrer">
                                        <span>🚀</span>
                                        <span>website</span>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;
