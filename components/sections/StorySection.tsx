// components/sections/StorySection.tsx
import { Section } from '@/components/Section'
import { StoryContent, GlossaryItem } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'
import { VenezuelanPattern } from '@/components/ui/VenezuelanPattern'

interface StorySectionProps {
  content: StoryContent
  glossary: GlossaryItem[]
  config: {
    enabled: boolean
  }
}

export function StorySection({ content, glossary, config }: StorySectionProps) {
  if (!config.enabled) return null

  return (
    <Section id="histoire" background="pattern">
      <VenezuelanPattern opacity={0.08} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal direction="left">
          <div>
            <p className="text-primary-600 font-semibold tracking-wide uppercase mb-3 text-center lg:text-left">
              Notre Histoire
            </p>
            <h2 className="font-serif text-display-md text-neutral-900 mb-6 text-center lg:text-left">
              {content.title}
            </h2>
            <div className="space-y-4 text-neutral-600 text-body-lg leading-relaxed">
              {content.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Glossary */}
            {glossary.length > 0 && (
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <h4 className="font-serif text-lg text-neutral-900 mb-4 text-center lg:text-left">
                  Petit lexique vénézuélien
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {glossary.map((item, index) => (
                    <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                      <div className="bg-background-50 p-4 rounded-card shadow-soft">
                        <span className="font-semibold text-primary-600">{item.term}</span>
                        <span className="mx-2 text-neutral-400">•</span>
                        <span className="text-neutral-600">{item.definition}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2}>
          <div className="relative">
            <img
              src={content.image}
              alt="Ambiance du restaurant"
              className="rounded-card shadow-medium w-full aspect-[4/3] object-cover"
            />
            {content.establishmentYear && (
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-primary-500 text-white p-4 lg:p-6 rounded-card shadow-lg">
                <p className="font-serif text-2xl lg:text-3xl font-bold">{content.establishmentYear}</p>
                <p className="text-xs lg:text-sm">Année de création</p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
