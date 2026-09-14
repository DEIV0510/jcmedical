import { Fingerprint, Gem, Settings2, Sprout } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'
import { SectionIntro } from './ui/Primitives'
import { BotanicalMotif } from './ui/BotanicalMotif'

const PILLARS = [
  {
    icon: Sprout,
    title: 'Cultivo tecnificado',
    text: 'Una visión de cultivo tecnificado de cannabis no psicoactivo, pensada para sostener la calidad de cada línea de producto.',
  },
  {
    icon: Settings2,
    title: 'Procesos controlados',
    text: 'Procesos de desarrollo y producción orientados a la consistencia, de principio a fin.',
  },
  {
    icon: Fingerprint,
    title: 'Trazabilidad',
    text: 'Un enfoque de trazabilidad que acompaña el producto desde su origen hasta el cliente final.',
  },
  {
    icon: Gem,
    title: 'Calidad e innovación',
    text: 'Innovación aplicada al desarrollo de nuevos productos, con la calidad como estándar no negociable.',
  },
]

export function CultivoCalidad() {
  return (
    <section id="calidad" className="relative overflow-hidden bg-night py-14 lg:py-32">
      <BotanicalMotif className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 text-gold-500/10" />
      <BotanicalMotif className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rotate-45 text-gold-500/[0.07]" />

      <div className="container-page relative">
        <Reveal>
          <SectionIntro
            eyebrow="Calidad y cultivo"
            tone="light"
            title="Del cultivo al desarrollo de nuevos productos."
            description="Presentamos nuestra visión sobre el cultivo de cannabis no psicoactivo y el desarrollo de productos: procesos tecnificados, control y una consistencia que buscamos sostener en cada etapa."
          />
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <RevealItem
              key={title}
              className="group rounded-2xl border border-cream/10 bg-cream/[0.03] p-7 transition-colors duration-500 hover:border-gold-400/40 hover:bg-cream/[0.05]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/40 text-gold-300">
                <Icon size={20} strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 font-display text-xl font-medium text-cream">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-10 border-t border-cream/10 pt-8 lg:mt-14 lg:pt-10">
          <p className="max-w-2xl font-display text-xl italic leading-relaxed text-cream/85">
            “Desde Colombia para el mundo: desarrollamos un proyecto de cannabis no
            psicoactivo y CBD, con cultivos tecnificados, enfoque en calidad y una
            visión de expansión hacia mercados internacionales.”
          </p>
        </Reveal>
      </div>
    </section>
  )
}
