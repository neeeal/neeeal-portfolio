import styles from '../css/Home.module.css';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div className={styles.Home} >
      <div className={styles.Section}>
        <div className={styles.Container}>
          <div className={styles.Description}>
            <h1>Hello, I'm Neal</h1>
            <p>A <b>Software Engineer</b> dedicated to making the world a better place one line of code at a time.</p>
            <Link to="contactMe" smooth={true} duration={500} className={styles.Button}>Contact Me</Link>
          </div>

          <div className={styles.ImageContainer}>
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
            <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.SkillImage}/>
            <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.SkillImage}/>
            <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.SkillImage}/>
            <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.SkillImage}/>
            <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.SkillImage}/>
            <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.SkillImage}/>
            <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.SkillImage}/>
            <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.SkillImage}/>
            <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.SkillImage}/>
            <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.SkillImage}/>
            <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.SkillImage}/>
            <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.SkillImage}/>
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
