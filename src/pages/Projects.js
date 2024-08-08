import styles from '../css/Projects.module.css';
import { Card } from '../components/projects/Card';
export default function Projects() {
  return (
    <div className={styles.Projects}>
      <div className={styles.HeaderContainer}>
        <div className={styles.Header}><h1>Projects</h1></div>
        <p>Some of my projects</p>
      </div>
      <div className={styles.ContentContainer}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
