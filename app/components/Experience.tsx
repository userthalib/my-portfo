"use client";
import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";

/**
 * Structural timeline design constants (tech tags, type, link pointers).
 * Combined with translated strings at runtime.
 */
const TIMELINE_METADATA = [
  {
    type: "work",
    companyUrl: "",
    tech: ["PHP", "JavaScript", "CodeIgniter", "Laravel", "PostgreSQL"],
    highlight: true,
  },
  {
    type: "work",
    companyUrl: "",
    tech: ["ReactJS", "Flutter", "WordPress", "Figma"],
    highlight: false,
  },
  {
    type: "education",
    companyUrl: "",
    tech: ["Software Engineering", "Database Systems", "Web Development"],
    highlight: false,
  },
  {
    type: "education",
    companyUrl: "",
    tech: ["Routing", "Switching", "Network Security", "CCNA"],
    highlight: false,
  },
];

const COLORS: Record<string, string> = {
  work: "from-purple-brand to-violet-brand",
  education: "from-cyan-brand to-blue-500",
};

/**
 * Experience Component
 * 
 * Renders an alternating timeline tracking past jobs and degrees.
 */
export default function Experience() {
  const { t } = useApp();

  const items = (t("experience.items") as any[]) || [];

  const timeline = items.map((translatedItem, index) => {
    const design = TIMELINE_METADATA[index] || TIMELINE_METADATA[0];
    return {
      ...translatedItem,
      ...design,
    };
  });

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
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-purple-brand" />
          <span className="text-purple-brand font-mono text-xs tracking-widest uppercase font-bold">
            {t("experience.num")} {t("experience.sectionTitle")}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-purple-brand to-transparent" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary mb-5">
          {t("experience.heading")}
        </h2>
        <p className="text-slate-400 light:text-slate-600 text-lg max-w-2xl font-light leading-relaxed">
          {t("experience.subtitle")}
        </p>
      </motion.div>

      {/* Timeline wrapper */}
      <div className="relative">
        {/* Central vertical track line */}
        <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-brand/40 via-violet-brand/20 to-transparent" />

        <div className="space-y-10">
          {timeline.map((entry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: "easeOut" }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Timeline Center Dot Indicator */}
              <div className="absolute left-0 md:left-1/2 top-6 -translate-x-[3px] md:-translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${COLORS[entry.type]} shadow-lg shadow-purple-brand/40`} />
              </div>

              {/* Timeline Item Container card */}
              <div
                className={`w-full md:w-[calc(50%-2rem)] pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
              >
                <div
                  className={`p-6 rounded-2xl border bg-bg-surface backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-brand/10 ${entry.highlight
                      ? "border-purple-brand/30 shadow-md shadow-purple-brand/5"
                      : "border-border-primary hover:border-purple-brand/20"
                    }`}
                >
                  {/* Period & Type Badge details */}
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span className="text-xs font-bold text-slate-500 light:text-slate-600 uppercase tracking-widest font-mono">
                      {entry.period}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r ${COLORS[entry.type]} text-white`}
                    >
                      {entry.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-1 tracking-tight">
                    {entry.role}
                  </h3>

                  {/* Dynamic Company anchor link or text string fallback */}
                  {entry.companyUrl ? (
                    <a
                      href={entry.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-brand text-sm font-semibold hover:text-purple-brand/80 transition-colors mb-3 block"
                    >
                      {entry.company} ↗
                    </a>
                  ) : (
                    <p className="text-purple-brand text-sm font-semibold mb-3">
                      {entry.company}
                    </p>
                  )}

                  <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed mb-4 font-light">
                    {entry.description}
                  </p>

                  {/* Technology labels used in this specific timeline phase */}
                  <div className="flex flex-wrap gap-2">
                    {entry.tech.map((t: string) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 light:text-slate-600 bg-white/4 light:bg-slate-100 border border-border-primary rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer on desktop */}
              <div className="hidden md:block w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
