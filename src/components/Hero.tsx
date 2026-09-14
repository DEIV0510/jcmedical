import { motion, useReducedMotion } from 'framer-motion'
import cbdOilLg from '../assets/products/cbd_oil@lg.webp'
import shampoo from '../assets/products/shampoo.webp'
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
    <section id="inicio" className="relative overflow-hidden bg-cream pt-[120px] pb-20 lg:pt-[150px] lg:pb-28">
      <div
        className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, #F6E9CE 0%, transparent 70%)' }}
      />
      <BotanicalMotif className="pointer-events-none absolute -left-10 top-24 h-40 w-40 text-gold-300/40 lg:h-56 lg:w-56" />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <Eyebrow>JC Medical Corp SAS</Eyebrow>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="mt-6 font-display font-medium leading-[1.04] text-ink text-[2.6rem] sm:text-6xl lg:text-[4rem]"
          >
            CBD y bienestar.
            <br />
            <span className="italic text-gold-gradient">Desde Colombia</span> hacia
            nuevas posibilidades.
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-ink-soft"
          >
            Desarrollamos productos a base de CBD y derivados del cannabis no
            psicoactivo, integrando naturaleza, innovación y una visión de calidad.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
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
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-12 flex flex-wrap gap-2.5 border-t border-ink/8 pt-8"
          >
            {TRUST_CHIPS.map((chip) => (
              <GoldTag key={chip}>{chip}</GoldTag>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-gold-300/40 shadow-lift">
            <img
              src={cbdOilLg}
              alt="Premium CBD Oil de JC Medical Corp SAS, aceite sublingual 100% CBD elaborado en Colombia"
              className="h-full w-full object-cover"
              width={1000}
              height={1250}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/25 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="absolute -bottom-8 -left-6 w-32 rotate-[-6deg] overflow-hidden rounded-2xl border-4 border-cream shadow-lift sm:w-40 lg:-left-10"
          >
            <img src={shampoo} alt="Shampoo CBD de JC Medical Corp SAS" className="aspect-[3/4] w-full object-cover" width={300} height={400} loading="lazy" />
          </motion.div>

          <div className="absolute -right-4 top-8 hidden rotate-3 rounded-xl border border-gold-300/50 bg-cream/95 px-4 py-3 shadow-soft backdrop-blur sm:block">
            <p className="font-display text-2xl leading-none text-ink">100%</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-ink-faint">CBD</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
