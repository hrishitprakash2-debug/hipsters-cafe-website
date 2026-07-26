"use client";
import { motion } from "framer-motion";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop&q=80",
    caption: "Our retro-inspired interiors",
    tag: "Interior",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1513267048331-5619c1ca3896?w=600&h=600&fit=crop&q=80",
    caption: "Schezwan momos — our bestseller",
    tag: "Food",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&q=80",
    caption: "Handcrafted every single cup",
    tag: "Coffee",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop&q=80",
    caption: "Read, relax, repeat",
    tag: "Vibes",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop&q=80",
    caption: "Flavors that tell stories",
    tag: "Food",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&q=80",
    caption: "Chocolate banana pancakes",
    tag: "Sweet",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-3"
            >
              Gallery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              A Peek Into<br />
              <span className="text-amber-400">Our World</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-amber-200/50 text-sm max-w-xs leading-relaxed"
          >
            Every corner tells a story. Every plate is crafted with care. Here is life at Hipsters.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                loading="lazy"
              />
              {/* Gradient overlay — always visible on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block text-[10px] tracking-wider uppercase text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full mb-2">
                  {photo.tag}
                </span>
                <p className="text-white text-sm font-medium leading-snug">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
