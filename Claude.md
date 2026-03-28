# Template site restaurant / coffee shop

Ce projet sert de base réutilisable pour créer des sites de restaurant, coffee shop, brunch, bar ou autres lieux de restauration.

## Objectif principal
Transformer ce projet en starter réutilisable sans modifier son identité visuelle actuelle, puis permettre la création rapide de nouveaux sites à partir de cette structure.

## Règle principale
Toujours conserver la structure globale du site, sauf demande explicite contraire.

## Structure de page attendue
1. Header / navigation
2. Hero
3. Produits ou plats signatures
4. Histoire / concept
5. Galerie / ambiance
6. Services / événements / privatisation
7. Avis clients
8. Footer avec informations pratiques

## Ce qui doit rester stable
- la structure générale des pages
- l’ordre des sections
- la logique des composants
- le responsive
- la hiérarchie des CTA
- la base SEO
- la simplicité du code

## Ce qui peut changer selon le client
- nom de la marque
- catégorie de lieu
- ville / quartier
- textes
- palette de couleurs
- typographies
- images
- produits mis en avant
- témoignages
- contact
- horaires
- liens de réservation ou commande

## Règles de contenu
- Tout le contenu spécifique à une marque doit être stocké dans un fichier de données dédié
- Ne pas hardcoder les textes d’un client dans plusieurs composants
- Réutiliser les composants existants avant d’en créer de nouveaux
- Favoriser des variantes simples plutôt que des sections entièrement nouvelles
- Garder un code facile à maintenir et à dupliquer

## Règles de design
- Conserver un rendu éditorial, élégant et visuel
- Préserver une navigation simple
- Maintenir une hiérarchie typographique claire
- Garder une approche mobile-first
- Respecter les bases d’accessibilité

## Règles par section

### Header
- logo ou nom de marque
- navigation principale
- CTA principal visible

### Hero
- localisation
- titre principal fort
- texte d’introduction court
- CTA principal
- CTA secondaire facultatif
- infos utiles facultatives : note, adresse, horaires du jour

### Produits signatures
- liste courte et éditorialisée
- image, nom, prix, description courte, badge facultatif

### Histoire / concept
- récit de marque ou philosophie du lieu
- possibilité d’ajouter points forts, chiffres clés, mini lexique ou précisions produits

### Galerie / ambiance
- section très visuelle
- grille ou composition simple à maintenir

### Services / événements / privatisation
- formats possibles : brunch, atelier, afterwork, privatisation, click & collect, à emporter, traiteur
- chaque bloc peut inclure titre, texte, CTA et détails utiles

### Avis clients
- afficher une synthèse de note si pertinent
- afficher quelques avis courts
- garder un ton crédible et simple

### Footer
- adresse
- téléphone
- email
- horaires
- liens utiles
- navigation secondaire

## SEO
Chaque site doit pouvoir adapter :
- le title
- la meta description
- les contenus Open Graph
- les informations locales utiles

## Images
- utiliser des données structurées pour les images
- prévoir des alt text utiles
- conserver une cohérence de formats d’image

## Quand tu refactorises ce projet
- ne change pas le design
- ne change pas l’ordre des sections
- identifie tout le contenu spécifique à Caracas
- déplace ce contenu dans un fichier data dédié
- fais consommer ces données par les sections existantes
- garde le résultat simple et propre

## Quand tu crées un nouveau site à partir de ce template
- réutilise l’architecture existante
- crée un nouveau fichier de données client
- adapte textes, images, palette, CTA, coordonnées, horaires et SEO
- évite toute complexité inutile
- résume toujours les fichiers créés ou modifiés