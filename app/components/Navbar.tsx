"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div className="font-bold text-xl tracking-tighter text-white select-none">
          IRFAN<span className="text-blue-500">.</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a 
            href="/resume.pdf" 
            className="px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all font-semibold"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#020617] border-b border-white/10 shadow-2xl p-6 flex flex-col gap-4">
           <a href="#portfolio" className="text-slate-400 hover:text-white font-medium" onClick={() => setIsOpen(false)}>Portfolio</a>
           <a href="#about" className="text-slate-400 hover:text-white font-medium" onClick={() => setIsOpen(false)}>About</a>
           <a href="#contact" className="text-slate-400 hover:text-white font-medium" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}