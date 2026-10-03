"use client";

import Starfield from "@/components/Starfield";

export default function Home() {
  const socials = [
    { name: "GITHUB", url: "https://github.com/KuyaLoy", color: "bg-[#f97316]", icon: "github" },
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/mynameisloloy/", color: "bg-[#3b82f6]", icon: "linkedin" },
    { name: "FACEBOOK", url: "https://www.facebook.com/robin.tapiru/", color: "bg-[#2563eb]", icon: "facebook" },
    { name: "INSTAGRAM", url: "https://www.instagram.com/tapiru_robin/", color: "bg-[#db2777]", icon: "instagram" },
    { name: "TWITTER", url: "https://x.com/BUKO_roll", color: "bg-[#0ea5e9]", icon: "twitter" },
  ];

  return (
    <main className="relative min-h-screen w-full flex justify-center p-4 md:p-8 font-press-start overflow-y-auto">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Starfield />
      </div>

      <div className="z-10 flex flex-col w-full max-w-3xl mt-4 md:mt-12 pb-12">
        
        {/* Header / Hero */}
        <div className="bg-[#f4f4f0] text-black border-4 border-black shadow-[8px_8px_0px_#4ade80] md:shadow-[12px_12px_0px_#4ade80] p-6 md:p-10 mb-12 flex flex-col md:flex-row items-center gap-8 relative transition-transform hover:-translate-y-1">
           {/* Decorative corner accents */}
           <div className="absolute top-2 right-2 w-4 h-4 bg-pink-500 border-2 border-black animate-pulse"></div>
           <div className="absolute bottom-2 left-2 w-4 h-4 bg-blue-500 border-2 border-black"></div>
           
           <div className="w-24 h-24 md:w-32 md:h-32 bg-[#a7f3d0] border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center justify-center shrink-0 overflow-hidden relative">
              <i className="nes-avatar is-large nes-ash" style={{ transform: 'scale(1.5)', imageRendering: 'pixelated' }}></i>
           </div>
           
           <div className="text-center md:text-left flex-1">
             <h1 className="text-2xl md:text-4xl mb-4 leading-tight font-bold">ROBIN<br/>TAPIRU</h1>
             <p className="text-[9px] md:text-[11px] leading-relaxed text-gray-800">
               HELLO WORLD! I'M A PASSIONATE FULL-STACK DEVELOPER CREATING PIXEL-PERFECT EXPERIENCES. 
               WELCOME TO MY RETRO PORTFOLIO.
             </p>
           </div>
        </div>

        {/* Links Grid */}
        <div className="bg-black/60 backdrop-blur-sm p-6 md:p-8 border-4 border-[#4ade80] shadow-[8px_8px_0px_#4ade80]">
          <h2 className="text-[#4ade80] text-sm md:text-lg mb-8 flex items-center gap-4">
            <span className="w-3 h-3 bg-[#4ade80] block animate-ping"></span>
            SELECT DESTINATION
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socials.map((s) => (
              <a 
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className={`${s.color} text-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] p-4 flex items-center justify-between group transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-[0px_0px_0px_rgba(0,0,0,1)]`}
              >
                <div className="flex items-center gap-3">
                  <i className={`nes-icon ${s.icon} is-small`}></i>
                  <span className="text-[10px] md:text-xs pt-1 drop-shadow-md">{s.name}</span>
                </div>
                <span className="text-xl font-sans font-bold group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
            
            <a 
              href="mailto:robintapiru0894@gmail.com"
              className="bg-[#4ade80] col-span-1 sm:col-span-2 text-black border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] p-4 flex items-center justify-center gap-4 group transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-[0px_0px_0px_rgba(0,0,0,1)]"
            >
              <i className="nes-icon gmail is-small"></i>
              <span className="text-[10px] md:text-xs pt-1 font-bold">SEND ME AN EMAIL</span>
            </a>
          </div>
        </div>

        <p className="text-gray-400 text-[8px] md:text-[10px] mt-12 text-center">
          © 2026 ROBIN TAPIRU. ALL RIGHTS RESERVED.
        </p>
      </div>
    </main>
  );
}
