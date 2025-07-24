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
            I am a dedicated <span className="highlight">Java Developer</span> with a strong passion for backend technologies. My journey into software development began with a fascination for how complex systems work, which naturally led me to the world of server-side programming and architecture.
          </p>
          <p>
            My core expertise lies in building robust and scalable applications using the <span className="highlight">Spring Boot</span> framework. I enjoy the challenges of designing efficient RESTful APIs, optimizing database interactions with tools like <span className="highlight">MySQL and PostgreSQL</span>, and ensuring the security and reliability of the applications I build.
          </p>
          <p>
            I am always eager to learn and adapt to new technologies. I am driven by the desire to solve complex problems and contribute to meaningful projects that have a real-world impact.
          </p>
        </div>

      </div>
    </section>
  );
}
