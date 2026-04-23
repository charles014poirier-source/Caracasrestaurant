import { ReactNode } from 'react'

export type MotifType = 'food' | 'ethnic' | 'nature' | 'festive'
export type FlagColor = 'yellow' | 'blue' | 'red'

interface VenezuelanFlagBackgroundProps {
  color: FlagColor
  motif: MotifType
  opacity?: number
  className?: string
  children: ReactNode
}

const colorMap = {
  yellow: '#FFCC00',
  blue: '#0033A0',
  red: '#CF142B'
}

const motifMap: Record<MotifType, string> = {
  food: '/motifs/food.svg',
  ethnic: '/motifs/ethnic.svg',
  nature: '/motifs/nature.svg',
  festive: '/motifs/festive.svg'
}

export function VenezuelanFlagBackground({
  color,
  motif,
  opacity = 0.1,
  className = '',
  children
}: VenezuelanFlagBackgroundProps) {
  const bgColor = colorMap[color]
  const motifUrl = motifMap[motif]

  return (
    <div className={`relative ${className}`}>
      {/* Gradient background */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          background: `linear-gradient(180deg, ${bgColor} 0%, ${bgColor} 50%, transparent 100%)`
        }}
      />

      {/* SVG motif overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${motifUrl})`,
          opacity: opacity,
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
