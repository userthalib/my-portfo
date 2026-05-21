"use client";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { useApp } from "../context/AppContext";

/**
 * Personal contact information mappings.
 */
const CONTACT_INFO_METADATA = [
  {
    key: "email",
    icon: Mail,
    label: "Email",
    value: "alfalib01@gmail.com",
    href: "mailto:alfalib01@gmail.com",
    iconBg: "bg-purple-brand/10 light:bg-purple-brand/5",
    iconColor: "text-purple-brand",
    hoverBg: "hover:bg-purple-brand",
  },
  {
    key: "location",
    icon: MapPin,
    label: "Location",
    value: "Indonesia (Remote Available)",
    href: null,
    iconBg: "bg-cyan-brand/10 light:bg-cyan-brand/5",
    iconColor: "text-cyan-brand",
    hoverBg: "",
  },
  {
    key: "github",
    icon: Github,
    label: "GitHub",
    value: "github.com/userthalib",
    href: "https://github.com/userthalib",
    iconBg: "bg-white/6 light:bg-slate-200/50",
    iconColor: "text-slate-300 light:text-slate-700",
    hoverBg: "hover:bg-purple-brand hover:text-white",
  },
  {
    key: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/irfanthalibalf",
    href: "https://linkedin.com/in/irfanthalibalf",
    iconBg: "bg-blue-500/10 light:bg-blue-500/5",
    iconColor: "text-blue-400 light:text-blue-600",
    hoverBg: "hover:bg-blue-500 hover:text-white",
  },
];

/**
 * Contact Component
 * 
 * Configured as a dual-column contact section.
 */
export default function Contact() {
  const { t } = useApp();

  // Localize location if available
  const contactInfo = CONTACT_INFO_METADATA.map((c) => {
    if (c.key === "location") {
      return {
        ...c,
        label: t("contact.form.nameLabel") ? (t("nav.contact") === "Kontak" ? "Lokasi" : "Location") : c.label,
        value: t("nav.contact") === "Kontak" ? "Indonesia (Tersedia Remote)" : "Indonesia (Remote Available)",
      };
    }
    return c;
  });

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
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-purple-brand" />
          <span className="text-purple-brand font-mono text-xs tracking-widest uppercase font-bold">
            {t("contact.num")} {t("contact.sectionTitle")}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-purple-brand to-transparent" />
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary mb-4">
          {t("nav.contact") === "Kontak" ? (
            <>
              Mari membangun sesuatu <br className="hidden md:block" />
              <span className="text-gradient">yang legendaris.</span>
            </>
          ) : (
            <>
              Let&apos;s build something <br className="hidden md:block" />
              <span className="text-gradient">legendary.</span>
            </>
          )}
        </h2>
        <p className="text-slate-400 light:text-slate-600 text-lg max-w-xl font-light leading-relaxed">
          {t("contact.subtitle")}
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
          {contactInfo.map((c) => {
            const Inner = (
              <div className="flex items-center gap-4 group/item">
                <div
                  className={`p-3 rounded-2xl ${c.iconBg} ${c.hoverBg} ${c.iconColor} hover:text-white transition-all duration-300 shrink-0`}
                >
                  <c.icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-slate-500 light:text-slate-600 uppercase tracking-widest mb-0.5">
                    {c.label}
                  </p>
                  <p className="text-text-primary font-medium text-sm truncate">{c.value}</p>
                </div>
              </div>
            );

            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block p-4 rounded-2xl border border-border-primary bg-white/2 light:bg-slate-100 hover:border-purple-brand/25 hover:bg-purple-brand/5 transition-all duration-300"
              >
                {Inner}
              </a>
            ) : (
              <div
                key={c.label}
                className="block p-4 rounded-2xl border border-border-primary bg-white/2 light:bg-slate-100"
              >
                {Inner}
              </div>
            );
          })}

          {/* Timezone and Availability details */}
          <div className="mt-6 p-5 rounded-2xl border border-purple-brand/20 bg-purple-brand/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-brand opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-brand" />
              </span>
              <span className="text-purple-brand font-bold text-sm">{t("contact.availability")}</span>
            </div>
            <p className="text-slate-500 light:text-slate-600 text-xs leading-relaxed">
              {t("contact.responseTime")}
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
          <SpotlightCard className="p-7 md:p-9 border-white/8 hover:border-purple-brand/20">
            <form
              action="https://formspree.io/f/mojlywzz"
              method="POST"
              className="space-y-5"
            >
              {[
                { id: "name",    label: t("contact.form.nameLabel"),    type: "text",  placeholder: t("contact.form.namePlaceholder") },
                { id: "email",   label: t("contact.form.emailLabel"),   type: "email", placeholder: t("contact.form.emailPlaceholder") },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id} className="space-y-1.5">
                  <label
                    htmlFor={id}
                    className="block text-[10px] font-black uppercase tracking-widest text-slate-500 light:text-slate-600 ml-1"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    name={id}
                    required
                    placeholder={placeholder}
                    className="w-full bg-bg-primary border border-border-primary rounded-xl px-4 py-3.5 text-sm text-text-primary placeholder:text-slate-700 light:placeholder:text-slate-400 focus:border-purple-brand/60 focus:ring-1 focus:ring-purple-brand/40 outline-none transition-all"
                  />
                </div>
              ))}

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-[10px] font-black uppercase tracking-widest text-slate-500 light:text-slate-600 ml-1"
                >
                  {t("contact.form.messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="w-full bg-bg-primary border border-border-primary rounded-xl px-4 py-3.5 text-sm text-text-primary placeholder:text-slate-700 light:placeholder:text-slate-400 focus:border-purple-brand/60 focus:ring-1 focus:ring-purple-brand/40 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-brand to-violet-brand hover:scale-[1.01] transition-all shadow-lg shadow-purple-brand/20 flex items-center justify-center gap-2 group cursor-pointer"
              >
                {t("contact.form.submitBtn")}
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