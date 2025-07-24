// src/components/Stats.jsx
import React, { useState, useEffect } from 'react';
import './Sections.css';

export default function Stats() {
  const githubUser = "Suganth46";
  const leetcodeUser = "suganthsuganth749";

  // Update every 30 min to bust caches
  const [cacheBuster, setCacheBuster] = useState(Math.floor(Date.now() / (30 * 60 * 1000)));
  useEffect(() => {
    const interval = setInterval(() => {
      setCacheBuster(Math.floor(Date.now() / (30 * 60 * 1000)));
    }, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const urls = {
    githubStats: `https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=transparent&hide_border=true&title_color=00aaff&text_color=f0f0f0&icon_color=00aaff&cache_seconds=1800&v=${cacheBuster}`,
    topLangs: `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=transparent&hide_border=true&title_color=00aaff&text_color=f0f0f0&cache_seconds=1800&v=${cacheBuster}`,
    streak: `https://streak-stats.demolab.com/?user=${githubUser}&theme=transparent&hide_border=true&stroke=00aaff&ring=00aaff&fire=00aaff&currStreakLabel=00aaff&v=${cacheBuster}`,
    heatmap: `https://leetcard.jacoblin.cool/${leetcodeUser}?theme=dark&font=Poppins&ext=heatmap&cache=300&v=${cacheBuster}`
  };

  return (
    <section id="stats" className="section stats-section">
      <h2>My Coding Profiles</h2>
      <p className="stats-intro">
       
      </p>
      <div className="stats-container">
        <div className="stat-card">
          <h3>GitHub Stats</h3>
          <img src={urls.githubStats} alt="GitHub Stats" className="stat-image" loading="lazy" />
        </div>
        <div className="stat-card">
          <h3>Top Languages</h3>
          <img src={urls.topLangs} alt="Top Languages" className="stat-image" loading="lazy" />
        </div>
        <div className="stat-card">
          <h3>GitHub Streak</h3>
          <img src={urls.streak} alt="GitHub Streak" className="stat-image" loading="lazy" />
        </div>
        <div className="stat-card">
          <h3>LeetCode Heatmap</h3>
          <img src={urls.heatmap} alt="LeetCode Heatmap" className="stat-image" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
