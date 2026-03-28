// components/sections/GallerySection.tsx
import { Section, SectionHeader } from '@/components/Section'
import { ImageRef } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'

interface GallerySectionProps {
  images: ImageRef[]
  config: {
    enabled: boolean
  }
}

export function GallerySection({ images, config }: GallerySectionProps) {
  if (!config.enabled) return null

  return (
    <Section id="galerie" background="white">
      <ScrollReveal direction="fade">
        <SectionHeader
          title="L'Ambiance"
          subtitle="Un lieu vivant"
          description="Découvrez l'atmosphère chaleureuse"
        />
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <ScrollReveal key={index} direction="scale" delay={index * 0.08}>
            <div
              className={`relative overflow-hidden rounded-card group ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
