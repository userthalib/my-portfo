"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, Play, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";
import { useApp } from "../context/AppContext";

interface ProjectMeta {
  key: string;
  tech: string[];
  image: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
  videoUrl: string | null;
  docsUrl: string | null;
  featured: boolean;
  gradient: string;
  accentColor: string;
}

const PROJECTS_METADATA: ProjectMeta[] = [
  {
    key: "nebula",
    tech: ["CodeIgniter 3", "PostgreSQL", "jQuery"],
    image: "/projects/project-1.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/userthalib",
    videoUrl: null,
    docsUrl: null,
    featured: true,
    gradient: "from-purple-brand/30 via-violet-brand/20 to-blue-600/10",
    accentColor: "group-hover:text-purple-brand",
  },
  {
    key: "velox",
    tech: ["React", "Express"],
    image: "/projects/project-2.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/userthalib",
    videoUrl: null,
    docsUrl: null,
    featured: false,
    gradient: "from-amber-600/25 via-orange-600/15 to-red-600/5",
    accentColor: "group-hover:text-amber-500 light:group-hover:text-amber-600",
  },
  {
    key: "sync",
    tech: ["React", "Express", "Flask"],
    image: "/projects/project-3.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/userthalib",
    videoUrl: null,
    docsUrl: null,
    featured: false,
    gradient: "from-emerald-600/25 via-teal-600/15 to-cyan-600/5",
    accentColor: "group-hover:text-emerald-500 light:group-hover:text-emerald-600",
  },
];

function LinkBtn({
  href, icon: Icon, label,
}: { href: string; icon: React.ElementType; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-500 light:text-slate-600 hover:text-text-primary transition-colors"
    >
      <Icon size={15} /> {label}
    </a>
  );
}

/**
 * Projects Component
 * 
 * Generates the Bento-inspired portfolio grid layout with localized header.
 */
export default function Projects() {
  const { t } = useApp();

  const projects = PROJECTS_METADATA.map((meta) => {
    const translated = t(`projects.items.${meta.key}`) as {
      title: string;
      description: string;
      longDesc: string;
      category: string;
    };
    return {
      ...meta,
      ...translated,
    };
  });

  return (
    <div>
      {/* Section Header Block */}
      <div className="mb-14">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-purple-brand" />
          <span className="text-purple-brand font-mono text-xs tracking-widest uppercase font-bold">
            {t("projects.num")} {t("projects.sectionTitle")}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-purple-brand to-transparent" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary mb-5">
          {t("projects.heading")}
        </h2>
        <p className="text-slate-400 light:text-slate-600 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          {t("projects.subtitle")}
        </p>
      </div>

      {/* Grid mapping */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            // Use project key (stable string) instead of translated title to prevent entry animation reset
            key={p.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={p.featured ? "md:col-span-2" : ""}
          >
            <SpotlightCard className="h-full group border-white/6 hover:border-purple-brand/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-brand/10">
              <div className="relative h-full flex flex-col">

                {/* ── Image / Placeholder area ── */}
                <div className={`relative w-full overflow-hidden ${p.featured ? "h-64 md:h-80" : "h-52 md:h-64"}`}>
                  {/* Bottom gradient fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent z-10" />

                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-10`} />

                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    /* Fallback gradient panel */
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`}>
                      {/* Corner accents */}
                      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-sm" />
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-sm" />
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-sm" />
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-sm" />
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <span className="text-white/25 light:text-slate-800/30 text-xs font-bold uppercase tracking-widest">
                          {t("projects.placeholderText")}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Category tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-black/50 border border-white/10 light:border-slate-600 light:bg-slate-800/80 rounded-full text-slate-300 backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>

                  {/* Visual Arrow link indicator in top right */}
                  <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/5 border border-white/10 light:border-slate-300 light:bg-slate-200/50 flex items-center justify-center group-hover:bg-purple-brand group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45 duration-300" />
                  </div>
                </div>

                {/* ── Content area ── */}
                <div className="p-7 flex flex-col flex-grow border-t border-border-primary bg-bg-surface/40">

                  {/* Technical badges mapping */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 light:text-slate-600 bg-white/4 light:bg-slate-100 border border-border-primary rounded-full group-hover:bg-purple-brand/10 group-hover:text-purple-brand group-hover:border-purple-brand/20 transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Title and descriptions */}
                  <h3 className={`text-2xl md:text-3xl font-black tracking-tighter text-text-primary mb-3 transition-colors duration-300 ${p.accentColor}`}>
                    {p.title}
                  </h3>
                  <p className="text-slate-400 light:text-slate-600 text-sm md:text-base leading-relaxed font-light mb-6 flex-grow">
                    {p.longDesc}
                  </p>

                  {/* Action CTA Buttons bar */}
                  <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-border-primary">
                    {p.liveUrl && <LinkBtn href={p.liveUrl} icon={ExternalLink} label="Live Demo" />}
                    {p.githubUrl && <LinkBtn href={p.githubUrl} icon={Github} label="Source" />}
                    {p.videoUrl && <LinkBtn href={p.videoUrl} icon={Play} label="Watch Demo" />}
                    {p.docsUrl && <LinkBtn href={p.docsUrl} icon={FileText} label="Docs" />}
                    {!p.liveUrl && !p.githubUrl && !p.videoUrl && !p.docsUrl && (
                      <span className="text-xs text-slate-600 italic">{t("projects.comingSoon")}</span>
                    )}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}