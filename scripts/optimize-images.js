#!/usr/bin/env node

/**
 * Script d'optimisation des images locales
 * Convertit en WebP et compresse les images
 *
 * Usage: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  inputDir: './public/images',
  outputDir: './public/images/optimized',
  quality: 85,
  formats: ['webp', 'original'],
  sizes: [400, 800, 1200, 1920], // Tailles responsive
};

/**
 * Liste des outils de conversion installés
 */
const tools = {
  sharp: false, // Meilleure qualité, plus rapide
  imagemin: false, // Alternative
};

/**
 * Vérifier si les outils sont installés
 */
function checkTools() {
  try {
    require('sharp');
    tools.sharp = true;
    console.log('✅ Sharp détecté - Utilisation pour l\'optimisation');
  } catch {
    console.log('⚠️  Sharp non installé - Installation recommandée:');
    console.log('   npm install sharp');
  }

  try {
    require('imagemin');
    require('imagemin-webp');
    tools.imagemin = true;
    console.log('✅ Imagemin détecté');
  } catch {
    console.log('⚠️  Imagemin non installé');
  }

  if (!tools.sharp && !tools.imagemin) {
    console.log('\n📦 Installez un outil d\'optimisation:');
    console.log('   npm install sharp');
    console.log('   OU');
    console.log('   npm install imagemin imagemin-webp');
  }
}

/**
 * Optimiser avec Sharp
 */
async function optimizeWithSharp(inputPath, outputPath) {
  const sharp = require('sharp');
  const image = sharp(inputPath);

  // Obtenir les métadonnées
  const metadata = await image.metadata();

  // Si c'est déjà une petite image, ne pas redimensionner
  if (metadata.width < 400) {
    await image
      .webp({ quality: CONFIG.quality })
      .toFile(outputPath);
    return;
  }

  // Créer différentes tailles
  for (const size of CONFIG.sizes) {
    if (metadata.width >= size) {
      const filename = path.basename(outputPath, '.webp');
      const sizedPath = path.join(
        path.dirname(outputPath),
        `${filename}-${size}.webp`
      );

      await image
        .resize(size, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: CONFIG.quality })
        .toFile(sizedPath);
    }
  }
}

/**
 * Créer les répertoires de sortie
 */
function ensureOutputDir() {
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    console.log(`📁 Création du répertoire: ${CONFIG.outputDir}`);
  }
}

/**
 * Traiter tous les fichiers d'images
 */
async function processImages() {
  console.log('🚀 Démarrage de l\'optimisation des images...\n');

  checkTools();
  ensureOutputDir();

  if (!tools.sharp && !tools.imagemin) {
    console.log('\n❌ Aucun outil d\'optimisation détecté');
    console.log('Installez Sharp: npm install sharp\n');
    return;
  }

  // Trouver toutes les images
  const extensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const files = fs.readdirSync(CONFIG.inputDir)
    .filter(file => extensions.includes(path.extname(file).toLowerCase()));

  if (files.length === 0) {
    console.log('📭 Aucune image trouvée dans', CONFIG.inputDir);
    return;
  }

  console.log(`📸 ${files.length} image(s) trouvée(s)\n`);

  // Traiter chaque image
  for (const file of files) {
    const inputPath = path.join(CONFIG.inputDir, file);
    const basename = path.basename(file, path.extname(file));
    const outputPath = path.join(CONFIG.outputDir, `${basename}.webp`);

    try {
      const stats = fs.statSync(inputPath);
      const originalSize = (stats.size / 1024).toFixed(2);

      console.log(`⏳ Traitement: ${file} (${originalSize} KB)`);

      if (tools.sharp) {
        await optimizeWithSharp(inputPath, outputPath);
      }

      const newStats = fs.statSync(outputPath);
      const newSize = (newStats.size / 1024).toFixed(2);
      const reduction = ((1 - newSize / originalSize) * 100).toFixed(0);

      console.log(`✅ ${file} optimisé: ${originalSize}KB → ${newSize}KB (${reduction}% réduction)\n`);

    } catch (error) {
      console.error(`❌ Erreur avec ${file}:`, error.message);
    }
  }

  console.log('🎉 Optimisation terminée!');
  console.log(`📁 Images optimisées dans: ${CONFIG.outputDir}`);
  console.log('\n💡 Prochaine étape: Mettre à jour les imports dans le code');
}

// Exécuter
processImages().catch(console.error);
