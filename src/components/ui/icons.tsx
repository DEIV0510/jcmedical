type IconProps = { className?: string }

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.04 2c-5.523 0-10 4.477-10 10 0 1.77.464 3.492 1.346 5.01L2 22l5.13-1.353A9.96 9.96 0 0 0 12.04 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.2a8.17 8.17 0 0 1-4.166-1.14l-.299-.177-3.045.803.814-2.968-.195-.305A8.19 8.19 0 0 1 3.84 12c0-4.526 3.674-8.2 8.2-8.2 4.526 0 8.2 3.674 8.2 8.2 0 4.526-3.674 8.2-8.2 8.2z" />
    </svg>
  )
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.53c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.3 4.3c-2.3 0-3.88 1.4-3.88 3.98v2.22H7.86v2.96h2.56V21h3.08z" />
    </svg>
  )
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.58 7.2a2.75 2.75 0 0 0-1.94-1.95C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.64.45A2.75 2.75 0 0 0 2.42 7.2 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .42 4.8 2.75 2.75 0 0 0 1.94 1.95c1.74.45 7.64.45 7.64.45s5.9 0 7.64-.45a2.75 2.75 0 0 0 1.94-1.95A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.42-4.8zM10.02 15.02V8.98L15.27 12l-5.25 3.02z" />
    </svg>
  )
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-3.13-1.4v9.93a4.75 4.75 0 1 1-4.1-4.7v2.3a2.45 2.45 0 1 0 1.8 2.36V2h2.28a4.28 4.28 0 0 0 3.15 4.13v-.02a4.3 4.3 0 0 0 2.5.79V9.2a6.5 6.5 0 0 1-2.5-.5v-2.9c.34.08.68.13 1 .13v-.11z" />
    </svg>
  )
}

export function GoogleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.35 11.1h-9.17v2.92h5.4c-.23 1.42-1.62 4.17-5.4 4.17a5.95 5.95 0 0 1 0-11.9c1.7 0 2.84.7 3.5 1.32l2.38-2.3C16.63 3.9 14.6 3 12.18 3a9.17 9.17 0 1 0 0 18.34c5.3 0 8.8-3.72 8.8-8.96 0-.6-.07-1.06-.15-1.28z" />
    </svg>
  )
}

export function LeafDividerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 12c8-9 16-9 22 0-6 9-14 9-22 0Z"
        stroke="currentColor"
        strokeWidth={1.1}
      />
      <path d="M12 12h40" stroke="currentColor" strokeWidth={1.1} />
      <circle cx="58" cy="12" r="2.4" stroke="currentColor" strokeWidth={1.1} />
    </svg>
  )
}
