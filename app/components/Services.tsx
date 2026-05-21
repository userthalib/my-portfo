"use client";
import { motion, type Variants } from "framer-motion";
import { Code2, Layers, Server, Zap, Globe, Smartphone } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { useApp } from "../context/AppContext";

/**
 * Technical service card design constants (icons, tags, gradients, colors).
 * Combined with translated strings at runtime.
 */
const SERVICES_METADATA = [
  {
    icon: Globe,
    tags: ["React", "Next.js", "Laravel"],
    gradient: "from-purple-brand/20 to-violet-brand/20",
    iconColor: "text-purple-brand",
    iconBg: "bg-purple-brand/10 light:bg-purple-brand/5",
  },
  {
    icon: Server,
    tags: ["REST", "GraphQL", "PostgreSQL"],
    gradient: "from-cyan-brand/20 to-blue-500/20",
    iconColor: "text-cyan-brand",
    iconBg: "bg-cyan-brand/10 light:bg-cyan-brand/5",
  },
  {
    icon: Layers,
    tags: ["Tailwind", "Framer Motion", "Figma"],
    gradient: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400 light:text-pink-600",
    iconBg: "bg-pink-500/10 light:bg-pink-500/5",
  },
  {
    icon: Zap,
    tags: ["Core Web Vitals", "Caching", "CDN"],
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400 light:text-amber-600",
    iconBg: "bg-amber-500/10 light:bg-amber-500/5",
  },
  {
    icon: Smartphone,
    tags: ["React Native", "PWA", "Supabase"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400 light:text-emerald-600",
    iconBg: "bg-emerald-500/10 light:bg-emerald-500/5",
  },
  {
    icon: Code2,
    tags: ["Consulting", "Refactoring", "Mentoring"],
    gradient: "from-violet-brand/20 to-purple-brand/20",
    iconColor: "text-violet-brand",
    iconBg: "bg-violet-brand/10 light:bg-violet-brand/5",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/**
 * Services Component
 * 
 * Showcases core skill competencies and professional specializations.
 */
export default function Services() {
  const { t } = useApp();
  
  const items = (t("services.items") as { title: string; description: string }[]) || [];

  // Combine translations with layout metadata
  const services = items.map((translatedItem, index) => {
    const design = SERVICES_METADATA[index] || SERVICES_METADATA[0];
    return {
      ...translatedItem,
      ...design,
    };
  });

  return (
    <section id="services" className="w-full relative overflow-hidden">
      
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-purple-brand" />
          <span className="text-purple-brand font-mono text-xs tracking-widest uppercase font-bold">
            {t("services.num")} {t("services.sectionTitle")}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-purple-brand to-transparent" />
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary mb-5">
          {t("services.heading")}
        </h2>
        <p className="text-slate-400 light:text-slate-600 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          {t("services.subtitle")}
        </p>
      </motion.div>

      {/* Grid structure */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {services.map((s, idx) => (
          <motion.div
            // Use index as key to avoid unmounting when title translates, maintaining entry animation state
            key={idx}
            variants={item}
          >
            <SpotlightCard className={`p-7 h-full border-white/6 hover:border-purple-brand/20 group transition-all duration-300 hover:-translate-y-1`}>
              {/* Top border color indicator */}
              <div className={`absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r ${s.gradient.replace("/20", "")}`} />

              <div className={`inline-flex p-3 rounded-2xl ${s.iconBg} mb-5`}>
                <s.icon size={22} className={s.iconColor} />
              </div>

              <h3 className="text-lg font-bold text-text-primary mb-3 tracking-tight">
                {s.title}
              </h3>
              <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed mb-5 font-light">
                {s.description}
              </p>

              {/* Skill Tag list */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 light:text-slate-600 bg-white/4 light:bg-slate-100 border border-border-primary rounded-full"
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
