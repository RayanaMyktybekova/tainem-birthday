import React from 'react';
import { motion } from 'framer-motion';

const FinalSection = () => {
  return (
    <section className="py-24 px-4 bg-warm-cream relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40"></div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative rounded-t-full rounded-b-3xl overflow-hidden p-3 bg-white shadow-2xl border border-soft-gold/20 mb-12"
        >
          <div className="w-64 h-80 md:w-96 md:h-[30rem] rounded-t-full rounded-b-xl overflow-hidden">
            <img 
              src="/images/photo5.jpg" 
              alt="Сүйүктүү тайнем" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center space-y-6"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-dark-text drop-shadow-sm">
            Жүз жашка аман-эсен жетиңиз!
          </h2>
          <p className="font-poem text-5xl md:text-6xl lg:text-7xl text-rose-400 mt-4">
            Сизди абдан жакшы көрөбүз! ❤️
          </p>
        </motion.div>
        
      </div>
    </section>
  );
};

export default FinalSection;
