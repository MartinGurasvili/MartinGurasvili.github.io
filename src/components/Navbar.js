import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ scrollProgress, onMenuToggle }) => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div 
        className="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        MARTIN GURASVILI
      </motion.div>
      
      <motion.div 
        className="menu-toggle"
        onClick={onMenuToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <span>MENU</span>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
