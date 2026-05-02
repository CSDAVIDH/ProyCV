"use client";

import { FiCode, FiHeart } from "react-icons/fi";
import { SOCIAL_LINKS } from "@/lib/data";
import { VisitCounter } from "@/components/ui";

export default function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(10,15,30,0.9)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
              <FiCode className="text-white text-sm" />
            </div>
            <span className="font-bold text-white text-sm">
              David<span className="gradient-text">.</span>dev
            </span>
          </button>

          {/* Center: copyright + counter */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-500 text-sm flex items-center gap-1.5">
              Feito com <FiHeart className="text-red-400" size={12} /> por David Condori &mdash;{" "}
              {new Date().getFullYear()}
            </p>
            <VisitCounter />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-200 hover:scale-110"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = color;
                  (e.currentTarget as HTMLAnchorElement).style.background = `${color}18`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "";
                  (e.currentTarget as HTMLAnchorElement).style.background = "";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
