"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px", // Detects section when it's near center of screen
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 pointer-events-none">
      <nav 
        className={`pointer-events-auto flex items-center gap-2 px-2 rounded-full border border-white/10 shadow-2xl transition-all duration-300 ${
          scrolled 
            ? "bg-[#020617]/80 backdrop-blur-xl py-2 scale-90" 
            : "bg-[#020617]/50 backdrop-blur-md py-3"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                setActiveSection(link.href.substring(1));
              }}
              className={`relative px-4 md:px-6 py-2 text-xs md:text-sm font-bold transition-colors duration-300 rounded-full ${
                isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {/* THE ACTIVE PILL - NOW BRIGHT BLUE */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              <span className="relative z-10">{link.name}</span>
            </a>
          );
        })}
        
        {/* Resume Button */}
        <div className="w-px h-4 bg-white/10 mx-2" />
        <a 
          href="/resume.pdf" 
          className="px-6 py-2 text-xs md:text-sm font-bold text-[#020617] bg-white rounded-full hover:bg-slate-200 transition-colors mr-1"
        >
          Resume
        </a>
      </nav>
    </div>
  );
}