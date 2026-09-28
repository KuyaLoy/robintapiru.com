'use client'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function MagneticText({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const x = useSpring(useTransform(mouseX, [-500, 500], [-30, 30]), springConfig)
  const y = useSpring(useTransform(mouseY, [-500, 500], [-30, 30]), springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Only react if within 400px
      const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2))
      if (distance < 400) {
        // Repulsion logic
        mouseX.set(centerX - e.clientX)
        mouseY.set(centerY - e.clientY)
      } else {
        mouseX.set(0)
        mouseY.set(0)
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div ref={ref} style={{ x, y }} className={className}>
      {children}
    </motion.div>
  )
}
