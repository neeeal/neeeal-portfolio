import { useState, useRef, useEffect, createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from '../css/ContactMe.module.css';
import { Icon } from '@iconify/react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const ENV_VAR = process.env;
  console.log('yes',process.env.REACT_APP_EMAIL_JS_TEMPLATE);
  const [status, setStatus] = useState(null);
  const [formValue, setFormValue] = useState({
    email: "",
    message: "",
  });

  const refCaptcha = createRef();
  const form = useRef();

  useEffect(() => {
    let timeout;

    if (status === true || false) {
      // Show the info message for 9 seconds
      timeout = setTimeout(() => {
        // setAlertPrompt(null);
      }, 10000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
        setStatus(null);
      }
    };
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = refCaptcha.current.getValue();
    setStatus(true);

    const params = {
      ...formValue,
      "g-recaptcha-response": token,
    };

    switch (true) {
      case formValue.user_name === "":
        setStatus(false);
        break;

      case formValue.user_email === "":
        setStatus(false);
        break;

      case token === undefined:
        setStatus(false);
        break;

      default:
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
                // setAlertMessage("Sent successfully");
                setStatus(false);
                setFormValue({});
              }
              // console.log("SUCCESS!", response.status, response.text);
              window.location.reload(); // Reload the page after email is sent
            },
            (err) => {
              // setAlertMessage(`Failed: ${err.text}`);
              setStatus(false);
              setFormValue({});
              console.log("FAILED...", err.text);
            }
          );
    }
  };

  // function sendEmail(e) {
  //   e.preventDefault();

  //   // Add your own verification logic here if needed before sending the email

  //   emailjs.sendForm('service_5j9ppps', 'template_son98a', e.target, 'lhX5PaAzhfDOwSubz')
  //   // emailjs.sendForm(process.env.EMAIL_JS_SERVICE, process.env.EMAIL_JS_TEMPLATE, e.target, process.env.EMAIL_JS_USER)
  //     .then((result) => {
  //         window.location.reload(); // Reload the page after email is sent
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }

  // const sendEmail = (captchaValue) => {
  //   const params = {

  //     'g-recaptcha-response': captchaValue,
  //   };

  //   emailjs.send(
  //     process.env.EMAIL_JS_SERVICE,
  //     process.env.EMAIL_JS_TEMPLATE,
  //     params,
  //     process.env.EMAIL_JS_USER,
  //   )
  //     .then(({ status }) => {
  //       console.log("EMAILJS SENT", status.code);
  //     }, (err) => {
  //       console.log("EMAILJS ERROR", err);
  //     });
  // };

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

          {/* reCAPTCHA widget */}
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
            ref={refCaptcha}
            onChange={() => setStatus(null)}
          />
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
