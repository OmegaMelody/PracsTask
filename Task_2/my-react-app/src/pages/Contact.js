import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ContactForm from '../sections/ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <Header />
      <main>
        <section className="minniemal-contact">
          <div className="contact-info">
            <h2>Contact</h2>
            <hr className="line" />
            <p>
              Consectetur adipiscing elit viverra tristique placerat in massa consectetur.
            </p>
            <p>
              Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam.
            </p>
            <p>
              <strong>EMAIL:</strong> company@youremail.com<br />
              <strong>WEBSITE:</strong> www.yourwebsite.com
            </p>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
