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
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={content.videoUrl}
        poster={content.posterUrl}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 md:px-12 lg:px-16">
        <h2 className="font-serif text-display-md text-white mb-4">
          {content.title}
        </h2>
        <p className="text-body-lg text-white/90 mb-8 max-w-2xl">
          {content.subtitle}
        </p>
        <Button size="lg" asChild>
          <a href={content.cta.href}>{content.cta.text}</a>
        </Button>
      </div>
    </section>
  )
}
