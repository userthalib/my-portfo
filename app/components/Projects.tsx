"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, Play, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";

/* ═══════════════════════════════════════════════════════════════
   PROJECT DATA — update this array with your real projects
   ═══════════════════════════════════════════════════════════════

   FIELDS:
   ─────────────────────────────────────────────────────────────
   title        : string  — project name
   description  : string  — short tagline (1 sentence)
   longDesc     : string  — paragraph shown in the card
   tech         : string[] — tech badges
   category     : string  — label shown in top-left of card

   image        : string | null
     → null    : shows gradient placeholder
     → "/projects/my-image.jpg"  : local file in /public/projects/
     → "https://..."             : external URL (add domain to
                                   next.config.ts remotePatterns)

   liveUrl      : string | null  — "View Live" button
   githubUrl    : string | null  — "Source" button
   videoUrl     : string | null  — "Watch Demo" button (YouTube or direct .mp4)
   docsUrl      : string | null  — "Docs" button

   featured     : boolean — if true → full-width card (2 cols on md+)
   gradient     : string  — Tailwind gradient classes for placeholder bg
   accentColor  : string  — Tailwind text color class for title hover
   ─────────────────────────────────────────────────────────────
 */
interface Project {
  title:       string;
  description: string;
  longDesc:    string;
  tech:        string[];
  category:    string;
  image:       string | null;
  liveUrl:     string | null;
  githubUrl:   string | null;
  videoUrl:    string | null;
  docsUrl:     string | null;
  featured:    boolean;
  gradient:    string;
  accentColor: string;
}

/**
 * Static projects showcase list.
 * Developers can modify values directly here to alter projects rendered on the portfolio grid.
 */
const PROJECTS: Project[] = [
  {
    title:       "Nebula Finance",
    description: "High-frequency trading analytics platform.",
    longDesc:    "A robust financial analytics platform designed for high-frequency trading. Real-time data pipelines, custom charting engine, and sub-100ms query latency.",
    tech:        ["Next.js", "Rust", "PostgreSQL", "Redis"],
    category:    "Web App",
    image:       null,                   // ← replace with "/projects/nebula.jpg"
    liveUrl:     null,                   // ← replace with "https://..."
    githubUrl:   "https://github.com/userthalib",
    videoUrl:    null,                   // ← replace with YouTube URL
    docsUrl:     null,
    featured:    true,
    gradient:    "from-purple-600/30 via-violet-600/20 to-blue-600/10",
    accentColor: "group-hover:text-purple-400",
  },
  {
    title:       "Velox Commerce",
    description: "Headless e-commerce with perfect Lighthouse scores.",
    longDesc:    "Headless storefront built on Shopify's Storefront API. Achieves 100 Lighthouse on all metrics through aggressive caching, image optimisation, and edge rendering.",
    tech:        ["React", "Shopify", "Redis", "TypeScript"],
    category:    "E-Commerce",
    image:       null,                   // ← replace with "/projects/velox.png"
    liveUrl:     null,
    githubUrl:   "https://github.com/userthalib",
    videoUrl:    null,
    docsUrl:     null,
    featured:    false,
    gradient:    "from-amber-600/25 via-orange-600/15 to-red-600/5",
    accentColor: "group-hover:text-amber-400",
  },
  {
    title:       "Sync Mobile",
    description: "Offline-first productivity PWA.",
    longDesc:    "Local-first architecture using CRDTs for conflict-free sync. Works fully offline and syncs instantly when reconnected. Built with React Native & Supabase.",
    tech:        ["React Native", "Supabase", "PWA"],
    category:    "Mobile / PWA",
    image:       null,                   // ← replace with "/projects/sync.png"
    liveUrl:     null,
    githubUrl:   "https://github.com/userthalib",
    videoUrl:    null,
    docsUrl:     null,
    featured:    false,
    gradient:    "from-emerald-600/25 via-teal-600/15 to-cyan-600/5",
    accentColor: "group-hover:text-emerald-400",
  },
];

/**
 * LinkBtn Helper Component
 * Renders standardized external links styled with uppercase headers and transition hover highlights.
 */
function LinkBtn({
  href, icon: Icon, label,
}: { href: string; icon: React.ElementType; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
    >
      <Icon size={15} /> {label}
    </a>
  );
}

/**
 * Projects Component
 * 
 * Generates the Bento-inspired portfolio grid layout.
 * 
 * Layout Mechanics:
 * 1. **Bento Grid Spanning**: Uses dynamic column classes. Featured entries spans two grid columns (`md:col-span-2`),
 *    while regular entries sit side-by-side in single-column configurations.
 * 2. **Dynamic Image Handling**: Attempts to load custom illustrations using `next/image` (with responsive object-cover settings).
 *    If `p.image` is undefined, renders a gradient layout bordered by SVG bracket vector shapes.
 * 3. **Action Links Block**: Renders action buttons conditionally based on URL property visibility.
 */
export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {PROJECTS.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={p.featured ? "md:col-span-2" : ""}
        >
          <SpotlightCard className="h-full group border-white/6 hover:border-purple-500/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20">
            <div className="relative h-full flex flex-col">

              {/* ── Image / Placeholder area ── */}
              <div className={`relative w-full overflow-hidden ${p.featured ? "h-64 md:h-80" : "h-52 md:h-64"}`}>
                {/* Bottom gradient fade: prevents hard lines separating image from lower card boundaries */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1a] via-[#0d0a1a]/30 to-transparent z-10" />

                {/* Hover gradient overlay: brightens card on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-10`} />

                {p.image ? (
                  /* Renders primary image utilizing Next.js layout fill properties */
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  /* Fallback gradient panel featuring custom bracket vector drawings */
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`}>
                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-sm" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-sm" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-sm" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-sm" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <span className="text-white/20 text-xs font-bold uppercase tracking-widest">
                        Add Image → image field
                      </span>
                    </div>
                  </div>
                )}

                {/* Category tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-black/50 border border-white/10 rounded-full text-slate-300 backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>

                {/* Visual Arrow link indicator in top right header corner */}
                <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45 duration-300" />
                </div>
              </div>

              {/* ── Content area ── */}
              <div className="p-7 flex flex-col flex-grow border-t border-white/5 bg-[#0d0a1a]/40">

                {/* Technical badges mapping */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/4 border border-white/6 rounded-full group-hover:bg-purple-500/10 group-hover:text-purple-300 group-hover:border-purple-500/20 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title and descriptions */}
                <h3 className={`text-2xl md:text-3xl font-black tracking-tighter text-white mb-3 transition-colors duration-300 ${p.accentColor}`}>
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light mb-6 flex-grow">
                  {p.longDesc}
                </p>

                {/* Action CTA Buttons bar */}
                <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/5">
                  {p.liveUrl    && <LinkBtn href={p.liveUrl}    icon={ExternalLink} label="Live Demo" />}
                  {p.githubUrl  && <LinkBtn href={p.githubUrl}  icon={Github}       label="Source"   />}
                  {p.videoUrl   && <LinkBtn href={p.videoUrl}   icon={Play}         label="Watch Demo"/>}
                  {p.docsUrl    && <LinkBtn href={p.docsUrl}    icon={FileText}     label="Docs"     />}
                  {!p.liveUrl && !p.githubUrl && !p.videoUrl && !p.docsUrl && (
                    <span className="text-xs text-slate-600 italic">Links coming soon</span>
                  )}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </div>
  );
}