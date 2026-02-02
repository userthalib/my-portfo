"use client";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="w-full flex flex-col items-center justify-center text-center overflow-hidden min-h-screen">
      <Reveal>
        
        {/* 1. Status Pill - Kept small for contrast against the huge text */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8 md:mb-12 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for Opportunities
        </div>
        
        {/* 2. THE MASSIVE NAME */}
        {/* text-[13vw] means the text takes up 13% of the screen width. It scales infinitely. */}
        <h1 className="font-black text-slate-100 tracking-tighter leading-[0.8] mb-2 select-none">
          <span className="block text-[6vw] md:text-[6vw]">
            Irfan
          </span>
        </h1>

        {/* 3. THE MASSIVE TITLE */}
        {/* Slightly smaller (6vw) to create hierarchy but still huge */}
        <h2 className="font-bold tracking-tighter leading-[0.9] mb-12 select-none">
          <span className="text-gradient block text-[3vw] md:text-[3vw]">
            Software Engineer
          </span>
        </h2>
        
        {/* 4. Description - Max width restricted for readability */}
        <p className="text-slate-400 text-base md:text-xl max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide px-4">
          Building <span className="text-white font-medium">scalable</span>, <span className="text-white font-medium">pixel-perfect</span> applications. 
          Focused on the React & Laravel ecosystem.
        </p>

        {/* 5. Buttons - Scaled up slightly to match the heavy text */}
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-16">
          <a 
            href="#portfolio" 
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-sm md:text-base tracking-wide overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
        
        {/* 6. Social Icons */}
        <div className="flex gap-8 justify-center items-center">
          {[Github, Linkedin, Mail].map((Icon, i) => (
             <div key={i} className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-pointer hover:scale-110 duration-300">
               <Icon size={24} />
             </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}