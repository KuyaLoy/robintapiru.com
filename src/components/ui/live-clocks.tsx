'use client'

import * as React from 'react'

export function LiveClocks() {
  const [mounted, setMounted] = React.useState(false)
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return <div className="font-mono text-xs text-black/40 dark:text-white/40">DXB --:--:-- · MNL --:--:--</div>
  }

  const dxbTime = time.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour12: false })
  const mnlTime = time.toLocaleTimeString('en-US', { timeZone: 'Asia/Manila', hour12: false })

  return (
    <div className="flex items-center gap-3 font-mono text-xs text-black/60 dark:text-white/50 tracking-wider">
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        DXB {dxbTime}
      </span>
      <span className="opacity-30">/</span>
      <span>MNL {mnlTime}</span>
    </div>
  )
}
