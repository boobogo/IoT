// Contact.js
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
