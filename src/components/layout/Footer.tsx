"use client";
import { siteInfo } from "@/data/siteInfo";

const navLinks = [
  { id: "about", label: "About" },
  { id: "menu", label: "Menu" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-black/50 border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">☕</span>
              <div>
                <div className="text-xl font-bold text-amber-50 font-playfair">{siteInfo.name}</div>
                <div className="text-xs text-amber-400/80 tracking-[0.2em] uppercase">{siteInfo.tagline}</div>
              </div>
            </div>
            <p className="text-amber-200/50 text-sm leading-relaxed max-w-md mb-6">
              Where every meal is an adventure. Classic cuisine with a modern twist, set within charming retro interiors.
            </p>
            <div className="flex gap-3">
              <a href={siteInfo.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-200/60 hover:bg-amber-500/20 hover:text-amber-400 transition-all">📸</a>
              <a href={siteInfo.googleMaps} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-200/60 hover:bg-amber-500/20 hover:text-amber-400 transition-all">🗺️</a>
              <a href={`tel:${siteInfo.phone.replace(/\s/g, "")}`} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-200/60 hover:bg-amber-500/20 hover:text-amber-400 transition-all">📱</a>
            </div>
          </div>
          <div>
            <h4 className="text-amber-50 font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navLinks.map((l) => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className="block text-amber-200/50 hover:text-amber-400 text-sm transition-colors">{l.label}</button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-amber-50 font-bold mb-4">Visit Us</h4>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-amber-200/50">Hours</div>
                <div className="text-amber-400 font-medium">{siteInfo.hours.days} — {siteInfo.hours.time}</div>
              </div>
              <div>
                <div className="text-amber-200/50">Address</div>
                <div className="text-amber-400/80">{siteInfo.shortAddress}</div>
              </div>
              <div>
                <div className="text-amber-200/50">Price Range</div>
                <div className="text-amber-400/80">{siteInfo.priceRange}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-amber-200/30 text-sm">© {new Date().getFullYear()} {siteInfo.name} All rights reserved.</p>
          <p className="text-amber-200/30 text-sm">Made with ☕ in Ghaziabad, India</p>
        </div>
      </div>
    </footer>
  );
}
