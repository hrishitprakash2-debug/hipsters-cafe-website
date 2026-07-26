"use client";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Open Mic Nights",
    description: "Poetry, music, comedy — every week our stage comes alive with raw talent. Grab the mic or just vibe with the crowd.",
    accent: "border-amber-500/30",
  },
  {
    number: "02",
    title: "Travel-Inspired Decor",
    description: "Walls adorned with vintage maps, travel posters, and wanderlust artifacts. Every seat tells a different journey.",
    accent: "border-orange-500/30",
  },
  {
    number: "03",
    title: "Board Games & Books",
    description: "Uno, Ludo, Scrabble — plus a shelf full of novels. Unplug, connect, and lose track of time with your gang.",
    accent: "border-red-500/30",
  },
  {
    number: "04",
    title: "LGBT Friendly",
    description: "A safe, inclusive space where everyone is welcome. We celebrate diversity and believe love has no labels.",
    accent: "border-purple-500/30",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-3"
          >
            Why Hipsters
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            More Than Just<br />
            <span className="text-amber-400">A Cafe</span>
          </motion.h2>
        </div>

        {/* Feature Cards — Editorial Numbered Layout */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`group relative bg-white/[0.02] border ${f.accent} rounded-2xl p-6 sm:p-8 hover:bg-white/[0.04] transition-colors duration-300`}
            >
              <span className="font-playfair text-5xl sm:text-6xl font-bold text-amber-400/10 absolute top-4 right-6 select-none group-hover:text-amber-400/20 transition-colors">
                {f.number}
              </span>
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-3 relative z-10">
                {f.title}
              </h3>
              <p className="text-amber-200/50 text-sm leading-relaxed relative z-10">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
