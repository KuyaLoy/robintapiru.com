'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { StatusIndicator } from '@/components/ui/status-indicator'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Hero } from '@/components/sections/hero'
import { SocialFooter } from '@/components/sections/social-footer'

export default function Home() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <main className="min-h-screen relative flex flex-col justify-center lg:justify-end overflow-hidden pb-12 lg:pb-32">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-grid" />
      
      {/* Theme Toggle */}
      <div className="z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 z-10 relative">
        <motion.div
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          {/* Left Column (Content) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col gap-16">
            <motion.div variants={shouldReduceMotion ? {} : itemVariants}>
              <StatusIndicator />
            </motion.div>
            
            <motion.div variants={shouldReduceMotion ? {} : itemVariants}>
              <Hero />
            </motion.div>
            
            <motion.div variants={shouldReduceMotion ? {} : itemVariants}>
              <SocialFooter />
            </motion.div>
          </div>
          
          {/* Right Column (Empty for negative space on desktop) */}
          <div className="hidden lg:block lg:col-span-6" />
        </motion.div>
      </div>
    </main>
  )
}
