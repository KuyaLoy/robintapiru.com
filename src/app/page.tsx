"use client";

import Starfield from "@/components/Starfield";
import { motion } from "framer-motion";

export default function Home() {
  const socials = [
    { name: "GitHub", url: "https://github.com/KuyaLoy", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mynameisloloy/", icon: "linkedin" },
    { name: "Facebook", url: "https://www.facebook.com/robin.tapiru/", icon: "facebook" },
    { name: "Instagram", url: "https://www.instagram.com/tapiru_robin/", icon: "instagram" },
    { name: "Threads", url: "https://www.threads.com/@tapiru_robin", icon: "twitter" }, // fallback icon
    { name: "Twitter", url: "https://x.com/BUKO_roll", icon: "twitter" },
    { name: "Email", url: "mailto:robintapiru0894@gmail.com", icon: "gmail" },
    { name: "Phone", url: "tel:+971565944497", icon: "whatsapp" },
  ];

  return (
    <main className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background Animation */}
      <Starfield />

      {/* Main Content */}
      <motion.div 
        initial={{ scale: 0, rotate: -10, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1.5 }}
        className="relative z-10 nes-container is-rounded is-dark !bg-black/80 !p-12 w-full max-w-4xl"
      >
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[#4ade80] text-2xl md:text-5xl text-center mb-8 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"
        >
          COMING SOON
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-center text-sm md:text-lg mb-12 leading-loose"
        >
          ROBIN TAPIRU <br className="hidden md:block" /> 
          <span className="md:mt-4 inline-block">16-BIT PORTFOLIO</span>
        </motion.p>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 1.2
              }
            }
          }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8"
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ scale: 1.2, color: "#4ade80" }}
              className="flex flex-col items-center gap-3 text-[10px] md:text-xs text-white hover:no-underline"
            >
              <i className={`nes-icon ${social.icon} is-medium`}></i>
              {social.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
