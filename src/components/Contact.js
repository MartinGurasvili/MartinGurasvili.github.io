import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaAward } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-number">05</span>
        <h2 className="section-subtitle">Get In Touch</h2>
      </motion.div>

      <motion.div 
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="contact-info">
          <motion.div className="contact-item" variants={itemVariants}>
            <FaEnvelope className="contact-icon" />
            <h3>EMAIL</h3>
            <motion.a 
              href="mailto:martingurasvili@gmail.com"
              whileHover={{ x: 5, color: '#4a9eff' }}
              transition={{ duration: 0.3 }}
            >
              martingurasvili@gmail.com
            </motion.a>
          </motion.div>

          <motion.div className="contact-item" variants={itemVariants}>
            <FaPhone className="contact-icon" />
            <h3>PHONE</h3>
            <motion.a 
              href="tel:+447519585291"
              whileHover={{ x: 5, color: '#4a9eff' }}
              transition={{ duration: 0.3 }}
            >
              +44 7519 585291
            </motion.a>
          </motion.div>

          <motion.div className="contact-item" variants={itemVariants}>
            <FaMapMarkerAlt className="contact-icon" />
            <h3>LOCATION</h3>
            <p>United Kingdom</p>
            <p className="small-text">SC Clearance</p>
          </motion.div>

          <motion.div className="contact-item" variants={itemVariants}>
            <h3>SOCIAL</h3>
            <div className="social-links">
              <motion.a
                href="https://github.com/MartinGurasvili"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, color: '#4a9eff' }}
                transition={{ duration: 0.3 }}
              >
                <FaGithub /> GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/martin-gurasvili"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, color: '#4a9eff' }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedin /> LinkedIn
              </motion.a>
              <motion.a
                href="https://martingur.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, color: '#4a9eff' }}
                transition={{ duration: 0.3 }}
              >
                🌐 Portfolio
              </motion.a>
            </div>
          </motion.div>

          <motion.div className="contact-item certifications" variants={itemVariants}>
            <FaAward className="contact-icon" />
            <h3>CERTIFICATIONS</h3>
            <div className="cert-list">
              <motion.a 
                href="https://www.credly.com/badges/5d8d0159-efc5-40e5-b973-c5219dbdad4b/public_url" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-badge"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                AWS ML Engineer
              </motion.a>
              <motion.a 
                href="https://www.cncf.io/training/certification/ckad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-badge"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                CKAD
              </motion.a>
              <motion.a 
                href="https://graphacademy.neo4j.com/c/5326bbaf-0358-4873-bd32-868d4a084df8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-badge"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Neo4j Certified
              </motion.a>
              <motion.a 
                href="https://www.credly.com/badges/2420e9e1-0c77-4ff9-b4bc-8eb45018765d/linked_in_profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-badge"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Terraform
              </motion.a>
              <motion.a 
                href="https://learn.microsoft.com/en-us/users/martingurasvili-9862/credentials/d43095eecefd8ff4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-badge"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Azure AI
              </motion.a>
              <motion.a 
                href="https://www.credly.com/badges/030c71d5-5106-47ab-acf0-9c2d6af40505/linked_in_profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cert-badge"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                PSPO / PSM
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
