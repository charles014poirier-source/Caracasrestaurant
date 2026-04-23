import { VideoStoryContent } from '@/data/types/client'
import { Button } from '@/components/Button'

interface VideoStorySectionProps {
  content: VideoStoryContent
  config: {
    enabled: boolean
  }
}

export function VideoStorySection({ content, config }: VideoStorySectionProps) {
  if (!config.enabled) return null

  return (
    <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
      {/* Animated Background with Fallback */}
      <div className="absolute inset-0">
        {/* Static Poster Image with Animation */}
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-slow-zoom"
          style={{ backgroundImage: `url(${content.posterUrl})` }}
        />

        {/* Video Element */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={content.videoUrl}
          poster={content.posterUrl}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-black/30 to-secondary-900/40 animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 md:px-12 lg:px-16">
        <h2 className="font-serif text-display-md text-white mb-4 drop-shadow-lg">
          {content.title}
        </h2>
        <p className="text-body-lg text-white/95 mb-8 max-w-2xl drop-shadow-md">
          {content.subtitle}
        </p>
        <Button size="lg" asChild className="shadow-xl">
          <a href={content.cta.href}>{content.cta.text}</a>
        </Button>
      </div>
    </section>
  )
}
