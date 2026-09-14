import { motion, useReducedMotion } from 'framer-motion'
import cbdOilLg from '../assets/products/cbd_oil@lg.webp'
import { ButtonLink, Eyebrow, GoldTag } from './ui/Primitives'
import { WhatsAppIcon } from './ui/icons'
import { BotanicalMotif } from './ui/BotanicalMotif'
import { WA } from '../data/site'

const TRUST_CHIPS = [
  'Empresa colombiana',
  'CBD y cannabis no psicoactivo',
  'Desarrollo y producción',
  'Calidad y proyección internacional',
]

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section id="inicio" className="relative overflow-hidden bg-cream pt-[84px] pb-10 lg:pt-[150px] lg:pb-28">
      <div
        className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, #F6E9CE 0%, transparent 70%)' }}
      />
      <BotanicalMotif className="pointer-events-none absolute -left-10 top-24 hidden h-40 w-40 text-gold-300/40 lg:block lg:h-56 lg:w-56" />

      <div className="container-page relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg lg:rounded-xl">
            <img
              src={cbdOilLg}
              alt="Premium CBD Oil de JC Medical Corp SAS, aceite sublingual 100% CBD elaborado en Colombia"
              className="h-full w-full object-cover"
              width={1000}
              height={1250}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-night/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest2 text-gold-200">
                  Premium CBD Oil
                </p>
                <p className="mt-1 font-display text-xl text-cream sm:text-2xl">100% CBD · 20 ml</p>
              </div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-cream/60">Colombia</p>
            </div>
          </div>
        </motion.div>

        <div className="order-2 lg:order-1">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <Eyebrow>JC Medical Corp SAS</Eyebrow>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-5 font-display font-medium leading-[1.04] text-ink text-[2.4rem] sm:text-6xl lg:text-[4rem]"
          >
            CBD y bienestar.
            <br />
            <span className="italic text-gold-gradient">Desde Colombia</span> hacia
            nuevas posibilidades.
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft"
          >
            Desarrollamos productos a base de CBD y derivados del cannabis no
            psicoactivo, integrando naturaleza, innovación y una visión de calidad.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href="#productos" variant="gold" size="lg">
              Conoce nuestros productos
            </ButtonLink>
            <ButtonLink
              href={WA.advisor}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              Habla con un asesor
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-2.5 border-t border-ink/8 pt-7"
          >
            {TRUST_CHIPS.map((chip) => (
              <GoldTag key={chip}>{chip}</GoldTag>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
