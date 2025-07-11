import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Profile from "../assets/profile2.png";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        id='about'
        className='mb-[100px] border-b border-[#e0e0e0] dark:border-dark-border-color pb-[60px] text-center'
        data-aos="fade-up"
      >
        <h1 className='text-[2.8rem] font-bold mb-[16px] text-primary-text dark:text-dark-primary-text'>Emon Paul</h1>
        <p className='text-[1.1rem] text-[#555555] mb-6 font-light'>
          MERN Stack Developer from Bangladesh.
        </p>

        {/* Contact Links */}
        <div className='text-[0.9rem] text-[#555555] font-mono flex justify-center gap-5' data-aos="fade-up" data-aos-delay="200">
          <a
            href="mailto:lp.emon.paul@gmail.com"
            className='text-black dark:text-dark-primary-text relative duration-300 group'
          >
            mail
            <span className="absolute left-0 -bottom-0.5 w-0 h-[0.5px] bg-black dark:bg-dark-primary-text transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="https://github.com/Likhonpaul2"
            target='_blank'
            className='text-black dark:text-dark-primary-text relative duration-300 group'
          >
            github
            <span className="absolute left-0 -bottom-0.5 w-0 h-[0.5px] dark:bg-dark-primary-text bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className='text-black dark:text-dark-primary-text relative duration-300 group'
          >
            linkedin
            <span className="absolute left-0 -bottom-0.5 w-0 h-[0.5px] dark:bg-dark-primary-text bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className='text-white dark:bg-white dark:text-dark-bg-color relative duration-300 group bg-black px-5 '
          >
            Resume
            <span className="absolute left-0 -bottom-0.5 w-0 h-[0.5px] dark:bg-dark-primary-text bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* Profile Photo */}
      <div className='items-center justify-center border-b dark:border-dark-border-color border-[#e0e0e0]' data-aos="zoom-in">
        <img
          src={Profile}
          alt="profile"
          className='w-[350px] rounded -mt-20 mx-auto backdrop-blur-md dark:backdrop-blur-0 select-none'
          draggable="false"
          style={{ userSelect: 'none' }}
        />
      </div>

      {/* About Me */}
      <div data-aos="fade-up" data-aos-delay="100">
        <h2 className='text-xl my-[40px] text-black dark:text-dark-primary-text relative inline-block font-bold'>
          about me
          <span className="absolute left-0 -bottom-0.5 h-[0.5px] bg-black dark:bg-white  transition-all duration-300 w-[50%]"></span>
        </h2>
        <p className='leading-loose text-secondary-text dark:text-dark-tertiary-text max-w-[600px] mx-auto'>
         Hi, I'm Emon Paul, a 23-year-old Frontend Developer from Bangladesh with a Passion for Coding and Technology. I have a keen interest in  Web Applications, and Mobile app development. In my free time, I enjoy working on Personal Projects, Contributing to open-source, and exploring new Programming Languages. I'm always looking for new challenges and opportunities to collaborate with other developers. If you're interested in working together or just want to chat about tech, feel free to reach out. I love connecting with fellow developers and sharing knowledge, so don't hesitate to drop me a message.
        </p>
      </div>

      {/* Education Qualification */}
      <div data-aos="fade-up" data-aos-delay="200">
        <h2 className='text-xl my-[40px] text-black dark:text-dark-primary-text relative inline-block font-bold'>
          Education Qualification
          <span className="absolute left-0 -bottom-0.5 h-[0.5px] dark:bg-dark-primary-text bg-black transition-all duration-300 w-[50%]"></span>
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-dark-hover-bg p-4 rounded shadow" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-primary-text">Bachelor of Science in Computer Science</h3>
            <p className="text-sm text-gray-600 dark:text-dark-tertiary-text">Global Institute of Information Technology, 2020 - Last Semester</p>
          </div>

          <div className="bg-gray-100 dark:bg-dark-hover-bg p-4 rounded shadow" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-primary-text">Higher Secondary Certificate (HSC)</h3>
            <p className="text-sm text-gray-600 dark:text-dark-tertiary-text">Govt. M.M Ali College, Dhaka, 2017 - 2019</p>
          </div>

          <div className="bg-gray-100 dark:bg-dark-hover-bg p-4 rounded shadow" data-aos="fade-up" data-aos-delay="500">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-primary-text">Secondary School Certificate (SSC)</h3>
            <p className="text-sm text-gray-600 dark:text-dark-tertiary-text">Jamurki N.S.A.G High School, Dhaka, 2015 - 2017</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
