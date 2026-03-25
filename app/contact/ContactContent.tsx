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
                <div className="flex gap-3">
                  <a
                    href={restaurantInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-background-100 text-neutral-900 font-medium hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href={restaurantInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-background-100 text-neutral-900 font-medium hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8">
              <div className="aspect-video w-full rounded-card bg-background-100 flex items-center justify-center">
                <a
                  href={restaurantInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-background-50 rounded-card shadow-soft hover:shadow-medium transition-shadow"
                >
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span className="font-medium">Voir sur Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Access Section */}
      <Section background="background-100">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="Comment nous rejoindre"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background-50 rounded-card p-6">
              <div className="text-3xl mb-3">🚇</div>
              <h4 className="font-serif text-lg text-neutral-900 mb-2">Métro</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Ligne 3 : Station Anatole France<br />
                Ligne 13 : Station Pont de Levallois
              </p>
            </div>
            <div className="bg-background-50 rounded-card p-6">
              <div className="text-3xl mb-3">🚌</div>
              <h4 className="font-serif text-lg text-neutral-900 mb-2">Bus</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Lignes 94, 163, 175, 274<br />
                Arrêt : Anatole France - Jean Jaurès
              </p>
            </div>
            <div className="bg-background-50 rounded-card p-6">
              <div className="text-3xl mb-3">🚗</div>
              <h4 className="font-serif text-lg text-neutral-900 mb-2">Voiture</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Parking public : Rue de la République<br />
                Parking Kléber : 5 min à pied
              </p>
            </div>
            <div className="bg-background-50 rounded-card p-6">
              <div className="text-3xl mb-3">🚲</div>
              <h4 className="font-serif text-lg text-neutral-900 mb-2">Vélib</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Station Anatole France<br />
                Station Jean Jaurès
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
