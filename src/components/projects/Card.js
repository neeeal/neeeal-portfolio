import styles from './Card.module.css';

export function Card() {
  return (
    <div className={styles.Card}>
      <div className={styles.ImageContainer}>
        <img src="https://via.placeholder.com/500" alt="Placeholder" className={styles.Image} />
      </div>
      <div className={styles.ContentContainer}>
        <p className={styles.Description}>Description</p>
        <button className={styles.Button}>View Details</button>
      </div>
    </div>
  );
}
