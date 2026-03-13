/* ============================================================
   BUSINESS DATA — Edit this file to customize all site content
   ============================================================ */

// ─── Company Info ──────────────────────────────────────────
export const siteConfig = {
  name: "[NomBâtiment]",
  nameParts: { prefix: "[Nom", accent: "Bâtiment", suffix: "]" },
  tagline: "Entreprise de Bâtiment à Genève",
  description:
    "Votre partenaire de confiance pour tous vos travaux de bâtiment dans le canton de Genève. Qualité, ponctualité et transparence depuis [année].",
  phone: "+41 76 394 42 18",
  phoneHref: "tel:+41763944218",
  email: "contact@example.ch",
  emailDisplay: "contact@[domaine].ch",
  address: "Genève, Suisse",
  mapsUrl: "https://maps.google.com/?q=Gen%C3%A8ve+Suisse",
  foundedYear: "[année]",
  copyright: "© 2026 [NomBâtiment] — Tous droits réservés",
  designCredit: "TESO",
};

// ─── Navigation ────────────────────────────────────────────
export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Processus" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#avis", label: "Avis" },
];

// ─── Hero ──────────────────────────────────────────────────
export const heroConfig = {
  tag: "Entreprise de Bâtiment à Genève",
  titleLine1: "L'excellence au service",
  titleLine2: "de vos",
  titleAccent: "espaces",
  description:
    "Plâtrerie, peinture, isolation et rénovation complète. Des professionnels qualifiés, des résultats irréprochables, dans tout le canton de Genève.",
  ctaPrimary: "Demander un Devis",
  ctaSecondary: "Nos Réalisations",
  statNumber: "15+",
  statLabel: "Ans d'expérience",
  image: "/images/hero-image.png",
};

// ─── Trust Bar ─────────────────────────────────────────────
export type TrustIcon = "Shield" | "Clock" | "CheckCircle" | "Users";

export const trustItems: { icon: TrustIcon; text: string }[] = [
  { icon: "Shield", text: "Entreprise certifiée & assurée" },
  { icon: "Clock", text: "Respect strict des délais" },
  { icon: "CheckCircle", text: "Devis gratuit sous 48h" },
  { icon: "Users", text: "Équipe qualifiée locale" },
];

// ─── Services ──────────────────────────────────────────────
export const servicesConfig = {
  tag: "Nos Prestations",
  title: "Tous vos travaux de\nsecond œuvre",
  subtitle:
    "Du rafraîchissement à la rénovation complète, nous maîtrisons l'ensemble des corps de métier du bâtiment intérieur et extérieur.",
};

export type ServiceIcon = "Box" | "RectangleHorizontal" | "Flag";

export interface Service {
  title: string;
  description: string;
  image?: string;
  icon?: ServiceIcon;
  items: string[];
}

export const services: Service[] = [
  {
    title: "Peinture",
    description:
      "Peinture intérieure et extérieure pour appartements, villas, bureaux et immeubles.",
    image: "/images/service-peinture.png",
    items: [
      "Peinture murale & plafonds",
      "Façades & boiseries",
      "Peinture décorative & effets",
      "Laquage & vernissage",
    ],
  },
  {
    title: "Plâtrerie & Gypserie",
    description:
      "Pose de cloisons, faux-plafonds et travaux de plâtrerie pour vos aménagements.",
    image: "/images/service-platrerie.png",
    items: [
      "Cloisons sèches & placo",
      "Faux-plafonds suspendus",
      "Doublage & habillage",
      "Enduits & lissage",
    ],
  },
  {
    title: "Isolation",
    description:
      "Solutions d'isolation thermique et acoustique pour un meilleur confort et des économies d'énergie.",
    image: "/images/service-isolation.png",
    items: [
      "Isolation thermique intérieure",
      "Isolation phonique / acoustique",
      "Isolation de façades",
      "Isolation des combles",
    ],
  },
  {
    title: "Rénovation Complète",
    description:
      "Rénovation d'appartements, bureaux et locaux commerciaux de A à Z.",
    image: "/images/service-renovation.png",
    items: [
      "Rénovation intérieure totale",
      "Transformation d'espaces",
      "Aménagement de combles",
      "Rénovation salle de bains & cuisine",
    ],
  },
  {
    title: "Papier Peint & Revêtements",
    description:
      "Pose de papier peint, revêtements muraux décoratifs et tapisserie.",
    image: "/images/service-wallpaper.png",
    items: [
      "Papier peint classique & design",
      "Revêtements muraux textiles",
      "Toile de verre",
      "Crépi décoratif",
    ],
  },
  {
    title: "Façades & Crépissage",
    description:
      "Ravalement, crépissage et entretien de façades pour valoriser votre bien immobilier.",
    image: "/images/service-facades.png",
    items: [
      "Ravalement de façade",
      "Crépissage & enduit extérieur",
      "Nettoyage haute pression",
      "Traitement hydrofuge",
    ],
  },
];

// ─── Process ───────────────────────────────────────────────
export const processConfig = {
  tag: "Comment ça marche",
  title: "Un processus rigoureux\net transparent",
  subtitle:
    "De votre premier appel à la réception des travaux, chaque étape est maîtrisée.",
};

export const processSteps = [
  {
    number: "01",
    title: "Contact & Visite",
    description:
      "Prise de contact par téléphone ou formulaire. Visite sur place gratuite pour évaluer vos besoins.",
  },
  {
    number: "02",
    title: "Devis Détaillé",
    description:
      "Nous vous remettons un devis transparent et complet sous 48 heures, sans engagement.",
  },
  {
    number: "03",
    title: "Réalisation",
    description:
      "Notre équipe réalise les travaux avec rigueur, propreté et respect des délais convenus.",
  },
  {
    number: "04",
    title: "Réception & Garantie",
    description:
      "Vérification finale avec vous. Garantie sur tous nos travaux et suivi après-vente.",
  },
];

// ─── Portfolio ─────────────────────────────────────────────
export const portfolioConfig = {
  tag: "Réalisations",
  title: "Nos derniers chantiers",
  subtitle:
    "Découvrez quelques-uns de nos projets récents dans le canton de Genève.",
};

export const portfolioItems = [
  { title: "Rénovation appartement", location: "Genève centre — 120m²", image: "/images/portfolio-1.png" },
  { title: "Peinture & isolation", location: "Carouge — Villa", image: "/images/portfolio-2.png" },
  { title: "Bureaux commerciaux", location: "Lancy — 250m²", image: "/images/portfolio-3.png" },
  { title: "Façade & crépissage", location: "Meyrin — Immeuble", image: "/images/portfolio-4.png" },
  { title: "Salle de bains complète", location: "Vernier — Appartement", image: "/images/portfolio-5.jpg" },
];

// ─── Stats ─────────────────────────────────────────────────
export const stats = [
  { target: 15, suffix: "+", label: "Ans d'expérience" },
  { target: 500, suffix: "+", label: "Projets réalisés" },
  { target: 100, suffix: "%", label: "Clients satisfaits" },
  { target: 48, suffix: "h", label: "Heures pour un devis" },
];

// ─── Testimonials ──────────────────────────────────────────
export const testimonialsConfig = {
  tag: "Témoignages",
  title: "La confiance de nos clients",
};

export const testimonials = [
  {
    text: "Travail soigné, équipe professionnelle et ponctuelle. La rénovation de notre appartement à Plainpalais a été réalisée dans les délais et avec une finition impeccable.",
    author: "Marie L.",
    initials: "ML",
    project: "Rénovation appartement — Plainpalais",
  },
  {
    text: "Devis clair et respecté à la lettre. L'isolation de notre villa nous a permis de réduire significativement notre facture énergétique. Professionnalisme remarquable.",
    author: "Philippe D.",
    initials: "PD",
    project: "Isolation thermique — Cologny",
  },
  {
    text: "Réactivité exemplaire pour les travaux de peinture de nos bureaux. Tout a été réalisé le week-end pour ne pas perturber notre activité. Je recommande vivement.",
    author: "Sophie B.",
    initials: "SB",
    project: "Peinture bureaux — Acacias",
  },
];

// ─── CTA ───────────────────────────────────────────────────
export const ctaConfig = {
  tag: "Contactez-nous",
  title: "Vous avez un projet ?\nParlons-en.",
  subtitle:
    "Devis gratuit et sans engagement. Nous intervenons dans tout le canton de Genève.",
  cta: "Demander un Devis Gratuit",
};

// ─── Footer ────────────────────────────────────────────────
export const footerServices = [
  "Peinture",
  "Plâtrerie",
  "Isolation",
  "Rénovation",
  "Papier peint",
  "Façades",
];

export const footerCompany = [
  { label: "À propos", href: "#top" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Témoignages", href: "#avis" },
  { label: "Contact", href: "#contact" },
];
