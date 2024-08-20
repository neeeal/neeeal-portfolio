import { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from '../css/ContactMe.module.css';
import { Icon } from '@iconify/react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [status, setStatus] = useState(null);
  const [formValue, setFormValue] = useState({
    email: "",
    message: "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  const refCaptcha = useRef();
  const form = useRef();

  useEffect(() => {
    let timeout;
    if (status === "success" || status === "error") {
      timeout = setTimeout(() => {
        setAlertMessage("");
        setStatus(null);
      }, 9000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = refCaptcha.current.getValue();

    if (!formValue.email || !formValue.message || !token) {
      setStatus("error");
      setAlertMessage("Please fill out all fields and complete the CAPTCHA.");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAIL_JS_USER
      )
      .then(
        (response) => {
          if (response.status === 200) {
            setStatus("success");
            setAlertMessage("Message sent!");
            setFormValue({ email: "", message: "" });
            refCaptcha.current.reset();
          }
        },
        (err) => {
          setStatus("error");
          setAlertMessage(`Failed to send message: ${err.text}`);
          console.log("FAILED...", err.text);
        }
      );
  };

  return (
    <section className={styles.ContactMe} id="contactMe">
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
        <form action="#" method="POST" ref={form} className={styles.FormContainer} onSubmit={handleSubmit}>
          <div className={styles.EmailContainer}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="Enter your email..."
              value={formValue.email}
              onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
              required
            />
          </div>
          <div className={styles.MessageContainer}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message..."
              value={formValue.message}
              onChange={(e) => setFormValue({ ...formValue, message: e.target.value })}
              required
            />
          </div>

          <ReCAPTCHA
            sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
            ref={refCaptcha}
            onChange={() => setStatus(null)}
          />

          <div className={styles.ButtonContainer}>
            <button type="submit">
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
          <div className={styles.AlertMessage}>
          <p>{alertMessage || ' '}</p>
        </div>
        </form>
      </div>
    </section>
  );
}
