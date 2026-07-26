"use client";
import { useState } from "react";
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
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-stone-950/80 backdrop-blur-lg border-b border-amber-500/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        <a href="#home" className="font-playfair text-xl font-bold text-amber-400 flex items-center gap-2">
          <span className="text-2xl">☕</span>
          <div>
            <div className="leading-tight">{siteInfo.name}</div>
            <div className="text-[9px] text-amber-400/70 tracking-widest uppercase font-inter">{siteInfo.tagline}</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm font-medium text-amber-200/70 hover:text-amber-400 transition-colors">
              {l.label}
            </button>
          ))}
          <ThemeToggle />
          <button onClick={() => scrollTo("menu")} className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all">
            Order Now
          </button>
        </div>
        <button className="md:hidden text-amber-200/80" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden bg-stone-950/95 border-t border-amber-500/10">
            <div className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((l) => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left text-sm font-medium text-amber-200/70 hover:text-amber-400">
                  {l.label}
                </button>
              ))}
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
