import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Works.css';

const Works = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      company: 'Fujitsu',
      role: 'AI R&D / Software Developer',
      period: '2023 - Current',
      logo: '/img/Fujitsu logo.jpeg',
      description: 'Leading AI research and development projects, implementing cutting-edge ML solutions'
    },
    {
      company: 'Oxfordshire County Council',
      role: 'Cyber Security Admin',
      period: '2022 - 2023',
      logo: '/img/Oxfordshire County Council logo.jpeg',
      description: 'Managed cybersecurity infrastructure and implemented security protocols'
    }
  ];

  const works = [
    {
      title: 'Enterprise LLM Platform',
      category: 'Generative AI • LangChain • RAG',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      description: 'Enterprise-scale AI platform with custom vector stores, prompt engineering tools, and multi-LLM orchestration'
    },
    {
      title: 'Real-Time Computer Vision',
      category: 'NVIDIA DeepStream • YOLOv11 • Edge AI',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop',
      description: 'Custom trained object detection model optimized with CUDA/TensorRT for edge deployment'
    },
    {
      title: 'Knowledge Graph System',
      category: 'Neo4j • Graph Analytics • RAG',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      description: 'Integrated knowledge graphs with vector databases for enterprise AI solutions'
    },
    {
      title: 'Multi-Cloud AI Platform',
      category: 'AWS • Azure • Kubernetes • CI/CD',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      description: 'Scalable AI platform deployed across multiple cloud providers with automated CI/CD'
    },
    {
      title: 'Hackathon Winner',
      category: 'UST Global • AI Innovation',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
      description: 'Winner of UST Global Hackathon, outperforming 88 international teams with innovative AI solution'
    },
    {
      title: 'Low-Code AI Builder',
      category: 'Node Builder • Automation • Enterprise',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      description: 'Drag-and-drop AI workflow builder with data connectors and automation tools'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
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
    <section className="works" id="works" ref={sectionRef}>
      {/* Work Experience Section */}
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-number">03</span>
        <h2 className="section-subtitle">Work Experience</h2>
      </motion.div>

      <motion.div 
        className="experience-grid"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="experience-item"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
            <div className="experience-info">
              <h3>{exp.company}</h3>
              <p className="role">{exp.role}</p>
              <p className="period">{exp.period}</p>
              <p className="description">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ marginTop: '80px' }}
      >
        <h2 className="section-subtitle">Featured Projects</h2>
      </motion.div>

      <motion.div 
        className="works-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {works.map((work, index) => (
          <motion.div
            key={work.title}
            className="work-item"
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -10 }}
          >
            <div className="work-image">
              <motion.img
                src={work.image}
                alt={work.title}
                initial={{ scale: 1 }}
                animate={{ 
                  scale: hoveredIndex === index ? 1.1 : 1 
                }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.div
                className="work-overlay"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0 
                }}
                transition={{ duration: 0.4 }}
              >
                <span>VIEW PROJECT</span>
              </motion.div>
            </div>
            <div className="work-info">
              <h3>{work.title}</h3>
              <p>{work.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a 
        href="https://github.com/MartinGurasvili"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-link"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        VIEW ALL PROJECTS＋
      </motion.a>
    </section>
  );
};

export default Works;
