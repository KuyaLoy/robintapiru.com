'use client'

import * as React from 'react'
import { Linkedin, Github, Facebook, Instagram } from 'lucide-react'
import { SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants'

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  )
}

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.996 2.004c-3.111 0-5.592.544-7.387 1.62C2.868 4.675 1.77 6.223 1.77 8.167c0 2.215 1.341 4.148 3.535 5.086.862.373 2.115.65 3.738.773-.243 1.258-.291 2.502-.132 3.593.18 1.246.611 2.176 1.233 2.658 1.05.815 3.016 1.196 5.845.892.172-.018.3-.172.285-.345-.015-.172-.167-.3-.34-.285-2.617.282-4.339-.063-5.127-.675-.466-.362-.806-1.1-1.002-2.454a10.9 10.9 0 0 1 .13-3.666c1.195-.125 2.28-.358 3.167-.68 1.49-.544 2.57-1.423 3.144-2.556.59-1.168.618-2.585.081-3.957C15.019 3.536 13.067 2.004 11.996 2.004ZM7.925 10.826c-.161 0-.317-.001-.468-.004-.844-.025-1.745-.116-2.615-.275-.826-.15-1.554-.378-2.12-.663-1.401-.703-2.278-1.746-2.278-3.082 0-2.473 2.764-4.526 8.358-4.526 2.645 0 6.649.882 6.649 4.316 0 1.221-.497 2.148-1.252 2.87-.723.69-1.68 1.144-2.732 1.378-1.146.255-2.464.383-3.542.383-.344 0-.687-.01-1.02-.03-.277.892-.375 1.839-.272 2.748.24 2.12 1.084 3.738 2.637 4.195a.473.473 0 0 1 .324.593c-.078.272-.365.433-.64.354-2.144-.633-3.14-2.671-3.415-5.111-.082-.727-.03-1.474.15-2.203-1.002-.178-1.933-.404-2.649-.691-.986-.395-1.636-1.025-1.636-1.879 0-.974.786-1.681 2.012-2.11 1.206-.421 2.756-.632 4.35-.632 3.328 0 5.485.808 5.485 2.88 0 1.547-1.439 2.453-3.42 2.453-1.171 0-2.18-.198-2.902-.572a.473.473 0 0 1 .435-.841c.64.331 1.52.51 2.535.51 1.282 0 2.21-.555 2.21-1.391 0-1.189-1.644-1.802-4.148-1.802-1.365 0-2.718.176-3.763.542-.997.348-1.611.85-1.611 1.564 0 .57.48.995 1.208 1.25.641.223 1.5.421 2.468.567.147.022.311.042.49.06 0-1.123.51-2.179 1.411-2.905.908-.733 2.138-1.135 3.511-1.135 1.954 0 3.315.656 4.027 1.942.502 1.05.512 2.188.083 3.033-.45 1.03-1.367 1.777-2.656 2.253a.366.366 0 0 1-.264-.693c1.077-.4 1.838-1.023 2.197-1.84.341-.676.326-1.6-.08-2.453-.564-1.018-1.654-1.543-3.307-1.543-1.196 0-2.258.347-3.003.95-.747.604-1.193 1.488-1.193 2.52v.003Z" />
    </svg>
  )
}

function getIcon(name: string, className: string) {
  switch (name.toLowerCase()) {
    case 'linkedin':
      return <Linkedin className={className} strokeWidth={1.5} />
    case 'github':
      return <Github className={className} strokeWidth={1.5} />
    case 'facebook':
      return <Facebook className={className} strokeWidth={1.5} />
    case 'instagram':
      return <Instagram className={className} strokeWidth={1.5} />
    case 'x':
      return <XIcon className={className} />
    case 'threads':
      return <ThreadsIcon className={className} />
    default:
      return null
  }
}

export function SocialFooter() {
  const primaryLinks = SOCIAL_LINKS.filter(l => l.primary)
  const secondaryLinks = SOCIAL_LINKS.filter(l => !l.primary)

  return (
    <nav aria-label="Social links and contact" className="flex flex-col gap-6">
      {/* Primary Links */}
      <div className="flex gap-4 items-center">
        {primaryLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-accent dark:hover:text-accent transition-colors duration-200"
            aria-label={link.name}
          >
            {getIcon(link.name, "w-5 h-5")}
          </a>
        ))}
      </div>

      <div className="h-[1px] w-full max-w-[200px] bg-black/10 dark:bg-white/10" />

      {/* Secondary Links */}
      <div className="flex gap-4 items-center">
        {secondaryLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/60 dark:text-white/50 hover:text-accent dark:hover:text-accent transition-colors duration-200"
            aria-label={link.name}
          >
            {getIcon(link.name, "w-4 h-4")}
          </a>
        ))}
      </div>

      <div className="h-[1px] w-full max-w-[200px] bg-black/10 dark:bg-white/10" />

      {/* Contact Links */}
      <div className="flex flex-col gap-2 font-mono text-[0.875rem] text-black/60 dark:text-white/50">
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="hover:text-accent dark:hover:text-accent transition-colors duration-200 w-fit"
        >
          {CONTACT_INFO.email}
        </a>
        <a
          href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
          className="hover:text-accent dark:hover:text-accent transition-colors duration-200 w-fit"
        >
          {CONTACT_INFO.phone}
        </a>
      </div>
    </nav>
  )
}
