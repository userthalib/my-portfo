"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useApp } from "../context/AppContext";

/* ─────────────────────────────────────────────────────────────
   PROFILE PHOTO CONFIGURATION
   ─────────────────────────────────────────────────────────────
   To add your photo, choose ONE option and update PHOTO_SRC:

   Option A – Local file (recommended):
     1. Drop your photo into /public/  (e.g. profile.jpg)
     2. Set: PHOTO_SRC = "/profile.jpg"

   Option B – External URL:
     Set: PHOTO_SRC = "https://your-cdn.com/photo.jpg"

   Leave PHOTO_SRC = null to keep the initials placeholder.
 ───────────────────────────────────────────────────────────── */
const PHOTO_SRC: string | null = "/profile.jpg";

const SOCIALS = [
  { Icon: Github, href: "https://github.com/userthalib", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/irfanthalibalf", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:alfalib01@gmail.com", label: "Email" },
];

/**
 * Hero Component
 * 
 * Serves as the high-impact landing block of the site.
 */
export default function Hero() {
  const { t } = useApp();
  const roles = (t("hero.roles") as string[]) || [
    "Full Stack Developer",
    "React Engineer",
    "Laravel Developer",
    "UI/UX Enthusiast",
  ];

  const STATS = [
    { num: "1+", label: t("hero.stats.experience") },
    { num: "5+", label: t("hero.stats.projects") },
    { num: "∞", label: t("hero.stats.lines") },
  ];

  // Track index of the current role string in the roles array
  const [roleIdx, setRoleIdx] = useState(0);

  // Track string slice actively displayed on page
  const [displayed, setDisplayed] = useState("");

  // Flag indicating if typing behavior has switched to character deletion
  const [isDeleting, setIsDeleting] = useState(false);

  /**
   * Typewriter State Loop Engine
   */
  useEffect(() => {
    if (!roles || roles.length === 0) return;
    const currentIdx = roleIdx % roles.length;
    const current = roles[currentIdx];
    let timeoutRef: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      // 1. Typing: append one character every 75ms
      timeoutRef = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!isDeleting && displayed.length === current.length) {
      // 2. Pause: wait 2.2s before commencing deletion
      timeoutRef = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      // 3. Deleting: remove one character every 38ms (faster than typing)
      timeoutRef = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 38);
    } else {
      // 4. Complete: transition to the next role array index
      setIsDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeoutRef);
  }, [displayed, isDeleting, roleIdx, roles]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-32 lg:pb-44 px-6"
    >
      {/* Decorative slow-spinning rings: absolute positioned with pointer-events disabled */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="w-[700px] h-[700px] rounded-full border border-purple-brand/8 light:border-purple-brand/4 animate-spin-slow" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-violet-brand/10 light:border-violet-brand/5 animate-spin-reverse" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-cyan-brand/6 light:border-cyan-brand/3 animate-spin-slow" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* ── Profile Photo Area ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Outer glow ring utilizing Tailwind custom glow animations */}
          <div className="relative w-28 h-28 md:w-32 md:h-32">
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-purple-brand via-violet-brand to-cyan-brand animate-pulse-glow" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-bg-primary bg-gradient-to-br from-purple-brand/20 to-violet-brand/20">
              {PHOTO_SRC ? (
                /* Next/Image layout: Fill relative container constraints */
                <Image
                  src={PHOTO_SRC}
                  alt="Irfan Thalib Alfarid"
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                /* Initials fallback placeholder: styled using text-gradient clipping */
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-3xl font-black text-gradient select-none">IT</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* ── Status Pill ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 rounded-full border border-purple-brand/30 bg-purple-brand/10 light:bg-purple-brand/5 text-purple-brand text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-purple-brand/5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-brand opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-brand" />
          </span>
          {t("hero.status")}
        </motion.div>

        {/* ── Name Layout ── */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="font-black tracking-tighter leading-[0.82] mb-5 select-none"
        >
          <span className="block text-[clamp(4rem,14vw,9.5rem)] text-text-primary">
            Irfan
          </span>
          <span className="block text-[clamp(4rem,14vw,9.5rem)] text-text-primary/12 light:text-text-primary/10 hover:text-purple-brand/20 transition-colors duration-700">
            Thalib
          </span>
          <span className="block text-[clamp(4rem,14vw,9.5rem)] text-text-primary">
            Alfarid
          </span>
        </motion.h1>

        {/* ── Typewriter Subtitle ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <span className="text-xl md:text-2xl font-semibold text-gradient">
            {displayed}
            <span className="animate-pulse text-purple-brand">|</span>
          </span>
        </motion.div>

        {/* ── Description ── */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-400 light:text-slate-600 text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed font-light"
        >
          {t("hero.description")}
        </motion.p>

        {/* ── Stat Chips ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex items-center gap-3 mb-10 flex-wrap justify-center"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center px-6 py-3 rounded-2xl border border-purple-brand/15 bg-purple-brand/5 backdrop-blur-sm shadow-sm"
            >
              <span className="text-xl font-black text-purple-brand">{s.num}</span>
              <span className="text-[10px] font-bold text-slate-500 light:text-slate-600 uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Call To Actions (CTAs) ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <a
            href="#portfolio"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-purple-brand to-violet-brand hover:scale-103 transition-all shadow-xl shadow-purple-brand/20 animate-gradient"
          >
            {t("hero.ctaWork")}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm border border-border-primary text-slate-300 light:text-slate-700 hover:text-purple-brand light:hover:text-purple-brand hover:border-purple-brand/40 hover:bg-purple-brand/5 transition-all"
          >
            <Download size={18} /> {t("hero.ctaResume")}
          </a>
        </motion.div>

        {/* ── Social Icons ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-3"
        >
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-border-primary bg-white/4 light:bg-slate-200/50 text-slate-400 light:text-slate-600 hover:text-white light:hover:text-black hover:border-purple-brand/40 hover:bg-purple-brand/10 transition-all duration-300"
            >
              <Icon size={18} />
              <span className="text-xs font-semibold hidden sm:block">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll Indicator Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 light:text-slate-400 hide-on-short-screens"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}