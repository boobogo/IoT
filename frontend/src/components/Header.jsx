// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
// import logoImage from '../images/raspberry-logo.png'; // Import the image

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
