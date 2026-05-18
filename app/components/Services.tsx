"use client";
import { motion } from "framer-motion";
import { Code2, Layers, Server, Zap, Globe, Smartphone } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const SERVICES = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "End-to-end web apps built with React & Next.js on the front, Laravel or Node on the back. Clean architecture, fast delivery.",
    tags: ["React", "Next.js", "Laravel"],
    gradient: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
  },
  {
    icon: Server,
    title: "API Design & Integration",
    description:
      "RESTful and GraphQL APIs designed for scale. Third-party integrations, authentication flows, and webhook systems.",
    tags: ["REST", "GraphQL", "PostgreSQL"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
  },
  {
    icon: Layers,
    title: "UI/UX Engineering",
    description:
      "Pixel-perfect interfaces that feel alive. Smooth animations, accessible components, and responsive layouts across all devices.",
    tags: ["Tailwind", "Framer Motion", "Figma"],
    gradient: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Lighthouse scores close to 100. Core Web Vitals tuning, code splitting, caching strategies, and image optimization.",
    tags: ["Core Web Vitals", "Caching", "CDN"],
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    description:
      "Progressive Web Apps and React Native builds that work seamlessly offline. Local-first architecture with instant sync.",
    tags: ["React Native", "PWA", "Supabase"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: Code2,
    title: "Code Review & Consulting",
    description:
      "Architecture reviews, refactoring legacy codebases, and technical consulting to help your team ship better, faster.",
    tags: ["Consulting", "Refactoring", "Mentoring"],
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="w-full relative overflow-hidden">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
          <span className="text-purple-400 font-mono text-xs tracking-widest uppercase font-bold">
            02. What I Do
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent" />
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-5">
          Services &{" "}
          <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          From idea to deployment — I cover the full product lifecycle with a
          focus on quality and developer experience.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {SERVICES.map((s) => (
          <motion.div key={s.title} variants={item}>
            <SpotlightCard className={`p-7 h-full border-white/6 hover:border-purple-500/20 group transition-all duration-300 hover:-translate-y-1`}>
              {/* Top gradient band */}
              <div className={`absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r ${s.gradient.replace("/20", "")}`} />

              <div className={`inline-flex p-3 rounded-2xl ${s.iconBg} mb-5`}>
                <s.icon size={22} className={s.iconColor} />
              </div>

              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 font-light">
                {s.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/4 border border-white/6 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
