import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div 
          className="footer-logo"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          MARTIN GURASVILI
        </motion.div>

        <motion.div 
          className="footer-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {['About', 'Projects', 'Contact'].map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="footer-social"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/MartinGurasvili"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/martin-gurasvili"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:martingurasvili@gmail.com"
            whileHover={{ scale: 1.2, y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        <motion.div 
          className="footer-copy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>© 2025 Martin Gurasvili. All Rights Reserved.</p>
          <p className="footer-subtitle">AI Engineer • Full-Stack Developer</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
