// app/page.tsx
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Projects from './components/Projects.tsx';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <section id="portfolio" className="p-10">
        <h2 className="text-3xl font-bold">My Work</h2>
        <Projects />
      </section>
      {/* Add About and Contact sections here */}
    </main>
  );
}