import React from "react";
import '../App';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <a href="/">UntitledUI</a>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#resources">Resources</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <a className="btn btn-link" href="#login">
            Log in
          </a>
          <a className="btn btn-primary" href="#signup">
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
