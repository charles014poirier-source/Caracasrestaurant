import { Calendar } from 'lucide-react'
import Link from 'next/link'

export function FooterReservationCTA() {
  return (
    <div className="border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left side - Content */}
          <div className="flex items-center gap-4 flex-1">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Text */}
            <div>
              <h4 className="font-serif text-xl font-bold text-white mb-1">
                Réservez votre table
              </h4>
              <p className="text-white/70 text-sm">
                Places limitées • Week-end chargé
              </p>
            </div>
          </div>

          {/* Right side - CTA Button */}
          <Link
            href="/contact#reservation"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-secondary-700 rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:bg-white/90 hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            <Calendar className="w-5 h-5" />
            <span>Réserver</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
