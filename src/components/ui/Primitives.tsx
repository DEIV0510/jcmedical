import type { AnchorHTMLAttributes, ReactNode } from 'react'

export function Eyebrow({ children, tone = 'gold' }: { children: ReactNode; tone?: 'gold' | 'cream' }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-widest2 ${
        tone === 'gold' ? 'text-gold-600' : 'text-cream/80'
      }`}
    >
      <span className={`h-px w-8 ${tone === 'gold' ? 'bg-gold-500' : 'bg-cream/60'}`} />
      {children}
    </span>
  )
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  tone = 'dark',
  align = 'left',
}: {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      <Eyebrow tone={tone === 'dark' ? 'gold' : 'cream'}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-5 font-display font-medium leading-[1.08] text-4xl sm:text-5xl lg:text-[3.4rem] ${
          tone === 'dark' ? 'text-ink' : 'text-cream'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${tone === 'dark' ? 'text-ink-soft' : 'text-cream/80'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

type ButtonBaseProps = {
  children: ReactNode
  variant?: 'gold' | 'outline' | 'ghost' | 'outline-light'
  size?: 'md' | 'lg'
  icon?: ReactNode
  className?: string
}

export function ButtonLink({
  children,
  variant = 'gold',
  size = 'md',
  icon,
  className = '',
  ...rest
}: ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base =
    'group relative inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-semibold transition-all duration-300 ease-premium focus-visible:outline-2 focus-visible:outline-offset-2'
  const sizes = size === 'lg' ? 'px-8 py-4 text-[15px]' : 'px-6 py-3.5 text-sm'
  const variants: Record<string, string> = {
    gold: 'bg-gold-500 text-night hover:bg-gold-400 shadow-gold hover:shadow-lift hover:-translate-y-0.5',
    outline:
      'border border-ink/20 text-ink hover:border-gold-500 hover:text-gold-700 bg-transparent',
    'outline-light':
      'border border-cream/35 text-cream hover:border-gold-300 hover:bg-cream/5',
    ghost: 'text-ink hover:text-gold-700',
  }
  return (
    <a className={`${base} ${sizes} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {icon}
    </a>
  )
}

export function GoldTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gold-300/60 bg-gold-100/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-700">
      {children}
    </span>
  )
}
