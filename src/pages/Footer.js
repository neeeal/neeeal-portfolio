import styles from '../css/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.Footer}>
        <div className={styles.Container}>
          <h2>Social Media Links</h2>
        </div>
        <div className={styles.Container}>
          <h2>GitHub Links</h2>
        </div>
    </div>
  );
}
