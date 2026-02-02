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
      
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* HERO: Centered by default inside Hero.tsx */}
        <Hero />
        
        {/* SECTIONS: Left Aligned Content */}
        {/* Notice we don't force 'text-center' here, so children default to left */}
        
        <section id="portfolio" className="py-32 border-t border-white/5">
          <div className="flex flex-col mb-16 max-w-2xl"> 
            <span className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-4">01. Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Selected Works</h2>
            <p className="text-slate-400 text-lg">A collection of projects that showcase my passion for building clean, robust applications.</p>
          </div>
          <Projects />
        </section>

        <About />
        
        <section id="contact" className="py-32 border-t border-white/5">
          <Contact />
        </section>
      </div>
      
      <Footer />
    </main>
  );
}