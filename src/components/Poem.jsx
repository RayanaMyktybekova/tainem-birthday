import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white/50 to-light-pink/20 relative">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-soft-gold/30"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 mt-10"
        >
          <h2 className="font-poem text-5xl md:text-6xl text-rose-400 mb-2">Жүрөктөн Чыккан Сөздөр</h2>
        </motion.div>

        <div className="space-y-16">
          {stanzas.map((stanza, stanzaIdx) => (
            <div key={stanzaIdx} className="space-y-4">
              {stanza.map((line, lineIdx) => (
                <motion.p
                  key={lineIdx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: lineIdx * 0.15 }}
                  className="font-heading text-xl md:text-2xl text-dark-text/90 leading-relaxed"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Poem;
