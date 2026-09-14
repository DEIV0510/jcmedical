import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
  as?: 'div' | 'span'
}

export function Reveal({ children, className, delay = 0, y = 28, once = true }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  const variants: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
        },
      }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export function RevealGroup({ children, className, stagger = 0.09, delay = 0 }: StaggerProps) {
  const prefersReducedMotion = useReducedMotion()
  const container: Variants = {
    hidden: {},
    visible: {
      transition: prefersReducedMotion
        ? {}
        : { staggerChildren: stagger, delayChildren: delay },
    },
  }
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className, y = 20 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const item: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}
