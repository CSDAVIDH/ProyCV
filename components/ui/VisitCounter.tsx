"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";

function useCountUp(target: number, duration = 1800) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (target === 0) return;
    let frame = 0;
    const totalFrames = Math.round(duration / 16);
    const timer = setInterval(() => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / totalFrames, 3);
      setDisplay(Math.floor(eased * target));
      if (frame >= totalFrames) {
        setDisplay(target);
        clearInterval(timer);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return display;
}

interface VisitCounterProps {
  variant?: "default" | "hero";
}

export default function VisitCounter({ variant = "default" }: VisitCounterProps) {
  const [count, setCount] = useState(0);
  const [ready, setReady] = useState(false);
  const display = useCountUp(count);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch("/api/visits", { method: "POST" });
        if (!res.ok) return;
        const { count: c } = await res.json();
        if (c > 0) { setCount(c); setReady(true); }
      } catch { /* silently fail */ }
    };
    fetchCount();
  }, []);

  /* ── Hero variant — prominent banner at bottom of hero ── */
  if (variant === "hero") {
    if (!ready) {
      return (
        <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl opacity-30"
          style={{ background: "rgba(13,21,38,0.6)", border: "1px solid rgba(59,130,246,0.2)" }}
        >
          <FiEye size={18} className="text-blue-400" />
          <span className="text-gray-500 text-sm font-mono">— visitas ao portfólio</span>
        </div>
      );
    }
    return (
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-4 px-7 py-4 rounded-2xl relative overflow-hidden"
        style={{
          background: "rgba(13,21,38,0.85)",
          border: "1px solid rgba(59,130,246,0.35)",
          boxShadow: "0 0 40px rgba(59,130,246,0.15), 0 0 80px rgba(16,185,129,0.08)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* shimmer sweep */}
        <motion.div
          className="absolute inset-0 -skew-x-12"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.06) 50%, transparent 100%)" }}
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        />

        {/* pulsing eye */}
        <div className="relative">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.25), rgba(16,185,129,0.25))" }}
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiEye size={20} className="text-blue-400" />
            </motion.div>
          </div>
          {/* glow ring */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{ border: "1px solid rgba(59,130,246,0.5)" }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.12, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* count + label */}
        <div className="relative">
          <div className="flex items-baseline gap-2">
            <span
              className="font-black font-mono text-3xl leading-none"
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #34d399 50%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {display.toLocaleString("pt-BR")}
            </span>
            <span className="text-gray-400 text-sm font-medium">visitas</span>
          </div>
          <p className="text-gray-500 text-xs mt-0.5 tracking-wider uppercase">
            ao portfólio
          </p>
        </div>
      </motion.div>
    );
  }

  /* ── Default variant (footer) ── */
  if (!ready) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
    >
      <FiEye size={13} className="text-blue-400" />
      <span className="text-gray-500 text-xs">
        <span className="text-blue-400 font-mono font-semibold">
          {display.toLocaleString("pt-BR")}
        </span>{" "}
        visitas
      </span>
    </motion.div>
  );
}
