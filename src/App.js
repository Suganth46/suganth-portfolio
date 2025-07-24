import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';

// Constants and Components
// import { GITHUB_USERNAME } from './utils/constants';
import Preloader from './components/common/Preloader';
import Navigation from './components/ui/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Stats from './components/sections/Stats';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

// Lazily load the heavy 3D component
const Scene3D = lazy(() => import('./components/3D/Scene3D'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader visible={isLoading} />
      
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <Navigation />
        
        <Suspense fallback={<div className="loading-fallback" />}>
          <Scene3D />
        </Suspense>

        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects username="Suganth46" />
          <Stats />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
