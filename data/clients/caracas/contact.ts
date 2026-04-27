// data/clients/caracas/contact.ts
import { ContactData } from '@/data/types/client'

export const contact: ContactData = {
  address: {
    street: '31 Rue Henri Barbusse',
    city: '92300 Levallois-Perret',
    full: '31 Rue Henri Barbusse, 92300 Levallois-Perret',
  },
  phone: '01 23 45 67 89',
  phoneLink: '+33123456789',
  email: 'contact@caracas-bar-tapas.fr',
  social: {
    instagram: 'https://www.instagram.com/holacaracas.paris/',
    facebook: 'https://www.facebook.com/caracas.bar.tapas',
    linkedin: 'https://www.linkedin.com/company/caracas-paris/',
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
  googleMapsUrl: 'https://maps.app.goo.gl/CsKc6rc471n63fV86',
}

// Export pour compatibilité avec l'existant
export const restaurantInfo = contact
