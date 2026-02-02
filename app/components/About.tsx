"use client";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { Code2 } from "lucide-react";

export default function About() {
  return (
    <section className="w-full relative overflow-hidden">
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-7 relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px w-16 bg-blue-500"></span>
              <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">02. About Me</span>
            </div>
            
            {/* MASSIVE HEADLINE */}
            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[1.1] tracking-tighter text-white">
              Engineering <span className="text-gradient">precision</span> into every interaction.
            </h2>
            
            {/* LARGE READABLE TEXT */}
            <div className="space-y-8 text-slate-400 text-xl md:text-2xl leading-relaxed font-light">
              <p>
                My journey started when I tried to modify a game server script in 2018. That simple <span className="text-white font-medium">"what if?"</span> turned into a career obsession.
              </p>
              <p>
                Today, I focus on the <span className="text-white font-medium">React & Laravel</span> ecosystem. I believe that a great application isn't just about clean code—it's about how that code makes the user <em>feel</em>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            {/* Stats Card - SCALED UP */}
            <SpotlightCard className="p-10 border-white/10 hover:border-white/20">
              <div className="grid grid-cols-2 gap-10">
                <div>
                   <div className="text-6xl font-bold text-white mb-3 tracking-tighter">3<span className="text-blue-500">+</span></div>
                   <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Exp.</div>
                </div>
                <div>
                   <div className="text-6xl font-bold text-white mb-3 tracking-tighter">15<span className="text-purple-500">+</span></div>
                   <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Shipped</div>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-10 border-white/10 hover:border-white/20">
              <div className="flex items-center gap-4 mb-8">
                <Code2 className="text-blue-400" size={24} />
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">The Arsenal</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "TypeScript", "React", "Next.js", "Laravel", "PostgreSQL", "Tailwind", "Docker"].map((tech) => (
                  <span key={tech} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </Reveal>
    </section>
  );
}