"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  const items = ["TRAVEL CAFE", "CLASSIC FOOD", "RETRO INTERIORS", "OPEN MIC", "BOARD GAMES", "LGBT FRIENDLY"];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-red-600 py-3 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="mx-6 text-white text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-6">
            {item}
            <span className="text-amber-300">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
