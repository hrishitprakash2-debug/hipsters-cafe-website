"use client";
import { motion } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=800&fit=crop", alt: "Cafe interior", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop", alt: "Food spread", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop", alt: "Coffee art", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=800&fit=crop", alt: "Open mic", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop", alt: "Pancakes", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", alt: "Reading corner", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6"
          >
            📸 Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-amber-50"
          >
            A Peek Into <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Our World</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
