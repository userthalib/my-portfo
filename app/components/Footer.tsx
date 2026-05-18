"use client";
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";

const SOCIALS = [
  { icon: Github,   href: "https://github.com/userthalib",          label: "GitHub"   },
  { icon: Linkedin, href: "https://linkedin.com/in/irfanthalibalf", label: "LinkedIn" },
  { icon: Mail,     href: "mailto:alfalib01@gmail.com",             label: "Email"    },
  { icon: Twitter,  href: "#",                                       label: "Twitter"  },
];

const QUICK_LINKS = [
  { name: "Home",      href: "#home"      },
  { name: "About",     href: "#about"     },
  { name: "Services",  href: "#services"  },
  { name: "Work",      href: "#portfolio" },
  { name: "Contact",   href: "#contact"   },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#070410] relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-600/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 relative z-10">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
                <span className="text-[11px] font-black text-white">IT</span>
              </div>
              <span className="font-black text-white text-lg tracking-tight">
                Irfan Thalib
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Full Stack Developer crafting scalable, pixel-perfect web experiences from Indonesia.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-400 hover:text-purple-300 transition-colors text-sm font-medium group"
                >
                  <Icon size={16} className="group-hover:text-purple-400 transition-colors" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Irfan Thalib — All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">
              Crafted with Next.js & Tailwind
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 rounded-full border border-white/8 text-slate-500 hover:text-purple-300 hover:border-purple-500/30 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}