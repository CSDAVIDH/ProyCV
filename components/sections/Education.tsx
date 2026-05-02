"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward } from "react-icons/fi";
import { CERTIFICATIONS, ACADEMIC_STATS, ACADEMIC_COURSES } from "@/lib/data";
import { SectionHeader } from "@/components/ui";

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="formacao" className="py-16 md:py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(37,99,235,0.07) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="container mx-auto">
        <SectionHeader eyebrow="Formação & Certificações" title="Educação" inView={inView} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Academic Formation */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <FiAward className="text-blue-400" /> Formação Acadêmica
            </h3>

            <div
              className="relative rounded-2xl p-5 sm:p-8 overflow-hidden"
              style={{ background: "rgba(13,21,38,0.8)", border: "1px solid rgba(59,130,246,0.25)" }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
                style={{ background: "rgba(37,99,235,0.15)" }}
              />
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: "rgba(37,99,235,0.15)" }}
                  >
                    🎓
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base sm:text-lg">Engenheiro de Sistemas</h4>
                    <p className="text-blue-400 font-medium text-sm mt-0.5">
                      Universidade Adventista de Bolívia (UAB)
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {ACADEMIC_STATS.map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="rounded-xl p-4"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <Icon className="text-blue-400 mb-2" size={16} />
                      <p className="text-gray-500 text-xs mb-1">{label}</p>
                      <p className="text-white font-bold">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {ACADEMIC_COURSES.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <FiAward className="text-emerald-400" /> Certificações & Cursos
            </h3>

            <div
              className="space-y-3 max-h-[400px] md:max-h-[520px] overflow-y-auto pr-2"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#3b82f6 #0d1526" }}
            >
              {CERTIFICATIONS.map(({ name, issuer, year, color, icon }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.06 }}
                  className="card-hover flex items-center gap-4 rounded-xl p-4"
                  style={{ background: "rgba(13,21,38,0.8)", border: `1px solid ${color}22` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: `${color}15` }}
                  >
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{issuer}</p>
                  </div>
                  {year !== "—" && (
                    <span
                      className="text-xs font-mono font-bold flex-shrink-0 px-2 py-1 rounded-lg"
                      style={{ background: `${color}15`, color }}
                    >
                      {year}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
