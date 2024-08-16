import { useState } from 'react';
import styles from '../css/ContactMe.module.css';
import { Icon } from '@iconify/react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log(email, message);
  };

  function sendEmail(e) {
    e.preventDefault();

    // Add your own verification logic here if needed before sending the email

    emailjs.sendForm('service_5j9ppps', 'template_p239xlq', e.target, 'lhX5PaAzhfDOwSubz')
      .then((result) => {
          window.location.reload(); // Reload the page after email is sent
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className={styles.ContactMe} id="contactMe">
      <div className={styles.HeaderContainer}>
        <h1>Contact Me</h1>
      </div>
      <div className={styles.ContentContainer}>
        <div className={styles.ImageContainer}>
          <img
            src={require('../assets/images/StockCake-Magnifying Digital Details_1723715725.jpg')}
            alt="Magnifying Digital Details"
          />
        </div>
        <form action="#" method="post" className={styles.FormContainer} onSubmit={sendEmail}>
          <div className={styles.EmailContainer}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.MessageContainer}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* reCAPTCHA widget */}
          <div className="g-recaptcha" data-sitekey="6Leh8ScqAAAAAObBhYWe-KprEF5TMTOVJfPxi7Jm"></div>

          <div className={styles.ButtonContainer}>
            <button type="submit" onClick={handleSubmit}>
              Send Message
              <Icon
                icon="f7:paperplane-fill"
                style={{
                  fontSize: '24px',
                  color: 'white',
                }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
