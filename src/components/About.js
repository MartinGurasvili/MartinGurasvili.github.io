import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { FaAws, FaPython, FaReact, FaDocker } from 'react-icons/fa';
import { SiKubernetes, SiTensorflow, SiOpenai } from 'react-icons/si';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const textRef = useRef(null);

  useEffect(() => {
    if (isInView && textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 0.8,
          stagger: 0.03,
          ease: 'power2.out'
        }
      );
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const text = "AI ENGINEER & FULL-STACK DEVELOPER SPECIALIZING IN GENERATIVE AI, MACHINE LEARNING, AND CLOUD-NATIVE SOLUTIONS. I BUILD ENTERPRISE-SCALE AI PLATFORMS AND INTELLIGENT SYSTEMS.";
  const words = text.split(' ');

  return (
    <section className="about" id="about" ref={sectionRef}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-number">01</span>
        <h2 className="section-subtitle">Hello</h2>
      </motion.div>

      <motion.div 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="about-text" variants={itemVariants}>
          <p className="large-text" ref={textRef}>
            {words.map((word, i) => (
              <span key={i} className="word">{word} </span>
            ))}
          </p>
        </motion.div>

        <motion.div className="about-intro" variants={itemVariants}>
          <p>
            I'm <strong>Martin Gurasvili</strong>, an AI Engineer and Software Developer at Fujitsu. 
            I design and deploy enterprise LLM platforms, train custom computer vision models, and build 
            scalable AI solutions using cutting-edge technologies.
          </p>
          <p>
            With expertise in generative AI, machine learning, and cloud infrastructure, I've presented 
            at international conferences, won the UST Global Hackathon, and hold multiple certifications 
            including AWS Machine Learning Engineer and CKAD.
          </p>
        </motion.div>

        <motion.div className="tech-stack" variants={itemVariants}>
          <h3>Tech Stack</h3>
          <div className="tech-icons">
            <div className="tech-icon" title="AWS">
              <FaAws />
              <span>AWS</span>
            </div>
            <div className="tech-icon" title="Python">
              <FaPython />
              <span>Python</span>
            </div>
            <div className="tech-icon" title="React">
              <FaReact />
              <span>React</span>
            </div>
            <div className="tech-icon" title="Docker">
              <FaDocker />
              <span>Docker</span>
            </div>
            <div className="tech-icon" title="Kubernetes">
              <SiKubernetes />
              <span>K8s</span>
            </div>
            <div className="tech-icon" title="TensorFlow">
              <SiTensorflow />
              <span>TensorFlow</span>
            </div>
            <div className="tech-icon" title="OpenAI">
              <SiOpenai />
              <span>OpenAI</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a 
        href="https://github.com/MartinGurasvili" 
        target="_blank"
        rel="noopener noreferrer"
        className="cta-link"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        VIEW GITHUB＋
      </motion.a>
    </section>
  );
};

export default About;
