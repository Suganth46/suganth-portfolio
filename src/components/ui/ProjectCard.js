import React from 'react';
import './ProjectCard.css'; // Make sure this CSS file exists

export default function ProjectCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      {/* Top section with title and stars */}
      <div className="card-header">
        <h3>{repo.name}</h3>
        <span className="stars">★ {repo.stargazers_count}</span>
      </div>

      <p className="card-description">{repo.description || 'No description provided.'}</p>

      {/* Bottom section with the new language tag */}
      <div className="card-footer">
        {repo.language && (
          <div className="language-tag">
            <span className="language-dot"></span>
            {repo.language}
          </div>
        )}
      </div>
    </a>
  );
}
