'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, FileCode, Cpu } from 'lucide-react'

const TABS = [
  { id: 'features', label: 'features.json', icon: FileCode },
  { id: 'telemetry', label: 'telemetry.sh', icon: Terminal },
  { id: 'stack', label: 'stack.config', icon: Cpu },
]

export function TerminalCard() {
  const [activeTab, setActiveTab] = React.useState('features')

  return (
    <div className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#121212]/80 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-xs">
      {/* Window Chrome */}
      <div className="px-4 py-3 border-b border-black/5 dark:border-white/5 flex items-center justify-between bg-black/[0.02] dark:bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
          <span className="ml-2 text-black/40 dark:text-white/40 text-[11px]">robin@system-v3: ~/portfolio</span>
        </div>
        <div className="flex items-center gap-1">
          {TABS.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-2.5 py-1 rounded-md text-[11px] transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? 'text-accent dark:text-accent font-medium'
                    : 'text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-accent/10 dark:bg-accent/15 rounded-md"
                    transition={{ type: 'spring', duration: 0.4 }}
                  />
                )}
                <Icon className="w-3 h-3 relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 min-h-[260px] text-black/80 dark:text-white/80 leading-relaxed overflow-x-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'features' && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-2.5"
            >
              <div className="text-black/40 dark:text-white/30">// What is dropping in Portfolio v3.0</div>
              <div>
                <span className="text-accent">&quot;01_commercial&quot;</span>: &#123;
                <div className="pl-4 text-black/60 dark:text-white/60">
                  &quot;client&quot;: &quot;AIIMS Group (Australia &amp; UAE)&quot;,<br />
                  &quot;scope&quot;: &quot;Enterprise web platforms &amp; high-converting systems&quot;<br />
                </div>
                &#125;,
              </div>
              <div>
                <span className="text-accent">&quot;02_civic_platform&quot;</span>: &#123;
                <div className="pl-4 text-black/60 dark:text-white/60">
                  &quot;name&quot;: &quot;BetterKabugao.org&quot;,<br />
                  &quot;impact&quot;: &quot;Public data transparency across 21 barangays in Apayao&quot;<br />
                </div>
                &#125;,
              </div>
              <div>
                <span className="text-accent">&quot;03_interactive_lab&quot;</span>: [
                <span className="text-black/60 dark:text-white/60"> &quot;GSAP Physics&quot;, &quot;WebGL Shaders&quot;, &quot;Micro-interactions&quot; </span>
                ]
              </div>
            </motion.div>
          )}

          {activeTab === 'telemetry' && (
            <motion.div
              key="telemetry"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              <div className="text-black/40 dark:text-white/30">$ system_telemetry --inspect</div>
              <div className="flex justify-between py-1 border-b border-black/5 dark:border-white/5">
                <span className="text-black/50 dark:text-white/50">BUILD_PIPELINE</span>
                <span className="text-emerald-500 font-semibold">PASSING (Static Export)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/5 dark:border-white/5">
                <span className="text-black/50 dark:text-white/50">DEPLOYMENT_EDGE</span>
                <span>Cloudflare Pages (Global CDN)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/5 dark:border-white/5">
                <span className="text-black/50 dark:text-white/50">COMPILATION</span>
                <span className="text-accent">85% Complete (Sprint 4/5)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-black/50 dark:text-white/50">EDGE_LATENCY</span>
                <span className="text-emerald-500">~14ms</span>
              </div>
            </motion.div>
          )}

          {activeTab === 'stack' && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="text-black/40 dark:text-white/30">// Technologies powering Portfolio v3.0</div>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Cloudflare Pages', 'GSAP', 'Lucide'].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
