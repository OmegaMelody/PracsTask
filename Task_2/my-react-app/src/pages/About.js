import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Education from '../sections/Education/Education';
import Experience from '../sections/Experience/Experience';
import CoverLetter from '../sections/CoverLetter/CoverLetter';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <main>
        <Education />
        <Experience />
        <CoverLetter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
