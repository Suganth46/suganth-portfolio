import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navigation.css';

// Define navigation items in an array for easy management
const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper functions to manage the mobile menu state
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className="main-nav">
        <div className="nav-container">
          <Link to="hero" smooth={true} duration={500} containerId="main-content" className="nav-logo">
            Suganth J
          </Link>

          {/* Desktop Navigation Links */}
          <div className="nav-links-desktop">
            {navLinks.map(({ id, label }) => (
              <Link
                key={id}
                to={id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80} // Adjust offset for the taller navbar
                className="nav-link"
                activeClass="active"
                containerId="main-content"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right-side actions: CTA button and hamburger icon */}
          <div className="nav-actions">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              containerId="main-content"
              className="cta-button-nav"
            >
              Contact Me
            </Link>
            <button
              className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map(({ id, label }) => (
          <Link
            key={`mobile-${id}`}
            to={id}
            smooth={true}
            duration={500}
            offset={-80}
            className="mobile-nav-link"
            onClick={closeMobileMenu}
            containerId="main-content"
          >
            {label}
          </Link>
        ))}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="mobile-cta-button"
          onClick={closeMobileMenu}
          containerId="main-content"
        >
          Contact Me
        </Link>
      </div>
    </>
  );
}
