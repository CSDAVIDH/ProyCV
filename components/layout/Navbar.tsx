"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiCode } from "react-icons/fi";
import { NAV_LINKS } from "@/lib/data";
import { scrollTo } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    scrollTo(href);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNav("#hero")} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <FiCode className="text-white text-sm" />
            </div>
            <span className="font-bold text-white text-sm tracking-wide">
              David<span className="gradient-text">.</span>dev
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace("#", "");
              return (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`nav-link ${active === id ? "active text-white" : ""}`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button onClick={() => handleNav("#contato")} className="btn-primary text-sm py-2 px-4">
              Contrate-me
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ href, label }) => {
                const id = href.replace("#", "");
                return (
                  <button
                    key={href}
                    onClick={() => handleNav(href)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      active === id
                        ? "bg-blue-500/10 text-blue-400"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
              <button
                onClick={() => handleNav("#contato")}
                className="btn-primary text-sm mt-2 justify-center"
              >
                Contrate-me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
