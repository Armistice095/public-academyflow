# AcademyFlow — Site web officiel

Site vitrine du logiciel **AcademyFlow**, une solution de gestion scolaire pour Windows, macOS et Linux (élèves, caisse, reçus, rapports financiers et documents administratifs), avec ou sans connexion Internet.

Construit avec [Astro](https://astro.build), Tailwind CSS et [Starlight](https://starlight.astro.build) pour la documentation.

## ✨ Contenu du site

- **Accueil** (`/`) — présentation générale du logiciel
- **Fonctionnalités** (`/fonctionnalites`) — détail des fonctionnalités
- **Tarifs** (`/tarifs`) — grille tarifaire
- **Télécharger** (`/telecharger`) — liens de téléchargement (Windows/macOS/Linux) depuis les releases GitHub
- **Contact** (`/contact`) — formulaire de contact
- **Documentation** (`/welcome-to-docs/`) — guides d'utilisation propulsés par Starlight

## 🚀 Démarrage rapide

Prérequis : **Node.js 22** (voir `.nvmrc`).

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Le site est alors accessible sur `http://localhost:4321`.

## 📦 Scripts disponibles

| Commande                | Description                                                                              |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| `npm run dev`           | Démarre le serveur de développement                                                     |
| `npm run build`         | Vérifie les types (`astro check`), build le site, puis minifie le HTML généré (`dist/`) |
| `npm run preview`       | Prévisualise le build de production en local                                            |
| `npm run format:check`  | Vérifie le formatage du code avec Prettier                                              |
| `npm run format:fix`    | Corrige automatiquement le formatage avec Prettier                                      |

## 🌐 Déploiement

Le site est **statique** (pas de backend) et se déploie facilement sur Render, Vercel, Netlify ou tout hébergeur de fichiers statiques.

### Déploiement sur Render

- **Build command** : `npm run build`
- **Publish directory** : `dist`

### ⚠️ À savoir avant de changer de domaine

L'URL du site est codée dans deux fichiers, à mettre à jour si le domaine change (achat d'un nom de domaine personnalisé, changement d'hébergeur, etc.) :

- `astro.config.mjs` → clé `site`
- `src/data_files/constants.ts` → `SITE.url`

Cette URL alimente automatiquement le sitemap, les URLs canoniques, les balises Open Graph et les données structurées SEO — pensez à reconstruire le site (`npm run build`) après modification.

## 📝 Formulaire de contact

Le formulaire de la page `/contact` est actuellement **statique** : il n'envoie aucune donnée nulle part (aucun `action`/`method` ni script de soumission). Le site étant en mode Astro "static" (sans backend), il faudra brancher un service de formulaire sans backend (ex. [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com)) ou prévoir un backend dédié plus tard.

## 📥 Téléchargements

Les liens de la page `/telecharger` pointent vers les [releases GitHub du dépôt public](https://github.com/Armistice095/academyflow_relases).

## 🗂️ Structure du projet

```
src/
├── components/    # Composants Astro réutilisables
├── content/       # Collections de contenu (blog, produits, docs, insights)
├── data_files/    # Constantes globales (SITE, SEO, OG...)
├── layouts/       # Layouts de page
├── pages/         # Routes du site (fichiers .astro)
└── utils/         # Utilitaires (navigation, i18n...)
public/            # Fichiers statiques (logo, images...)
process-html.mjs   # Script de post-build : minification du HTML dans dist/
```

## 🛠️ Stack technique

- [Astro](https://astro.build) 6
- [Tailwind CSS](https://tailwindcss.com) 4
- [Starlight](https://starlight.astro.build) (documentation)
- [GSAP](https://gsap.com) & [Lenis](https://lenis.darkroom.engineering) (animations et scroll fluide)
- [Preline](https://preline.co) (composants UI)

## 📄 Licence

Projet privé — tous droits réservés © AcademyFlow.
