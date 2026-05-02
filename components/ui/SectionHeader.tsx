"use client";

import { motion } from "framer-motion";
import type { SectionHeaderProps } from "@/types";

export default function SectionHeader({ eyebrow, title, inView }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="text-blue-400 font-mono text-sm mb-3 tracking-widest uppercase">
        {eyebrow}
      </p>
      <h2 className="section-title gradient-text">{title}</h2>
      <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
    </motion.div>
  );
}
