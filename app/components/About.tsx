"use client";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { useApp } from "../context/AppContext";

/**
 * Mapping of technologies to specialized border, background, and text colors.
 * Adaptable for both light and dark mode styles.
 */
const TECH_COLORS: Record<string, string> = {
  JavaScript: "border-yellow-500/20 bg-yellow-500/8  text-yellow-300 light:text-yellow-600 light:bg-yellow-500/10",
  TypeScript: "border-blue-500/20   bg-blue-500/8    text-blue-300   light:text-blue-600   light:bg-blue-500/10",
  React: "border-cyan-500/20   bg-cyan-500/8    text-cyan-300   light:text-cyan-600   light:bg-cyan-500/10",
  "Next.js": "border-white/15      bg-white/6       text-slate-200  light:border-slate-300 light:bg-slate-100 light:text-slate-700",
  Laravel: "border-red-500/20    bg-red-500/8     text-red-300    light:text-red-600    light:bg-red-500/10",
  PostgreSQL: "border-sky-500/20    bg-sky-500/8     text-sky-300    light:text-sky-600    light:bg-sky-500/10",
  Tailwind: "border-teal-500/20   bg-teal-500/8    text-teal-300   light:text-teal-600   light:bg-teal-500/10",
  Docker: "border-blue-400/20   bg-blue-400/8    text-blue-200   light:text-blue-600   light:bg-blue-400/10",
  "React Native": "border-cyan-500/20 bg-cyan-500/8    text-cyan-300   light:text-cyan-600   light:bg-cyan-500/10",
  Supabase: "border-emerald-500/20 bg-emerald-500/8 text-emerald-300 light:text-emerald-600 light:bg-emerald-500/10",
  Redis: "border-rose-500/20   bg-rose-500/8    text-rose-300   light:text-rose-600   light:bg-rose-500/10",
  Git: "border-orange-500/20 bg-orange-500/8  text-orange-300 light:text-orange-600 light:bg-orange-500/10",
};

const TECH = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Laravel", "PostgreSQL", "Tailwind", "Docker",
  "React Native", "Supabase", "Redis", "Git",
];

/**
 * About Component
 * 
 * Renders stories, achievements, tech stack, and availability markers.
 */
export default function About() {
  const { t } = useApp();

  const STATS = [
    { num: "1+", label: t("about.stats.exp"), color: "text-purple-brand" },
    { num: "5+", label: t("about.stats.projects"), color: "text-cyan-brand" },
    { num: "2+", label: t("about.stats.clients"), color: "text-pink-500 light:text-pink-600" },
    { num: "∞", label: t("about.stats.coffee"), color: "text-amber-500 light:text-amber-600" },
  ];

  return (
    <section id="about" className="w-full relative overflow-hidden">

      {/* Decorative Watermark: Backdrop brackets visual element */}
      <div
        aria-hidden
        className="absolute -right-8 top-1/2 -translate-y-1/2 text-[10rem] md:text-[16rem] font-black text-purple-brand/4 light:text-purple-brand/2 select-none pointer-events-none leading-none tracking-tighter"
      >
        {"</>"}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">

        {/* ── Left: Story ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          {/* Header title prefix */}
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-purple-brand" />
            <span className="text-purple-brand font-mono text-xs tracking-widest uppercase font-bold">
              {t("about.num")} {t("about.sectionTitle")}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-purple-brand to-transparent" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary mb-8 leading-[1.05]">
            {t("about.heading")}
          </h2>

          <div className="space-y-6 text-slate-400 light:text-slate-600 text-lg md:text-xl leading-relaxed font-light mb-10">
            <p>
              {t("about.p1")}
            </p>
            <p>
              {t("about.p2")}
            </p>
            <p>
              {t("about.p3")}
            </p>
          </div>

          {/* Contact Anchor trigger */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-brand/30 text-purple-brand text-sm font-semibold hover:bg-purple-brand/10 hover:border-purple-brand/50 transition-all"
          >
            {t("about.cta")} →
          </a>
        </motion.div>

        {/* ── Right: Cards ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 space-y-5"
        >
          {/* Card A: Achievements and Quantifiable Metrics */}
          <SpotlightCard className="p-7 border-white/6 hover:border-purple-brand/20">
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className={`text-4xl font-black mb-1 tracking-tighter ${s.color}`}>
                    {s.num}
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 light:text-slate-600 uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Card B: Technologies List */}
          <SpotlightCard className="p-7 border-white/6 hover:border-purple-brand/20">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-black text-purple-brand uppercase tracking-widest font-mono">
                {"</>"} {t("about.stackTitle")}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TECH.map((t) => (
                <span
                  key={t}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-full border transition-all hover:scale-105 cursor-default ${TECH_COLORS[t] ?? "border-white/8 light:border-slate-300 bg-white/4 light:bg-slate-100 text-slate-400 light:text-slate-600"
                    }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </SpotlightCard>

          {/* Card C: Instant availability status card */}
          <SpotlightCard className="p-6 border-purple-brand/20 hover:border-purple-brand/35">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-brand opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-brand" />
              </span>
              <div>
                <p className="text-text-primary font-bold text-sm">{t("about.availability.title")}</p>
                <p className="text-slate-500 light:text-slate-600 text-xs">{t("about.availability.desc")}</p>
              </div>
              <a
                href="#contact"
                className="ml-auto text-xs font-bold text-purple-brand hover:text-purple-brand/80 transition-colors"
              >
                {t("about.availability.cta")} →
              </a>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}