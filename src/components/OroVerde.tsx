import { Reveal } from './ui/Reveal'
import { ButtonLink, Eyebrow } from './ui/Primitives'
import { BotanicalMotif } from './ui/BotanicalMotif'
import { WA } from '../data/site'

export function OroVerde() {
  return (
    <section id="inversionistas" className="bg-paper/50 py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold-300/40 bg-gradient-to-br from-[#2A2116] via-[#3A2E1B] to-[#4E3C1F] px-6 py-16 text-center sm:px-14 sm:py-20">
            <BotanicalMotif className="pointer-events-none absolute -left-14 -top-10 h-56 w-56 rotate-12 text-gold-300/10" />
            <BotanicalMotif className="pointer-events-none absolute -right-14 -bottom-14 h-56 w-56 -rotate-12 text-gold-300/10" />

            <div className="relative mx-auto max-w-2xl">
              <Eyebrow tone="cream">El oro verde</Eyebrow>
              <h2 className="mt-5 font-display font-medium leading-[1.1] text-cream text-4xl sm:text-5xl">
                Una visión de crecimiento.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-cream/80">
                Conoce el proyecto de JC Medical Corp SAS, su visión de desarrollo y
                las posibilidades de participación para personas interesadas en
                explorar oportunidades comerciales y estratégicas.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <ButtonLink href={WA.investors} target="_blank" rel="noopener noreferrer" variant="gold" size="lg">
                  Quiero conocer las oportunidades
                </ButtonLink>
                <ButtonLink
                  href={WA.investorsAdvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-light"
                  size="lg"
                >
                  Hablar con un asesor
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
