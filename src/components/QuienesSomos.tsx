import blackOil from '../assets/products/black_oil.webp'
import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Primitives'
import { BotanicalSprig } from './ui/BotanicalMotif'

const PROCESS = ['Cultivo', 'Desarrollo', 'Producción', 'Comercialización']

export function QuienesSomos() {
  return (
    <section id="nosotros" className="relative bg-cream py-24 lg:py-32">
      <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-[1.75rem] shadow-lift lg:max-w-none">
            <img
              src={blackOil}
              alt="Extracción de JC Medical Corp SAS en entorno natural colombiano"
              className="h-full w-full object-cover"
              width={900}
              height={1125}
              loading="lazy"
            />
          </div>
          <BotanicalSprig className="pointer-events-none absolute -right-8 -top-10 hidden h-40 w-24 text-gold-400/50 lg:block" />
          <div className="absolute -bottom-7 right-4 max-w-[240px] rounded-2xl border border-gold-300/50 bg-cream/95 p-5 shadow-soft backdrop-blur sm:right-10">
            <p className="font-display italic text-lg leading-snug text-ink">
              “Una visión colombiana con posibilidades internacionales.”
            </p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow>Quiénes somos</Eyebrow>
            <h2 className="mt-5 font-display font-medium leading-[1.1] text-ink text-4xl sm:text-5xl">
              Naturaleza, innovación y visión de futuro.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              JC Medical Corp SAS es una empresa colombiana enfocada en el cultivo,
              exportación, desarrollo, producción y comercialización de productos
              derivados del cannabis no psicoactivo y CBD.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Integramos conocimiento, procesos tecnificados y una visión de
              crecimiento hacia mercados nacionales e internacionales.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-3">
            {PROCESS.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-ink/12 bg-white px-4 py-2 text-sm font-semibold text-ink">
                  {step}
                </span>
                {i < PROCESS.length - 1 && <span className="text-gold-500">→</span>}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
