import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [active, setActive] = useState('About');

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <nav
                className='fixed top-5 left-0 right-0 mx-auto w-fit bg-[#fffffff2] dark:bg-dark-bg-color backdrop-blur-lg rounded-full px-4 py-2 border border-border-color z-[10]
                dark:border-dark-border-color'
                data-aos="fade-down"
            >
                <div className='flex gap-5'>
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`text-secondary-text text-[14px] px-[16px] py-[8px] rounded-full hover:text-[#000000] hover:bg-[#f5f5f5] dark:hover:bg-dark-hover-bg hover:-translate-y-1 duration-300 ${active === item.label ? 'bg-[#f5f5f5] dark:bg-[#222222] text-[#000000] dark:text-[#ffffff]' : ''}`}
                            onClick={() => setActive(item.label)}
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
