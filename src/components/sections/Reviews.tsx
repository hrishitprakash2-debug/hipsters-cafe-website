"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "@/data/reviews";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Reviews() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((p) => (p + 1) % reviews.length);
  const prev = () => setIdx((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <SectionWrapper id="reviews" className="bg-gradient-to-b from-amber-950 to-stone-950">
      <div className="text-center mb-10 sm:mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">💬 Reviews</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-amber-50 mb-4">
          What People <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Say</span>
        </h2>
      </div>

      <div className="hidden md:block mb-10 sm:mb-16">
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.4 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
              <div className="text-5xl mb-6">💬</div>
              <p className="text-xl md:text-2xl text-amber-100 font-medium leading-relaxed mb-8 italic max-w-3xl mx-auto">&ldquo;{reviews[idx].text}&rdquo;</p>
              <div className="text-amber-400 font-bold">{reviews[idx].name}</div>
              <div className="text-sm text-amber-200/50">{reviews[idx].source} • {reviews[idx].rating}★</div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-6">
            <motion.button onClick={prev} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-200/60 hover:text-amber-400" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>←</motion.button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-amber-400 w-6" : "bg-amber-200/30"}`} />
              ))}
            </div>
            <motion.button onClick={next} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-200/60 hover:text-amber-400" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>→</motion.button>
          </div>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        {reviews.map((r) => (
          <motion.div key={r.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-amber-100 italic mb-4 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-amber-400 font-bold text-sm">{r.name}</div>
                <div className="text-xs text-amber-200/50">{r.source}</div>
              </div>
              <div className="text-amber-400">{"★".repeat(r.rating)}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
