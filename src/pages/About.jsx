
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function About() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8nuxsw3', 'template_4ebr03g', form.current, '6M-rV1iiaVqa5DANh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
  )
}

export default About

