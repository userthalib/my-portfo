"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, ArrowDown } from "lucide-react";
import Image from "next/image";

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
const PHOTO_SRC: string | null = null;

const ROLES = [
  "Full Stack Developer",
  "React Engineer",
  "Laravel Developer",
  "UI/UX Enthusiast",
];

const SOCIALS = [
  { Icon: Github,   href: "https://github.com/userthalib",            label: "GitHub"   },
  { Icon: Linkedin, href: "https://linkedin.com/in/irfanthalibalf",   label: "LinkedIn" },
  { Icon: Mail,     href: "mailto:alfalib01@gmail.com",               label: "Email"    },
];

const STATS = [
  { num: "3+",  label: "Years Exp."     },
  { num: "15+", label: "Projects Built" },
  { num: "∞",   label: "Lines of Code"  },
];

export default function Hero() {
  const [roleIdx,    setRoleIdx   ] = useState(0);
  const [displayed,  setDisplayed ] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* Typewriter effect */
  useEffect(() => {
    const current = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!isDeleting && displayed.length === current.length) {
      t = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 38);
    } else {
      setIsDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 px-6"
    >
      {/* Decorative slow-spinning rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="w-[700px] h-[700px] rounded-full border border-purple-500/8  animate-spin-slow"  />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-violet-500/10 animate-spin-reverse" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-cyan-500/6   animate-spin-slow"  />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* ── Profile Photo ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1     }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Outer glow ring */}
          <div className="relative w-28 h-28 md:w-32 md:h-32">
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-purple-500 via-violet-600 to-cyan-500 animate-pulse-glow" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#070410] bg-gradient-to-br from-purple-900/50 to-violet-900/40">
              {PHOTO_SRC ? (
                /* ── PHOTO active ──────────────────────────────
                   Next/Image is used for automatic optimisation.
                   If PHOTO_SRC is an external URL add the domain
                   to next.config.ts > images.remotePatterns.
                ────────────────────────────────────────────── */
                <Image
                  src={PHOTO_SRC}
                  alt="Irfan Thalib"
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                /* ── Placeholder initials ─────────────────── */
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-3xl font-black text-gradient select-none">IT</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* ── Status pill ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-purple-950/30"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
          </span>
          Available for Opportunities
        </motion.div>

        {/* ── Name ─────────────────────────────────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="font-black tracking-tighter leading-[0.82] mb-5 select-none"
        >
          <span className="block text-[clamp(4rem,14vw,9.5rem)] text-white">
            Irfan
          </span>
          <span className="block text-[clamp(4rem,14vw,9.5rem)] text-white/12 hover:text-white/25 transition-colors duration-700">
            Thalib
          </span>
        </motion.h1>

        {/* ── Typewriter subtitle ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <span className="text-xl md:text-2xl font-semibold text-gradient">
            {displayed}
            <span className="animate-pulse text-purple-400">|</span>
          </span>
        </motion.div>

        {/* ── Description ──────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-400 text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed font-light"
        >
          Building{" "}
          <span className="text-white font-medium">scalable</span>,{" "}
          <span className="text-white font-medium">pixel-perfect</span>{" "}
          applications. Focused on the{" "}
          <span className="text-purple-300 font-medium">React & Laravel</span> ecosystem.
        </motion.p>

        {/* ── Stat chips ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex items-center gap-3 mb-10 flex-wrap justify-center"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center px-6 py-3 rounded-2xl border border-purple-500/15 bg-purple-500/6 backdrop-blur-sm"
            >
              <span className="text-xl font-black text-purple-300">{s.num}</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── CTAs ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <a
            href="#portfolio"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 transition-all shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 animate-gradient"
          >
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all"
          >
            <Download size={18} /> Download CV
          </a>
        </motion.div>

        {/* ── Social icons ─────────────────────────────────── */}
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
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/8 bg-white/4 text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
            >
              <Icon size={18} />
              <span className="text-xs font-semibold hidden sm:block">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}