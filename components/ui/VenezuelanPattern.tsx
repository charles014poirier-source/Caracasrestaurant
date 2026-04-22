interface VenezuelanPatternProps {
  opacity?: number
  className?: string
}

export function VenezuelanPattern({ opacity = 0.05, className = "" }: VenezuelanPatternProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg
        className="w-full h-full"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="andinPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Losange central - Jaune */}
            <path
              d="M30 5 L55 30 L30 55 L5 30 Z"
              fill="none"
              stroke="#FFCC00"
              strokeWidth="0.5"
              opacity="0.6"
            />

            {/* Triangles - Bleu */}
            <path
              d="M30 15 L45 40 L15 40 Z"
              fill="none"
              stroke="#0033A0"
              strokeWidth="0.5"
              opacity="0.6"
            />

            {/* Triangle inversé - Rouge */}
            <path
              d="M30 45 L15 20 L45 20 Z"
              fill="none"
              stroke="#CF142B"
              strokeWidth="0.5"
              opacity="0.6"
            />

            {/* Points décoratifs - Jaune */}
            <circle cx="30" cy="30" r="2" fill="#FFCC00" opacity="0.8" />
            <circle cx="15" cy="15" r="1.5" fill="#FFCC00" opacity="0.6" />
            <circle cx="45" cy="15" r="1.5" fill="#FFCC00" opacity="0.6" />
            <circle cx="15" cy="45" r="1.5" fill="#FFCC00" opacity="0.6" />
            <circle cx="45" cy="45" r="1.5" fill="#FFCC00" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#andinPattern)`} opacity={opacity} />
      </svg>
    </div>
  )
}
