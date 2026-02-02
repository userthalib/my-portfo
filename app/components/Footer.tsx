import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020617] pt-24 pb-12 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center relative z-10">
        
        <h2 className="text-3xl md:text-5xl font-black mb-8 text-center tracking-tighter text-white">
          Building the web, <br />
          <span className="text-slate-600">pixel by pixel.</span>
        </h2>

        <div className="flex gap-8 mb-16">
          {[
            { icon: Github, link: "https://github.com/userthalib" },
            { icon: Linkedin, link: "https://linkedin.com/in/irfanthalibalf" },
            { icon: Mail, link: "mailto:alfalib01@gmail.com" }
          ].map((social, i) => (
             <a 
               key={i} 
               href={social.link} 
               className="p-3 rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
             >
               <social.icon size={22} />
             </a>
          ))}
        </div>

        <div className="w-full h-px bg-white/5 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full text-xs font-bold text-slate-600 uppercase tracking-widest gap-4">
          <p>© {new Date().getFullYear()} Irfan Thalib. All rights reserved.</p>
          <p>Crafted with Next.js & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}