"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink, ArrowRight } from "lucide-react";
import { siteInfo } from "@/data/siteInfo";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-3"
          >
            Visit Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Come Say<br />
            <span className="text-amber-400">Hello</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left — Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Hours Card */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-amber-400" />
                <h3 className="text-white font-semibold">Opening Hours</h3>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-amber-200/50 text-sm">{siteInfo.hours.days}</span>
                <span className="text-amber-400 font-semibold text-sm">{siteInfo.hours.time}</span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 text-xs">{siteInfo.hours.note}</span>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-amber-400" />
                <h3 className="text-white font-semibold">Address</h3>
              </div>
              <p className="text-amber-200/50 text-sm leading-relaxed mb-4">{siteInfo.address}</p>
              <a
                href={siteInfo.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors"
              >
                Open in Google Maps <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Contact Card */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-amber-400" />
                <h3 className="text-white font-semibold">Contact</h3>
              </div>
              <div className="space-y-3">
                <a href={`tel:${siteInfo.phone}`} className="flex items-center gap-3 text-amber-200/60 hover:text-amber-400 transition-colors text-sm">
                  <Phone className="w-4 h-4" /> {siteInfo.phone}
                </a>
                <a href={siteInfo.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-amber-200/60 hover:text-amber-400 transition-colors text-sm">
                  <Mail className="w-4 h-4" /> {siteInfo.instagram}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl overflow-hidden border border-white/[0.06] h-full min-h-[400px] lg:min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.68!2d77.4538!3d28.6692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf5a43173357b%3A0x2c42e82de01011e0!2sRaj%20Nagar%2C%20Ghaziabad!5e0!3m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                title="The Hipsters Cafe Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
