import { useState } from 'react';
import styles from '../css/Home.module.css';
import { Link } from 'react-scroll';

export default function Home() {
  const [skills, setSkills] = useState([
    { image: require("../assets/images/icons8-python-48.png"), caption: 'Python'},
    { image: require("../assets/images/icons8-javascript-48.png"), caption: 'JavaScript'},
    { image: require("../assets/images/icons8-tensorflow-48.png"), caption: 'Tensorflow'},
    { image: require("../assets/images/icons8-flask-48.png"), caption: 'Flask' },
    { image: require("../assets/images/icons8-express-js-50.png"), caption: 'Express.js' },
    { image: require("../assets/images/icons8-mongodb-48.png"), caption: 'MongoDB' },
    { image: require("../assets/images/icons8-mysql-logo-48.png"), caption: 'MySQL' },
    { image: require("../assets/images/icons8-pandas-48.png"), caption: 'Pandas' },
    { image: require("../assets/images/icons8-react-native-48.png"), caption: 'React.js' },
    { image: require("../assets/images/icons8-expo-48.png"), caption: 'Expo.js' },
    { image: require("../assets/images/icons8-tailwind-css-48.png"), caption: 'Tailwind' },
  ])
  return (
    <div className={styles.Home} >
      <div className={styles.Section}>
        <div className={styles.Container}>
          <div className={styles.Description}>
            <h1> <span>Hello 👋, I'm a</span><br/>Software Engineer</h1>
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
                    <img src={skill.image} alt={skill.caption + ' logo'}/>
                    <label>{skill.caption}</label>
                  </div>
              )}
            </div>
          </div>
          <div className={styles.SkillsImageContainer}>
            <img src={require('../assets/images/91337648.png')} alt="Placeholder" className={styles.Image}/>
          </div>
          </div>
      </div>

    </div>
  );
}
