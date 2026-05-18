"use client";
import { motion } from "framer-motion";

/* ── Timeline data ─────────────────────────────────────────────
   Fill in your real work history / education below.
   Each entry can be either "work" or "education" type.
────────────────────────────────────────────────────────────── */
const TIMELINE = [
  {
    type: "work",
    period: "2024 — Present",
    role: "Full Stack Developer",
    company: "Freelance",
    companyUrl: "",
    description:
      "Building end-to-end web applications for clients across Indonesia and Southeast Asia. Specialising in React frontends backed by Laravel APIs.",
    tech: ["React", "Next.js", "Laravel", "PostgreSQL"],
    highlight: true,
  },
  {
    type: "work",
    period: "2023 — 2024",
    role: "Frontend Developer",
    company: "Your Company Name",   // ← replace
    companyUrl: "",
    description:
      "Developed and maintained responsive web interfaces, collaborated with designers to implement pixel-perfect UIs, and improved site performance.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    highlight: false,
  },
  {
    type: "education",
    period: "2020 — 2024",
    role: "Bachelor of Information Technology",
    company: "Your University",    // ← replace
    companyUrl: "",
    description:
      "Studied software engineering, database systems, and web application development. Graduated with honors.",
    tech: ["Algorithms", "OOP", "Database Systems"],
    highlight: false,
  },
  {
    type: "work",
    period: "2018",
    role: "Self-Taught Developer",
    company: "The Beginning",
    companyUrl: "",
    description:
      'Started modifying game server scripts. That simple "what if?" turned into a career obsession.',
    tech: ["PHP", "MySQL", "HTML/CSS"],
    highlight: false,
  },
];

const COLORS: Record<string, string> = {
  work:      "from-purple-500 to-violet-600",
  education: "from-cyan-500  to-blue-500",
};

export default function Experience() {
  return (
    <section id="experience" className="w-full relative overflow-hidden">
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
            03. Journey
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-5">
          Experience &{" "}
          <span className="text-gradient">Education</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl font-light leading-relaxed">
          A timeline of roles, projects, and learning milestones that shaped
          who I am as a developer.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-violet-500/20 to-transparent" />

        <div className="space-y-10">
          {TIMELINE.map((entry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: "easeOut" }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 top-6 -translate-x-[3px] md:-translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${COLORS[entry.type]} shadow-lg shadow-purple-500/40`} />
              </div>

              {/* Card */}
              <div
                className={`w-full md:w-[calc(50%-2rem)] pl-8 md:pl-0 ${
                  idx % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div
                  className={`p-6 rounded-2xl border bg-[#0d0a1a]/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/30 ${
                    entry.highlight
                      ? "border-purple-500/30 shadow-md shadow-purple-900/20"
                      : "border-white/6 hover:border-purple-500/20"
                  }`}
                >
                  {/* Period & type badge */}
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
                      {entry.period}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r ${COLORS[entry.type]} text-white`}
                    >
                      {entry.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                    {entry.role}
                  </h3>
                  {entry.companyUrl ? (
                    <a
                      href={entry.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors mb-3 block"
                    >
                      {entry.company} ↗
                    </a>
                  ) : (
                    <p className="text-purple-400 text-sm font-semibold mb-3">
                      {entry.company}
                    </p>
                  )}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light">
                    {entry.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {entry.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-white/4 border border-white/6 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for opposite side on desktop */}
              <div className="hidden md:block w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
