/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // Activer l'optimisation automatique des images
    unoptimized: false,

    // Configuration des formats de sortie
    formats: ['image/webp', 'image/avif'],

    // Tailles d'image générées automatiquement
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],

    // Patterns pour images distantes autorisées
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
        pathname: '/**',
      },
    ],

    // Configuration du loader
    loader: 'default',

    // Qualité d'image par défaut
    minimumCacheTTL: 60,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig