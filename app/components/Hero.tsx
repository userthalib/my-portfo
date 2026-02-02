"use client";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center overflow-hidden">
      <Reveal>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for Opportunities
        </div>
        
        {/* Updated H1 for better mobile safety */}
<h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.9] text-white break-words w-full max-w-4xl">
  Full Stack <br /> 
  <span className="text-gradient block mt-2 md:mt-0"> {/* 'block' helps it wrap nicely on tiny screens */}
    Developer
  </span>
</h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
          Building scalable web applications with <span className="text-white font-medium">modern technologies</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-16">
          <a 
            href="#portfolio" 
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
        
        {/* Social Icons */}
        <div className="flex gap-6 justify-center items-center">
          {[Github, Linkedin, Mail].map((Icon, i) => (
             <div key={i} className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-pointer">
               <Icon size={22} />
             </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}