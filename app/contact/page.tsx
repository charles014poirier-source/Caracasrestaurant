import { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact & Accès | Caracas Bar & Tapas',
  description: 'Réservez votre table, trouvez nos horaires et notre adresse. Restaurant vénézuélien à Levallois-Perret, accessible en métro et bus.',
  openGraph: {
    title: 'Contact & Accès | Caracas Bar & Tapas',
    description: 'Réservez votre table, trouvez nos horaires et notre adresse.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
