'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Section, SectionHeader } from '@/components/Section'
import { Button } from '@/components/Button'
import { Badge, AllergenBadge } from '@/components/Badge'
import { menu } from '@/data/clients/caracas/menu'

const menuItems = menu.items
const menuCategories = menu.categories
const allMenuItems = menu.items
import { ArrowLeft, Phone, Download } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function MenuContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')

  const [activeCategory, setActiveCategory] = useState(categoryParam || 'a-partager')
  const [isSticky, setIsSticky] = useState(false)

  // Get best sellers
  const bestSellers = allMenuItems.filter(item => item.badges?.includes('bestseller'))

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update category when URL param changes
  useEffect(() => {
    if (categoryParam && menuCategories.find(c => c.id === categoryParam)) {
      setActiveCategory(categoryParam)
      // Scroll to menu items section after a short delay
      setTimeout(() => {
        const menuSection = document.getElementById('menu-items')
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [categoryParam])

  const filteredItems = menuItems.filter(item => item.category === activeCategory)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-background-100 border-b border-neutral-200 py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
      </div>

      {/* Header */}
      <Section background="white" py="md">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="font-serif text-display-lg text-neutral-900 mb-4">
            La Carte
          </h1>
          <p className="text-body-lg text-neutral-600">
            Découvrez nos saveurs authentiques du Venezuela
          </p>
        </div>
      </Section>

      {/* Best Sellers */}
      <Section background="background-100" py="md">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">⭐</span>
          <h2 className="font-serif text-heading-lg text-neutral-900">
            Les Best-Sellers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-neutral-100 hover:border-orange-200"
            >
              {/* Image section */}
              {item.image ? (
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Badges overlay */}
                  {item.badges && item.badges.length > 0 && (
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {item.badges.filter(badge => badge !== 'bestseller').map((badge) => (
                        <span
                          key={badge}
                          className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold shadow-md border-2 border-orange-200"
                        >
                          {badge === 'spicy' && '🌶️ Épicé'}
                          {badge === 'veggie' && '🌿 Végétarien'}
                          {badge === 'new' && '✨ Nouveau'}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-2xl font-bold text-orange-600">
                        {item.price.toFixed(2)}€
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* No image fallback */
                <div className="relative h-48 bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
                  {item.badges && item.badges.filter(badge => badge !== 'bestseller').length > 0 && (
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {item.badges.filter(badge => badge !== 'bestseller').map((badge) => (
                        <Badge key={badge} type={badge} size="sm" />
                      ))}
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-2xl font-bold text-orange-600">
                        {item.price.toFixed(2)}€
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Content section */}
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-neutral-900 mb-2 group-hover:text-orange-700 transition-colors">
                  {item.name}
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed line-clamp-2 mb-3">
                  {item.description}
                </p>

                {/* CTA indicator */}
                <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Voir les détails</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-shine pointer-events-none" />
            </div>
          ))}
        </div>
      </Section>

      {/* Category Navigation */}
      <div
        className={cn(
          'sticky top-16 lg:top-20 z-30 bg-background-50/95 backdrop-blur-md border-b border-neutral-200 transition-shadow duration-300',
          isSticky && 'shadow-soft'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-thin gap-2 py-4 -mx-4 px-4">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 text-sm font-medium',
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-warm'
                    : 'bg-background-100 text-neutral-600 hover:bg-background-200'
                )}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <Section id="menu-items" background="white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="font-serif text-display-md text-neutral-900 mb-2">
              {menuCategories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p className="text-neutral-600">
              {filteredItems.length} propositions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-neutral-100 hover:border-orange-200"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image section */}
                {item.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Badges overlay */}
                    {item.badges && item.badges.length > 0 && (
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {item.badges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold shadow-md border-2 border-orange-200"
                          >
                            {badge === 'bestseller' && '⭐ Best-seller'}
                            {badge === 'spicy' && '🌶️ Épicé'}
                            {badge === 'veggie' && '🌿 Végétarien'}
                            {badge === 'new' && '✨ Nouveau'}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Price badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                        {item.price.toFixed(2)}€
                      </div>
                    </div>
                  </div>
                ) : (
                  /* No image fallback */
                  <div className="relative h-32 bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
                    {item.badges && item.badges.length > 0 && (
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {item.badges.map((badge) => (
                          <Badge key={badge} type={badge} size="sm" />
                        ))}
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                        {item.price.toFixed(2)}€
                      </div>
                    </div>
                  </div>
                )}

                {/* Content section */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-3 group-hover:text-orange-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-4 text-body">
                    {item.description}
                  </p>

                  {/* CTA indicator */}
                  <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>En savoir plus</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-shine pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">
                Aucun item dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Allergen info */}
      <Section background="background-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-heading-lg text-neutral-900 mb-4">
            Informations Allergènes
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-4">
            Nos plats peuvent contenir des allergènes. N'hésitez pas à nous signaler
            vos allergies ou intolérances lors de votre commande.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Gluten', 'Crustacés', 'Œufs', 'Poisson', 'Arachide', 'Soja', 'Lait', 'Fruits à coque', 'Céleri', 'Moutarde', 'Sésame', 'Sulfites', 'Lupin', 'Mollusques'].map((allergen) => (
              <AllergenBadge key={allergen} allergen={allergen} />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
            {/* Background image with blur */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
                alt="Restaurant ambiance"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/85 via-secondary-800/80 to-neutral-900/85 backdrop-blur-md" />
            </div>

            {/* Decorative border */}
            <div className="absolute inset-0 rounded-[2.5rem] border-2 border-white/10 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 p-10 md:p-16 text-center">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 border border-white/20 shadow-lg">
                🍽️ À table !
              </span>

              <h2 className="font-serif text-display-md text-white mb-5 leading-tight">
                Une envie ?
              </h2>
              <p className="text-xl text-neutral-100 mb-10 leading-relaxed max-w-2xl mx-auto">
                Réservez votre table pour déguster nos plats ou commandez en Click & Collect
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
                <Button
                  size="lg"
                  className="!bg-gradient-to-r !from-secondary-400 !to-secondary-600 !text-white !border-0 hover:!shadow-glow hover:!scale-105 hover:-translate-y-1 transition-all duration-300 !rounded-full !px-10 !py-5"
                  asChild
                >
                  <Link href="/contact#reservation" className="flex items-center gap-2">
                    <span>Réserver une table</span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="!bg-white/15 !backdrop-blur-md !text-white !border-2 !border-white/40 hover:!bg-white/25 hover:!border-white/60 hover:!scale-105 hover:-translate-y-1 transition-all duration-300 !rounded-full !px-10 !py-5"
                  asChild
                >
                  <a
                    href="https://deliveroo.fr/fr/menu/paris/levallois-perret/caracas-levallois-31-rue-henri-barbusse?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span>Click & Collect</span>
                  </a>
                </Button>
              </div>

              {/* Divider */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-10" />

              {/* Secondary links */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
                <a
                  href="/menu.pdf"
                  className="inline-flex items-center gap-2.5 text-neutral-200 hover:text-white transition-colors group"
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Télécharger le menu en PDF</span>
                </a>
                <a
                  href="tel:0123456789"
                  className="inline-flex items-center gap-2.5 text-neutral-200 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">01 23 45 67 89</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
