// data/clients/caracas/content.ts
import { ContentData } from '@/data/types/client'

export const content: ContentData = {
  hero: {
    enabled: true,
    location: 'Levallois-Perret',
    tagline: 'Cuisine vénézuélienne & tapas festives à Levallois',
    description: 'Inspiré de Caracas, revisité à Paris. Un voyage culinaire entre arepas, cachapas et cocktails créoles.',
    backgroundImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80',
    quickInfo: {
      rating: '4.8/5',
      reviewCount: '120+ avis',
    },
  },

  story: {
    enabled: true,
    title: 'De Caracas à Levallois',
    paragraphs: [
      'Caracas Bar & Tapas est né de l\'amitié d\'Igor et Difrines, deux passionnés souhaitant partager la richesse de la cuisine vénézuélienne avec les Parisiens.',
      'Notre mission : vous faire voyager à travers les saveurs authentiques du Venezuela, depuis les arepas du petit-déjeuner jusqu\'aux cocktails du soir.',
      'Aujourd\'hui installés à Levallois, nous perpétuons cette tradition d\'accueil et de partage, où chaque plat raconte une histoire.',
    ],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    establishmentYear: 2015,
  },

  experiences: [
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
  ],

  glossary: [
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
  ],
}
