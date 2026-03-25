import { Metadata } from 'next'
import MenuContent from './MenuContent'

export const metadata: Metadata = {
  title: 'La Carte | Caracas Bar & Tapas',
  description: 'Découvrez notre carte complète : arepas, cachapas, tapas, cocktails et plus. Saveurs authentiques du Venezuela à Levallois.',
  openGraph: {
    title: 'La Carte | Caracas Bar & Tapas',
    description: 'Découvrez notre carte complète : arepas, cachapas, tapas, cocktails et plus.',
    url: '/menu',
  },
}

export default function MenuPage() {
  return <MenuContent />
}
