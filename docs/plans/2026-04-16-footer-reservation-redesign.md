# Design : Refonte de l'encart de réservation du footer

**Date :** 2026-04-16
**Auteur :** Claude Code
**Statut :** Approuvé

## Contexte

L'encart de réservation actuel dans le footer est trop intrusif avec ses animations multiples (pulse, shine, ping) et son fond coloré qui contraste avec le reste du footer. L'objectif est de l'intégrer de manière plus cohérente avec le design global du footer.

## Objectifs

1. **Cohérence visuelle :** L'encart doit s'intégrer harmonieusement avec le gradient secondary-700 → secondary-900 du footer
2. **Sobriété :** Réduire les animations et éléments décoratifs
3. **Efficacité :** Garder un CTA clair et visible pour la conversion
4. **Correction de bug :** Corriger le lien "Caracas" dans la navbar qui ne fonctionne pas

## Design choisi : Approche 2 - Encart intégré au footer

### Apparence visuelle

**Fond et structure :**
- Même gradient que le footer : `bg-gradient-to-br from-secondary-700 via-secondary-800 to-secondary-900`
- Bordure supérieure subtile : `border-t border-white/10`
- Conteneur centré : `max-w-4xl mx-auto`
- Padding : `p-6 md:p-8`

**Disposition :**
- Layout horizontal : flex row avec contenu à gauche et bouton à droite
- Alignement vertical : items-center
- Gap entre éléments : gap-6

**Contenu texte :**
- Icône calendrier simplifiée (sans animations)
- Titre : "Réservez votre table" (font-serif, text-xl, font-bold)
- Sous-titre : "Places limitées • Week-end chargé" (text-sm, text-white/70)

**Bouton CTA :**
- Fond : bg-white
- Texte : text-secondary-700
- Hover : bg-white/90 scale-105
- Contenu : Icône calendrier + "Réserver" + icône flèche
- Border-radius : rounded-xl
- Shadow : shadow-lg hover:shadow-xl

### Éléments supprimés

- ❌ Fond coloré primary-50/emerald-50
- ❌ Animations pulse, shine, ping
- ❌ Effets de glow et de blur décoratifs
- ❌ Pattern overlay
- ❌ Multiple gradient backgrounds

## Implémentation technique

### Fichiers à modifier

1. **components/ui/footer-7.tsx**
   - Remplacer la section "Reservation CTA Banner" (lignes 218-289)
   - Nouveau design intégré au footer

2. **components/Header.tsx**
   - Investigater et corriger le lien "Caracas" non cliquable
   - Vérifier les z-index et événements

### Breakpoints responsive

- **Mobile :** Layout vertical (flex-col) si nécessaire
- **Desktop :** Layout horizontal (flex-row)

## Livrables attendus

1. Encart de réservation redesigné et intégré au footer
2. Lien "Caracas" fonctionnel dans la navbar
3. Tests de navigation sur desktop et mobile
4. Vérification de l'accessibilité (contrast, focus states)

## Critères de succès

- [ ] L'encart est visuellement cohérent avec le reste du footer
- [ ] Le CTA reste clair et accessible
- [ ] Le lien "Caracas" redirige vers la page d'accueil
- [ ] Aucune animation excessive ou distrayante
- [] Responsive fonctionnel sur tous les écrans
