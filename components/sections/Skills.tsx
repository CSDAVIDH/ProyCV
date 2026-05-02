"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILL_CATEGORIES, TOOL_BADGES, LANGUAGES } from "@/lib/data";
import { SectionHeader, Badge, SkillBar } from "@/components/ui";

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="habilidades" className="py-16 md:py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 100% 50%, rgba(139,92,246,0.07) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="container mx-auto">
        <SectionHeader eyebrow="O que sei fazer" title="Habilidades" inView={inView} />

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {SKILL_CATEGORIES.map(({ title, color, icon, skills }, ci) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="rounded-2xl p-4 sm:p-6"
              style={{ background: "rgba(13,21,38,0.8)", border: `1px solid ${color}22` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl text-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15` }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="text-xs text-gray-500">{skills.length} habilidades</p>
                </div>
              </div>

              <div className="space-y-4">
                {skills.map(({ name, level, note }, si) => (
                  <div key={name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-gray-200">{name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 hidden sm:block">{note}</span>
                        <span className="text-xs font-bold font-mono" style={{ color }}>
                          {level}%
                        </span>
                      </div>
                    </div>
                    <SkillBar
                      level={level}
                      color={color}
                      delay={ci * 0.1 + si * 0.08}
                      inView={inView}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-center text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">
            Ferramentas & Tecnologias
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {TOOL_BADGES.map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.05 }}
              >
                <Badge className="card-hover cursor-default">{tool}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12"
        >
          <p className="text-center text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">
            Idiomas
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-2xl mx-auto">
            {LANGUAGES.map(({ lang, level, flag, pct, color }, i) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex-1 min-w-[140px] max-w-[200px] rounded-2xl p-4 sm:p-5 text-center card-hover"
                style={{ background: "rgba(13,21,38,0.8)", border: `1px solid ${color}22` }}
              >
                <div className="text-3xl mb-2">{flag}</div>
                <p className="font-bold text-white mb-0.5">{lang}</p>
                <p className="text-xs text-gray-500 mb-3">{level}</p>
                <SkillBar level={pct} color={color} delay={0.9 + i * 0.1} inView={inView} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
