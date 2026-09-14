import { Reveal } from './ui/Reveal'
import { Eyebrow, GoldTag } from './ui/Primitives'
import { GoldRoute } from './ui/BotanicalMotif'

const FOCUS_AREAS = ['Cultivos tecnificados', 'Desarrollo de producto', 'Exportación', 'Mercados internacionales']

export function ProyeccionInternacional() {
  return (
    <section id="proyeccion" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <Eyebrow>Proyección internacional</Eyebrow>
          <h2 className="mt-5 font-display font-medium leading-[1.08] text-ink text-4xl sm:text-5xl">
            Desde Colombia
            <br />
            <span className="italic text-gold-gradient">hacia el mundo.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            JC Medical Corp SAS proyecta el desarrollo de cultivos tecnificados,
            productos de calidad y oportunidades de crecimiento en mercados
            nacionales e internacionales.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {FOCUS_AREAS.map((area) => (
              <GoldTag key={area}>{area}</GoldTag>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative aspect-[4/3] w-full">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-paper to-gold-100/40" />
          <GoldRoute className="absolute inset-0 h-full w-full p-8 text-gold-600" />
        </Reveal>
      </div>
    </section>
  )
}
