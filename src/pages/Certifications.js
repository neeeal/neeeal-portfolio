import styles from '../css/Certifications.module.css';
import React, { useState, useEffect, useRef } from 'react';

export default function Certifications() {
    const [activeCert, setActiveCert] = useState(0);
    const [slideDirection, setSlideDirection] = useState('left');
    const intervalRef = useRef(null);
    const certs = [
        { image: require('../assets/images/fcc.png'), title: 'Responsive Web Design', date: 'August 19, 2024', link: 'https://freecodecamp.org/certification/neeeal/responsive-web-design' },
        { image: require('../assets/images/google.png'), title: 'Process Data from Dirty to Clean', date: 'September 22, 2023', link: 'https://coursera.org/share/01dea51873250c5c28ebfb08c6c7549b' },
        { image: require('../assets/images/ai.png'), title: 'TensorFlow Developer Professional', date: 'Aug 5, 2023', link: 'https://coursera.org/share/96e8a3fee0eb744974ccfee584d66bc6' },
    ];

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setSlideDirection('left');
            setActiveCert((prevActiveCert) => (prevActiveCert + 1) % certs.length);
        }, 7000);
    };

    useEffect(() => {
        startTimer();

        return () => clearInterval(intervalRef.current);
    }, [certs.length]);

    const handleButtonClick = (direction) => {
        clearInterval(intervalRef.current);
        setSlideDirection(direction);
        if (direction === 'left') {
            setActiveCert((prevActiveCert) => (prevActiveCert + 1) % certs.length);
        } else {
            setActiveCert((prevActiveCert) =>
                prevActiveCert === 0 ? certs.length - 1 : prevActiveCert - 1
            );
        }
        startTimer();
    };

    return (
        <section className={styles.Certifications} id="certifications">
            <div className={styles.Header}>
                Certifications
            </div>
            <div className={styles.Content}>
                <div className={styles.Left}>
                    <button
                        className={styles.Button}
                        onClick={() => handleButtonClick('right')}
                    >
                        &lt;
                    </button>
                </div>
                <div className={styles.Main}>
                    <div className={`${styles.CertificateContainer} ${styles[slideDirection]}`}>
                        <img src={certs[activeCert].image} alt={certs[activeCert].title} />
                    </div>
                    <div className={styles.CertificateDetails}>
                        <h2>{certs[activeCert].title}</h2>
                        <p>{certs[activeCert].date}</p>
                        <a href={certs[activeCert].link} target="_blank" rel="noopener noreferrer">
                            View Certificate
                        </a>
                    </div>
                </div>
                <div className={styles.Right}>
                    <button
                        className={styles.Button}
                        onClick={() => handleButtonClick('left')}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
}
