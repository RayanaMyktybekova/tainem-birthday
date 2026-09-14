import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-warm-cream via-light-pink/20 to-warm-cream">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40"></div>
      
      {/* Decorative floral circles or light effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-light-pink rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-soft-gold rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-dark-text leading-tight drop-shadow-sm">
            <span className="block text-soft-gold mb-4 text-6xl md:text-8xl lg:text-9xl">64</span>
            жашыңыз кут болсун, <br />
            <span className="text-rose-400 font-poem text-6xl md:text-7xl lg:text-8xl mt-4 inline-block">сүйүктүү тайнем!</span> ❤️
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mt-8 text-lg text-gray-500 max-w-xl mx-auto"
        >
          Төмөнүрөөк сыдырып, биздин сизге арналган белегибизди көрүңүз
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-soft-gold/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 bg-soft-gold rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
