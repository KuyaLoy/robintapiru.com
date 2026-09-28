'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Smooth physics for the cursor
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16)
      mouseY.set(e.clientY - 16)
    }
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName.toLowerCase() === 'a' || target.closest('a')) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }
    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none rounded-full bg-white mix-blend-difference flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        width: isHovered ? 64 : 16,
        height: isHovered ? 64 : 16,
        marginLeft: isHovered ? -16 : 8,
        marginTop: isHovered ? -16 : 8,
      }}
      animate={{
        scale: isHovered ? 1 : 1,
      }}
      transition={{ duration: 0.2 }}
    />
  )
}
