"use client";
import { motion } from "framer-motion";
import { siteInfo } from "@/data/siteInfo";

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=1080&fit=crop" alt="Cafe Interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/70 to-stone-950" />
      </div>
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float hidden sm:block">✈️</div>
      <div className="absolute top-40 right-20 text-5xl opacity-15 animate-float hidden sm:block" style={{ animationDelay: "2s" }}>☕</div>
      <div className="absolute bottom-40 left-20 text-4xl opacity-15 animate-float hidden sm:block" style={{ animationDelay: "4s" }}>🎵</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-20 animate-float hidden sm:block" style={{ animationDelay: "1s" }}>📚</div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-block mb-4 sm:mb-6">
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
            🌍 {siteInfo.subTagline}
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="font-playfair text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="text-amber-50">The </span>
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">Hipsters</span>
          <br />
          <span className="text-amber-50">Cafe</span>
          <span className="text-amber-400">®</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-xl sm:text-2xl md:text-4xl font-playfair italic text-amber-400/90 mb-3 sm:mb-4">
          &ldquo;{siteInfo.tagline}&rdquo;
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="text-base sm:text-lg md:text-xl text-amber-200/60 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Where every meal is an adventure. Classic cuisine with a modern twist, set within charming retro interiors.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <motion.button onClick={() => scrollTo("menu")} className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full text-base sm:text-lg" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            🍽️ Explore Our Menu
          </motion.button>
          <motion.button onClick={() => scrollTo("contact")} className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white/5 border border-white/15 text-amber-200 font-semibold rounded-full text-base sm:text-lg backdrop-blur-sm" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            📍 Visit Us
          </motion.button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }} className="mt-12 sm:mt-16 flex items-center justify-center gap-6 sm:gap-8 md:gap-12">
          {[{ label: "Google Rating", value: "4.2 ★" }, { label: "Happy Customers", value: "5000+" }, { label: "Menu Items", value: "25+" }].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 font-playfair">{stat.value}</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-amber-200/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <motion.div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-amber-400/30 flex items-start justify-center p-1 sm:p-1.5" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-1 h-2.5 sm:w-1.5 sm:h-3 bg-amber-400/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}