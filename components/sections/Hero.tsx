"use client";

import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { PARTICLES, TECH_STACK, HERO_STATS, SOCIAL_LINKS } from "@/lib/data";
import { Badge, VisitCounter } from "@/components/ui";
import { scrollTo } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(37,99,235,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(16,185,129,0.1) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: p.w,
              height: p.h,
              top: p.top,
              left: p.left,
              background: p.color,
              animationDelay: `${p.delay}s`,
              boxShadow: `0 0 ${p.w * 3}px ${p.color}`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">Disponível para oportunidades</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-tight"
            >
              David <span className="gradient-text">Condori</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4"
            >
              Engenheiro de Sistemas &{" "}
              <span
                className="font-mono text-lg px-2 py-0.5 rounded-md"
                style={{
                  background: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  color: "#93c5fd",
                }}
              >
                Backend Developer
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8 mx-auto lg:mx-0"
            >
              Apaixonado por desenvolvimento backend, análise de dados e forense digital.
              Construindo soluções eficientes e escaláveis com tecnologias modernas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <button onClick={() => scrollTo("#contato")} className="btn-primary">
                Entrar em contato <FiArrowRight />
              </button>
              <a href="/agosto-2025.pdf" download className="btn-outline">
                <FiDownload /> Baixar CV
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${color}22`;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${color}55`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <Icon style={{ color }} size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-30"
                style={{
                  background: "conic-gradient(from 0deg, #3b82f6, #10b981, #8b5cf6, #3b82f6)",
                  filter: "blur(20px)",
                }}
              />
              <div
                className="relative w-72 sm:w-80 rounded-3xl p-6 overflow-hidden"
                style={{ background: "rgba(13,21,38,0.95)", border: "1px solid rgba(59,130,246,0.2)" }}
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white"
                    style={{ background: "linear-gradient(135deg, #2563eb, #10b981)" }}
                  >
                    DC
                  </div>
                  <div>
                    <p className="font-bold text-white">David Condori</p>
                    <p className="text-gray-400 text-sm">Systems Engineer</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-emerald-400 text-xs">Open to work</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div
                  className="flex items-center gap-2 text-sm text-gray-400 mb-5 px-3 py-2 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <span>📍</span>
                  <span>Uberlândia, MG — Brasil</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {HERO_STATS.map(({ label, value }) => (
                    <div
                      key={label}
                      className="text-center py-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <p className="text-xl font-bold gradient-text">{value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div>
                  <p className="text-gray-500 text-xs mb-3 font-medium uppercase tracking-wider">
                    Stack principal
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {TECH_STACK.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visit Counter — bottom center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex justify-center mt-14 mb-8"
        >
          <VisitCounter variant="hero" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-600 text-xs">Role para baixo</span>
          <div
            className="w-5 h-8 rounded-full flex items-start justify-center p-1"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-blue-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
