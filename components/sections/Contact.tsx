"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiSend, FiCheckCircle, FiUser, FiMessageSquare } from "react-icons/fi";
import { CONTACT_INFO } from "@/lib/data";
import { SectionHeader } from "@/components/ui";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Olá David,\n\nMeu nome é ${form.name}.\n\n${form.message}\n\nEmail para retorno: ${form.email}`
    );
    const subject = encodeURIComponent(form.subject || "Contato pelo portfólio");
    window.location.href = `mailto:david.condori.9190@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm(INITIAL_FORM);
    }, 5000);
  };

  return (
    <section id="contato" className="py-16 md:py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(16,185,129,0.07) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="container mx-auto">
        <SectionHeader eyebrow="Vamos conversar" title="Contato" inView={inView} />

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-center max-w-lg mx-auto -mt-4 md:-mt-8 mb-10 md:mb-12 text-sm sm:text-base"
        >
          Estou aberto a oportunidades, colaborações ou apenas uma boa conversa.
          Entre em contato!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4 max-w-xl mx-auto lg:mx-0"
          >
            {/* Status box */}
            <div
              className="rounded-2xl p-5 sm:p-6 mb-6"
              style={{ background: "rgba(13,21,38,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, #2563eb, #10b981)" }}
              >
                <FiMail className="text-white" size={22} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Pronto para colaborar!</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Busco uma oportunidade em{" "}
                <span className="text-blue-400">desenvolvimento backend</span>. Se você tem
                uma vaga ou projeto interessante, adoraria conversar.
              </p>
            </div>

            {/* Contact items */}
            {CONTACT_INFO.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="card-hover flex items-center gap-4 rounded-xl p-4 group"
                    style={{ background: "rgba(13,21,38,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ background: `${color}18` }}
                    >
                      <Icon style={{ color }} size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-500 text-xs">{label}</p>
                      <p className="text-white text-sm font-medium truncate">{value}</p>
                    </div>
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-4 rounded-xl p-4"
                    style={{ background: "rgba(13,21,38,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}18` }}
                    >
                      <Icon style={{ color }} size={18} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{label}</p>
                      <p className="text-white text-sm font-medium">{value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 max-w-3xl mx-auto lg:mx-0"
          >
            <div
              className="rounded-2xl p-5 sm:p-8"
              style={{ background: "rgba(13,21,38,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Enviar mensagem</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      <FiUser className="inline mr-1" size={13} /> Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Seu nome"
                      required
                      className="contact-input"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      <FiMail className="inline mr-1" size={13} /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      required
                      className="contact-input"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-2">Assunto</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Proposta de trabalho / Colaboração..."
                    className="contact-input"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-2">
                    <FiMessageSquare className="inline mr-1" size={13} /> Mensagem
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Olá David, gostaria de falar sobre..."
                    required
                    className="contact-input resize-none"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
                  {sent ? (
                    <><FiCheckCircle /> Mensagem enviada!</>
                  ) : (
                    <><FiSend /> Enviar mensagem</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
