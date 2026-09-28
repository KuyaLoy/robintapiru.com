'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LiveClocks } from '@/components/ui/live-clocks'
import { Hero } from '@/components/sections/hero'
import { TerminalCard } from '@/components/sections/terminal-card'
import { SocialFooter } from '@/components/sections/social-footer'

export default function Home() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <main className="min-h-screen relative flex flex-col justify-between overflow-hidden bg-surface-light dark:bg-surface-dark text-black dark:text-white">
      {/* Background Grids & Ambient Glow Beam */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-grid" />
      <div className="absolute inset-0 z-0 pointer-events-none ambient-glow" />

      {/* Top Header Utility Bar */}
      <header className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between z-20 relative">
        <div className="font-mono text-xs font-semibold tracking-widest text-black/80 dark:text-white/80">
          RT<span className="text-accent">//</span>DEV
        </div>
        <div className="flex items-center gap-6">
          <LiveClocks />
          <ThemeToggle />
        </div>
      </header>

      {/* Main Dual-Column Content */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-10 z-10 relative flex-1 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-center"
        >
          {/* Left Column: Hero, Progress, Copy */}
          <div className="col-span-1 lg:col-span-6 flex flex-col gap-6">
            <Hero />
          </div>

          {/* Right Column: Interactive Terminal Preview */}
          <div className="col-span-1 lg:col-span-6 w-full">
            <TerminalCard />
          </div>
        </motion.div>
      </div>

      {/* Footer Navigation & Social Links */}
      <footer className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-6 border-t border-black/5 dark:border-white/5 z-20 relative">
        <SocialFooter />
      </footer>
    </main>
  )
}
