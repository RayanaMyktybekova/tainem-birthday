import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const stanzas = [
  [
    "64 жаш — пайгамбар жаш деп аталат,",
    "Баскан жолуңуз нур төгүлүп, жарык жанат.",
    "Тайнем биздин үйдүн куту, тиреги,",
    "Сиз бар жерде бакыт дайым сакталат."
  ],
  [
    "Мээримиңиз күн сыяктуу төгүлгөн,",
    "Сөзүңүздү туу тутуп, тумардай сактайбыз.",
    "Айтканыңыз бизге акыл-насаат, кеп,",
    "Сиздей асыл жан барбы бул ааламда?"
  ],
  [
    "Уул-кызыңыз, небереңиз, жээниңиз күтүп,",
    "Үйүңүзгө биз да дайым кубанып келебиз.",
    "«Келгиле» деп кучагыңызды жайганда,",
    "Мээримиңиз жүрөгүбүзгө нур себет."
  ],
  [
    "Тайтам менен бирге карып, бактыбызга,",
    "Төрүбүздүн көркү болуп жүрө бериңиз.",
    "Ырыс-кутка бөлөнгөн берекелүү үйдө,",
    "Ден соолукта узун өмүр сүрө бериңиз."
  ],
  [
    "Куттуу болсун 64 жашыңыз,",
    "Ачык болсун дайым баскан жолуңуз.",
    "Уул-кызыңыз, небереңиз, жээниңиздин сыйын көрүп,",
    "Жүз жашка да аман-эсен жетиңиз!"
  ]
];

const Poem = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white/50 to-light-pink/20 relative overflow-hidden">
      {/* Аудио плеер */}
      <audio
        ref={audioRef}
        src="/music/background.mp3.MP4"
        loop
        onEnded={() => setIsPlaying(false)}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-soft-gold/30"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 mt-10 flex flex-col items-center"
        >
          <h2 className="font-poem text-5xl md:text-6xl text-rose-400 mb-6">
            Жүрөктөн Чыккан Сөздөр
          </h2>

          {/* Музыкалык башкаруу баскычтары */}
          <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full shadow-md border border-rose-100">
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 text-rose-500 font-medium hover:text-rose-600 transition-colors"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5 fill-current" />
                  <span>Токтотуу</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                  <span>Ырды угуу</span>
                </>
              )}
            </button>

            <div className="w-px h-4 bg-rose-200"></div>

            <button
              onClick={toggleMute}
              className="text-rose-400 hover:text-rose-600 transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>

        {/* Ыр куплетери */}
        <div className="space-y-16">
          {stanzas.map((stanza, stanzaIdx) => (
            <motion.div
              key={stanzaIdx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="space-y-4 p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-rose-100/50 shadow-sm hover:shadow-md transition-shadow"
            >
              {stanza.map((line, lineIdx) => (
                <motion.p
                  key={lineIdx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: lineIdx * 0.15 }}
                  className="font-heading text-xl md:text-2xl text-dark-text/90 leading-relaxed"
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Poem;