import logoIcon from '../assets/logo-icon.webp'
import { NAV_LINKS, SITE, WA } from '../data/site'
import { WhatsAppIcon } from './ui/icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-cream/10 bg-night pb-8 pt-12 lg:pt-20">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-12">
          <div>
            <img src={logoIcon} alt="JC Medical Corp SAS" className="h-9 w-auto" width={160} height={90} />
            <p className="mt-3 font-display text-lg text-cream">JC Medical Corp SAS</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
              Empresa colombiana dedicada al cultivo, desarrollo y comercialización
              de productos de CBD y derivados del cannabis no psicoactivo.
            </p>
            <a
              href={WA.general}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-[13px] font-semibold text-night transition-colors hover:bg-gold-400"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-cream/55">Navegación</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream/70 transition-colors hover:text-gold-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-cream/55">Contacto</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>
                <a href={WA.primaryNumber} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">
                  {SITE.whatsapp.primary.display}
                </a>
              </li>
              <li>
                <a href={WA.secondaryNumber} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">
                  {SITE.whatsapp.secondary.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-gold-300">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">
                  {SITE.addressShort}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between lg:mt-14 lg:pt-8">
          <p>© {year} JC Medical Corp SAS. Todos los derechos reservados.</p>
          <p>Bogotá, Colombia</p>
        </div>
      </div>
    </footer>
  )
}
