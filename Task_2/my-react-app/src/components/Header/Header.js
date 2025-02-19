import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="top-header">
      <nav className="top-nav">
        <ul>
          <li>
            <NavLink exact="true" to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
