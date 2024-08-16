import { useState } from 'react';
import styles from '../css/ContactMe.module.css';
import { Icon } from '@iconify/react';

export default function ContactMe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log(email, message)
  }

  // function sendEmail(e) {
  //   e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
  //     .then((result) => {
  //         window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }

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
        <form action="#" method="post" className={styles.FormContainer}>
          <div className={styles.EmailContainer}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
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
