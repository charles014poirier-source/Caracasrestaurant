// components/sections/ReviewsSection.tsx
import { ReviewItem } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Star } from 'lucide-react'
import { Button } from '@/components/Button'
import { ArrowRight } from 'lucide-react'

interface ReviewsSectionProps {
  reviews: ReviewItem[]
  rating: string
  reviewCount: string
  googleMapsUrl: string
  config: {
    enabled: boolean
  }
}

export function ReviewsSection({ reviews, rating, reviewCount, googleMapsUrl, config }: ReviewsSectionProps) {
  if (!config.enabled) return null

  return (
    <section className="py-24 bg-background-100">
      <ScrollReveal direction="fade">
        <div className="text-center mb-16">
          <p className="text-secondary-600 font-semibold tracking-wide uppercase mb-3">
            Avis Clients
          </p>
          <h2 className="font-serif text-heading-xl text-neutral-900 mb-4">
            Ce qu'ils disent de nous
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-secondary-500 fill-secondary-500" />
              ))}
            </div>
            <span className="text-3xl font-bold text-neutral-900">{rating}</span>
            <span className="text-neutral-600">sur 5</span>
          </div>
          <p className="text-neutral-600 text-body-lg">
            Plus de {reviewCount} avis vérifiés sur Google et Deliveroo
          </p>
        </div>
      </ScrollReveal>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-background-50 rounded-card p-8 shadow-soft h-full flex flex-col">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-300'}`}
                  />
                ))}
              </div>
              <p className="text-neutral-800 mb-6 text-body leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <div className="pt-5 border-t border-neutral-200">
                <div className="flex items-center gap-3 mb-2">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={`Photo de ${review.name}`}
                      className="w-12 h-12 rounded-full object-cover border-2 border-secondary-200"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center text-white font-semibold text-lg">
                      {review.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-neutral-900 font-semibold text-body">{review.name}</p>
                    <p className="text-neutral-500 text-body-sm">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ScrollReveal direction="fade" delay={0.5}>
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-background-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">M</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-300 to-secondary-500 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">S</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">P</div>
                </div>
                <div className="text-left">
                  <p className="text-neutral-900 font-semibold">Rejoignez nos +{reviewCount} clients satisfaits</p>
                  <p className="text-neutral-600 text-body-sm">Laissez votre avis sur Google</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary-500 fill-secondary-500" />
                ))}
              </div>
              <Button size="lg" className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" asChild>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Lire tous les avis</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
