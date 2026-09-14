import { Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { ButtonLink, Eyebrow } from './ui/Primitives'
import { WhatsAppIcon, InstagramIcon, FacebookIcon, YoutubeIcon, TikTokIcon, GoogleIcon } from './ui/icons'
import { SITE, WA } from '../data/site'

const SOCIALS = [
  { href: SITE.social.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: SITE.social.facebook, label: 'Facebook', Icon: FacebookIcon },
  { href: SITE.social.youtube, label: 'YouTube', Icon: YoutubeIcon },
  { href: SITE.social.tiktok, label: 'TikTok', Icon: TikTokIcon },
  { href: SITE.social.google, label: 'Google', Icon: GoogleIcon },
]

export function Contacto() {
  return (
    <section id="contacto" className="bg-night py-24 lg:py-32">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
        <Reveal>
          <Eyebrow tone="cream">Contacto</Eyebrow>
          <h2 className="mt-5 font-display font-medium leading-[1.08] text-cream text-4xl sm:text-5xl">
            Hablemos de nuevas posibilidades.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">
            ¿Quieres conocer nuestros productos, explorar oportunidades comerciales
            o hablar con nuestro equipo? Estamos disponibles para atender tus
            consultas.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink
              href={WA.general}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
              size="lg"
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              Consultar por WhatsApp
            </ButtonLink>
            <ButtonLink href="#productos" variant="outline-light" size="lg">
              Conocer el portafolio
            </ButtonLink>
          </div>

          <div className="mt-12 flex gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition-all duration-300 hover:border-gold-400 hover:text-gold-300"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="rounded-[1.75rem] border border-cream/10 bg-cream/[0.03] p-7 sm:p-9">
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-300">
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cream/60">WhatsApp</p>
                <a href={WA.primaryNumber} target="_blank" rel="noopener noreferrer" className="mt-1 block text-cream hover:text-gold-300">
                  {SITE.whatsapp.primary.display}
                </a>
                <a href={WA.secondaryNumber} target="_blank" rel="noopener noreferrer" className="mt-1 block text-cream hover:text-gold-300">
                  {SITE.whatsapp.secondary.display}
                </a>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-300">
                <Phone size={18} strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cream/60">Llamar</p>
                <a href={`tel:+${SITE.whatsapp.primary.e164}`} className="mt-1 block text-cream hover:text-gold-300">
                  {SITE.whatsapp.primary.display}
                </a>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-300">
                <Mail size={18} strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cream/60">Correo</p>
                <a href={`mailto:${SITE.email}`} className="mt-1 block break-all text-cream hover:text-gold-300">
                  {SITE.email}
                </a>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-300">
                <MapPin size={18} strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cream/60">Ubicación</p>
                <a
                  href={SITE.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-cream hover:text-gold-300"
                >
                  {SITE.address}
                </a>
              </div>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
