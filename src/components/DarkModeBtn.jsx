import React, { useState } from 'react'

const DarkModeBtn = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {

        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
        }
    }
    return (
        <div className='bg-transparent border-none text-sm cursor-pointer  top-[40px] right-[40px] text-primary-text fixed'>
            {
                darkMode ?
                    <span
                        onClick={handleDarkMode}
                        className='text-black'
                    >
                        🌙 dark 
                    </span>
                    :
                    <span
                        onClick={handleDarkMode}
                        className='text-white'
                    >
                        ☀️ light
                    </span>

                //  darkMode? '🌙 Dark Mode': '☀️ Light Mode' 
            }
        </div>
    )
}

export default DarkModeBtn
