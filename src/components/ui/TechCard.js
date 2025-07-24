import React from 'react';
import './TechCard.css';

// The component now accepts 'index' as a prop
export default function TechCard({ tech, index }) {
  const iconPath = require(`../../assets/icons/tech-icons/${tech.icon}`);

  return (
    <div
      className="tech-card"
      // This inline style applies a staggered delay based on the card's index
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <img src={iconPath} alt={`${tech.name} icon`} />
      <span>{tech.name}</span>
    </div>
  );
}
