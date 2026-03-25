import { Section, SectionHeader } from '@/components/Section'
import { Button } from '@/components/Button'
import { SignatureCard } from '@/components/Card'
import { ScrollReveal } from '@/components/ScrollReveal'
import { restaurantInfo, signatureDishes, experiences, reviews, galleryImages, events, glossary } from '@/data/restaurant'
import { Star, Clock, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const todayHours = Object.values(restaurantInfo.hours)[new Date().getDay()] || 'Horaires non disponibles'

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-neutral-900">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="Ambiance du restaurant Caracas Bar & Tapas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/75 via-neutral-900/70 to-neutral-900" />
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
            <p className="text-primary-400 font-semibold tracking-wide uppercase mb-4 animate-fade-in">
              Levallois-Perret
            </p>
            <h1 className="font-serif text-display-lg text-white mb-6 animate-slide-up leading-tight">
              {restaurantInfo.tagline}
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-100 mb-8 leading-relaxed animate-slide-up stagger-1">
              {restaurantInfo.description}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 animate-slide-up stagger-2">
              <Button
                size="lg"
                className="!bg-gradient-to-r !from-secondary-400 !to-secondary-600 !text-white !border-0 hover:!shadow-glow hover:!scale-105 hover:!from-secondary-300 hover:!to-secondary-500 transition-all duration-300 !rounded-full relative overflow-hidden group"
                asChild
              >
                <Link href="/menu" className="relative z-10">
                  <span className="relative z-10">La carte</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="!bg-white/10 !backdrop-blur-sm !text-white !border-2 !border-white/30 hover:!bg-white/20 hover:!border-white/50 hover:!scale-105 transition-all duration-300 !rounded-full"
                asChild
              >
                <a href="https://deliveroo.fr/fr/menu/paris/levallois-perret/caracas-levallois-31-rue-henri-barbusse?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share" target="_blank" rel="noopener noreferrer">
                  Click & Collect
                </a>
              </Button>
            </div>

            {/* Quick info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-12 text-neutral-200 text-sm animate-slide-up stagger-3">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-400" />
                <span className="font-medium">Aujourd'hui : {todayHours || 'Fermé'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="font-medium">{restaurantInfo.address.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary-400 fill-primary-400" />
                <span className="font-medium">4.8/5 • 120+ avis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Signatures Section */}
      <Section id="signatures" background="white">
        <ScrollReveal direction="fade" delay={0}>
          <SectionHeader
            title="Nos Signatures"
            subtitle="Les incontournables"
            description="Les plats qui ont fait notre réputation. Une invitation au voyage gustatif."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {signatureDishes.map((dish, index) => (
            <ScrollReveal key={dish.id} direction="up" delay={index * 0.1}>
              <SignatureCard
                {...dish}
              />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal direction="fade" delay={0.4}>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="group relative overflow-hidden shadow-warm hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-bounce-slow rounded-full"
              asChild
            >
              <Link href="/menu" className="flex items-center gap-2 relative">
                <span className="relative z-10">Découvrir toute la carte</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 animate-arrow-slide relative z-10" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* Story Section */}
      <Section id="histoire" background="pattern">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div>
              <p className="text-primary-600 font-semibold tracking-wide uppercase mb-3 text-center lg:text-left">
                Notre Histoire
              </p>
              <h2 className="font-serif text-display-md text-neutral-900 mb-6 text-center lg:text-left">
                De Caracas à Levallois
              </h2>
              <div className="space-y-4 text-neutral-600 text-body-lg leading-relaxed">
                <p>
                  Caracas Bar & Tapas est né de l'amitié d'Igor et Difrines, deux passionnés
                  souhaitant partager la richesse de la cuisine vénézuélienne avec les Parisiens.
                </p>
                <p>
                  Notre mission : vous faire voyager à travers les saveurs authentiques du Venezuela,
                  depuis les arepas du petit-déjeuner jusqu'aux cocktails du soir.
                </p>
                <p>
                  Aujourd'hui installés à Levallois, nous perpétuons cette tradition d'accueil
                  et de partage, où chaque plat raconte une histoire.
                </p>
              </div>

              {/* Glossary */}
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <h4 className="font-serif text-lg text-neutral-900 mb-4 text-center lg:text-left">
                  Petit lexique vénézuélien
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {glossary.map((item, index) => (
                    <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                      <div className="bg-background-50 p-4 rounded-card shadow-soft">
                        <span className="font-semibold text-primary-600">{item.term}</span>
                        <span className="mx-2 text-neutral-400">•</span>
                        <span className="text-neutral-600">{item.definition}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Ambiance du restaurant"
                className="rounded-card shadow-medium w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-primary-500 text-white p-4 lg:p-6 rounded-card shadow-lg">
                <p className="font-serif text-2xl lg:text-3xl font-bold">2015</p>
                <p className="text-xs lg:text-sm">Année de création</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Experience Section */}
      <Section background="background-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {experiences.map((experience, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.15}>
              <div className="text-center group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {experience.icon}
                </div>
                <h3 className="font-serif text-heading-lg text-neutral-900 mb-3">
                  {experience.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="galerie" background="white">
        <ScrollReveal direction="fade">
          <SectionHeader
            title="L'Ambiance"
            subtitle="Un lieu vivant"
            description="Découvrez l'atmosphère chaleureuse de Caracas Bar & Tapas"
          />
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={index} direction="scale" delay={index * 0.08}>
              <div
                className={`relative overflow-hidden rounded-card group ${
                  index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Events Section */}
      <Section id="privatisation" background="background-100">
        <ScrollReveal direction="fade">
          <SectionHeader
            title="Privatisation & Événements"
            subtitle="Vos moments, nos saveurs"
            description="Des expériences uniques pour vos moments spéciaux"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const ctaConfig: {
              text: string
              subtitle: string
              gradient: string
              iconBg: string
            } = {
              'Afterwork & Tapas': {
                text: 'Réserver un jeudi',
                subtitle: 'Dès 19h • Jusqu\'à 20 personnes',
                gradient: 'from-amber-500 to-orange-600',
                iconBg: 'bg-amber-100',
              },
              'Privatisation Étage': {
                text: 'Demander un devis',
                subtitle: 'Étage privé • Jusqu\'à 40 personnes',
                gradient: 'from-emerald-500 to-secondary-600',
                iconBg: 'bg-emerald-100',
              },
              'Traiteur & Cocktails': {
                text: 'Nous contacter',
                subtitle: 'Chez vous • Formules sur mesure',
                gradient: 'from-blue-500 to-primary-600',
                iconBg: 'bg-blue-100',
              },
            }[event.title] || {
              text: 'En savoir plus',
              subtitle: 'Contactez-nous',
              gradient: 'from-secondary-500 to-secondary-600',
              iconBg: 'bg-secondary-100',
            }

            return (
              <ScrollReveal key={index} direction="up" delay={index * 0.12}>
                <div className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden group">
                  {/* Icon header with gradient */}
                  <div className={`relative ${ctaConfig.iconBg} p-8 flex items-center justify-center`}>
                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                      {event.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-serif text-heading-lg text-neutral-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* CTA with subtitle */}
                    <div className="space-y-3">
                      <Button
                        size="lg"
                        className={`w-full bg-gradient-to-r ${ctaConfig.gradient} text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-full`}
                        asChild
                      >
                        <Link href="/contact" className="flex items-center justify-center gap-2">
                          <span>{ctaConfig.text}</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                      <p className="text-center text-sm text-neutral-500 font-medium">
                        {ctaConfig.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom CTA banner */}
        <ScrollReveal direction="fade" delay={0.5}>
          <div className="mt-16 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background image with blur */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
                alt="Événement au restaurant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" />
            </div>

            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
                Un projet d'événement ?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Nous créons des expériences sur mesure pour vos moments spéciaux. Contactez-nous pour en discuter.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="!bg-white !text-neutral-900 hover:!bg-white/90 hover:!scale-105 hover:!shadow-2xl transition-all duration-300 rounded-full px-8 py-4 font-bold text-lg shadow-xl border-2 border-white/30 inline-flex items-center gap-2"
                >
                  <span>Demander un devis gratuit</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:0123456789"
                  className="text-white/90 hover:text-white font-semibold flex items-center gap-2 transition-colors"
                >
                  <span>01 23 45 67 89</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Reviews Section */}
      <Section background="background-100">
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
              <span className="text-3xl font-bold text-neutral-900">4.8</span>
              <span className="text-neutral-600">sur 5</span>
            </div>
            <p className="text-neutral-600 text-body-lg">
              Plus de 120 avis vérifiés sur Google et Deliveroo
            </p>
          </div>
        </ScrollReveal>

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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center text-white font-semibold text-lg">
                    {review.name.charAt(0)}
                  </div>
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
                  <p className="text-neutral-900 font-semibold">Rejoignez nos +120 clients satisfaits</p>
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
                  href="https://www.google.com/maps/place/Caracas/@48.8898654,2.2847768,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66f11b137cef9:0xcf5b8ff7108b4d1a!8m2!3d48.8898619!4d2.2873517!16s%2Fg%2F11rzq5dd89?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Lire tous les avis</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
