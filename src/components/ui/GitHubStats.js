import React from 'react';
import { useGitHub } from '../../hooks/useGitHub';
import Loading from '../common/Loading';
import './GitHubStats.css';

export default function GitHubStats({ username }) {
  const { profile, error } = useGitHub(username);
  if (error) return <p>Error loading GitHub data.</p>;
  if (!profile) return <Loading />;

  return (
    <div className="stats-card">
      <img src={profile.avatar_url} alt={username} className="avatar" />
      <h3>{profile.name}</h3>
      <ul>
        <li>Public Repos: {profile.public_repos}</li>
        <li>Followers  : {profile.followers}</li>
        <li>Following  : {profile.following}</li>
      </ul>
    </div>
  );
}
