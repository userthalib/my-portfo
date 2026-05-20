"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/**
 * Define Navigation Menu anchors and visual titles.
 * Link URLs map exactly to the section HTML IDs.
 */
const navLinks = [
  { name: "Home",     href: "#home"      },
  { name: "About",    href: "#about"     },
  { name: "Services", href: "#services"  },
  { name: "Work",     href: "#portfolio" },
  { name: "Contact",  href: "#contact"   },
];

/**
 * Navbar Component
 * 
 * Implements a sticky, glassmorphism header navigation menu.
 * 
 * Core Developer Systems:
 * 1. **Scroll Detection**: Shrinks/scales the pill navbar and updates transparency when scrolling past 50px.
 * 2. **IntersectionObserver API**: Observes visible sections on viewport to dynamically update the active link indicator.
 * 3. **Shared Layout Animation (`layoutId`)**: Uses Framer Motion's layoutId="pill" to smoothly slide the active background capsule between links.
 * 4. **AnimatePresence Menu**: Handles fade/slide animations for opening and closing the mobile dropdown container.
 */
export default function Navbar() {
  // Track active section to highlight the corresponding nav anchor
  const [activeSection, setActiveSection] = useState("home");
  
  // Toggle style layouts based on vertical scroll distance
  const [scrolled,      setScrolled     ] = useState(false);
  
  // Open status of mobile navigation drawer
  const [mobileOpen,    setMobileOpen   ] = useState(false);

  useEffect(() => {
    // Event handler: changes navbar border/background after scrolling 50px down the page.
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    /**
     * Intersection Observer setup
     * Detects when a section occupies the core focal range of the browser screen.
     * rootMargin margins constrain calculations to focus on the upper center area.
     */
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: "-20% 0px -35% 0px", threshold: 0.1 }
    );
    
    // Register observation nodes for each defined navigation anchor element.
    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    
    // Clean up event listeners and detach observer targets on component unmount.
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  /**
   * Smoothly navigates the document viewport to the specified element ID anchor.
   * 
   * @param href - HTML ID target (e.g. '#about')
   */
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(href.substring(1));
    setMobileOpen(false); // Close mobile toggle drawer if active
  };

  return (
    <>
      {/* ── Desktop / Tablet Bar ──
          Positioned top-fixed with pointer-events-none on outer container so user clicks pass through to content. */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center gap-1 px-2 rounded-full border shadow-2xl transition-all duration-500 ${
            scrolled
              ? "bg-[#070410]/90 backdrop-blur-2xl border-purple-500/25 py-1.5 scale-[0.94] shadow-purple-950/50"
              : "bg-[#070410]/60 backdrop-blur-xl  border-white/8 py-2"
          }`}
        >
          {/* Brand Mark Initials */}
          <div
            className="flex items-center justify-center w-8 h-8 ml-2 mr-1 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 cursor-default select-none"
            onClick={() => scrollTo("#home")}
          >
            <span className="text-[10px] font-black text-white tracking-tighter">IT</span>
          </div>

          <div className="w-px h-4 bg-white/10 mx-1" />

          {/* Desktop Links - Hidden on Mobile viewports */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`relative px-4 py-2 text-xs font-semibold transition-colors duration-300 rounded-full ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {/* Shared layout background animation block */}
                  {isActive && (
                    <motion.div
                      layoutId="pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 shadow-lg shadow-purple-500/40"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden md:block w-px h-4 bg-white/10 mx-1" />

          {/* External Link: Download Resume PDF */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-5 py-2 text-xs font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 transition-all shadow-lg shadow-purple-500/20 mr-1"
          >
            Resume
          </a>

          {/* Mobile Navigation Drawer Toggle button */}
          <button
            className="md:hidden p-2 mr-1 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* ── Mobile dropdown ──
          Uses Framer Motion AnimatePresence to ensure layout removal transitions play cleanly. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0,   scale: 1    }}
            exit  ={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-4 right-4 z-40 bg-[#0d0a1a]/95 backdrop-blur-2xl rounded-2xl border border-purple-500/20 p-3 shadow-2xl shadow-purple-950/60"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="flex items-center px-4 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:bg-purple-500/10 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center px-4 py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-purple-600 to-violet-600"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}