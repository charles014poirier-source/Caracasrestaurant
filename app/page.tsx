// app/page.tsx
import { caracasConfig } from '@/data/clients/caracas'
import { contact } from '@/data/clients/caracas/contact'
import { HeroSection } from '@/components/sections/HeroSection'
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

// Données d'avis (à migrer dans data/clients/caracas/content.ts plus tard)
const reviews: ReviewItem[] = [
  {
    id: 1,
    name: 'Marie L.',
    date: 'Il y a 2 semaines',
    rating: 5,
    text: 'Les arepas sont incroyables ! On s\'y croirait vraiment au Venezuela. L\'ambiance est super conviviale et le personnel adorable.',
  },
  {
    id: 2,
    name: 'Thomas R.',
    date: 'Il y a 1 mois',
    rating: 5,
    text: 'Découverte gustative extraordinaire ! Le Pabellón est un must. Les cocktails sont parfaitement dosés. Je recommande à 100%.',
  },
  {
    id: 3,
    name: 'Sophie M.',
    date: 'Il y a 3 semaines',
    rating: 4,
    text: 'Très belle découverte. Les empanadas sont délicieuses et le service attentionné. On y retourne !',
  },
  {
    id: 4,
    name: 'Carlos D.',
    date: 'Il y a 2 mois',
    rating: 5,
    text: 'Enfin de vraies saveurs vénézuéliennes à Paris ! La cachapa m\'a rappelé mes souvenirs d\'enfance. Merci pour ce moment.',
  },
]

export default function HomePage() {
  const todayHours = Object.values(contact.hours)[new Date().getDay()] || 'Fermé'

  return (
    <>
      <HeroSection
        content={caracasConfig.content.hero}
        config={caracasConfig.config}
        todayHours={todayHours}
      />
      <SignaturesSection
        items={caracasConfig.menu.signatureDishes}
        config={caracasConfig.config.sections.signatures}
      />
      <StorySection
        content={caracasConfig.content.story}
        glossary={caracasConfig.content.glossary}
        config={caracasConfig.config.sections.story}
      />
      <ExperienceSection
        experiences={caracasConfig.content.experiences}
        config={caracasConfig.config.sections.experiences}
      />
      <GallerySection
        images={caracasConfig.images.gallery}
        config={caracasConfig.config.sections.gallery}
      />
      <EventsSection
        events={events}
        config={caracasConfig.config.sections.events}
      />
      <ReviewsSection
        reviews={reviews}
        rating="4.8"
        reviewCount="120"
        googleMapsUrl={contact.googleMapsUrl}
        config={caracasConfig.config.sections.reviews}
      />
    </>
  )
}
