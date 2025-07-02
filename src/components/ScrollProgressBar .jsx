import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div
        className="h-1 bg-orange-500 transition-all duration-200 ease-in-out"
        style={{ width: `${scrollTop}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
