"use client";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

/**
 * Statistics metrics displayed on the right column card.
 */
const STATS = [
  { num: "3+",  label: "Years Experience", color: "text-purple-400" },
  { num: "15+", label: "Projects Shipped",  color: "text-cyan-400"   },
  { num: "5+",  label: "Happy Clients",     color: "text-pink-400"   },
  { num: "∞",   label: "Cups of Coffee",    color: "text-amber-400"  },
];

/**
 * Mapping of technologies to specialized border, background, and text colors.
 * Ensures the tech stack capsules display distinct brand coloring (e.g. Yellow for JS, Cyan for React).
 */
const TECH_COLORS: Record<string, string> = {
  JavaScript:  "border-yellow-500/20 bg-yellow-500/8  text-yellow-300",
  TypeScript:  "border-blue-500/20   bg-blue-500/8    text-blue-300",
  React:       "border-cyan-500/20   bg-cyan-500/8    text-cyan-300",
  "Next.js":   "border-white/15      bg-white/6       text-slate-200",
  Laravel:     "border-red-500/20    bg-red-500/8     text-red-300",
  PostgreSQL:  "border-sky-500/20    bg-sky-500/8     text-sky-300",
  Tailwind:    "border-teal-500/20   bg-teal-500/8    text-teal-300",
  Docker:      "border-blue-400/20   bg-blue-400/8    text-blue-200",
  "React Native": "border-cyan-500/20 bg-cyan-500/8  text-cyan-300",
  Supabase:    "border-emerald-500/20 bg-emerald-500/8 text-emerald-300",
  Redis:       "border-rose-500/20   bg-rose-500/8    text-rose-300",
  Git:         "border-orange-500/20 bg-orange-500/8  text-orange-300",
};

/**
 * List of technologies compiled into the tech stack display block.
 */
const TECH = [
  "JavaScript","TypeScript","React","Next.js",
  "Laravel","PostgreSQL","Tailwind","Docker",
  "React Native","Supabase","Redis","Git",
];

/**
 * About Component
 * 
 * Visual layout divided into:
 * - **Left Side (Story/Bio)**: Introduces the developer, background story, design philosophy, and community mentorship activities.
 * - **Right Side (Achievements/Stack)**: Interactive cards listing key experience statistics, visual tech stack capsules, and live availability indicators.
 */
export default function About() {
  return (
    <section id="about" className="w-full relative overflow-hidden">

      {/* Decorative Watermark: Large backdrop text element absolute positioned on right edge */}
      <div
        aria-hidden
        className="absolute -right-8 top-1/2 -translate-y-1/2 text-[10rem] md:text-[16rem] font-black text-purple-500/4 select-none pointer-events-none leading-none tracking-tighter"
      >
        {"</>"}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">

        {/* ── Left: Story ──
            Animates into view from the left when entering scroll bounds. */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          {/* Header title prefix */}
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-purple-400 font-mono text-xs tracking-widest uppercase font-bold">
              01. About Me
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 leading-[1.05]">
            Engineering{" "}
            <span className="text-gradient">precision</span>
            {" "}into every interaction.
          </h2>

          <div className="space-y-6 text-slate-400 text-lg md:text-xl leading-relaxed font-light mb-10">
            <p>
              My journey started when I tried to modify a game server script in 2018.
              That simple{" "}
              <span className="text-white font-medium">"what if?"</span>{" "}
              turned into a career obsession.
            </p>
            <p>
              Today, I focus on the{" "}
              <span className="text-purple-300 font-medium">React & Laravel</span>{" "}
              ecosystem. I believe a great application isn&apos;t just about clean
              code — it&apos;s about how that code makes the user{" "}
              <em className="text-white not-italic font-medium">feel</em>.
            </p>
            <p>
              When I&apos;m not shipping features, you&apos;ll find me exploring open-source
              projects, reading about system design, or{" "}
              <span className="text-white font-medium">mentoring junior devs</span>{" "}
              in the community.
            </p>
          </div>

          {/* Contact Anchor trigger */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/30 text-purple-300 text-sm font-semibold hover:bg-purple-500/10 hover:border-purple-500/50 transition-all"
          >
            Let&apos;s work together →
          </a>
        </motion.div>

        {/* ── Right: Cards ──
            Animates into view from the right when scrolling. */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 space-y-5"
        >
          {/* Card A: Achievements and Quantifiable Metrics */}
          <SpotlightCard className="p-7 border-white/6 hover:border-purple-500/20">
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className={`text-4xl font-black mb-1 tracking-tighter ${s.color}`}>
                    {s.num}
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Card B: Technologies List with Brand-consistent color matching */}
          <SpotlightCard className="p-7 border-white/6 hover:border-purple-500/20">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-black text-purple-400 uppercase tracking-widest font-mono">
                {"</>"} The Stack
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TECH.map((t) => (
                <span
                  key={t}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-full border transition-all hover:scale-105 cursor-default ${
                    TECH_COLORS[t] ?? "border-white/8 bg-white/4 text-slate-400"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </SpotlightCard>

          {/* Card C: Instant availability status card featuring live ping effect */}
          <SpotlightCard className="p-6 border-purple-500/20 hover:border-purple-500/35">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-500" />
              </span>
              <div>
                <p className="text-white font-bold text-sm">Available for Work</p>
                <p className="text-slate-500 text-xs">Open to freelance & full-time roles</p>
              </div>
              <a
                href="#contact"
                className="ml-auto text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
              >
                Contact →
              </a>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}