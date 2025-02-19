import React from "react";
import '../App';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div className="cta-text">
          <h2>No long-term contracts. No catches.</h2>
          <p>Start your 30-day free trial today.</p>
          <div className="cta-buttons">
            <a href="/" className="btn btn-outline">
              Learn more
            </a>
            <a href="/" className="btn btn-primary">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
