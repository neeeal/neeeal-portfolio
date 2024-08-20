import { useState } from 'react';
import styles from '../css/Footer.module.css';
import { Icon } from '@iconify/react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'matira.nealbartonjames@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide message after 2 seconds
  };

  return (
    <section className={styles.Footer}>
      <div className={styles.Content}>
        <div className={styles.Container}>
          <h2>My social media links:</h2>
          <div className={styles.SocialsContainer}>
            <a href="https://www.linkedin.com/in/neeeal" target="_blank" rel="noopener noreferrer">
              <Icon icon='mdi:linkedin' style={{ fontSize: '48px', color: 'white' }} />
            </a>
            <a href="https://x.com/neeealprog" target="_blank" rel="noopener noreferrer">
              <Icon icon='mdi:twitter' style={{ fontSize: '48px', color: 'white' }} />
            </a>
            <span className={styles.Email} onClick={handleCopy}>
              <Icon icon='mdi:gmail' style={{ fontSize: '48px', color: 'white' }} />
              {copied && <span className={styles.CopiedMessage}>Copied!</span>}
            </span>
          </div>
        </div>
        <div className={styles.Container}>
          <h2>More projects I’ve worked on</h2>
          <div className={styles.GithubContainer}>
            <a href="https://github.com/neeeal" target="_blank" rel="noopener noreferrer">
              <Icon icon='mdi:github' style={{ fontSize: '48px', color: 'white' }} />
            </a>
            <span>@<a href="https://github.com/neeeal" target="_blank" rel="noopener noreferrer">neeeal</a> on GitHub</span>
          </div>
        </div>
      </div>
      <p>&copy; 2024 Neal Barton James Matira. All rights reserved.</p>
    </section>
  );
}
