import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, { opacity: 0, y: -50, duration: 1 });
  }, []);

  return (
    <header ref={headerRef} className="text-center py-10 bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">My Portfolio</h1>
      <p className="text-xl mt-2">A showcase of my work and skills</p>
    </header>
  );
};

export default Header;
