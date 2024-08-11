import styles from '../css/ContactMe.module.css';

export default function ContactMe() {
  return (
    <div className={styles.ContactMe} id='contactMe'>
      <div className={styles.HeaderContainer}>
        <h1 >ContactMe</h1>
      </div>
      <div className={styles.ContentContainer}>
        <div className={styles.Container}>
          <p>content</p>
        </div>
        <div className={styles.Container}>
          <p>content</p>
        </div>
      </div>
    </div>
  );
}
