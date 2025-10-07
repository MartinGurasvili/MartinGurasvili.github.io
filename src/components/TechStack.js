import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './TechStack.css';

const TechStack = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const techCategories = [
    {
      name: 'AI & Machine Learning',
      technologies: [
        { name: 'Python', icon: '/img/Python.svg' },
        { name: 'PyTorch', icon: '/img/PyTorch logo.svg' },
        { name: 'TensorFlow', icon: '/img/tensorflow.svg' },
        { name: 'LangChain', icon: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2023/07/langchain3.png' },
        { name: 'Neo4j', icon: 'https://adamcowley.gallerycdn.vsassets.io/extensions/adamcowley/neo4j-vscode/0.1.8/1678361672341/Microsoft.VisualStudio.Services.Icons.Default' },
        { name: 'Qdrant', icon: 'https://avatars.githubusercontent.com/u/73504361?s=280&v=4' },
        { name: 'OpenCV', icon: '/img/AWS icon.png' },
        { name: 'Selenium', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Selenium_Logo.png/220px-Selenium_Logo.png' },
        { name: 'NumPy', icon: 'https://user-images.githubusercontent.com/67586773/105040771-43887300-5a88-11eb-9f01-bee100b9ef22.png' },
        { name: 'Pandas', icon: 'https://pandas.pydata.org/static/img/favicon_white.ico' },
        { name: 'Matplotlib', icon: '/img/mpl.png' },
        { name: 'SciPy', icon: 'https://docs.scipy.org/doc/scipy/_static/logo.svg' }
      ]
    },
    {
      name: 'Web Development',
      technologies: [
        { name: 'HTML5', icon: '/img/HTML5.svg' },
        { name: 'CSS3', icon: '/img/CSS3.svg' },
        { name: 'JavaScript', icon: '/img/JS (1)..svg' },
        { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png' },
        { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png' },
        { name: 'Bootstrap', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/964px-Bootstrap_logo.svg.png' },
        { name: 'Three.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/800px-Three.js_Icon.svg.png' },
        { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png' },
        { name: 'Django', icon: '/img/deff.png' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', icon: '/img/AWS icon.png' },
        { name: 'Azure', icon: '/img/azure.png' },
        { name: 'Docker', icon: '/img/Docker Icon.svg' },
        { name: 'Kubernetes', icon: '/img/Kubernetes (1)..svg' },
        { name: 'OpenShift', icon: '/img/OpenShift Icon.png' },
        { name: 'Terraform', icon: 'https://static-00.iconduck.com/assets.00/file-type-terraform-icon-227x256-91ifyour.png' },
        { name: 'MongoDB', icon: 'https://static-00.iconduck.com/assets.00/mongodb-icon-512x512-mhzq0108.png' },
        { name: 'PostgreSQL', icon: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_251be2af3ae607c45c14e816eaa1cf41/postgresql.png' }
      ]
    },
    {
      name: 'Languages & Frameworks',
      technologies: [
        { name: 'C++', icon: '/img/C logo.svg' },
        { name: 'C#', icon: '/img/C--4 (1)..svg' },
        { name: 'QML', icon: 'https://doc.qt.io/qtforpython/_downloads/913d54d1da47ccd2739779d9e1249d8d/logo.png' },
        { name: 'OutSystems', icon: 'https://img.informer.com/icons_mac/png/128/575/575105.png' }
      ]
    },
    {
      name: 'Design & 3D',
      technologies: [
        { name: 'Blender', icon: '/img/Blender (1)..svg' },
        { name: 'Illustrator', icon: '/img/Adobe Illustrator.svg' },
        { name: 'Photoshop', icon: '/img/Photoshop (1)..svg' },
        { name: 'Unity', icon: 'https://i.redd.it/tu3gt6ysfxq71.png' },
        { name: 'Unreal Engine', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Unreal_Engine_logo_2019.svg/800px-Unreal_Engine_logo_2019.svg.png' }
      ]
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="tech-stack" ref={sectionRef}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-number">04</span>
        <h2 className="section-subtitle">Tech Stack</h2>
      </motion.div>

      <motion.div 
        className="tech-categories"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            className="tech-category"
            variants={categoryVariants}
          >
            <h3 className="category-name">{category.name}</h3>
            <div className="tech-grid">
              {category.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  className="tech-tile"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: categoryIndex * 0.1 + techIndex * 0.05 
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img src={tech.icon} alt={tech.name} />
                  <p>{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
