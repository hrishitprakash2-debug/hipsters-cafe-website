"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
export default function SectionWrapper({ children, id, className = "" }: { children: ReactNode; id?: string; className?: string }) {
  return (
    <motion.section id={id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: "easeOut" }} className={"py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 " + className}>
      {children}
    </motion.section>
  );
}