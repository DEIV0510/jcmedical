import { MapPin, PackageCheck, ShieldCheck, Fingerprint } from 'lucide-react'
import { Reveal, RevealGroup, RevealItem } from './ui/Reveal'
import { Eyebrow } from './ui/Primitives'

const TRUST_POINTS = [
  {
    icon: MapPin,
    title: 'Empresa colombiana',
    text: 'Constituida y con operación comercial en Bogotá, Colombia.',
  },
  {
    icon: ShieldCheck,
    title: 'Marco normativo del sector',
    text: 'Desarrollamos nuestro proyecto dentro del marco de licenciamiento vigente para el cannabis no psicoactivo en Colombia.',
  },
  {
    icon: PackageCheck,
    title: 'Elaborado en Colombia',
    text: 'Cada producto de nuestro portafolio está elaborado en Colombia.',
  },
  {
    icon: Fingerprint,
    title: 'Calidad y trazabilidad',
    text: 'Un enfoque de calidad y trazabilidad presente en cada etapa de desarrollo.',
  },
]

export function Confianza() {
  return (
    <section className="bg-cream py-14 lg:py-24">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <Eyebrow>Confianza y respaldo</Eyebrow>
          <h2 className="mt-5 font-display font-medium leading-[1.1] text-ink text-3xl sm:text-4xl">
            Lo que sostiene nuestra operación.
          </h2>
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {TRUST_POINTS.map(({ icon: Icon, title, text }) => (
            <RevealItem key={title} className="bg-cream p-7">
              <Icon size={22} strokeWidth={1.5} className="text-gold-600" />
              <h3 className="mt-4 font-display text-lg font-medium text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
