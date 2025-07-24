import React from 'react';
import './Sections.css';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Get in Touch</h2>
      <p className="contact-intro">
        I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out.
      </p>

      <div className="contact-links-container">
        <a 
          href="https://www.linkedin.com/in/suganth-j-3507b2293" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link-button"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/Suganth46" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link-button"
        >
          GitHub
        </a>
        {/* Replace with your actual email address */}
        <a 
          href="mailto:suganthsuganth749@gmail.com" 
          className="contact-link-button"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
