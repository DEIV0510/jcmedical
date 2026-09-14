import { useState } from 'react'
import { PRODUCTS, type Product } from '../data/products'
import { ProductCard } from './ProductCard'
import { ProductModal } from './ProductModal'
import { Reveal, RevealGroup } from './ui/Reveal'
import { SectionIntro } from './ui/Primitives'

export function Portfolio() {
  const [selected, setSelected] = useState<Product | null>(null)
  const featured = PRODUCTS.find((p) => p.featured)
  const rest = PRODUCTS.filter((p) => !p.featured)

  return (
    <section id="productos" className="bg-paper/50 py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <SectionIntro
            eyebrow="Nuestro portafolio"
            title="Conoce nuestro portafolio"
            description="Productos a base de CBD y derivados del cannabis, orientados al bienestar y al cuidado personal."
          />
        </Reveal>

        <div className="mt-14 space-y-6 lg:mt-16">
          {featured && (
            <div className="mb-6">
              <ProductCard product={featured} onViewDetails={setSelected} variant="featured" />
            </div>
          )}

          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={setSelected} />
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.1} className="mt-14 text-center">
          <p className="text-sm text-ink-faint">
            Precios sujetos a consulta. Nuestro equipo te confirma disponibilidad y valores vigentes por WhatsApp.
          </p>
        </Reveal>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
