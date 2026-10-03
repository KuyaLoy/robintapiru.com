"use client";

import Starfield from "@/components/Starfield";

export default function Home() {
  const socials = [
    { name: "GITHUB", url: "https://github.com/KuyaLoy", icon: "github" },
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/mynameisloloy/", icon: "linkedin" },
    { name: "FACEBOOK", url: "https://www.facebook.com/robin.tapiru/", icon: "facebook" },
    { name: "INSTAGRAM", url: "https://www.instagram.com/tapiru_robin/", icon: "instagram" },
    { name: "TWITTER", url: "https://x.com/BUKO_roll", icon: "twitter" },
  ];

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-black p-4 md:p-8 font-press-start">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Starfield />
      </div>

      <div className="z-10 flex flex-col items-center w-full max-w-2xl mt-8">
        
        {/* Arcade Title */}
        <div className="text-center mb-12 w-full">
          <h1 className="text-3xl md:text-6xl text-white mb-6 drop-shadow-[4px_4px_0_#e76e55] md:drop-shadow-[6px_6px_0_#e76e55]">
            ROBIN TAPIRU
          </h1>
          <p className="text-[#92cc41] text-xs md:text-base animate-pulse">
            ► PRESS START
          </p>
        </div>

        {/* RPG Dialogue Box */}
        <div className="nes-container is-dark is-rounded w-full mb-8 p-4 md:p-6 bg-black!">
          <p className="text-white text-[10px] md:text-sm leading-8 md:leading-loose text-center">
            HELLO WORLD! WELCOME TO MY 16-BIT PORTFOLIO. SELECT A DESTINATION TO CONNECT WITH ME.
          </p>
        </div>

        {/* Menu Buttons */}
        <div className="w-full flex flex-col gap-4">
          {socials.map((s) => (
            <a 
              key={s.name} 
              href={s.url} 
              target="_blank" 
              rel="noreferrer"
              className="nes-btn is-primary w-full flex items-center justify-between !py-4"
            >
              <div className="flex items-center gap-4">
                <i className={`nes-icon ${s.icon} is-small`}></i>
                <span className="text-[10px] md:text-xs pt-1">{s.name}</span>
              </div>
              <span className="text-white text-xs md:text-sm">►</span>
            </a>
          ))}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <a 
              href="mailto:robintapiru0894@gmail.com" 
              className="nes-btn is-error w-full flex items-center justify-center gap-3 !py-4"
            >
              <i className="nes-icon gmail is-small"></i>
              <span className="text-[10px] md:text-xs pt-1">EMAIL</span>
            </a>
            <a 
              href="tel:+971565944497" 
              className="nes-btn is-success w-full flex items-center justify-center gap-3 !py-4"
            >
              <i className="nes-icon whatsapp is-small"></i>
              <span className="text-[10px] md:text-xs pt-1">PHONE</span>
            </a>
          </div>
        </div>

        <p className="text-gray-500 text-[8px] md:text-[10px] mt-12 text-center">
          © 2026 ROBIN TAPIRU. ALL RIGHTS RESERVED.
        </p>
      </div>
    </main>
  );
}
