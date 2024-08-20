import React, { useState } from 'react';
import styles from '../css/Projects.module.css';
import { Icon } from '@iconify/react';
import Modal from '../components/modal/Project.js'; // Import the modal component

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {image: require('../assets/images/skanin.png'), 
      alt: 'Skanin App', 
      title: 'Rice Stress Classification and Recommendation System',
      description: 
      `
      A Web Application using React with Python-Flask backend and TensorFlow for a Rice Stress Classifier AI. 
      I gathered approximately 1000 images for different rice stresses and used the ResNetV2 architecture 
      in developing the deep learning model for the project. 
      `,
      github: { Frontend: 'https://github.com/neeeal/Frontend-Development-trial', Backend: 'https://github.com/neeeal/softies-backend'},
      url: 'https://skanin-app.vercel.app/'
    },
    {image: require('../assets/images/soil3.jpg'), 
      alt: 'AgroViz App', 
      title: 'Robotic Soil Image Analysis with Mobile App',
      description: 
      `
      A Mobile Application using Expo with Flask Backend and Tensorflow for a robotic Soil Analysis AI. I gathered 99 soil images
      and nutrients for training a Semantic Segmentation Tensorflow model. I used the SegNet architecture as the base model
      in developing th AI for the project.
      `,
      previewImage:require('../assets/images/soil3 crop.jpg'), 
      github: { Mobile: 'https://github.com/neeeal/robotic-soil-mobile', Backend: 'https://github.com/neeeal/soil-pd-backend'},
      url: 'https://drive.google.com/file/d/18H1b4pH0kPdMglFGZv010LFoQVSbmMTB/view?usp=sharing'
    },
    {image: require('../assets/images/I7.png'), 
      alt: 'Attendance System', 
      title: 'Attendance System with Salary Generation',
      description: 
      `
      The backend of an Attendance System with Salary Computations using Express.js. The backend consists of multiple routes and 
      controllers such as monitoring attendance, employee statistics, and salary computations. This project was developed in part
      of my Internship program at Intelliseven Technology Solutions.
      `,
      github: {}
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className={styles.Projects} id='projects'>
      <div className={styles.HeaderContainer}>
        <div className={styles.Header}>
          <Icon icon='carbon:gears' 
                style={{ 
                  fontSize: '24px', 
                  color: 'white'}}/>
          <h1>Projects</h1>
        </div>
        <p>Some of my projects are</p>
      </div>
      <div className={styles.ContentContainer}>
        { 
          projects.map((project, idx) => (
            <div className={styles.Card} key={idx}>
              <div className={styles.ImageContainer} onClick={() => openModal(project)}>
                <img src={project.previewImage || project.image} alt={project.alt} className={styles.Image} />
              </div>
              <div className={styles.Description}>
                <p>{project.description}</p>
                <div onClick={() => openModal(project)}>
                  <span>Learn More</span>
                  <Icon icon='bi:arrow-right' 
                    style={{ 
                    fontSize: '18px', 
                    color: 'white'}}/>
                </div>
              </div>
            </div>
          ))
        }
      </div>
 
      {/* Render the modal if a project is selected */}
      {/* <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} /> */}
    <div className={`${styles.ModalOverlay} ${isModalOpen ? styles.open : styles.close}`} onClick={closeModal}>
      <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />

    </div>
    </section>
  );
}
