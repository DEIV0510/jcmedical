import { useState } from 'react'
import { PRODUCTS, PRODUCT_GROUPS, type Product } from '../data/products'
import { ProductCard } from './ProductCard'
import { ProductModal } from './ProductModal'
import { Reveal, RevealGroup } from './ui/Reveal'
import { SectionIntro } from './ui/Primitives'

const GRID_COLS: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
}

export function Portfolio() {
  const [selected, setSelected] = useState<Product | null>(null)
  const featured = PRODUCTS.find((p) => p.featured)

  return (
    <section id="productos" className="bg-paper/50 py-14 lg:py-32">
      <div className="container-page">
        <Reveal>
          <SectionIntro
            eyebrow="Nuestro portafolio"
            title="Conoce nuestro portafolio"
            description="Productos a base de CBD y derivados del cannabis, orientados al bienestar y al cuidado personal."
          />
        </Reveal>

        {featured && (
          <div className="mt-10 lg:mt-16">
            <ProductCard product={featured} onViewDetails={setSelected} variant="featured" />
          </div>
        )}

        <div className="mt-10 space-y-10 lg:mt-20 lg:space-y-20">
          {PRODUCT_GROUPS.map((group) => {
            const items = PRODUCTS.filter((p) => p.group === group.key && !p.featured)
            if (items.length === 0) return null
            const isWide = items.length === 1

            return (
              <div key={group.key}>
                <Reveal className="mb-5 flex items-center gap-4 lg:mb-8">
                  <h3 className="shrink-0 text-xs font-semibold uppercase tracking-widest2 text-ink-soft">
                    {group.label}
                  </h3>
                  <span className="h-px flex-1 bg-ink/10" />
                </Reveal>

                {isWide ? (
                  <RevealGroup>
                    <ProductCard product={items[0]} onViewDetails={setSelected} variant="wide" />
                  </RevealGroup>
                ) : (
                  <RevealGroup className={`grid gap-6 ${GRID_COLS[items.length] ?? GRID_COLS[3]}`}>
                    {items.map((product) => (
                      <ProductCard key={product.id} product={product} onViewDetails={setSelected} />
                    ))}
                  </RevealGroup>
                )}
              </div>
            )
          })}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center lg:mt-20">
          <p className="text-sm text-ink-faint">
            Precios sujetos a consulta. Nuestro equipo te confirma disponibilidad y valores vigentes por WhatsApp.
          </p>
        </Reveal>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
