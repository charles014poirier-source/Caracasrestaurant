// Restaurant data - centralized content management

export const restaurantInfo = {
  name: 'Caracas Bar & Tapas',
  tagline: 'Cuisine vénézuélienne & tapas festives à Levallois',
  description: 'Inspiré de Caracas, revisité à Paris. Un voyage culinaire entre arepas, cachapas et cocktails créoles.',
  address: {
    street: '123 Rue de Paris',
    city: '92300 Levallois-Perret',
    full: '123 Rue de Paris, 92300 Levallois-Perret',
  },
  contact: {
    phone: '01 23 45 67 89',
    phoneLink: '+33123456789',
    email: 'contact@caracas-bar-tapas.fr',
  },
  social: {
    instagram: 'https://instagram.com/caracasbartapas',
    facebook: 'https://facebook.com/caracasbartapas',
  },
  hours: {
    lundi: '19h00 - 23h00',
    mardi: null, // Closed
    mercredi: '19h00 - 23h00',
    jeudi: '19h00 - 00h00',
    vendredi: '19h00 - 00h00',
    samedi: '18h00 - 00h00',
    dimanche: null, // Closed
  },
  reservationUrl: '/contact#reservation',
  googleMapsUrl: 'https://maps.google.com',
}

// Menu categories and items
export type BadgeType = 'bestseller' | 'spicy' | 'veggie' | 'new'
export type AllergenType = 'Gluten' | 'Crustacés' | 'Œufs' | 'Poisson' | 'Arachide' | 'Soja' | 'Lait' | 'Fruits à coque' | 'Céleri' | 'Moutarde' | 'Sésame' | 'Sulfites' | 'Lupin' | 'Mollusques'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  badges?: BadgeType[]
  allergens?: AllergenType[]
}

export const menuCategories = [
  { id: 'a-partager', name: 'À partager', icon: '🍽️' },
  { id: 'arepas', name: 'Arepas', icon: '🫓' },
  { id: 'cachapas', name: 'Cachapas', icon: '🥞' },
  { id: 'tapas', name: 'Tapas', icon: '🥘' },
  { id: 'plats', name: 'Plats', icon: '🍲' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'cocktails', name: 'Cocktails', icon: '🍹' },
  { id: 'sans-alcool', name: 'Sans alcool', icon: '🧃' },
]

export const menuItems: MenuItem[] = [
  // À partager
  {
    id: 'guasacaca',
    name: 'Guasacaca & Chips',
    description: 'Sauce à l\'avocat vénézuélienne, maison, accompagnée de plantains frits',
    price: 9.50,
    category: 'a-partager',
    badges: ['veggie', 'bestseller'],
    allergens: ['Gluten'],
  },
  {
    id: 'tequenos',
    name: 'Tequeños',
    description: 'Bâtonnets de pâte feuilletée fourrés au fromage fondant, servis avec guasacaca',
    price: 10.00,
    category: 'a-partager',
    badges: ['bestseller'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },
  {
    id: 'tostones',
    name: 'Tostones',
    description: 'Bananes plantains doubles frites, servies avec salsa rosada',
    price: 8.50,
    category: 'a-partager',
    badges: ['veggie'],
    allergens: [],
  },

  // Arepas
  {
    id: 'arepa-reina',
    name: 'Reina Pepiada',
    description: 'Arepas au maïs, poulet rôti, avocat, mayonnaise maison',
    price: 13.50,
    category: 'arepas',
    badges: ['bestseller'],
    allergens: ['Gluten', 'Œufs', 'Lait'],
  },
  {
    id: 'arepa-pabellon',
    name: 'Pabellón',
    description: 'Arepas, bœuf mijoté, fromage noir, plantain, haricots noirs',
    price: 14.50,
    category: 'arepas',
    badges: ['bestseller'],
    allergens: ['Gluten', 'Lait'],
  },
  {
    id: 'arepa-domino',
    name: 'Domino',
    description: 'Arepas, haricots noirs écrasés, fromage blanc fondant',
    price: 11.50,
    category: 'arepas',
    badges: ['veggie'],
    allergens: ['Gluten', 'Lait'],
  },
  {
    id: 'arepa-pelua',
    name: 'La Pelúa',
    description: 'Arepas, bœuf effiloché, fromage râpé fondant',
    price: 13.50,
    category: 'arepas',
    allergens: ['Gluten', 'Lait'],
  },

  // Cachapas
  {
    id: 'cachapa-classic',
    name: 'Cachapa Classique',
    description: 'Crêpe de maïs doux, fromage fondu, beurre à l\'ail',
    price: 12.50,
    category: 'cachapas',
    badges: ['bestseller'],
    allergens: ['Œufs', 'Lait'],
  },
  {
    id: 'cachapa-pabellon',
    name: 'Cachapa Pabellón',
    description: 'Crêpe de maïs, bœuf mijoté, fromage, plantain caramélisé',
    price: 15.50,
    category: 'cachapas',
    allergens: ['Œufs', 'Lait'],
  },

  // Tapas
  {
    id: 'empanadas',
    name: 'Empanadas (2 pcs)',
    description: 'Chaussons frits au choix : fromage, bœuf, ou poulet',
    price: 11.00,
    category: 'tapas',
    badges: ['bestseller'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },
  {
    id: 'croquetas',
    name: 'Croquetas de Jamón',
    description: 'Croquettes jambon serrano, 4 pièces',
    price: 9.00,
    category: 'tapas',
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },
  {
    id: 'albondigas',
    name: 'Albóndigas',
    description: 'Boulettes de bœuf, sauce tomate, persillade',
    price: 11.50,
    category: 'tapas',
    allergens: ['Gluten', 'Œufs'],
  },
  {
    id: 'pulpo',
    name: 'Pulpo a la Parrilla',
    description: 'Poulpe grillé, huile d\'olive, paprika, patates vapeur',
    price: 18.00,
    category: 'tapas',
    badges: ['spicy'],
    allergens: ['Mollusques'],
  },

  // Plats
  {
    id: 'pabellon-creole',
    name: 'Pabellón Criollo',
    description: 'Le plat national : bœuf mijoté, haricots noirs, riz, plantain frit, fromage',
    price: 21.00,
    category: 'plats',
    badges: ['bestseller'],
    allergens: ['Lait'],
  },
  {
    id: 'asado-negro',
    name: 'Asado Negro',
    description: 'Rôti de bœuf caramélisé, sauce panela, purée de plantain',
    price: 23.00,
    category: 'plats',
    allergens: ['Lait', 'Œufs'],
  },

  // Desserts
  {
    id: 'quesillo',
    name: 'Quesillo',
    description: 'Flan vénézuélien au caramel, sauce caramel maison',
    price: 7.50,
    category: 'desserts',
    badges: ['bestseller'],
    allergens: ['Œufs', 'Lait'],
  },
  {
    id: 'golfeados',
    name: 'Golfeados',
    description: 'Rouleaux à la cannelle, fromage frais, 2 pièces',
    price: 8.00,
    category: 'desserts',
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },
  {
    id: 'torta-chocolate',
    name: 'Torta de Chocolate',
    description: 'Moelleux au chocolat, sauce chocolate coulante',
    price: 9.00,
    category: 'desserts',
    allergens: ['Œufs', 'Lait'],
  },

  // Cocktails
  {
    id: 'mojito-classic',
    name: 'Mojito Caracas',
    description: 'Rhum blanc, menthe fraîche, citron vert, cane sugar',
    price: 11.00,
    category: 'cocktails',
    badges: ['bestseller'],
    allergens: ['Sulfites'],
  },
  {
    id: 'caipirinha',
    name: 'Caipirinha',
    description: 'Cachaça, citron vert, cane sugar, glaçons pilés',
    price: 11.00,
    category: 'cocktails',
    allergens: ['Sulfites'],
  },
  {
    id: 'pisco-sour',
    name: 'Pisco Sour',
    description: 'Pisco, jus de citron vert, sirop de sucre, blanc d\'œuf',
    price: 12.00,
    category: 'cocktails',
    badges: ['new'],
    allergens: ['Œufs', 'Sulfites'],
  },
  {
    id: 'daiquiri',
    name: 'Daiquirí',
    description: 'Rhum blanc, citron vert, sirop de sucre',
    price: 11.00,
    category: 'cocktails',
    allergens: ['Sulfites'],
  },
  {
    id: 'margarita',
    name: 'Margarita',
    description: 'Tequila, triple sec, citron vert, sel au bord',
    price: 11.00,
    category: 'cocktails',
    allergens: ['Sulfites'],
  },

  // Sans alcool
  {
    id: 'papelon-lemon',
    name: 'Papelón con Limón',
    description: 'Jus de canne, citron vert, eau, le classique vénézuélien',
    price: 6.00,
    category: 'sans-alcool',
    badges: ['bestseller'],
    allergens: [],
  },
  {
    id: 'chicha',
    name: 'Chicha',
    description: 'Boisson au riz, lait, cannelle, glace pilée',
    price: 6.50,
    category: 'sans-alcool',
    badges: ['veggie'],
    allergens: ['Lait'],
  },
  {
    id: 'limonada',
    name: 'Limonada',
    description: 'Citron vert, sucre, eau, menthe fraîche',
    price: 5.50,
    category: 'sans-alcool',
    badges: ['veggie'],
    allergens: [],
  },
]

// Signature dishes for home page
export const signatureDishes = [
  {
    id: 'arepa-reina-sig',
    name: 'Reina Pepiada',
    description: 'L\'incontournable : arepas au maïs, poulet rôti et avocat',
    price: 13.50,
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&q=80',
    badges: ['bestseller'] as BadgeType[],
  },
  {
    id: 'empanadas-sig',
    name: 'Empanadas',
    description: 'Chaussons frits croustillants, fromage fondant ou bœuf',
    price: 11.00,
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80',
    badges: ['bestseller'] as BadgeType[],
  },
  {
    id: 'pabellon-sig',
    name: 'Pabellón Criollo',
    description: 'Le plat national : bœuf mijoté, haricots noirs, riz et plantain',
    price: 21.00,
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&q=80',
    badges: ['bestseller'] as BadgeType[],
  },
  {
    id: 'cachapa-sig',
    name: 'Cachapa Classique',
    description: 'Crêpe de maïs doux au fromage fondu, irrésistible',
    price: 12.50,
    image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=600&q=80',
    badges: ['bestseller'] as BadgeType[],
  },
  {
    id: 'mojito-sig',
    name: 'Mojito Caracas',
    description: 'Le cocktail signature : rhum, menthe, citron vert',
    price: 11.00,
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80',
    badges: ['bestseller'] as BadgeType[],
  },
  {
    id: 'quesillo-sig',
    name: 'Quesillo',
    description: 'Flan vénézuélien au caramel, onctueux et réconfortant',
    price: 7.50,
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&q=80',
    badges: ['bestseller'] as BadgeType[],
  },
]

// Experience pillars
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

// Reviews
export const reviews = [
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

// Gallery images
export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', alt: 'Ambiance du restaurant' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80', alt: 'Cocktails colorés' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', alt: 'Plat typique' },
  { src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80', alt: 'Intérieur chaleureux' },
  { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80', alt: 'Fête et musique' },
  { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80', alt: 'Détail décoratif' },
]

// Events
export const events = [
  {
    title: 'Afterwork & Tapas',
    description: 'Chaque jeudi, formules tapas à partager entre collègues ou amis. Ambiance musicale garantie.',
    icon: '🍹',
  },
  {
    title: 'Privatisation Étage',
    description: 'Notre étage peut accueillir vos événements jusqu\'à 40 personnes. Formules sur mesure.',
    icon: '🎉',
  },
  {
    title: 'Traiteur & Cocktails',
    description: 'Nous apportons nos saveurs chez vous pour vos événements privés ou professionnels.',
    icon: '🍽️',
  },
]

// Venezuelan glossary
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
