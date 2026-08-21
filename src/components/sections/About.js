import React from 'react';
import './Sections.css';
// Make sure you have a profile picture in this path
// You can use the 'profile-placeholder.jpg' from the assets folder for now
import profilePic from '../../assets/images/profile-placeholder.jpg';

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-layout">
        
        <div className="about-image-container">
          <img 
            src={profilePic} 
            alt="Suganth J" 
            className="profile-picture" 
          />
        </div>

        <div className="about-text-container">
          <p>
            I am B.E. CSE (Cyber Security) student at <span className="highlight">Sri Shakthi Institute of Engineering and Technology</span>, graduating in 2027. My journey into software development is driven by a deep fascination with how complex systems are architected and secured.
          </p>
          <p>
            My core stack revolves around <span className="highlight">Java, Spring Boot, Spring Security, JWT, PostgreSQL, and Hibernate</span>. I specialize in building robust backend systems, and I'm actively expanding my DevOps depth with tools like Docker, Kubernetes, AWS, GitHub Actions, Prometheus, and Grafana.
          </p>
          <p>
            With a cybersecurity specialization, I bring a unique security-first mindset to software engineering—serving as a strong differentiator for security-sensitive backend roles and ensuring the applications I build are both highly scalable and secure.
          </p>
        </div>

      </div>
    </section>
  );
}
