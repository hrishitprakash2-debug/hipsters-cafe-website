"use client";
import { motion } from "framer-motion";
import { siteInfo } from "@/data/siteInfo";
import { ArrowRight, Heart } from "lucide-react";

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-white/[0.04]">
      {/* CTA Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to experience<br />
            <span className="text-amber-400">The Hipsters Cafe?</span>
          </h3>
          <p className="text-amber-200/50 text-sm max-w-md mx-auto mb-8">
            Open 7 days a week. Walk in anytime — we are always ready to serve you something special.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollTo("menu")} className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-amber-500/25 transition-all">
              View Menu <ArrowRight className="w-4 h-4" />
            </button>
            <a href={siteInfo.googleMaps} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white font-semibold rounded-full text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
              Get Directions
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] mb-12" />

        {/* Footer Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☕</span>
              <span className="font-playfair text-xl font-bold text-white">{siteInfo.name}</span>
            </div>
            <p className="text-amber-200/40 text-sm leading-relaxed max-w-xs">
              Where food, travel, and creativity come together in perfect harmony. Est. 2023, Ghaziabad.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Navigate</h4>
            <ul className="space-y-2.5">
              {["About", "Menu", "Gallery", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <button onClick={() => scrollTo(link.toLowerCase())} className="text-amber-200/40 text-sm hover:text-amber-400 transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Hours</h4>
            <div className="space-y-2.5">
              <p className="text-amber-200/40 text-sm">{siteInfo.hours.days}</p>
              <p className="text-amber-400 font-semibold text-sm">{siteInfo.hours.time}</p>
              <p className="text-green-400/70 text-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Open now
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">Follow</h4>
            <div className="space-y-2.5">
              <a href={siteInfo.instagram} target="_blank" rel="noopener noreferrer" className="block text-amber-200/40 text-sm hover:text-amber-400 transition-colors">
                Instagram
              </a>
              
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-amber-200/30 text-xs">
            &copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
          </p>
          <p className="text-amber-200/30 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Ghaziabad
          </p>
        </div>
      </div>
    </footer>
  );
}
