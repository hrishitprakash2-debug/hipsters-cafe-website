"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "@/data/menu";
import { formatPrice } from "@/lib/utils";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function MenuSection() {
  const [active, setActive] = useState(menuCategories[0].id);
  const current = menuCategories.find((c) => c.id === active)!;

  return (
    <SectionWrapper id="menu" className="bg-stone-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">🍽️ Our Menu</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-amber-50 mb-4">
            Flavor-Packed <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Favorites</span>
          </h2>
          <p className="text-lg text-amber-200/60 max-w-2xl mx-auto">From sizzling starters to sweet endings.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {menuCategories.map((cat) => (
            <motion.button key={cat.id} onClick={() => setActive(cat.id)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${active === cat.id ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25" : "bg-white/5 text-amber-200/60 border border-white/10 hover:bg-white/10"}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {cat.emoji} {cat.name}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {current.items.map((item) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300" whileHover={{ scale: 1.02, y: -4 }}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-amber-50 text-sm">{item.name}</h3>
                      {item.popular && <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">⭐ Popular</span>}
                    </div>
                  </div>
                  <span className="text-lg font-bold text-amber-400 font-playfair">{formatPrice(item.price)}</span>
                </div>
                {item.description && <p className="text-xs text-amber-200/50 ml-10">{item.description}</p>}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
