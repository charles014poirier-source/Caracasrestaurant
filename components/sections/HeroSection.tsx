// components/sections/HeroSection.tsx
import { HeroContent, BrandingConfig } from '@/data/types/client'
import { Button } from '@/components/Button'
import { Star, Clock, MapPin, ArrowRight, Utensils } from 'lucide-react'
import Link from 'next/link'

interface HeroSectionProps {
  content: HeroContent
  config: BrandingConfig
  todayHours?: string
}

export function HeroSection({ content, config, todayHours }: HeroSectionProps) {
  if (!content.enabled) return null

  return (
    <section className="relative min-h-[90vh] flex items-center bg-neutral-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={content.backgroundImage}
          alt={`Ambiance du restaurant ${config.name}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/75 via-neutral-900/70 to-neutral-900" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          <p className="text-primary-400 font-semibold tracking-wide uppercase mb-4 animate-fade-in">
            {content.location}
          </p>
          <h1 className="font-serif text-display-lg text-white mb-6 animate-slide-up leading-tight">
            {content.tagline}
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-100 mb-8 leading-relaxed animate-slide-up stagger-1">
            {content.description}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 animate-slide-up stagger-2">
            <Button
              size="lg"
              className="!bg-gradient-to-r !from-secondary-400 !to-secondary-600 !text-white !border-0 hover:!shadow-glow hover:!scale-105 hover:!from-secondary-300 hover:!to-secondary-500 transition-all duration-300 !rounded-full relative overflow-hidden group !px-8 !py-6"
              asChild
            >
              <Link href={config.cta.primary.href} className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-600 animate-gradient-shift" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-0 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-full border border-white/20 group-hover:animate-pulse" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-white/90" />
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-lg leading-tight">{config.cta.primary.text}</span>
                      <span className="text-xs text-white/80 font-medium">Arepas • Tapas • Cocktails</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-shine" />
              </Link>
            </Button>

            {config.cta.secondary && (
              <Button
                size="lg"
                variant="outline"
                className="!bg-white/10 !backdrop-blur-sm !text-white !border-2 !border-white/30 hover:!bg-white/20 hover:!border-white/50 hover:!scale-105 transition-all duration-300 !rounded-full"
                asChild
              >
                <a href={config.cta.secondary.href} target="_blank" rel="noopener noreferrer">
                  {config.cta.secondary.text}
                </a>
              </Button>
            )}
          </div>

          {/* Quick info */}
          {content.quickInfo && (
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-12 text-neutral-200 text-sm animate-slide-up stagger-3">
              {todayHours && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <span className="font-medium">Aujourd'hui : {todayHours || 'Fermé'}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="font-medium">{content.location}</span>
              </div>
              {content.quickInfo.rating && (
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary-400 fill-primary-400" />
                  <span className="font-medium">{content.quickInfo.rating}</span>
                  {content.quickInfo.reviewCount && <span>• {content.quickInfo.reviewCount}</span>}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
