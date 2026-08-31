import ogImageSrc from '@images/social.png';

export const SITE = {
  title: 'AcademyFlow',
  tagline: 'La gestion scolaire, simplifiée',
  description:
    "AcademyFlow est un logiciel de gestion scolaire pour Windows, macOS et Linux : élèves, caisse, reçus, rapports financiers et documents administratifs, le tout en un seul endroit, avec ou sans connexion Internet.",
  description_short:
    'Le logiciel tout-en-un pour gérer les élèves, la caisse et les documents administratifs de votre établissement.',
  // TODO: remplacer par le vrai nom de domaine une fois acheté/configuré
  url: 'https://public-academyflow.onrender.com',
  author: 'AcademyFlow',
};

// Backend de commande (création de licence / paiement PawaPay).
// Voir doc API fournie par l'équipe backend pour le détail des endpoints.
export const BACKEND = {
  // TODO: remplacer par le domaine définitif si un domaine personnalisé est mis devant Render.
  baseUrl: 'https://backend-academyflow.onrender.com',
};

export const SEO = {
  title: `${SITE.title} — ${SITE.tagline}`,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    inLanguage: 'fr-FR',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Windows, macOS, Linux',
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'fr_FR',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title} : Gestion des élèves, de la caisse et des reçus`,
  description:
    "AcademyFlow centralise la gestion des élèves, des paiements, des reçus et des rapports financiers de votre établissement, avec un mode hors ligne fiable. Téléchargez-le pour Windows, macOS ou Linux.",
  image: ogImageSrc,
};
