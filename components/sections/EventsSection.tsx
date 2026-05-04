// components/sections/EventsSection.tsx
'use client'

import { Section, SectionHeader } from '@/components/Section'
import { EventItem } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Button } from '@/components/Button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface EventsSectionProps {
  events: EventItem[]
  config: {
    enabled: boolean
  }
}

export function EventsSection({ events, config }: EventsSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  if (!config.enabled) return null

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  const ctaConfig: Record<string, { text: string; subtitle: string; gradient: string; iconBg: string }> = {
    'Afterwork & Tapas': {
      text: 'Réserver un jeudi',
      subtitle: 'Dès 19h • Jusqu\'à 20 personnes',
      gradient: 'from-amber-500 to-orange-600',
      iconBg: 'bg-amber-100',
    },
    'Privatisation Étage': {
      text: 'Demander un devis',
      subtitle: 'Étage privé • Jusqu\'à 40 personnes',
      gradient: 'from-emerald-500 to-secondary-600',
      iconBg: 'bg-emerald-100',
    },
    'Traiteur & Cocktails': {
      text: 'Nous contacter',
      subtitle: 'Chez vous • Formules sur mesure',
      gradient: 'from-blue-500 to-primary-600',
      iconBg: 'bg-blue-100',
    },
  }

  return (
    <Section id="privatisation" background="background-100">
      <ScrollReveal direction="fade">
        <SectionHeader
          title="Privatisation & Événements"
          subtitle="Vos moments, nos saveurs"
          description="Des expériences uniques pour vos moments spéciaux"
        />
      </ScrollReveal>

      {/* Mobile Carousel */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {events.map((event, index) => {
              const cta = ctaConfig[event.title] || {
                text: 'En savoir plus',
                subtitle: 'Contactez-nous',
                gradient: 'from-secondary-500 to-secondary-600',
                iconBg: 'bg-secondary-100',
              }

              return (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <ScrollReveal direction="up" delay={index * 0.12}>
                    <div className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 h-full overflow-hidden group">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                            {event.icon}
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        <h3 className="font-serif text-heading-lg text-neutral-900 mb-3">
                          {event.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed mb-6">
                          {event.description}
                        </p>

                        <div className="space-y-3">
                          <Button
                            size="lg"
                            className={`w-full bg-gradient-to-r ${cta.gradient} text-white hover:opacity-90 shadow-lg transition-all duration-300 rounded-full`}
                            asChild
                          >
                            <Link href="/contact" className="flex items-center justify-center gap-2">
                              <span>{cta.text}</span>
                              <ArrowRight className="w-5 h-5" />
                            </Link>
                          </Button>
                          <p className="text-center text-sm text-neutral-500 font-medium">
                            {cta.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 z-10"
          aria-label="Précédent"
        >
          <ChevronLeft className="w-5 h-5 text-neutral-900" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 z-10"
          aria-label="Suivant"
        >
          <ChevronRight className="w-5 h-5 text-neutral-900" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-secondary-500 w-6' : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Aller à l'événement ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {events.map((event, index) => {
          const cta = ctaConfig[event.title] || {
            text: 'En savoir plus',
            subtitle: 'Contactez-nous',
            gradient: 'from-secondary-500 to-secondary-600',
            iconBg: 'bg-secondary-100',
          }

          return (
            <ScrollReveal key={index} direction="up" delay={index * 0.12}>
              <div className="bg-white rounded-2xl shadow-soft transition-all duration-300 h-full overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                      {event.icon}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-serif text-heading-lg text-neutral-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="space-y-3">
                    <Button
                      size="lg"
                      className={`w-full bg-gradient-to-r ${cta.gradient} text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-full`}
                      asChild
                    >
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        <span>{cta.text}</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                    <p className="text-center text-sm text-neutral-500 font-medium">
                      {cta.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {/* Bottom CTA banner */}
      <ScrollReveal direction="fade" delay={0.5}>
        <div className="mt-16 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
              alt="Événement au restaurant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" />
          </div>

          <div className="relative z-10">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Un projet d'événement ?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Nous créons des expériences sur mesure pour vos moments spéciaux. Contactez-nous pour en discuter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="!bg-white !text-neutral-900 hover:!bg-white/90 hover:!scale-105 hover:!shadow-2xl transition-all duration-300 rounded-full px-8 py-4 font-bold text-lg shadow-xl border-2 border-white/30 inline-flex items-center gap-2"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  )
}
