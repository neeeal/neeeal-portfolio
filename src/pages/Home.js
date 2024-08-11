import styles from '../css/Home.module.css';

export default function Home() {
  return (
    <div className={styles.Home} >
      <div className={styles.Section}>
        <div className={styles.Container}>
          <div className={styles.Description}>
            <h1 >Hello, I'm Neal</h1>
            <p>A software engineer dedicated to making the world a better place one line of code at a time.</p>
          </div>

          <div className={styles.ImageContainer}>
            <img src="https://via.placeholder.com/700" alt="Placeholder" />
          </div>
        </div>
      </div>

      <h2 className={styles.Header} id='skills'>Skills</h2>

      <div className={styles.Section}>
        <div className={styles.Container}>
          <div className={styles.Description}>
            <p>I have a vast experience in the following web technologies:</p>
            <div className={styles.ImageContainer}>
            <img src="https://via.placeholder.com/300" alt="Placeholder" className={styles.Image}/>
            <img src="https://via.placeholder.com/300" alt="Placeholder" className={styles.Image}/>
            <img src="https://via.placeholder.com/300" alt="Placeholder" className={styles.Image}/>
            <img src="https://via.placeholder.com/300" alt="Placeholder" className={styles.Image}/>
            <img src="https://via.placeholder.com/300" alt="Placeholder" className={styles.Image}/>
            <img src="https://via.placeholder.com/300" alt="Placeholder" className={styles.Image}/>
            </div>
          </div>
          <div className={styles.ImageContainer}>
            <img src="https://via.placeholder.com/600" alt="Placeholder" className={styles.Image}/>
          </div>
        </div>
      </div>

    </div>
  );
}
