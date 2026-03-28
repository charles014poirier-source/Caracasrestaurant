// components/sections/ExperienceSection.tsx
import { Section } from '@/components/Section'
import { ExperienceItem } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'

interface ExperienceSectionProps {
  experiences: ExperienceItem[]
  config: {
    enabled: boolean
  }
}

export function ExperienceSection({ experiences, config }: ExperienceSectionProps) {
  if (!config.enabled) return null

  return (
    <Section background="background-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {experiences.map((experience, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.15}>
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {experience.icon}
              </div>
              <h3 className="font-serif text-heading-lg text-neutral-900 mb-3">
                {experience.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
