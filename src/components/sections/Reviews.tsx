"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mayank Goyal",
    text: "One of the best places in Ghaziabad. Its our always go to place/adda. Love their open mic sessions. Kudos!",
    rating: 5,
    source: "Google",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=MG&backgroundColor=d97706&textColor=ffffff",
  },
  {
    name: "Shaini Tyagi",
    text: "Nice cafe with good atmosphere. Ordered hot chocolate and schezwan momos. Tasty food and great ambiance.",
    rating: 5,
    source: "Google",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=ST&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    name: "Gauric Saxena",
    text: "Delicious food, great ambience, lovely decor and definitely soothing music. A must visit for youngsters and families alike.",
    rating: 5,
    source: "Google",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=GS&backgroundColor=7c3aed&textColor=ffffff",
  },
];

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const card1Y = useTransform(scrollYProgress, [0.1, 0.9], ["50%", "-40%"]);
  const card2Y = useTransform(scrollYProgress, [0.1, 0.9], ["70%", "-20%"]);
  const card3Y = useTransform(scrollYProgress, [0.1, 0.9], ["90%", "0%"]);
  const cardYs = [card1Y, card2Y, card3Y];

  return (
    <section id="reviews" ref={containerRef} className="relative overflow-hidden" style={{ minHeight: "140vh" }}>
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1529543544282-ea95407407db?w=1920&h=1200&fit=crop&q=80"
          alt="Happy people at cafe"
          className="w-full h-[130%] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-stone-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-transparent to-stone-950" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-3"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            What Our Guests<br />
            <span className="text-amber-400">Are Saying</span>
          </motion.h2>
        </div>

        {/* Stacked Review Cards */}
        <div className="relative max-w-md mx-auto" style={{ height: "500px" }}>
          {reviews.map((review, i) => {
            const rotations = [-2, 1.5, -1];
            return (
              <motion.div
                key={i}
                style={{ y: cardYs[i], rotate: rotations[i] }}
                className="absolute inset-x-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="bg-stone-900/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
                  <Quote className="w-8 h-8 text-amber-400/30 mb-4" />
                  <p className="font-playfair text-lg sm:text-xl italic text-amber-100 leading-relaxed mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">{review.name}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {Array.from({ length: review.rating }).map((_, j) => (
                            <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-amber-200/40 text-xs">{review.source}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
