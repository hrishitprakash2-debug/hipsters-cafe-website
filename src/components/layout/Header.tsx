"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteInfo } from "@/data/siteInfo";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { id: "about", label: "About" },
  { id: "menu", label: "Menu" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-950/95 backdrop-blur-xl border-b border-amber-500/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-14 sm:h-16 px-3 sm:px-6">
        <a href="#home" className="font-playfair text-base sm:text-xl font-bold text-amber-400 flex items-center gap-1.5 sm:gap-2">
          <span className="text-lg sm:text-2xl">☕</span>
          <div>
            <div className="leading-tight text-sm sm:text-xl">{siteInfo.name}</div>
            <div className="text-[7px] sm:text-[9px] text-amber-400/70 tracking-widest uppercase font-inter">{siteInfo.tagline}</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm font-medium text-amber-200/70 hover:text-amber-400 transition-colors">
              {l.label}
            </button>
          ))}
          <ThemeToggle />
          <motion.button
            onClick={() => scrollTo("menu")}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.button>
        </div>
        <button className="md:hidden text-amber-200/80 p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-stone-950/95 backdrop-blur-xl border-t border-amber-500/10"
          >
            <div className="flex flex-col px-4 py-3 gap-2">
              {navLinks.map((l) => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left text-sm font-medium text-amber-200/70 hover:text-amber-400 py-2">
                  {l.label}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-amber-500/10 mt-1">
                <ThemeToggle />
                <button onClick={() => scrollTo("menu")} className="flex-1 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-full">
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
