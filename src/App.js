import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import OrbitalBackground from './components/OrbitalBackground';
import GradientBackground from './components/GradientBackground';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showGradient, setShowGradient] = useState(false);
  const [gradientOpacity, setGradientOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.round(scrollPercentage));
      
      // Gradually fade in gradient background (horizon) from 52% to 65%
      if (scrollPercentage >= 52 && scrollPercentage < 65) {
        setShowGradient(true);
        const fadeProgress = (scrollPercentage - 52) / 13; // 13% range
        // Cubic easing for smooth fade
        const easedOpacity = fadeProgress < 0.5 
          ? 4 * fadeProgress * fadeProgress * fadeProgress 
          : 1 - Math.pow(-2 * fadeProgress + 2, 3) / 2;
        setGradientOpacity(easedOpacity);
      } else if (scrollPercentage >= 65) {
        setShowGradient(true);
        setGradientOpacity(1);
      } else {
        setShowGradient(false);
        setGradientOpacity(0);
      }
    };

    // Use requestAnimationFrame for better performance
    let ticking = false;
    const optimizedHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', optimizedHandleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <div className="App">
      <OrbitalBackground />
      {showGradient && <GradientBackground opacity={gradientOpacity} />}
      <CustomCursor />
      <Navbar 
        scrollProgress={scrollProgress} 
        onMenuToggle={() => setMenuOpen(true)}
      />
      <AnimatePresence>
        {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
      
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <TechStack />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
