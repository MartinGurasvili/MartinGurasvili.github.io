import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBrain, FaCode, FaCloud, FaRobot } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      title: 'AI & Machine Learning',
      icon: <FaBrain />,
      description: 'Enterprise LLM platforms with LangChain, OpenAI, and Cohere. Custom vector stores, knowledge graphs, and RAG pipelines. Expertise in TensorFlow, PyTorch, and generative AI solutions with prompt engineering and multi-model orchestration.'
    },
    {
      title: 'Computer Vision',
      icon: <FaRobot />,
      description: 'Real-time computer vision using NVIDIA DeepStream and YOLOv11. Custom model training and deployment optimized with CUDA/TensorRT for edge performance. OCR/NLP pipelines and object detection systems.'
    },
    {
      title: 'Cloud & DevOps',
      icon: <FaCloud />,
      description: 'Containerization with Docker and Kubernetes (CKAD certified). CI/CD pipelines using GitLab, Helm, and Kustomize. Multi-cloud deployment on AWS, Azure, GCP with enterprise security compliance and Infrastructure as Code.'
    },
    {
      title: 'Full-Stack Development',
      icon: <FaCode />,
      description: 'Modern web applications with React, Node.js, Django, and FastAPI. Database design with SQL and Neo4j graph databases. Low-code platforms, automation tools, and scalable microservices architecture.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="services" ref={sectionRef}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-number">02</span>
        <h2 className="section-subtitle">Expertise</h2>
      </motion.div>

      <motion.div 
        className="services-intro"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="large-text">
          I specialize in AI engineering, machine learning, and cloud infrastructure, 
          delivering enterprise-scale solutions that combine cutting-edge technology with practical business value.
        </p>
      </motion.div>

      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="service-item"
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="service-number"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.15 }}
            >
              0{index + 1}
            </motion.div>
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
