import { Metadata } from 'next'
import { Suspense } from 'react'
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
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-neutral-600">Chargement...</div>
      </div>
    }>
      <MenuContent />
    </Suspense>
  )
}
