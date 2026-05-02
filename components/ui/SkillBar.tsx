"use client";

import { motion } from "framer-motion";
import type { SkillBarProps } from "@/types";

export default function SkillBar({ level, color, delay = 0, inView }: SkillBarProps) {
  return (
    <div className="skill-bar-container">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}cc, ${color})` }}
      />
    </div>
  );
}
