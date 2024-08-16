import React, { useEffect, useState } from 'react';
import styles from './Project.module.css'; // Create a CSS module for the modal styles

const Modal = ({ isOpen, onClose, project }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Match duration of the CSS transition
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible || !project) return null;

  return (
    <div className={`${styles.ModalOverlay} ${isOpen ? styles.open : ''}`} onClick={onClose}>
      <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.CloseButton} onClick={onClose}>X</button>
        <div className={styles.ModalImage}>
          <img src={project.image} alt={project.alt} />
        </div>
        <div className={styles.ModalDescription}>
          <h2>{project.alt}</h2>
          <p>{project.description}</p>
          <a href={project.githubLink || '#'} target="_blank" rel="noopener noreferrer">
            <button>View on GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
