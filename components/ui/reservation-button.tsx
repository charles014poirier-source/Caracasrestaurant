'use client'

import { Link } from 'next/link'
import { cn } from '@/lib/utils'

interface ReservationButtonProps {
  variant?: 'desktop' | 'mobile'
  className?: string
}

export function ReservationButton({ variant = 'desktop', className }: ReservationButtonProps) {
  const isMobile = variant === 'mobile'

  return (
    <Link
      href="/contact#reservation"
      className={cn(
        'group relative inline-flex items-center justify-center gap-3',
        'font-bold text-white uppercase tracking-wider',
        'transition-all duration-300',
        'transform hover:scale-[1.02] active:scale-[0.98]',
        // Base styles
        !isMobile && 'px-8 py-4 text-base',
        isMobile && 'w-full px-6 py-5 text-lg',
        className
      )}
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-700 rounded-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-secondary-500/50" />

      {/* Decorative border ring */}
      <div className="absolute inset-0 rounded-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
        <div className="absolute inset-[2px] bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-700 rounded-full" />
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>

      {/* Animated corner decorations */}
      <div className="absolute -top-1 -right-1 w-4 h-4">
        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-amber-400/0 group-hover:border-amber-400/100 transition-all duration-300 rounded-tr-sm" />
      </div>
      <div className="absolute -bottom-1 -left-1 w-4 h-4">
        <div className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-amber-400/0 group-hover:border-amber-400/100 transition-all duration-300 rounded-bl-sm" />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center gap-3">
        {/* Animated icon */}
        <div className="relative">
          <svg
            className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {/* Pulsing dot */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full" />
        </div>

        <span className="relative">
          {isMobile ? 'Réserver une table' : 'Réserver'}
        </span>

        {/* Arrow icon */}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 rounded-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />
    </Link>
  )
}
