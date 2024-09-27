// app/components/smooth-scroll.tsx

'use client';

import React, { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';

// Define the props interface
interface SmoothScrollProps {
  children: ReactNode; // Explicitly define children as ReactNode
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, t * 5),
    });

    const scroll = (time: number) => {
      lenis.raf(time); // Pass the time argument
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div>{children}</div>;
};

export default SmoothScroll;
