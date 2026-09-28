'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

export function Hero() {
  const [copied, setCopied] = React.useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Eyebrow Announcement Badge */}
      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 dark:bg-accent/10 w-fit">
        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
        <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
          Portfolio v3.0 // In Progress
        </span>
      </div>

      {/* Main Name Heading */}
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black dark:text-white">
          Robin Tapiru
        </h1>
        <p className="text-lg text-black/70 dark:text-white/60 leading-relaxed max-w-xl">
          Web Developer at{' '}
          <a
            href="https://aiims.group"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-black/20 dark:border-white/20 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors font-medium text-black dark:text-white"
          >
            AIIMS Group
          </a>{' '}
          · Creator of{' '}
          <a
            href="https://betterkabugao.org"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-black/20 dark:border-white/20 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors font-medium text-black dark:text-white"
          >
            BetterKabugao.org
          </a>
        </p>
        <p className="font-mono text-xs text-black/50 dark:text-white/40 tracking-wider">
          From Apayao, PH &rarr; Dubai, UAE
        </p>
      </div>

      {/* Sprint Compilation Progress Meter */}
      <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] space-y-2.5 max-w-md">
        <div className="flex justify-between items-center font-mono text-xs">
          <span className="text-black/60 dark:text-white/50">Compilation Progress</span>
          <span className="text-accent font-semibold">85% Complete</span>
        </div>
        <div className="h-1.5 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: '85%' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <div className="flex justify-between text-[11px] font-mono text-black/40 dark:text-white/40">
          <span>Sprint: Case Studies &amp; Labs</span>
          <span>Target: 2026</span>
        </div>
      </div>

      {/* Quick Action - Copy Email Button */}
      <div className="pt-1 flex items-center gap-3">
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium text-xs hover:bg-accent dark:hover:bg-accent hover:text-white dark:hover:text-white transition-all duration-200 shadow-sm"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Email Copied to Clipboard!' : 'Copy Direct Email'}
        </button>
        <span className="font-mono text-xs text-black/40 dark:text-white/40">
          {CONTACT_INFO.email}
        </span>
      </div>
    </div>
  )
}
