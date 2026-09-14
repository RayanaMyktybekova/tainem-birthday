import React, { useState, useRef } from 'react';
import { Music, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} loop>
        <source src="/music/background.mp3.MP4" type="audio/mpeg" />
      </audio>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-soft-gold border border-soft-gold/30 px-4 py-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300"
      >
        {isPlaying ? (
          <>
            <Music2 className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">Музыканы өчүрүү</span>
          </>
        ) : (
          <>
            <Music className="w-5 h-5" />
            <span className="text-sm font-medium">Музыканы күйгүзүү 🎵</span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default MusicPlayer;
