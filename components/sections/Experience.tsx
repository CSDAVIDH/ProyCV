"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCalendar, FiMapPin, FiBriefcase } from "react-icons/fi";
import { EXPERIENCES } from "@/lib/data";
import { Badge, SectionHeader } from "@/components/ui";

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experiencia" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 0% 50%, rgba(37,99,235,0.06) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Trajetória profissional" title="Experiência" inView={inView} />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-px"
            style={{
              background:
                "linear-gradient(180deg, #3b82f6 0%, #10b981 33%, #8b5cf6 66%, #f59e0b 100%)",
              opacity: 0.3,
            }}
          />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-6 md:left-1/2 top-6 w-3 h-3 rounded-full -translate-x-1.5 z-10"
                style={{
                  background: exp.color,
                  boxShadow: `0 0 12px ${exp.color}88, 0 0 0 3px #0a0f1e, 0 0 0 5px ${exp.color}55`,
                }}
              />

              <div className="hidden md:block flex-1" />

              {/* Card */}
              <div className="flex-1 pl-14 md:pl-0">
                <div
                  className="card-hover rounded-2xl p-6"
                  style={{ background: "rgba(13,21,38,0.8)", border: `1px solid ${exp.color}30` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <FiBriefcase style={{ color: exp.color }} size={15} />
                        <h3 className="font-bold text-white text-base">{exp.role}</h3>
                        {exp.current && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{
                              background: "rgba(16,185,129,0.15)",
                              color: "#34d399",
                              border: "1px solid rgba(16,185,129,0.3)",
                            }}
                          >
                            Atual
                          </span>
                        )}
                      </div>
                      <p className="font-semibold text-sm" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar size={12} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin size={12} /> {exp.location}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-gray-400 text-sm flex items-start gap-2">
                        <span
                          className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: exp.color }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} color={exp.color}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
