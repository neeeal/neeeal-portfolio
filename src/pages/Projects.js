import React, { useState } from 'react';
import styles from '../css/Projects.module.css';
import { Icon } from '@iconify/react';
import Modal from '../components/modal/Project.js'; // Import the modal component

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {image: require('../assets/images/skanin.png'), alt: 'Skanin App', description: 'A Web Application using React with Flask backend and TensorFlow for a Rice Stress Classifier AI.'},
    {previewImage:require('../assets/images/soil3 crop.jpg'), image: require('../assets/images/soil3.jpg'), alt: 'AgroViz App', description: 'A Mobile Application using Expo with Flask Backend and Tensorflow for a robotic Soil Analysis AI.'},
    {image: require('../assets/images/I7.png'), alt: 'Attendance System', description: 'The backend of an Attendance System with Salary Computations using Express.js'},
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
    <div className={styles.Projects} id='projects'>
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
      <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </div>
  );
}
