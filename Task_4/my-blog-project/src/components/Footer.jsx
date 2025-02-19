import React from "react";
import '../App';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <a href="/" className="footer-logo">
            UntitledUI
          </a>
          <p>© 2077 Untitled UI. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="/">Overview</a>
          <a href="/">Pricing</a>
          <a href="/">Guides</a>
          <a href="/">Help</a>
          <a href="/">Privacy</a>
        </div>
        <div className="footer-right">
          <label>Stay up to date:</label>
          <div className="footer-subscribe">
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
