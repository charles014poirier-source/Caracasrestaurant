import React from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";

interface Footer7Props {
  logo?: {
    url: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
  contactInfo?: {
    address?: string;
    phone?: string;
    email?: string;
  };
  hours?: Record<string, string | null>;
}

const defaultSections = [
  {
    title: "Navigation",
    links: [
      { name: "Menu", href: "/menu" },
      { name: "Notre histoire", href: "/#histoire" },
      { name: "Galerie", href: "/#galerie" },
      { name: "Privatisation", href: "/#privatisation" },
    ],
  },
  {
    title: "Liens utiles",
    links: [
      { name: "Mentions légales", href: "/mentions-legales" },
      { name: "Confidentialité", href: "/confidentialite" },
    ],
  },
];

const hours = {
  lundi: '19h00 - 23h00',
  mardi: null,
  mercredi: '19h00 - 23h00',
  jeudi: '19h00 - 00h00',
  vendredi: '19h00 - 00h00',
  samedi: '18h00 - 00h00',
  dimanche: null,
};

const defaultSocialLinks = [
  {
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/holacaracas.paris/",
    label: "Instagram"
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    href: "https://www.facebook.com/caracas.bar.tapas",
    label: "Facebook"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/company/caracas-paris/",
    label: "LinkedIn"
  },
];

const defaultLegalLinks = [
  { name: "Mentions légales", href: "/mentions-legales" },
  { name: "Politique de confidentialité", href: "/confidentialite" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    title: "Caracas Bar & Tapas",
  },
  sections = defaultSections,
  description = "Cuisine vénézuélienne & tapas festives. Inspiré de Caracas, revisité à Paris.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Caracas Bar & Tapas. Tous droits réservés.",
  legalLinks = defaultLegalLinks,
  contactInfo = {
    address: "123 Rue de Paris, 92300 Levallois-Perret",
    phone: "01 23 45 67 89",
    email: "contact@caracas-bar-tapas.fr",
  },
}: Footer7Props) => {
  return (
    <footer className="bg-gradient-to-br from-secondary-700 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        {/* Logo and description */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="flex-1 max-w-md">
            <a href={logo.url} className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold text-white/90 tracking-tight">
                Caracas<span className="text-white/60">.</span>
              </span>
            </a>
            <p className="text-white/80 leading-relaxed mb-6">
              {description}
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              {contactInfo?.address && (
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary-300" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              )}
              {contactInfo?.phone && (
                <div className="flex items-center gap-3 text-white/80">
                  <Phone className="w-5 h-5 flex-shrink-0 text-secondary-300" />
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-sm hover:text-white transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              )}
              {contactInfo?.email && (
                <div className="flex items-center gap-3 text-white/80">
                  <Mail className="w-5 h-5 flex-shrink-0 text-secondary-300" />
                  <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              )}
            </div>

            {/* Social links */}
            <ul className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <li key={idx}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation sections */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-semibold text-white">{section.title}</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a
                          href={link.href}
                          className="font-medium hover:text-white transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Hours */}
          {hours && (
            <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="mb-5 font-semibold text-white flex items-center gap-2 text-base">
                <Clock className="w-5 h-5 text-secondary-300" />
                Horaires d'ouverture
              </h3>
              <div className="space-y-1">
                {Object.entries(hours).map(([day, dayHours]) => (
                  <div key={day} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                    <span className="text-sm text-white/90 capitalize font-medium min-w-[100px]">
                      {day}
                    </span>
                    <span className={`text-sm font-semibold ${
                      dayHours === null
                        ? 'text-accent-400'
                        : 'text-white'
                    }`}>
                      {dayHours || 'Fermé'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Reservation CTA Banner */}
        <div className="mt-12 mb-8">
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary-50 to-emerald-50 border-2 border-primary-200/50 shadow-xl">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary-200/20 to-primary-200/20 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath fill-rule='evenodd' d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left side - Content */}
                <div className="flex items-center gap-4 flex-1">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-emerald-600 rounded-2xl animate-pulse" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-serif text-xl md:text-2xl font-bold text-neutral-900 mb-1">
                      Réservez votre table
                    </h4>
                    <p className="text-neutral-600 text-sm md:text-base">
                      Places limitées • Week-end chargé
                    </p>
                  </div>
                </div>

                {/* Right side - CTA Button */}
                <a
                  href="/contact#reservation"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 via-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-base shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Shine effect */}
                  <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-shine" />

                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-ping opacity-0 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-lg">Réserver</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
            <p>{copyright}</p>
            <ul className="flex flex-wrap gap-6">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
