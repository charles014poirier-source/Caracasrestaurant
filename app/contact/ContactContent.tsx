'use client'

import { useState } from 'react'
import { Section, SectionHeader } from '@/components/Section'
import { Button } from '@/components/Button'
import { restaurantInfo } from '@/data/restaurant'
import { MapPin, Phone, Mail, Clock, Send, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    type: 'reservation',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    // Reset form or show success message
    alert('Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: '',
      type: 'reservation',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
            Contact & Accès
          </h1>
          <p className="text-body-lg text-neutral-600">
            Réservez votre table ou contactez-nous pour une privatisation
          </p>
        </div>
      </Section>

      {/* Reservation Section */}
      <section id="reservation" className="py-section bg-background-100 bg-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary-600 font-semibold tracking-wide uppercase mb-3">
                Réservation
              </p>
              <h2 className="font-serif text-display-md text-neutral-900 mb-4">
                Réservez votre table
              </h2>
              <p className="text-neutral-600">
                Pour garantir votre place, nous vous recommandons de réserver,
                especially le week-end.
              </p>
            </div>

            <div className="bg-background-50 rounded-card shadow-warm p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors"
                      placeholder="jean@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-neutral-900 mb-2">
                      Date souhaitée *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors"
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-neutral-900 mb-2">
                      Nombre de personnes *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                      <option value="5">5 personnes</option>
                      <option value="6">6 personnes</option>
                      <option value="7-10">7-10 personnes</option>
                      <option value="10+">Plus de 10 personnes</option>
                    </select>
                  </div>

                  {/* Type */}
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-neutral-900 mb-2">
                      Type de demande
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors"
                    >
                      <option value="reservation">Réservation</option>
                      <option value="privatisation">Privatisation</option>
                      <option value="traiteur">Traiteur</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors resize-none"
                    placeholder="Anniversaire, régime alimentaire, demande spéciale..."
                  />
                </div>

                {/* Submit */}
                <Button type="submit" size="lg" fullWidth isLoading={isSubmitting}>
                  <Send className="w-5 h-5" />
                  Envoyer la demande
                </Button>

                <p className="text-sm text-neutral-600 text-center">
                  Vous recevrez une confirmation par email sous 24h.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Address & Hours */}
          <div>
            <h3 className="font-serif text-heading-xl text-neutral-900 mb-8">
              Informations pratiques
            </h3>

            {/* Address */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Adresse</h4>
                  <address className="not-italic text-neutral-600 leading-relaxed">
                    {restaurantInfo.address.street}<br />
                    {restaurantInfo.address.city}
                  </address>
                  <a
                    href={restaurantInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Obtenir l'itinéraire →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">Horaires d'ouverture</h4>
                  <ul className="space-y-1 text-neutral-600 text-sm">
                    {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                      <li key={day} className="flex justify-between min-w-[200px]">
                        <span className="capitalize">{day}</span>
                        <span className={hours === null ? 'text-accent-500' : 'font-medium'}>
                          {hours || 'Fermé'}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-heading-xl text-neutral-900 mb-8">
              Nous contacter
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Téléphone</h4>
                  <a
                    href={`tel:${restaurantInfo.contact.phoneLink}`}
                    className="text-neutral-600 hover:text-primary-600 transition-colors text-lg"
                  >
                    {restaurantInfo.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                  <a
                    href={`mailto:${restaurantInfo.contact.email}`}
                    className="text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    {restaurantInfo.contact.email}
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="pt-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Suivez-nous</h4>
                <div className="flex gap-2">
                  {/* Instagram */}
                  <a
                    href={restaurantInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm">Instagram</span>
                  </a>

                  {/* Facebook */}
                  <a
                    href={restaurantInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8">
              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video w-full bg-gradient-to-br from-slate-700 to-slate-900 relative">
                  {/* Map background pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <img
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                      alt="Google Maps"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-white font-serif text-xl mb-2">
                        Caracas Bar & Tapas
                      </h4>
                      <p className="text-white/80 text-sm mb-4">
                        {restaurantInfo.address.street}, {restaurantInfo.address.city}
                      </p>
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-semibold shadow-lg group-hover:bg-white/90 transition-colors">
                        <span>Ouvrir dans Google Maps</span>
                        <MapPin className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Access Section */}
      <Section background="background-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold tracking-wide uppercase mb-3">
              Accès
            </p>
            <h2 className="font-serif text-display-md text-neutral-900 mb-4">
              Comment nous rejoindre
            </h2>
            <p className="text-neutral-600">
              Situé à Levallois-Perret, facilement accessible depuis Paris
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Métro */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Métro</h3>
                  <div className="space-y-1 text-sm text-neutral-600">
                    <p>Ligne 3 : Anatole France</p>
                    <p>Ligne 13 : Pont de Levallois</p>
                    <p className="text-neutral-500 mt-2">2 min à pied</p>
                  </div>
                </div>
              </div>

              {/* Bus */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Bus</h3>
                  <div className="space-y-1 text-sm text-neutral-600">
                    <p>Lignes 94, 163, 175, 274</p>
                    <p className="text-neutral-500 mt-2">Arrêt Anatole France - Jean Jaurès</p>
                  </div>
                </div>
              </div>

              {/* Voiture */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Voiture</h3>
                  <div className="space-y-1 text-sm text-neutral-600">
                    <p>Parking Rue de la République</p>
                    <p>Parking Kléber</p>
                    <p className="text-neutral-500 mt-2">5 min à pied</p>
                  </div>
                </div>
              </div>

              {/* Vélib */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Vélib'</h3>
                  <div className="space-y-1 text-sm text-neutral-600">
                    <p>Station Anatole France</p>
                    <p>Station Jean Jaurès</p>
                    <p className="text-neutral-500 mt-2">50-150 mètres</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
