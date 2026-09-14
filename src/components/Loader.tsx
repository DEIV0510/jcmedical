import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import logoIcon from '../assets/logo-icon.webp'

const MIN_VISIBLE_MS = 700
const MAX_VISIBLE_MS = 1500

export function Loader() {
  const prefersReducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const hide = () => setVisible(false)
    const minTimer = setTimeout(hide, MIN_VISIBLE_MS)
    const maxTimer = setTimeout(hide, MAX_VISIBLE_MS)
    return () => {
      clearTimeout(minTimer)
      clearTimeout(maxTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={logoIcon}
            alt=""
            width={96}
            height={54}
            className="h-14 w-auto"
            initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="mt-6 h-px w-32 overflow-hidden bg-ink/10">
            {prefersReducedMotion ? (
              <div className="h-full w-full bg-gold-500" />
            ) : (
              <motion.div
                className="h-full w-full bg-gold-500"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.9, ease: 'easeInOut', repeat: Infinity }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
