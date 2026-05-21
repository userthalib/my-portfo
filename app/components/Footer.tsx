"use client";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";

/**
 * Footer Component
 * 
 * Closes the page content with navigation links and copyright declarations.
 */
export default function Footer() {
  const { t } = useApp();

  const footerLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.work"), href: "#portfolio" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const scrollToTop = () => {
    document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-border-primary bg-bg-primary pt-16 pb-8 overflow-hidden transition-colors duration-500">

      {/* Decorative ambient bottom glow highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-t from-purple-brand/8 to-transparent rounded-full filter blur-[80px] pointer-events-none select-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">

        {/* ── Scroll To Top button trigger ── */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 rounded-full border border-purple-brand/20 bg-purple-brand/10 text-purple-brand hover:text-purple-brand/80 hover:border-purple-brand/40 hover:bg-purple-brand/20 transition-all duration-300 shadow-lg shadow-purple-brand/5 mb-10 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="animate-pulse" />
        </motion.button>

        {/* ── Footer navigation links ── */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs font-bold uppercase tracking-widest text-slate-500 light:text-slate-600 hover:text-text-primary hover:underline decoration-purple-brand underline-offset-4 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Brand Mark Initials */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-brand to-cyan-brand flex items-center justify-center select-none shadow-lg shadow-purple-brand/10 mb-6">
          <span className="text-[10px] font-black text-white tracking-tighter">IT</span>
        </div>

        {/* ── Copyright text ── */}
        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-600">
          © {new Date().getFullYear()} Irfan Thalib Alfarid. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}