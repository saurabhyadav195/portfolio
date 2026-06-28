import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
}

export default function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      // min-h-screen ensures shorter pages look well-framed and professional
      className={`min-h-[calc(100vh-80px)] py-12 md:py-16 flex flex-col justify-start overflow-hidden ${className}`}
    >

      <div className="h-25 w-full shrink-0" />

      <div className="section-container relative z-10 pt-12 pb-16 md:pt-16 md:pb-20 w-full grow flex flex-col justify-start">
        {children}
      </div>
    </motion.section>
  )
}