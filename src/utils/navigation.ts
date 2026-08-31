// Menu principal (navbar)
const navBarLinks = [
  { name: 'Accueil', url: '/' },
  { name: 'Fonctionnalités', url: '/fonctionnalites' },
  { name: 'Tarifs', url: '/tarifs' },
  { name: 'Documentation', url: '/welcome-to-docs/' },
  { name: 'Contact', url: '/contact' },
];

// Liens du footer
const footerLinks = [
  {
    section: 'Produit',
    links: [
      { name: 'Fonctionnalités', url: '/fonctionnalites' },
      { name: 'Tarifs', url: '/tarifs' },
      { name: 'Télécharger', url: '/telecharger' },
    ],
  },
  {
    section: 'Support',
    links: [
      { name: 'Documentation', url: '/welcome-to-docs/' },
      { name: 'Renouveler ma licence', url: '/tarifs?renew=1' },
      { name: 'Contact', url: '/contact' },
    ],
  },
];

// Réseaux sociaux affichés dans le footer (mettre le vrai lien Facebook,
// et le lien GitHub pointe vers le dépôt public des téléchargements)
const socialLinks = {
  facebook: '#',
  github: 'https://github.com/Armistice095/academyflow_relases',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
