import React, { useEffect, useState } from 'react';
import styles from './Project.module.css'; // Create a CSS module for the modal styles
import { Icon } from '@iconify/react';

const Modal = ({ isOpen, onClose, project }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.classList.add(styles['body-no-scroll']); // Disable scrolling
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.classList.remove(styles['body-no-scroll']); // Re-enable scrolling
      }, 300); // Match duration of the CSS transition
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible || !project) return null;

  return (
      <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.ModalHeader} >
            <h1>{project.title}</h1>
            <div>
              <Icon icon='bytesize:close' style={{ fontSize: '16px', color: 'black' }} onClick={onClose}/>
            </div>
        </div>
        <div className={styles.ModalBody}>
          <div className={styles.ModalDescription}>
            <p>{project.description}</p>
          </div>
          <div className={styles.ModalImage}>
            <img src={project.image} alt={project.alt} />
          </div>
        </div>
        <div className={styles.ModalFooter}>
          <div className={styles.GithubContainer} >
            { project.github.length !== 0 && Object.keys(project.github).map( (key, idx) => {
                  return (
                          <a href={project.github[key]} target="_blank" rel="noopener noreferrer">
                              <Icon icon='mdi:github' style={{ fontSize: '16px', color: 'black' }} /><span>{key}</span>
                          </a>
                  )
              })
              }
              { project.url && 
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                              <Icon icon='fluent-mdl2:navigate-external-inline' style={{ fontSize: '24px', color: 'black' }} /><span>Go to {project.alt}</span>
                  </a>
              }
            </div>
        </div>
      </div>
  );
};

export default Modal;
