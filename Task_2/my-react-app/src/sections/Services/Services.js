import React from 'react';
import './Services.css';
import serviceicon from '../../assets/images/circleslineslatticeb1379-fx85.svg'; 
import serviceitem from '../../assets/images/circlesquaretrianglelinesrhombus1371-ow87.svg'; 
import serviceicons from '../../assets/images/patterncirclesd1371-arg.svg'; 
import serviceol from '../../assets/images/tilesquarescircles1371-e3k.svg'; 

const Services = () => {
  return (
    <section className="minniemal-services">
      <div className="service-item">
        <img
          alt="service icon"
          src={serviceicon}
        />
        <p>Service name</p>
      </div>
      <div className="service-item">
        <img
          alt="service icon"
          src={serviceitem}
        />
        <p>Service name</p>
      </div>
      <div className="service-item">
        <img
          alt="serviceicons"
          src={serviceicons}
        />
        <p>Service name</p>
      </div>
      <div className="service-item">
        <img
          alt="service icon"
          src={serviceol}
        />
        <p>Service name</p>
      </div>
    </section>
  );
};

export default Services;
