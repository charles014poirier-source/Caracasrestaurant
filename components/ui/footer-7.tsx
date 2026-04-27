import React from "react";
import { FooterReservationCTA } from '@/components/FooterReservationCTA'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactData, BrandingConfig } from '@/data/types/client'

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
  contactInfo?: ContactData;
  hours?: Record<string, string | null>;
  config?: BrandingConfig;
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
  contactInfo,
  hours,
  config,
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
              <img
                src="/logo/cropped-footer-logo.png"
                alt={config?.name || 'Caracas Bar & Tapas'}
                className="h-16 w-auto"
              />
            </a>
            <p className="text-white/80 leading-relaxed mb-6">
              {config?.description || description}
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              {contactInfo?.address && (
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary-300" />
                  <span className="text-sm">{contactInfo.address.full}</span>
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

        {/* Reservation CTA */}
        <FooterReservationCTA />

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
