import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.NavBar}>
      <h1>NavBar</h1>
      <div className={styles.Container}>
        <p>NavBar</p>
        <p>NavBar</p>
      </div>
    </div>
  )
}