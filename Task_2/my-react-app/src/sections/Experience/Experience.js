import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="minniemal-experience">
      <h2>Experience</h2>
      <hr className="line" />
      <div className="accordion-list">
        <div className="accordion-item">
          <h3 className="title">Team Leader (2019 – present)</h3>
          <p>Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu.</p>
        </div>
        <div className="accordion-item">
          <h3 className="title">Product Designer</h3>
        </div>
        <div className="accordion-item">
          <h3 className="title">Senior UX Designer</h3>
        </div>
        <div className="accordion-item">
          <h3 className="title">UX Designer</h3>
        </div>
        <div className="accordion-item">
          <h3 className="title">Junior Designer</h3>
        </div>
      </div>
    </section>
  );
};

export default Experience;
