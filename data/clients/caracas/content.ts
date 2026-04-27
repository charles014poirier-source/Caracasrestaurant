// data/clients/caracas/content.ts
import { ContentData, ReviewItem } from '@/data/types/client'

export const hero = {
  enabled: true,
  location: 'Levallois-Perret',
  tagline: 'Cuisine vénézuélienne & tapas festives à Levallois',
  description: 'Inspiré de Caracas, revisité à Paris. Un voyage culinaire entre arepas, cachapas et cocktails créoles.',
  backgroundImage: '/images/caracas interieur.jpg',
  quickInfo: {
    rating: '4.8/5',
    reviewCount: '120+ avis',
  },
}

export const story = {
  enabled: true,
  title: 'De Caracas à Levallois',
  paragraphs: [
    'Caracas Bar & Tapas est né de l\'amitié d\'Igor et Difrines, deux passionnés souhaitant partager la richesse de la cuisine vénézuélienne avec les Parisiens.',
    'Notre mission : vous faire voyager à travers les saveurs authentiques du Venezuela, depuis les arepas du petit-déjeuner jusqu\'aux cocktails du soir.',
    'Aujourd\'hui installés à Levallois, nous perpétuons cette tradition d\'accueil et de partage, où chaque plat raconte une histoire.',
  ],
  image: '/images/caracas coktail.jpg',
  establishmentYear: 2015,
}

export const experiences = [
  {
    title: 'Cuisine Authentique',
    description: 'Des recettes transmises, des produits frais, des saveurs du Venezuela',
    icon: '🍲',
  },
  {
    title: 'Cocktails Créoles',
    description: 'Rhum, cachaca, pisco... des mélanges festifs et rafraîchissants',
    icon: '🍹',
  },
  {
    title: 'Ambiance Festive',
    description: 'Musique latine, décoration chaleureuse, esprit de partage',
    icon: '🎵',
  },
]

export const glossary = [
  {
    term: 'Arepas',
    definition: 'Galettes de maïs, grillées ou frites, fourrées selon les envies. La base de la cuisine vénézuélienne.',
  },
  {
    term: 'Cachapa',
    definition: 'Crêpe épaisse à base de maïs doux, généralement servie avec du fromage fondu.',
  },
  {
    term: 'Pabellón Criollo',
    definition: 'Le plat national : bœuf, haricots noirs, riz et plantain frit.',
  },
  {
    term: 'Tequeños',
    definition: 'Bâtonnets de pâte feuilletée fourrés au fromage, l\'apéritif incontournable.',
  },
]

// Avis clients avec photos de profil Unsplash
export const reviews: ReviewItem[] = [
    {
      id: 1,
      name: 'Marie L.',
      date: 'Il y a 2 semaines',
      rating: 5,
      text: 'Les arepas sont incroyables ! On s\'y croirait vraiment au Venezuela. L\'ambiance est super conviviale et le personnel adorable.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Thomas R.',
      date: 'Il y a 1 mois',
      rating: 5,
      text: 'Découverte gustative extraordinaire ! Le Pabellón est un must. Les cocktails sont parfaitement dosés. Je recommande à 100%.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Sophie M.',
      date: 'Il y a 3 semaines',
      rating: 4,
      text: 'Très belle découverte. Les empanadas sont délicieuses et le service attentionné. On y retourne !',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Carlos D.',
      date: 'Il y a 2 mois',
      rating: 5,
      text: 'Enfin de vraies saveurs vénézuéliennes à Paris ! La cachapa m\'a rappelé mes souvenirs d\'enfance. Merci pour ce moment.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face'
    },
  ]

export const videoStory = {
  enabled: true,
  videoUrl: 'https://player.vimeo.com/external/493297433.sd.mp4?s=d0b8aca3c3cf5c1c0a9e8c5e8c5b8c5e8c5b8c5e&profile_id=165&oauth2_token_id=57447761',
  posterUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80',
  title: "L'Art de Vivre Vénézuélien",
  subtitle: 'Découvrez nos saveurs et nos traditions',
  cta: {
    text: 'Voir notre carte',
    href: '#menu'
  }
}

export const content: ContentData = {
  hero,
  story,
  videoStory, // NOUVEAU
  experiences,
  glossary,
  reviews, // NOUVEAU
}

export default content
