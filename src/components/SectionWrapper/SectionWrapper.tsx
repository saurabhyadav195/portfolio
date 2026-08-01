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
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
      className={`section-block overflow-hidden ${className}`}
    >
      <div className="section-container w-full">
        {children}
      </div>
    </motion.section>
  )
}
