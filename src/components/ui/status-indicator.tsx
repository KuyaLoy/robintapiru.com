'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function StatusIndicator() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="flex items-center gap-3">
      <motion.div
        className="w-[6px] h-[6px] bg-accent"
        animate={shouldReduceMotion ? {} : { opacity: [1, 0.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <span className="font-mono text-[0.875rem] uppercase tracking-[0.02em] text-black/60 dark:text-white/50">
        System active — Compiling v3.0
      </span>
    </div>
  )
}
