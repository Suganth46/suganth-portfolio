import React from 'react';
import { Link } from 'react-scroll';
import './Sections.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Suganth J. All Rights Reserved.</p>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          containerId="main-content"
          className="back-to-top"
        >
          Back to Top &uarr;
        </Link>
      </div>
    </footer>
  );
}
