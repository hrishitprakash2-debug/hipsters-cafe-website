"use client";
import { motion } from "framer-motion";
import { siteInfo } from "@/data/siteInfo";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-stone-950">
      <div className="text-center mb-10 sm:mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">📍 Visit Us</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-amber-50 mb-4">
          Come Say <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Hello</span>
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
        <motion.div {...slideInLeft} className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-amber-50 mb-4">🕐 Opening Hours</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-amber-200/70">{siteInfo.hours.days}</span>
              <span className="text-amber-400 font-semibold">{siteInfo.hours.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-amber-200/50">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {siteInfo.hours.note}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-amber-50 mb-4">📍 Address</h3>
            <p className="text-amber-200/70 leading-relaxed">{siteInfo.address}</p>
            <a href={siteInfo.googleMaps} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium rounded-lg hover:bg-amber-500/20 transition-colors">
              🗺️ Open in Google Maps
            </a>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-amber-50 mb-4">📞 Contact</h3>
            <div className="space-y-3">
              <a href={`tel:${siteInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-amber-200/70 hover:text-amber-400 transition-colors">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">📱</span>
                {siteInfo.phone}
              </a>
              <a href={siteInfo.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-amber-200/70 hover:text-amber-400 transition-colors">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">📸</span>
                @thehipsterscafe
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div {...slideInRight}>
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden h-full min-h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.68!2d77.4538!3d28.6692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf5a43173357b%3A0x2c42e82de01011e0!2sRaj%20Nagar%2C%20Ghaziabad!5e0!3m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, minHeight: "400px" }} allowFullScreen loading="lazy" title="Location" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
