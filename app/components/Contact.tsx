"use client";
import { Mail, MapPin, Send } from 'lucide-react';
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard"; 

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Info & Call to Action */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-2">03. Contact</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Let's build something <br /><span className="text-gradient">legendary.</span></h2>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              I'm currently available for freelance work and full-time positions. If you have a project that needs some creative injection, let's chat.
            </p>
            
            <div className="space-y-4 pt-4">
              <a href="mailto:alfalib01@gmail.com" className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                   <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Me</div>
                   <div className="text-white font-medium">alfalib01@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                  <MapPin size={20} />
                </div>
                <div>
                   <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Location</div>
                   <div className="text-white font-medium">Indonesia (Remote Available)</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Glass Form */}
          <SpotlightCard className="p-8 md:p-10 border-white/10">
            <form action="https://formspree.io/f/mojlywzz" method="POST" className="space-y-5 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                <input 
                  type="text" name="name" required placeholder="John Doe"
                  className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-4 text-sm text-white placeholder:text-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Email</label>
                <input 
                  type="email" name="email" required placeholder="john@example.com"
                  className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-4 text-sm text-white placeholder:text-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  name="message" rows={4} required placeholder="Tell me about your project..."
                  className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-4 text-sm text-white placeholder:text-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group">
                Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </SpotlightCard>
        </div>
      </Reveal>
    </div>
  );
}