import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative selection:bg-blue-500/30">
      <Navbar />
      
      {/* 1. HERO */}
      <section className="snap-section">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 w-full">
          <Hero />
        </div>
      </section>
      
      {/* 2. ABOUT */}
      <section id="about" className="snap-section border-t border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 w-full">
           <About />
        </div>
      </section>

      {/* 3. PROJECTS */}
      <section id="portfolio" className="snap-section border-t border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 w-full">
          <div className="flex flex-col mb-16 max-w-4xl"> 
            <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-6">01. Portfolio</span>
            {/* MASSIVE HEADER */}
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8">Selected Works</h2>
            <p className="text-slate-400 text-xl md:text-2xl font-light max-w-2xl">
              A collection of projects that showcase my passion for building clean, robust applications.
            </p>
          </div>
          <Projects />
        </div>
      </section>
      
      {/* 4. CONTACT */}
      <section id="contact" className="snap-section border-t border-white/5">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 w-full">
          <Contact /> {/* (Ensure Contact.tsx uses similar larger classes if needed) */}
        </div>
      </section>

      {/* 5. FOOTER */}
      <section className="snap-section h-auto min-h-0 py-0 flex justify-end bg-[#020617]">
        <Footer />
      </section>

    </main>
  );
}