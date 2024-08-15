import styles from './Card.module.css';

export function Card({project}) {
  return (
    <div className={styles.Card}>
      <div className={styles.ImageContainer}>
        <img src={require(project.image)} alt={project.alt} className={styles.Image} />
      </div>
      <div className={styles.ContentContainer}>
        <p className={styles.Description}>{project.description}</p>
        <button className={styles.Button}>View Details</button>
      </div>
    </div>
  );
}
