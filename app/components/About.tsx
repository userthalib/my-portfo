"use client";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard"; // Reusing the glow effect!
import { Code2, Globe, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: The Narrative */}
          <div className="lg:col-span-7 relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-blue-500"></span>
              <span className="text-blue-400 font-bold text-xs tracking-widest uppercase">02. About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight text-white">
              Engineering <span className="text-gradient">precision</span> into every interaction.
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
              <p>
                My journey started when I tried to modify a game server script in 2018. That simple <span className="text-white font-medium">"what if?"</span> turned into a career obsession with system architecture.
              </p>
              <p>
                Today, I focus on the <span className="text-white font-medium">React & Laravel</span> ecosystem. I believe that a great application isn't just about clean code—it's about how that code makes the user <em>feel</em>. Speed, responsiveness, and interaction are my core design principles.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive BENTO GRID for Stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Stats Card */}
            <SpotlightCard className="p-8 border-white/10 hover:border-white/20">
              <div className="grid grid-cols-2 gap-8">
                <div>
                   <div className="text-5xl font-bold text-white mb-2 tracking-tighter">3<span className="text-blue-500">+</span></div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Years Exp.</div>
                </div>
                <div>
                   <div className="text-5xl font-bold text-white mb-2 tracking-tighter">15<span className="text-purple-500">+</span></div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Shipped</div>
                </div>
              </div>
            </SpotlightCard>

            {/* Tech Stack Card */}
            <SpotlightCard className="p-8 border-white/10 hover:border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-blue-400" size={20} />
                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">The Arsenal</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "React", "Next.js", "Laravel", "PostgreSQL", "Tailwind", "Docker"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all cursor-default">
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