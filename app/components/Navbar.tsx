"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useApp } from "../context/AppContext";

/**
 * Navbar Component
 * 
 * Implements a sticky, glassmorphism header navigation menu with theme and language toggles.
 */
export default function Navbar() {
  const { theme, language, toggleTheme, toggleLanguage, t } = useApp();

  // Track active section to highlight the corresponding nav anchor
  const [activeSection, setActiveSection] = useState("home");

  // Toggle style layouts based on vertical scroll distance
  const [scrolled, setScrolled] = useState(false);

  // Open status of mobile navigation drawer
  const [mobileOpen, setMobileOpen] = useState(false);

  // Define dynamic links based on translation helper
  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.work"), href: "#portfolio" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    // Event handler: changes navbar border/background after scrolling 50px down the page.
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: "-20% 0px -35% 0px", threshold: 0.1 }
    );

    // Register observation nodes for each defined navigation anchor element.
    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });

    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, [language]); // Re-register observer targets if link text updates

  /**
   * Smoothly navigates the document viewport to the specified element ID anchor.
   */
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(href.substring(1));
    setMobileOpen(false);
  };

  return (
    <>
      {/* ── Desktop / Tablet Bar ── */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center gap-1 px-2 rounded-full border shadow-2xl transition-all duration-500 ${scrolled
              ? "bg-bg-primary/90 backdrop-blur-2xl border-purple-brand/25 py-1.5 scale-[0.94] shadow-purple-brand/5"
              : "bg-bg-primary/60 backdrop-blur-xl border-white/8 light:border-slate-300/40 py-2"
            }`}
        >
          {/* Brand Mark Initials */}
          <div
            className="flex items-center justify-center w-8 h-8 ml-2 mr-1 rounded-full bg-gradient-to-br from-purple-brand to-cyan-brand cursor-pointer select-none"
            onClick={() => scrollTo("#home")}
          >
            <span className="text-[10px] font-black text-white tracking-tighter">IT</span>
          </div>

          <div className="w-px h-4 bg-white/10 light:bg-slate-300 mx-1" />

          {/* Desktop Links - Hidden on Mobile viewports */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  // Use link.href as key to remain stable when link.name translates
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`relative px-4 py-2 text-xs font-semibold transition-colors duration-300 rounded-full ${isActive
                      ? "text-white"
                      : "text-slate-400 light:text-slate-600 hover:text-white light:hover:text-black"
                    }`}
                >
                  {/* Shared layout background animation block */}
                  {isActive && (
                    <motion.div
                      layoutId="pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-brand to-violet-brand shadow-lg shadow-purple-brand/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden md:block w-px h-4 bg-white/10 light:bg-slate-300 mx-1" />

          {/* External Link: Download Resume PDF */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-5 py-2 text-xs font-bold text-white rounded-full bg-gradient-to-r from-purple-brand to-violet-brand hover:scale-102 transition-all shadow-lg shadow-purple-brand/10 mr-1"
          >
            {t("nav.resume")}
          </a>

          <div className="w-px h-4 bg-white/10 light:bg-slate-300 mx-1" />

          {/* ── Toggles Group (Visible on both Desktop and Mobile inside the main pill) ── */}
          <div className="flex items-center gap-1 ml-1 mr-1">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="text-[10px] font-black rounded-full border border-white/8 light:border-slate-300 hover:border-purple-brand/40 hover:bg-purple-brand/5 text-slate-400 light:text-slate-600 hover:text-white light:hover:text-purple-brand transition-all cursor-pointer w-8 h-8 flex items-center justify-center shrink-0"
              title="Change Language / Ubah Bahasa"
            >
              {language === "en" ? "ID" : "EN"}
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/8 light:border-slate-300 hover:border-purple-brand/40 hover:bg-purple-brand/5 text-slate-400 light:text-slate-600 hover:text-white light:hover:text-purple-brand transition-all cursor-pointer w-8 h-8 flex items-center justify-center shrink-0"
              title="Change Theme / Ubah Tema"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>

          {/* Mobile Hamburger menu drawer toggle button */}
          <button
            className="md:hidden p-2 mr-1 text-slate-400 light:text-slate-600 hover:text-white light:hover:text-black transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[76px] left-4 right-4 z-40 bg-bg-surface/95 backdrop-blur-2xl rounded-2xl border border-purple-brand/20 p-3 shadow-2xl shadow-purple-brand/5"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="flex items-center px-4 py-3 text-sm font-semibold text-slate-300 light:text-slate-700 hover:text-white light:hover:text-purple-brand hover:bg-purple-brand/10 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center px-4 py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-purple-brand to-violet-brand"
            >
              {t("nav.resume")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}