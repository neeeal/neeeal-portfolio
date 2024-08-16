import styles from '../css/Projects.module.css';
import { Icon } from '@iconify/react';

export default function Projects() {
  const projects = [
    {image:require('../assets/images/skanin.png'), alt:'Skanin App', description:'A Web Application using React with Flask backend and TensorFlow for a Rice Stress Classifer AI.'},
    {image:require('../assets/images/soil3 crop.jpg'), alt:'AgroViz App', description:'A Mobile Application using Expo with Flask Backend and Tensorflow for Soil Analysis AI.'},
    {image:require('../assets/images/I7.png'), alt:'Skanin App', description:'The backend of an Attendance System with Salary Computations using Express.js'},
  ];

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
          projects.map( (project, idx) =>
            <div className={styles.Card} id={idx}>
              <div className={styles.ImageContainer}>
                <img src={project.image} alt={project.alt} className={styles.Image} />
              </div>
              <div className={styles.Description}>
                <p>{project.description}</p>
                <div>
                  <span>Learn More</span>
                  <Icon icon='bi:arrow-right' 
                    style={{ 
                    fontSize: '18px', 
                    color: 'white'}}/>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
