'use client'

import * as React from 'react'

export function Hero() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] font-medium leading-[1.1] tracking-tight">
        Robin Tapiru
      </h1>
      <div className="flex flex-col gap-2">
        <p className="text-[1.125rem] leading-[1.5] text-black/60 dark:text-white/50">
          Web Developer at{' '}
          <a
            href="https://aiims.group"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-black/10 dark:border-white/20 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors duration-200"
          >
            AIIMS Group
          </a>
          {' '}· Creator of{' '}
          <a
            href="https://betterkabugao.org"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-black/10 dark:border-white/20 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors duration-200"
          >
            BetterKabugao.org
          </a>
        </p>
        <p className="text-[1.125rem] leading-[1.5] text-black/60 dark:text-white/50">
          From Apayao, PH &rarr; Dubai, UAE
        </p>
      </div>
    </div>
  )
}
