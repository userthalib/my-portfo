import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import About     from "./components/About";
import Services  from "./components/Services";
import Experience from "./components/Experience";
import Projects  from "./components/Projects";
import Contact   from "./components/Contact";
import Footer    from "./components/Footer";

/* ── Section wrapper helper ────────────────────────────────────
   All sections share the same max-width container + padding.
   Remove snap-section — natural scroll is used instead.
────────────────────────────────────────────────────────────── */
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`section-wrap ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative selection:bg-purple-500/30">
      <Navbar />

      {/* 1. HERO — full-bleed, no container needed */}
      <Hero />

      {/* 2. ABOUT */}
      <Section id="about" className="border-t border-white/5">
        <About />
      </Section>

      {/* 3. SERVICES */}
      <Section id="services" className="border-t border-white/5">
        <Services />
      </Section>

      {/* 4. EXPERIENCE */}
      <Section id="experience" className="border-t border-white/5">
        <Experience />
      </Section>

      {/* 5. PORTFOLIO */}
      <Section id="portfolio" className="border-t border-white/5">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-purple-400 font-mono text-xs tracking-widest uppercase font-bold">
              04. Portfolio
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-5">
            Selected <span className="text-gradient">Works</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            A collection of projects that showcase my passion for building
            clean, robust applications.
          </p>
        </div>
        <Projects />
      </Section>

      {/* 6. CONTACT */}
      <Section id="contact" className="border-t border-white/5">
        <Contact />
      </Section>

      {/* 7. FOOTER — full-bleed */}
      <Footer />
    </main>
  );
}