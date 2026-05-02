"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCheckCircle } from "react-icons/fi";
import { HIGHLIGHTS, QUALITIES } from "@/lib/data";
import { SectionHeader } from "@/components/ui";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="sobre" className="py-16 md:py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(16,185,129,0.05) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="container mx-auto">
        <SectionHeader eyebrow="Quem sou eu" title="Sobre Mim" inView={inView} />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Bio + Qualities */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="rounded-2xl p-5 sm:p-8 mb-6"
              style={{ background: "rgba(13,21,38,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-gray-300 leading-relaxed mb-5 text-base">
                Sou <span className="text-white font-semibold">Engenheiro de Sistemas</span>{" "}
                graduado pela Universidade Adventista de Bolívia com grande interesse em{" "}
                <span className="text-blue-400 font-medium">informática forense</span> e{" "}
                <span className="text-emerald-400 font-medium">análise de dados</span>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5 text-base">
                Possuo base sólida em desenvolvimento de software, telecomunicações e suporte
                técnico de TI, com ênfase em programação web com tecnologias como{" "}
                <span className="text-purple-400 font-medium">Ruby on Rails</span> e{" "}
                <span className="text-blue-400 font-medium">Node.js</span>.
              </p>
              <p className="text-gray-300 leading-relaxed text-base">
                Busco minha primeira oportunidade em{" "}
                <span className="text-white font-semibold">desenvolvimento backend</span>, em equipes
                que valorizem inovação, boas práticas e aprendizado contínuo.
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">
                Qualidades pessoais
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {QUALITIES.map((q, i) => (
                  <motion.div
                    key={q}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-2"
                  >
                    <FiCheckCircle className="text-emerald-400 flex-shrink-0" size={15} />
                    <span className="text-gray-300 text-sm">{q}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="card-hover rounded-2xl p-5 cursor-default"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}22` }}
                >
                  <Icon style={{ color }} size={20} />
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
