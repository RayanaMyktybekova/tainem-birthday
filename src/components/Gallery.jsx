import React from 'react';
import { motion } from 'framer-motion';
import mediaList from '../mediaList.json';

const Gallery = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-dark-text mb-4">
            Жаркын Ирмемдер
          </h2>
          <div className="w-24 h-1 bg-soft-gold/40 mx-auto rounded-full"></div>
        </motion.div>

        {mediaList.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            Сүрөттөр же видеолор жок. Сураныч, public/media/ папкасына файлдарды кошуп, сайтты кайра иштетиңиз.
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {mediaList.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.6, delay: (index % 10) * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-lg bg-warm-cream p-3 flex flex-col border border-soft-gold/10 break-inside-avoid"
              >
                <div className="relative w-full rounded-xl overflow-hidden bg-gray-100">
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      controls
                      preload="metadata"
                      className="w-full h-auto block"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={`Тайнем ${index + 1}`}
                      loading="lazy"
                      className="w-full h-auto block object-contain"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
