import { FlagColor, MotifType } from './VenezuelanFlagBackground'

interface VenezuelanFlagSeparatorProps {
  color: FlagColor
  motif: MotifType
  title?: string
  subtitle?: string
  className?: string
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

const symbolMap: Record<MotifType, string> = {
  food: '🌽',
  ethnic: '🏺',
  nature: '🏔',
  festive: '🎉'
}

export function VenezuelanFlagSeparator({ color, motif, title, subtitle, className = '' }: VenezuelanFlagSeparatorProps) {
  const motifUrl = motifMap[motif]
  const symbol = symbolMap[motif]

  return (
    <div className={`w-full relative py-8 md:py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Symbol */}
          <div className="text-4xl md:text-5xl opacity-80">
            {symbol}
          </div>

          {/* Decorative line left */}
          <div className="flex-1 h-px" className="bg-gradient-to-r from-transparent via-current to-transparent opacity-30" style={{ color: colorMap[color] }} />

          {/* Content */}
          <div className="text-center">
            {title && (
              <p className="text-sm md:text-base font-semibold tracking-wide uppercase" style={{ color: colorMap[color] }}>
                {title}
              </p>
            )}
            {subtitle && (
              <p className="text-xs md:text-sm opacity-70 mt-1">
                {subtitle}
              </p>
            )}
          </div>

          {/* Decorative line right */}
          <div className="flex-1 h-px" className="bg-gradient-to-r from-transparent via-current to-transparent opacity-30" style={{ color: colorMap[color] }} />

          {/* Symbol */}
          <div className="text-4xl md:text-5xl opacity-80">
            {symbol}
          </div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${motifUrl})`,
              backgroundSize: '60px 60px',
              opacity: 0.15
            }}
          />
        </div>
      </div>
    </div>
  )
}
