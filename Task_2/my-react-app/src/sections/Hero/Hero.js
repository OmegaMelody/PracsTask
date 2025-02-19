import React from 'react';
import './Hero.css';
import hero from '../../assets/images/unsplashbxq8pvfpfy1333-0yrf-500w.png'; 

const Hero = () => {
  return (
    <section className="minniemal-hero">
      <div className="minniemal-herotext">
        <h1>Hello<br />I’m John<br />Doe</h1>
        <p className="minniemal-text54">
          A full stack allaround designer that tristique est placerat in massa <strong>consectetur quisque</strong> lobortis.
        </p>
        <button className="minniemal-button2">DOWNLOAD CV</button>
      </div>
      <img
        alt="hero"
        src={hero}
        className="hero-image"
      />
    </section>
  );
};

export default Hero;
