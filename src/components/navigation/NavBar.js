import { useState } from 'react';
import { Icon } from '@iconify/react';
import styles from './NavBar.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function NavBar() {
  const [ isHovered, setIsHovered ] = useState(false);
  return (
    <nav className={styles.NavBar}>
      <div className={styles.HeaderContainer}>
        <h1 className={styles.Header}><span onClick={()=> scroll.scrollToTop()}>neeeal</span></h1>
      </div>
      <div className={styles.Container}>
        <Link to='certifications' smooth={true} duration={500} className={styles.Link}>Certifications</Link>
        <Link to='projects' smooth={true} duration={700} className={styles.Projects} 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
            <Icon icon='carbon:gears' 
              style={{ 
                fontSize: '24px', 
                color: isHovered ? 'white' : '#E84949' }}/>
          <span>Projects</span>
          </Link>
        <Link to='contactMe' smooth={true} duration={900} className={styles.Link}>Contact Me</Link>
      </div>
    </nav>
  )
}