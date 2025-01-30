// Footer.js
import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram  } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Bold-Erdene Bayaraa</p>
      <ul className="social-media">
        <li><a href="https://www.linkedin.com/in/bold-erdene-bayaraa-152513256/" target="_blank" rel="noopener noreferrer" className='linkedin'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
        <li><a href="https://www.facebook.com/Bolderdene.Bayaraa" target="_blank" rel="noopener noreferrer" className='facebook'><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
        <li><a href="https://www.instagram.com/boobogo/" target="_blank" rel="noopener noreferrer" className='instagram'><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
      </ul>
    </footer>
  );
}

export default Footer;