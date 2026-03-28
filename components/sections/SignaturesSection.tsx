// components/sections/SignaturesSection.tsx
import { Section, SectionHeader } from '@/components/Section'
import { SignatureDish } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SignatureCard } from '@/components/Card'
import { Button } from '@/components/Button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface SignaturesSectionProps {
  items: SignatureDish[]
  config: {
    enabled: boolean
  }
}

export function SignaturesSection({ items, config }: SignaturesSectionProps) {
  if (!config.enabled) return null

  return (
    <Section id="signatures" background="white">
      <ScrollReveal direction="fade" delay={0}>
        <SectionHeader
          title="Nos Signatures"
          subtitle="Les incontournables"
          description="Les plats qui ont fait notre réputation. Une invitation au voyage gustatif."
        />
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {items.map((dish, index) => (
          <ScrollReveal key={dish.id} direction="up" delay={index * 0.1}>
            <SignatureCard {...dish} />
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal direction="fade" delay={0.4}>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="group relative overflow-hidden shadow-warm hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-bounce-slow rounded-full"
            asChild
          >
            <Link href="/menu" className="flex items-center gap-2 relative">
              <span className="relative z-10">Découvrir toute la carte</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 animate-arrow-slide relative z-10" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </Link>
          </Button>
        </div>
      </ScrollReveal>
    </Section>
  )
}
