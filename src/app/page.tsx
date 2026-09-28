'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { MagneticText } from '@/components/ui/magnetic-text'

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#F5412C]">
      <CustomCursor />

      {/* The Black Steel Curtain Entrance */}
      <motion.div
        className="absolute inset-0 z-10 bg-[#0B0B0B]"
        initial={{ y: '-100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Main Content (Behind cursor, on top of curtain) */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center pointer-events-none">
        
        {/* Massive Magnetic Typography */}
        <div className="flex flex-col items-center pointer-events-auto">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticText className="text-[12vw] leading-none font-black tracking-tighter">
                R — T
              </MagneticText>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticText className="text-[4vw] md:text-[3vw] leading-none font-medium tracking-tight text-white/90 mt-2">
                AGENCY ENGINEER
              </MagneticText>
            </motion.div>
          </div>
        </div>
      </div>

      {/* The Razor Line & Micro Typography */}
      <motion.div 
        className="absolute bottom-[20%] left-0 w-full z-20"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="max-w-[90vw] mx-auto relative">
          <div className="absolute bottom-1 left-0 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#666666]">
            [ ENG_V3.0 ] &nbsp;&nbsp; LAT: 25.2048° N, LONG: 55.2708° E &nbsp;&nbsp; STATUS: IMMINENT
          </div>
          <div className="w-full h-[1px] bg-[#F5412C] origin-left" />
        </div>
      </motion.div>

      {/* Corner Navigation */}
      <motion.div 
        className="absolute bottom-8 left-0 w-full px-[5vw] z-30 flex justify-between font-mono text-[11px] tracking-widest text-white/40 uppercase pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="flex gap-6 pointer-events-auto">
          <a href="https://aiims.group" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">AIIMS Group</a>
          <span className="opacity-30">/</span>
          <a href="https://betterkabugao.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">BetterKabugao</a>
        </div>
        <div className="flex gap-6 pointer-events-auto">
          <a href="https://www.linkedin.com/in/robintapiru/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">LinkedIn</a>
          <span className="opacity-30">/</span>
          <a href="https://github.com/KuyaLoy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">GitHub</a>
        </div>
      </motion.div>

    </main>
  )
}
