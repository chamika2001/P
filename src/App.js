import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const App = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, { opacity: 0, y: -50, duration: 1 });
  }, []);

  return (
    <div className="text-center">
      <header ref={headerRef} className="text-4xl font-bold mt-10">
        Welcome to My Portfolio
      </header>
    </div>
  );
};

export default App;
