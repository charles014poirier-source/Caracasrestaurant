// app/page.tsx
import { caracasConfig } from '@/data/clients/caracas'
import { contact } from '@/data/clients/caracas/contact'
import { HeroSection } from '@/components/sections/HeroSection'
import { VenezuelanFlagBackground } from '@/components/ui/VenezuelanFlagBackground'
import { SignaturesSection } from '@/components/sections/SignaturesSection'
import { StorySection } from '@/components/sections/StorySection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { EventsSection } from '@/components/sections/EventsSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { EventItem, ReviewItem } from '@/data/types/client'

// Données d'événements (à migrer dans data/clients/caracas/content.ts plus tard)
const events: EventItem[] = [
  {
    title: 'Afterwork & Tapas',
    description: 'Chaque jeudi, formules tapas à partager entre collègues ou amis. Ambiance musicale garantie.',
    icon: '🍹',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80',
  },
  {
    title: 'Privatisation Étage',
    description: 'Notre étage peut accueillir vos événements jusqu\'à 40 personnes. Formules sur mesure.',
    icon: '🎉',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
  },
  {
    title: 'Traiteur & Cocktails',
    description: 'Nous apportons nos saveurs chez vous pour vos événements privés ou professionnels.',
    icon: '🍽️',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
  },
]

export default function HomePage() {
  const todayHours = Object.values(contact.hours)[new Date().getDay()] || 'Fermé'

  return (
    <>
      <VenezuelanFlagBackground color="yellow" motif="food" opacity={0.1}>
        <HeroSection
          content={caracasConfig.content.hero}
          config={caracasConfig.config}
          todayHours={todayHours}
        />
      </VenezuelanFlagBackground>
      <VenezuelanFlagBackground color="blue" motif="food" opacity={0.12}>
        <SignaturesSection
          items={caracasConfig.menu.signatureDishes}
          config={caracasConfig.config.sections.signatures}
        />
      </VenezuelanFlagBackground>
      <VenezuelanFlagBackground color="blue" motif="ethnic" opacity={0.08}>
        <StorySection
          content={caracasConfig.content.story}
          glossary={caracasConfig.content.glossary}
          config={caracasConfig.config.sections.story}
        />
      </VenezuelanFlagBackground>
      <VenezuelanFlagBackground color="red" motif="nature" opacity={0.1}>
        <ExperienceSection
          experiences={caracasConfig.content.experiences}
          config={caracasConfig.config.sections.experiences}
        />
      </VenezuelanFlagBackground>
      <VenezuelanFlagBackground color="red" motif="nature" opacity={0.08}>
        <GallerySection
          images={caracasConfig.images.gallery}
          config={caracasConfig.config.sections.gallery}
        />
      </VenezuelanFlagBackground>
      <VenezuelanFlagBackground color="red" motif="festive" opacity={0.06}>
        <EventsSection
          events={events}
          config={caracasConfig.config.sections.events}
        />
      </VenezuelanFlagBackground>
      <ReviewsSection
        reviews={caracasConfig.content.reviews}
        rating="4.8"
        reviewCount="120"
        googleMapsUrl={contact.googleMapsUrl}
        config={caracasConfig.config.sections.reviews}
      />
    </>
  )
}
