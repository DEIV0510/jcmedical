import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { Product } from '../data/products'
import { WA } from '../data/site'
import { WhatsAppIcon } from './ui/icons'

type Props = {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!product) return
    document.documentElement.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [product, onClose])

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-night/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 grid max-h-[92vh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-t-md bg-cream shadow-lift sm:grid-cols-2 sm:overflow-hidden sm:rounded-md"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center bg-cream/90 text-ink shadow-soft transition-colors hover:text-gold-700"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[4/3] sm:aspect-auto">
              <img
                src={product.imageLg}
                alt={`${product.name} — ${product.category} de JC Medical Corp SAS`}
                className="h-full w-full object-cover"
                width={900}
                height={1000}
              />
            </div>

            <div className="flex flex-col p-7 sm:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-600">
                {product.category}
              </p>
              <h3 id="product-modal-title" className="mt-1.5 font-display text-3xl font-medium text-ink">
                {product.name}
              </h3>

              <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-ink/8 py-5 text-sm">
                <div>
                  <dt className="text-ink-faint">Presentación</dt>
                  <dd className="mt-1 font-semibold text-ink">{product.presentation}</dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Composición</dt>
                  <dd className="mt-1 font-semibold text-ink">{product.composition}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-ink-faint">Modo de uso</dt>
                  <dd className="mt-1 font-semibold text-ink">{product.usage}</dd>
                </div>
              </dl>

              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-soft">{product.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {product.highlights.map((h) => (
                  <li
                    key={h}
                    className="border border-gold-300/50 bg-gold-100/50 px-3 py-1 text-xs font-medium text-gold-700"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={WA.product(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-gold-500 px-6 py-4 text-sm font-semibold text-night shadow-gold transition-all duration-300 ease-premium hover:bg-gold-400"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Consultar disponibilidad y precio
              </a>
              <p className="mt-3 text-center text-xs text-ink-faint sm:text-left">
                Para dosificación e indicaciones específicas, consulta con nuestro equipo.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
