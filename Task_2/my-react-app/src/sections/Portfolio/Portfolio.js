import React from 'react';
import './Portfolio.css';
import Rectangle268 from '../../assets/images/rectangle2681311-nmm-300h.png'; 
import Rectangle269 from '../../assets/images/rectangle2691311-ob9j-400h.png'; 

const Portfolio = () => {
  return (
    <section className="minniemal-portfolio1">
      <h2>Portfolio</h2>
      <hr className="line" />
      <div className="portfolio-images">
        <img
          alt="Rectangle268"
          src={Rectangle268}
        />
        <img
          alt="Rectangle269"
          src={Rectangle269}
        />
      </div>
      <ul className="portfolio-list">
        <li>01 Fashion</li>
        <li>02 Art</li>
        <li>03 Design</li>
        <li>04 Styling</li>
      </ul>
    </section>
  );
};

export default Portfolio;
