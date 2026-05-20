import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import About     from "./components/About";
import Services  from "./components/Services";
import Experience from "./components/Experience";
import Projects  from "./components/Projects";
import Contact   from "./components/Contact";
import Footer    from "./components/Footer";

/**
 * Section Wrapper Component
 * 
 * Injects standard max-width spacing, responsive horizontal padding, 
 * and structural layout properties (like min-height of 100vh) across sections.
 *
 * @param id - HTML ID tag used for direct anchor navigation (`#about`, `#services`, etc.).
 * @param children - React DOM tree node representing the section body content.
 * @param className - Optional CSS style parameters to override defaults.
 */
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

/**
 * Main Portfolio Home Page Component
 * 
 * Assembles page layouts in logical sequence:
 * 1. Fixed Header (Navbar)
 * 2. Visual Intros (Hero)
 * 3. Profile Information (About)
 * 4. Specializations & Services (Services)
 * 5. Job Timeline & Education (Experience)
 * 6. Work Highlights & Case Studies (Projects)
 * 7. Call To Action Form (Contact)
 * 8. Bottom Information Footer (Footer)
 */
export default function Home() {
  return (
    <main className="relative selection:bg-purple-500/30">
      {/* Dynamic desktop/mobile tracking navbar */}
      <Navbar />

      {/* 1. HERO — full-bleed section layout, doesn't require wrapper constraint */}
      <Hero />

      {/* 2. ABOUT — Story, Tech Stack & Quick Statistics */}
      <Section id="about" className="border-t border-white/5">
        <About />
      </Section>

      {/* 3. SERVICES — Areas of Expertise cards layout */}
      <Section id="services" className="border-t border-white/5">
        <Services />
      </Section>

      {/* 4. EXPERIENCE — Alternating timeline of past roles/degrees */}
      <Section id="experience" className="border-t border-white/5">
        <Experience />
      </Section>

      {/* 5. PORTFOLIO — Bento grid & projects summary */}
      <Section id="portfolio" className="border-t border-white/5">
        {/* Section header block with custom gradients and monospaced number markers */}
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
        {/* Projects grid rendering dynamic items */}
        <Projects />
      </Section>

      {/* 6. CONTACT — Direct email form setup */}
      <Section id="contact" className="border-t border-white/5">
        <Contact />
      </Section>

      {/* 7. FOOTER — Bottom signature, copyright details, links */}
      <Footer />
    </main>
  );
}