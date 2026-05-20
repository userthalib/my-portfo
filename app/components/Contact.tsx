"use client";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

/**
 * Personal contact information mappings.
 * Contains icon assets, styling classes, values, and anchor targets.
 */
const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "alfalib01@gmail.com",
    href: "mailto:alfalib01@gmail.com",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    hoverBg: "hover:bg-purple-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indonesia (Remote Available)",
    href: null,
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    hoverBg: "",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/userthalib",
    href: "https://github.com/userthalib",
    iconBg: "bg-white/6",
    iconColor: "text-slate-300",
    hoverBg: "hover:bg-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/irfanthalibalf",
    href: "https://linkedin.com/in/irfanthalibalf",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    hoverBg: "hover:bg-blue-500",
  },
];

/**
 * Contact Component
 * 
 * Configured as a dual-column contact section:
 * - **Left Column**: List of channels (Email, GitHub, LinkedIn, Location) + Available Status pill.
 * - **Right Column**: Interactive email contact form configured to submit directly via Formspree API.
 */
export default function Contact() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
          <span className="text-purple-400 font-mono text-xs tracking-widest uppercase font-bold">
            05. Contact
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent" />
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
          Let&apos;s build something{" "}
          <br className="hidden md:block" />
          <span className="text-gradient">legendary.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl font-light leading-relaxed">
          I&apos;m open to freelance projects and full-time positions. Have an idea?
          Let&apos;s talk.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ── Left: Contact Info ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {CONTACT_INFO.map((c) => {
            const Inner = (
              <div className="flex items-center gap-4 group/item">
                <div
                  className={`p-3 rounded-2xl ${c.iconBg} ${c.hoverBg} ${c.iconColor} hover:text-white transition-all duration-300 shrink-0`}
                >
                  <c.icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">
                    {c.label}
                  </p>
                  <p className="text-white font-medium text-sm truncate">{c.value}</p>
                </div>
              </div>
            );

            // Conditionally wrap item in clickable anchor tags if an href is provided
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block p-4 rounded-2xl border border-white/6 bg-white/2 hover:border-purple-500/25 hover:bg-purple-500/5 transition-all duration-300"
              >
                {Inner}
              </a>
            ) : (
              /* Falls back to structured div if no link anchor targets are available */
              <div
                key={c.label}
                className="block p-4 rounded-2xl border border-white/6 bg-white/2"
              >
                {Inner}
              </div>
            );
          })}

          {/* Timezone and Availability details */}
          <div className="mt-6 p-5 rounded-2xl border border-purple-500/20 bg-purple-500/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
              </span>
              <span className="text-purple-300 font-bold text-sm">Currently Available</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Typical response time: <span className="text-slate-300 font-medium">within 24 hours</span>.
              Based in Indonesia — comfortable working across any timezone.
            </p>
          </div>
        </motion.div>

        {/* ── Right: Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <SpotlightCard className="p-7 md:p-9 border-white/8 hover:border-purple-500/20">
            {/* Form submission path configured to submit data payloads directly to Formspree handler */}
            <form
              action="https://formspree.io/f/mojlywzz"
              method="POST"
              className="space-y-5"
            >
              {[
                { id: "name",    label: "Your Name",    type: "text",  placeholder: "John Doe"            },
                { id: "email",   label: "Your Email",   type: "email", placeholder: "john@example.com"    },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id} className="space-y-1.5">
                  <label
                    htmlFor={id}
                    className="block text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    name={id}
                    required
                    placeholder={placeholder}
                    className="w-full bg-[#070410] border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-700 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 outline-none transition-all"
                  />
                </div>
              ))}

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#070410] border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-700 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/40 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 transition-all shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
}