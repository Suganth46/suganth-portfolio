// src/components/sections/Projects.jsx
import React from 'react';
import { useGitHub } from '../../hooks/useGitHub';
import ProjectCard from '../ui/ProjectCard';
import Loading     from '../common/Loading';
import './Sections.css';

export default function Projects({ username }) {
  const { profile, repos, loading, error, reload } = useGitHub(username);

  return (
    <section id="projects" className="section">
      <h2>Latest Projects</h2>

      {error && (
        <p style={{ color: '#ff6b6b' }}>
          Error: {error} <button onClick={reload}>Retry</button>
        </p>
      )}

      {loading && <Loading />}

      {!loading && profile && (
        <>
          <p className="projects-intro">
           
          </p>

          {repos.length > 0 ? (
            <div className="grid-container">
              {repos.map(repo => (
                <ProjectCard key={repo.id} repo={repo} />
              ))}
            </div>
          ) : (
            <p>No public repositories found.</p>
          )}

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-button"
          >
            View All on GitHub
          </a>
        </>
      )}
    </section>
  );
}
