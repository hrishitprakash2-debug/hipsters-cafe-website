"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteInfo } from "@/data/siteInfo";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="about" ref={ref} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-950 to-stone-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4">☕ Our Story</p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50 mb-6 leading-tight">
              Welcome to<br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{siteInfo.name}</span>
            </h2>
            <p className="text-amber-200/60 leading-relaxed mb-4">
              Founded by <span className="text-amber-400 font-semibold">{siteInfo.founders[0].handle}</span> and <span className="text-amber-400 font-semibold">{siteInfo.founders[1].handle}</span>, our cafe blends classic cuisine with a modern twist, all set within charming retro interiors.
            </p>
            <p className="text-amber-200/60 leading-relaxed mb-6">
              Whether you&apos;re here for the travel-inspired dishes or the vibrant open mic nights, we offer an experience that delights the senses and sparks connections.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🌏", label: "Travel-Inspired" },
                { icon: "🎤", label: "Open Mic" },
                { icon: "🎲", label: "Board Games" },
                { icon: "📚", label: "Reading" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-amber-100 font-medium text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div style={{ y }} className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&h=700&fit=crop"
                alt="Cafe Interior"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                <span className="text-4xl">☕</span>
                <div>
                  <div className="text-white font-bold text-lg">Est. 2023</div>
                  <div className="text-amber-200/80 text-sm">Ghaziabad, India</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-amber-500 text-white px-6 py-4 rounded-xl shadow-xl hidden md:block"
            >
              <div className="text-2xl font-bold">4.2★</div>
              <div className="text-sm text-amber-100">Google Rating</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
