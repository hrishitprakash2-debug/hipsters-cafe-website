"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "MAYANK GOYAL",
    text: "One of the best places in Ghaziabad. Its our always go to place. Love their open mic sessions. Kudos!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mayank&backgroundColor=b6e3f4",
    color: "bg-red-600",
    rotate: "-2deg",
  },
  {
    name: "SHAINI TYAGI",
    text: "Nice cafe with good atmosphere. Ordered hot chocolate and schezwan momos. Tasty food and great ambiance.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shaini&backgroundColor=ffdfbf",
    color: "bg-red-500",
    rotate: "1deg",
  },
  {
    name: "GAURIC SAXENA",
    text: "Delicious food, great ambience, lovely decor and definitely soothing music. This place is a must visit!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gauric&backgroundColor=c0aede",
    color: "bg-red-700",
    rotate: "-1deg",
  },
];

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const card1Y = useTransform(scrollYProgress, [0, 1], ["40%", "-30%"]);
  const card2Y = useTransform(scrollYProgress, [0, 1], ["60%", "-10%"]);
  const card3Y = useTransform(scrollYProgress, [0, 1], ["80%", "10%"]);

  return (
    <section id="reviews" ref={containerRef} className="relative min-h-[120vh] overflow-hidden">
      {/* Background Image */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1529543544282-ea95407407db?w=1920&h=1080&fit=crop"
          alt="Happy customers at cafe"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm"
          >
            💬 Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-white"
          >
            What People <span className="text-amber-400">Say</span>
          </motion.h2>
        </div>

        {/* Scrolling Cards */}
        <div className="relative max-w-4xl mx-auto h-[500px] sm:h-[600px]">
          {/* Card 1 */}
          <motion.div
            style={{ y: card1Y, rotate: -2 }}
            className="absolute top-0 left-0 sm:left-[5%] w-full sm:w-[420px]"
          >
            <div className={`${reviews[0].color} rounded-2xl p-6 sm:p-8 shadow-2xl`}>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={reviews[0].avatar}
                  alt={reviews[0].name}
                  className="w-14 h-14 rounded-full bg-white border-2 border-white/20"
                />
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: reviews[0].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-white font-bold tracking-wider text-sm">{reviews[0].name}</p>
                </div>
              </div>
              <p className="text-white/90 text-lg sm:text-xl font-playfair italic leading-relaxed">
                &ldquo;{reviews[0].text}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            style={{ y: card2Y, rotate: 1 }}
            className="absolute top-32 sm:top-40 right-0 sm:right-[5%] w-full sm:w-[420px]"
          >
            <div className={`${reviews[1].color} rounded-2xl p-6 sm:p-8 shadow-2xl`}>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={reviews[1].avatar}
                  alt={reviews[1].name}
                  className="w-14 h-14 rounded-full bg-white border-2 border-white/20"
                />
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: reviews[1].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-white font-bold tracking-wider text-sm">{reviews[1].name}</p>
                </div>
              </div>
              <p className="text-white/90 text-lg sm:text-xl font-playfair italic leading-relaxed">
                &ldquo;{reviews[1].text}&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            style={{ y: card3Y, rotate: -1 }}
            className="absolute top-64 sm:top-80 left-[10%] sm:left-[15%] w-full sm:w-[420px]"
          >
            <div className={`${reviews[2].color} rounded-2xl p-6 sm:p-8 shadow-2xl`}>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={reviews[2].avatar}
                  alt={reviews[2].name}
                  className="w-14 h-14 rounded-full bg-white border-2 border-white/20"
                />
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: reviews[2].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-white font-bold tracking-wider text-sm">{reviews[2].name}</p>
                </div>
              </div>
              <p className="text-white/90 text-lg sm:text-xl font-playfair italic leading-relaxed">
                &ldquo;{reviews[2].text}&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
