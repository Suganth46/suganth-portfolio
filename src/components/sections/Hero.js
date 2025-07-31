import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll'; // Import Link for the scroll indicator
import './Sections.css';

// Import your social icons
import linkedinIcon from '../../assets/icons/social/linkedin.svg';
import githubIcon from '../../assets/icons/social/github.svg';
import leetcode from '../../assets/icons/social/leetcode.svg';
export default function Hero() {
  return (
    <section id="hero" className="section hero-section">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Suganth J</span>
          <span className="wave">👋</span>
        </h1>

        {/* Dynamic Typing Animation */}
        <TypeAnimation
          sequence={[
            'Java Developer',
            2000, // Pause for 2 seconds
            'Backend Enthusiast',
            2000,
            'Tech Explorer',
            2000,
          ]}
          wrapper="p"
          speed={50}
          className="subtitle"
          repeat={Infinity}
        />

        {/* CTA Buttons */}
        <div className="cta-group">
          <a href="#projects" className="cta-button">
            View My Work
          </a>
          <a href="#contact" className="cta-button secondary">
            Contact Me
          </a>
        </div>
        
        {/* Social media links */}
        <div className="social-links">
          <a href="https://github.com/Suganth46" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/suganth-j-3507b2293" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://leetcode.com/u/suganthsuganth749/" target="_blank" rel="noopener noreferrer">
            <img src={leetcode} alt="LeetCode" />
          </a>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <Link
        to="about" // Point to the next section
        smooth={true}
        duration={500}
        containerId="main-content"
        className="scroll-down-indicator"
        aria-label="Scroll to next section"
      >
        <div className="arrow"></div>
      </Link>
    </section>
  );
}
