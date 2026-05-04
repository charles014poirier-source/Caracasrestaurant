// components/sections/StorySection.tsx
import { Section } from '@/components/Section'
import { StoryContent, GlossaryItem } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'

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

            {/* Glossary - Original design with Venezuelan colors */}
            {glossary.length > 0 && (
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <div className="flex items-center gap-3 mb-5">
                  <h4 className="font-serif text-lg text-neutral-900">
                    Petit lexique vénézuélien
                  </h4>
                  {/* Venezuelan flag dots */}
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {glossary.map((item, index) => {
                    // Alternate Venezuelan flag colors
                    const colorSchemes = [
                      { bg: 'bg-yellow-50/80', border: 'border-yellow-200/50', text: 'text-yellow-700', dot: 'bg-yellow-400' },
                      { bg: 'bg-blue-50/80', border: 'border-blue-200/50', text: 'text-blue-700', dot: 'bg-blue-600' },
                      { bg: 'bg-red-50/80', border: 'border-red-200/50', text: 'text-red-700', dot: 'bg-red-500' },
                      { bg: 'bg-yellow-50/80', border: 'border-yellow-200/50', text: 'text-yellow-700', dot: 'bg-yellow-400' },
                    ]
                    const scheme = colorSchemes[index % colorSchemes.length]

                    return (
                      <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                        <div className={`${scheme.bg} border ${scheme.border} p-4 rounded-xl hover:shadow-md transition-all duration-300 group cursor-default`}>
                          <div className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full ${scheme.dot} mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                            <div className="flex-1">
                              <span className={`font-bold ${scheme.text} text-sm`}>{item.term}</span>
                              <span className="mx-2 text-neutral-400">•</span>
                              <span className="text-neutral-600 text-sm">{item.definition}</span>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    )
                  })}
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
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-white/80 backdrop-blur-md text-neutral-900 p-5 lg:p-7 rounded-2xl shadow-xl border-2 border-white/60">
                <p className="font-serif text-3xl lg:text-4xl font-bold bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
                  {content.establishmentYear}
                </p>
                <p className="text-xs lg:text-sm text-neutral-600 font-medium mt-1">Année de création</p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
