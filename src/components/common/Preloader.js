import React from 'react';
import './Preloader.css';

export default function Preloader({ visible }) {
  // We use a CSS class to control the fade-out animation
  const preloaderClass = `preloader ${visible ? 'visible' : 'hidden'}`;

  return (
    <div className={preloaderClass}>
      <div className="preloader-content">
        {/* You can replace this with a logo if you have one */}
        <h1 className="preloader-logo">SJ</h1>
        <div className="loader-bar"></div>
      </div>
    </div>
  );
}
