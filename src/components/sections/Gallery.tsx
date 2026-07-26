"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "interior", "food", "events", "vibe"];
  const filtered = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <SectionWrapper id="gallery" className="bg-gradient-to-b from-stone-950 to-amber-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">📸 Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-amber-50 mb-4">
            A Peek Into <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Our World</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <motion.button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${filter === cat ? "bg-amber-500 text-white" : "bg-white/5 text-amber-200/60 border border-white/10 hover:bg-white/10"}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]" whileHover={{ scale: 1.03 }}>
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{item.caption}</p>
                  <p className="text-amber-300/70 text-xs capitalize mt-1">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
