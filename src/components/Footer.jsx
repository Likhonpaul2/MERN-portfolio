import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-black text-white py-8" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left side: copyright */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Emon Paul. All rights reserved.
        </p>

        {/* Right side: social icons */}
        <div className="flex gap-5 text-xl">
          <a href="mailto:lp.emon.paul@gmail.com" className="hover:text-purple-400 transition" aria-label="email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/Likhonpaul2" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition" aria-label="github">
            <FaGithub />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition" aria-label="linkedin">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
