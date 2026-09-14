import type { Product } from '../data/products'
import { WA } from '../data/site'
import { WhatsAppIcon } from './ui/icons'
import { RevealItem } from './ui/Reveal'

type Props = {
  product: Product
  onViewDetails: (product: Product) => void
  variant?: 'default' | 'featured'
}

export function ProductCard({ product, onViewDetails, variant = 'default' }: Props) {
  if (variant === 'featured') {
    return (
      <RevealItem className="group relative overflow-hidden rounded-[1.75rem] border border-gold-300/40 bg-night shadow-lift">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative aspect-[5/4] lg:aspect-auto">
            <img
              src={product.imageLg}
              alt={`${product.name} — ${product.category} de JC Medical Corp SAS`}
              className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
              width={1000}
              height={800}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <span className="inline-flex w-fit items-center rounded-full border border-gold-400/50 bg-gold-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-300">
              Producto insignia
            </span>
            <h3 className="mt-5 font-display text-3xl font-medium text-cream sm:text-4xl">{product.name}</h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gold-300/80">
              {product.category} · {product.presentation}
            </p>
            <p className="mt-5 text-base leading-relaxed text-cream/75">{product.description}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {product.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-cream/15 px-3 py-1 text-xs font-medium text-cream/70"
                >
                  {h}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA.product(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-night shadow-gold transition-all duration-300 ease-premium hover:bg-gold-400 hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Consultar producto
              </a>
              <button
                type="button"
                onClick={() => onViewDetails(product)}
                className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-gold-300 hover:text-gold-200"
              >
                Ver detalles
              </button>
            </div>
          </div>
        </div>
      </RevealItem>
    )
  }

  return (
    <RevealItem className="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-[4/5] overflow-hidden bg-paper">
        <img
          src={product.image}
          alt={`${product.name} — ${product.category} de JC Medical Corp SAS`}
          className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
          width={700}
          height={875}
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-soft shadow-soft">
          {product.presentation}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-600">{product.category}</p>
        <h3 className="mt-1.5 font-display text-xl font-medium text-ink">{product.name}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">{product.description}</p>

        <div className="mt-5 flex items-center gap-2.5">
          <a
            href={WA.product(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 text-[13px] font-semibold text-night transition-all duration-300 ease-premium hover:bg-gold-400"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            Consultar
          </a>
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="inline-flex items-center justify-center rounded-full border border-ink/15 px-4 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:border-gold-500 hover:text-gold-700"
          >
            Detalles
          </button>
        </div>
      </div>
    </RevealItem>
  )
}
