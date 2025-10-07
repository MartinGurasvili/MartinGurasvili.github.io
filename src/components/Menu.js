import React from 'react';
import { motion } from 'framer-motion';
import './Menu.css';

const Menu = ({ onClose }) => {
  const menuVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      x: '100%',
      transition: { 
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  const menuLinks = [
    { name: 'PROFILE', href: '#about' },
    { name: 'WORKS', href: '#works' },
    { name: 'CONTACT', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/MartinGurasvili' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/martin-gurasvili' },
    { name: 'Email', href: 'mailto:martingurasvili@gmail.com' }
  ];

  return (
    <motion.div 
      className="menu-overlay"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div 
        className="menu-close"
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span>CLOSE</span>
      </motion.div>
      
      <div className="menu-content">
        <div className="menu-links">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            INDEX
          </motion.h2>
          {menuLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={onClose}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                x: 10,
                color: '#4a9eff',
                transition: { duration: 0.3 }
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
        
        <div className="menu-social">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              custom={i + 3}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                x: 10,
                color: '#4a9eff',
                transition: { duration: 0.3 }
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
