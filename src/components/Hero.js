import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    const lines = linesRef.current;
    
    gsap.fromTo(
      lines,
      { 
        opacity: 0, 
        y: 100,
        rotateX: -90 
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.15,
        delay: 0.5 // Back to original speed
      }
    );
  }, []);

  const scrollDownVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          <span className="line" ref={el => linesRef.current[0] = el}>
            AI Engineer &
          </span>
          <span className="line" ref={el => linesRef.current[1] = el}>
            <span className="italic">Full-Stack</span> Developer
          </span>
          <span className="line" ref={el => linesRef.current[2] = el}>
            Building Intelligent
          </span>
          <span className="line" ref={el => linesRef.current[3] = el}>
            Digital Solutions.
          </span>
        </h1>
      </div>
      
      <motion.div 
        className="scroll-down"
        variants={scrollDownVariants}
        animate="animate"
      >
        <span>SCROLL DOWN</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
