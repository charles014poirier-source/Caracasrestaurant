// components/sections/GallerySection.tsx
'use client'

import { useState, useEffect } from 'react'
import { Section, SectionHeader } from '@/components/Section'
import { ImageRef } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface GallerySectionProps {
  images: ImageRef[]
  config: {
    enabled: boolean
  }
}

export function GallerySection({ images, config }: GallerySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  if (!config.enabled) return null

  return (
    <Section id="galerie" background="white" py="lg">
      <ScrollReveal direction="fade">
        <SectionHeader
          title="L'Ambiance"
          subtitle="Un lieu vivant"
          description="Découvrez l'atmosphère chaleureuse"
        />
      </ScrollReveal>

      <div className="relative max-w-6xl mx-auto">
        {/* Main carousel - approche container fixe */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ring-1 ring-neutral-900/5">
          {/* Image container avec background */}
          <ScrollReveal direction="fade">
            <div
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{
                backgroundImage: `url(${images[currentIndex].src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            >
              {/* Overlay subtil pour unifier les images */}
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </ScrollReveal>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/95 backdrop-blur-md shadow-xl flex items-center justify-center hover:bg-white hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-7 h-7 text-neutral-900 group-hover:-translate-x-0.5 transition-transform duration-300" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/95 backdrop-blur-md shadow-xl flex items-center justify-center hover:bg-white hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group z-10"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-7 h-7 text-neutral-900 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 right-6 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg text-sm font-semibold text-neutral-900 ring-1 ring-neutral-900/5 z-10">
            <span className="text-primary-600">{currentIndex + 1}</span>
            <span className="text-neutral-400 mx-1">/</span>
            <span className="text-neutral-600">{images.length}</span>
          </div>

          {/* Image label */}
          <div className="absolute bottom-6 left-6 px-5 py-3 rounded-xl bg-black/60 backdrop-blur-md text-white z-10">
            <p className="text-sm font-medium">{images[currentIndex].alt}</p>
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ring-2 ${
                index === currentIndex
                  ? 'ring-primary-500 scale-105 shadow-lg'
                  : 'ring-neutral-200 hover:ring-neutral-300 opacity-60 hover:opacity-100'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-primary-500/20 transition-opacity duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Progress bar pour autoplay */}
        {isAutoPlaying && (
          <div className="mt-8 max-w-md mx-auto">
            <div className="h-1 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                style={{
                  animation: 'progress 5s linear infinite',
                }}
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes progress {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </Section>
  )
}
