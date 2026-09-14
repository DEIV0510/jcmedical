type Props = { className?: string }

/**
 * Original line-art leaf cluster echoing the lotus/leaf form of the brand mark.
 * Pure decoration — not the brand logo, safe to scale, rotate and recolor via currentColor.
 */
export function BotanicalMotif({ className }: Props) {
  const blade = 'M50 4 C 66 22, 72 46, 50 92 C 28 46, 34 22, 50 4 Z'
  const angles = [-48, -24, 0, 24, 48]
  return (
    <svg viewBox="0 0 100 96" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={0.9} strokeLinejoin="round">
        {angles.map((a) => (
          <path key={a} d={blade} transform={`rotate(${a} 50 92)`} />
        ))}
      </g>
    </svg>
  )
}

export function BotanicalSprig({ className }: Props) {
  return (
    <svg viewBox="0 0 120 220" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={1}>
        <path d="M60 210 C 58 150, 62 90, 60 10" strokeLinecap="round" />
        {[
          [60, 60, 10, 28],
          [60, 60, 110, 28],
          [60, 95, 4, 40],
          [60, 95, 116, 40],
          [60, 135, 0, 48],
          [60, 135, 120, 48],
        ].map(([x1, y1, x2, r], i) => (
          <path
            key={i}
            d={`M${x1} ${y1} C ${x1 + (x2 - x1) * 0.3} ${y1 - r * 0.5}, ${x2} ${y1 - r * 0.2}, ${x2} ${y1}`}
            strokeLinecap="round"
          />
        ))}
        <circle cx="60" cy="14" r="6" />
      </g>
    </svg>
  )
}

export function GoldRoute({ className }: Props) {
  return (
    <svg viewBox="0 0 800 400" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={1.1} opacity={0.55}>
        <path d="M40 320 Q 200 120 360 210 T 760 90" strokeDasharray="2 10" strokeLinecap="round" />
        <path d="M60 120 Q 260 260 460 150 T 740 260" strokeDasharray="2 10" strokeLinecap="round" />
      </g>
      <g fill="currentColor">
        <circle cx="40" cy="320" r="4" />
        <circle cx="360" cy="210" r="3" />
        <circle cx="760" cy="90" r="5" />
        <circle cx="60" cy="120" r="3" />
        <circle cx="460" cy="150" r="4" />
        <circle cx="740" cy="260" r="3.5" />
      </g>
    </svg>
  )
}
