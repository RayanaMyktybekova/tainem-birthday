import React from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Poem from './components/Poem';
import FinalSection from './components/FinalSection';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="relative min-h-screen font-sans bg-warm-cream overflow-hidden">
      <MusicPlayer />
      <main>
        <Hero />
        <Gallery />
        <Poem />
        <FinalSection />
      </main>
    </div>
  );
}

export default App;
