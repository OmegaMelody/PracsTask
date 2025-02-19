import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form">
      <form action="#" method="post">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name..." />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="Your email..." />
        </label>
        <label>
          Message
          <textarea name="message" placeholder="Your message..."></textarea>
        </label>
        <button type="submit">SEND MESSAGE</button>
      </form>
    </section>
  );
};

export default ContactForm;
