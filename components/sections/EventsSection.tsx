// components/sections/EventsSection.tsx
import { Section, SectionHeader } from '@/components/Section'
import { EventItem } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Button } from '@/components/Button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface EventsSectionProps {
  events: EventItem[]
  config: {
    enabled: boolean
  }
}

export function EventsSection({ events, config }: EventsSectionProps) {
  if (!config.enabled) return null

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, index) => {
          const cta = ctaConfig[event.title] || {
            text: 'En savoir plus',
            subtitle: 'Contactez-nous',
            gradient: 'from-secondary-500 to-secondary-600',
            iconBg: 'bg-secondary-100',
          }

          return (
            <ScrollReveal key={index} direction="up" delay={index * 0.12}>
              <div className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden group">
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
