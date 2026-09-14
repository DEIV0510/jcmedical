import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.webp'
import logo2x from '../assets/logo@2x.webp'
import { NAV_LINKS, WA } from '../data/site'
import { WhatsAppIcon } from './ui/icons'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
        scrolled || open
          ? 'bg-cream/90 backdrop-blur-md shadow-soft border-b border-ink/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between lg:h-[84px]">
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0" aria-label="JC Medical Corp SAS — inicio">
          <img
            src={logo}
            srcSet={`${logo} 1x, ${logo2x} 2x`}
            alt="JC Medical Corp SAS"
            className="h-11 w-auto lg:h-12"
            width={160}
            height={62}
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[13px] font-semibold uppercase tracking-wide text-ink/80 transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-500 transition-all duration-300 ease-premium group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WA.advisor}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-[13px] font-semibold text-night shadow-gold transition-all duration-300 ease-premium hover:bg-gold-400 hover:-translate-y-0.5 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Consultar por WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-cream lg:hidden"
          >
            <nav className="container-page flex flex-col gap-1 pb-8 pt-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-ink/8 py-4 text-lg font-display text-ink"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={WA.advisor}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-4 text-sm font-semibold text-night shadow-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Consultar por WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
