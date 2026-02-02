"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Zap, BarChart3, Smartphone } from "lucide-react";
import Image from 'next/image';
import SpotlightCard from "./SpotlightCard";

const projects = [
  {
    title: "Nebula Finance",
    description: "A robust financial analytics platform designed for high-frequency trading. Features real-time websocket connections and custom ML pipelines.",
    tech: ["Next.js", "Rust", "PostgreSQL"],
    link: "#",
    github: "#",
    // POINTING TO LOCAL FILE
    image: "/projects/pj1.jpg", 
    icon: BarChart3,
    size: "large",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Velox Commerce",
    description: "Headless e-commerce storefront with perfect lighthouse scores. Features optimistic UI updates and Stripe Connect integration.",
    tech: ["React", "Shopify", "Redis"],
    link: "#",
    github: "#",
    // POINTING TO LOCAL FILE
    image: "/projects/pj2.png",
    icon: Zap,
    size: "small",
    gradient: "from-amber-500/10 to-orange-500/10"
  },
  {
    title: "Sync Mobile",
    description: "Offline-first productivity PWA. Uses local-first architecture to sync data between devices when connectivity is restored.",
    tech: ["React Native", "Supabase"],
    link: "#",
    github: "#",
    // POINTING TO LOCAL FILE
    image: "/projects/pj3.png",
    icon: Smartphone,
    size: "small",
    gradient: "from-emerald-500/10 to-teal-500/10"
  }
];

// ... rest of the component remains the same ...
// (I will include the full render below to ensure you have the nice tags)

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
        >
          <SpotlightCard className="h-full group border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="relative h-full flex flex-col">
              {/* Image Area */}
              <div className={`relative w-full overflow-hidden ${project.size === 'large' ? 'h-72 md:h-96' : 'h-64'}`}>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent z-10" />
                 <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />
                 
                 <Image 
                   src={project.image} 
                   alt={project.title} 
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                 />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow relative z-20 bg-[#020617] border-t border-white/5">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-white/5 border border-white/5 rounded-full group-hover:bg-white/10 group-hover:text-slate-200 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors flex items-center gap-3">
                      <project.icon size={24} className="text-slate-500 group-hover:text-blue-500 transition-colors" />
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                      {project.description}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight size={20} className="transform group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

                <div className="flex gap-8 mt-auto pt-8">
                  <a href={project.link} className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </div>
  );
}