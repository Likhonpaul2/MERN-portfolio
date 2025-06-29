import React from 'react'
import Profile from "../assets/profile2.png"

const Header = () => {
    return (
        <>
            <div className='mb-[100px] border-b border-[#e0e0e0] pb-[60px] text-center'>
                <h1 className='text-[2.8rem] font-bold mb-[16px] text-primary-text'>Emon Paul</h1>
                <p className='text-[1.1rem] text-[#555555] mb-6 font-light'>MERN Stack Developer form Bangladesh.</p>

                {/* contact  */}
                <div className='text-[0.9rem] text-[#555555] font-mono flex justify-center gap-5'>
                    <a
                        href="mailto:lp.emon.paul@gmail.com"
                        className='text-black relative duration-300 group'
                    >
                        mail
                        <span className="absolute left-0 -bottom-0.5 w-0 h-[0.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="https://github.com/Likhonpaul2"
                        target='_blank'
                        className='text-black relative duration-300 group'
                    >
                        github
                        <span className="absolute left-0 -bottom-0.5 w-0 h-[0.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a
                        href="#"
                        className='text-black relative duration-300 group'
                    >
                        linkedin
                        <span className="absolute left-0 -bottom-0.5 w-0 h-[0.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>

            </div>
            {/* profile photo */}
            <div className='items-center justify-center border-b border-[#e0e0e0]'>
                <img src={Profile} alt="profile picture" className='w-[350px] rounded -mt-20 mx-auto backdrop-blur-md ' />
            </div>


            {/* about me  */}
            <div>
                <h2 className='text-xl my-[40px] text-black relative inline-block'>about me
                    <span className="absolute left-0 -bottom-0.5 h-[0.5px] bg-black transition-all duration-300 w-[50%]"></span>
                </h2>
                <p className='leading-loose text-secondary-text max-w-[600px] mx-auto'>Hi, I'm Emon Paul, a 23-year-old Fronted Web Developer from Bangladesh with a Passion for Coding and Technology. I have a keen interest in Web Applications, and Mobile Applications. In my free time, I enjoy working on Personal Projects, Contributing to open-source, and exploring new Programming Languages. I'm always looking for new challenges and opportunities to collaborate with other developers. If you're interested in working together or just want to chat about tech, feel free to reach out. I love connecting with fellow developers and sharing knowledge, so don't hesitate to drop me a message.</p>
            </div>

        </>
    )
}

export default Header
