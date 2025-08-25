import React from 'react';
import TechCard from '../ui/TechCard';
import './Sections.css';
import { SKILL_CATEGORIES } from '../../utils/constants';

export default function Skills() {
  // A counter to provide a unique, continuous index to every card
  let cardIndex = 0;

  return (
    <section id="skills" className="section">
      <h2>My Technical Skills</h2>
      <p className="skills-intro">
        
      </p>

      <div className="skills-container">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-list">
              {category.items.map((tech) => (
                // Pass the incrementing index to each TechCard
                <TechCard key={tech.name} tech={tech} index={cardIndex++} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
