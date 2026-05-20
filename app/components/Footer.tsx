"use client";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Footer navigation links list.
 * Map to section anchors within the single page landing layout.
 */
const FOOTER_LINKS = [
  { name: "Home",     href: "#home"      },
  { name: "About",    href: "#about"     },
  { name: "Services", href: "#services"  },
  { name: "Work",     href: "#portfolio" },
  { name: "Contact",  href: "#contact"   },
];

/**
 * Footer Component
 * 
 * Closes the page content with navigation links and copyright declarations.
 * 
 * Core Developer Systems:
 * 1. **Smooth Back-to-Top**: Programmatic viewport reset to `#home` anchor coordinates.
 * 2. **Dynamic Calendar Stamping**: Automatic year updates using standard JavaScript `Date` API.
 * 3. **Accent Background Lighting**: Visual dark-theme completion via bottom-aligned radial gradients.
 */
export default function Footer() {
  /**
   * Triggers a smooth scroll to the top of the viewport targeting the Hero anchor.
   */
  const scrollToTop = () => {
    document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-purple-500/10 bg-[#070410] pt-16 pb-8 overflow-hidden">
      
      {/* Decorative ambient bottom glow highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-t from-purple-500/8 to-transparent rounded-full filter blur-[80px] pointer-events-none select-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* ── Scroll To Top button trigger ── */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/20 transition-all duration-300 shadow-lg shadow-purple-950/40 mb-10 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="animate-pulse" />
        </motion.button>

        {/* ── Footer navigation links ── */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white hover:underline decoration-purple-500 underline-offset-4 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Brand Mark Initials visual indicator */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center select-none shadow-lg shadow-purple-500/20 mb-6">
          <span className="text-[10px] font-black text-white tracking-tighter">IT</span>
        </div>

        {/* ── Copyright text with dynamic date generation ── */}
        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-600">
          © {new Date().getFullYear()} Irfan Thalib. All rights reserved.
        </p>
      </div>
    </footer>
  );
}