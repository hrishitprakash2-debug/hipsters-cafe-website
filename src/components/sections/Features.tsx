"use client";
import { motion } from "framer-motion";
import { siteInfo } from "@/data/siteInfo";
import { staggerItem } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Features() {
  return (
    <SectionWrapper id="features" className="bg-gradient-to-b from-amber-950 to-stone-950">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">✨ Why Us</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-amber-50 mb-4">
          More Than Just a <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Cafe</span>
        </h2>
        <p className="text-lg text-amber-200/60 max-w-2xl mx-auto">We&apos;re a community hub where food, creativity, and good vibes come together.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteInfo.features.map((feature, index) => (
          <motion.div key={index} variants={staggerItem} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="group relative rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300" whileHover={{ scale: 1.03, y: -8 }}>
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
            <h3 className="text-lg font-bold text-amber-50 mb-2">{feature.title}</h3>
            <p className="text-sm text-amber-200/60 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
