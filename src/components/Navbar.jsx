import React, { useState } from 'react'

const Navbar = () => {
    const [active, setActive] = useState('About');

    const navItems = [
        { label: 'About', href: '#' },
        { label: 'Projects', href: '#' },
        { label: 'Skills', href: '#' },
        { label: 'Contact', href: '#' },
    ];

    return (
        <nav className='fixed top-5 left-0 right-0 mx-auto w-fit z-1000 bg-[#fffffff2] backdrop-blur-lg rounded-full px-4 py-2 border border-border-color '>
            <div className='flex gap-5'>
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className={`text-secondary-text text-[14px] px-[16px] py-[8px] rounded-full hover:text-[#000000] hover:bg-[#f5f5f5] hover:-translate-y-1 duration-300 ${active === item.label ? 'bg-[#f5f5f5] text-[#000000]' : ''
                            }`}
                        onClick={() => setActive(item.label)}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
