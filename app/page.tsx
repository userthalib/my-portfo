import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      <Section id="about" className="border-t border-border-primary">
        <About />
      </Section>

      {/* 3. SERVICES — Areas of Expertise cards layout */}
      <Section id="services" className="border-t border-border-primary">
        <Services />
      </Section>

      {/* 4. EXPERIENCE — Alternating timeline of past roles/degrees */}
      <Section id="experience" className="border-t border-border-primary">
        <Experience />
      </Section>

      {/* 5. PORTFOLIO — Bento grid & projects summary */}
      <Section id="portfolio" className="border-t border-border-primary">
        <Projects />
      </Section>

      {/* 6. CONTACT — Direct email form setup */}
      <Section id="contact" className="border-t border-border-primary">
        <Contact />
      </Section>

      {/* 7. FOOTER — Bottom signature, copyright details, links */}
      <Footer />
    </main>
  );
}