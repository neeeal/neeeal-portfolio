import { useState } from 'react';
import styles from '../css/Home.module.css';
import { Link } from 'react-scroll';

export default function Home() {
  const [skills, setSkills] = useState([
    { image: require("../assets/images/Python.png"), caption: 'Python' },
    { image: require("../assets/images/Python.png"), caption: 'Python' },
    { image: require("../assets/images/Python.png"), caption: 'Python' },
    { image: require("../assets/images/Python.png"), caption: 'Python' },
    { image: require("../assets/images/Python.png"), caption: 'Python' },
    { image: require("../assets/images/Python.png"), caption: 'Python' },
    { image: require("../assets/images/Python.png"), caption: 'Python' },
    { image: require("../assets/images/Python.png"), caption: 'Python' },
    { image: require("../assets/images/Python.png"), caption: 'Python' },
    { image: require("../assets/images/Python.png"), caption: 'Python' },
    { image: require("../assets/images/Python.png"), caption: 'Python' },
  ])
  return (
    <div className={styles.Home} >
      <div className={styles.Section}>
        <div className={styles.Container}>
          <div className={styles.Description}>
            <h1> <span className={styles.Intro}>Hello 👋, I'm a</span><br/>Software Engineer</h1>
            <p>I'm Neal, a <b>Software Engineer</b> dedicated to making the world a better place one line at a time.</p>
            <Link to="contactMe" smooth={true} duration={500}><span className={styles.ContactMe}>Contact Me</span></Link>
          </div>
          <div className={styles.HeroImageContainer}>
            <img src={require('../assets/images/91337648.png')} className={styles.HeroImage} alt="Placeholder"/>
          </div>
        </div>
      </div>

      <h2 className={styles.Header} id='skills'>Skills</h2>

      <div className={styles.Section}>
        <div className={styles.Container}>
          <div className={styles.SkillsDescription}>
            <p>I have a vast experience in the following technologies:</p>
            <div className={styles.ImageContainer}>
              { skills.map((skill, idx) => 
                  <div className={styles.SkillContainer} id={idx}>
                    <img src={skill.image} alt="Placeholder" className={styles.SkillImage}/>
                    <label className={styles.SkillCaption}>{skill.caption}</label>
                  </div>
              )}
            </div>
          </div>
          <div className={styles.ImageContainer}>
            <img src="https://via.placeholder.com/500" alt="Placeholder" className={styles.Image}/>
          </div>
        </div>
      </div>

    </div>
  );
}
