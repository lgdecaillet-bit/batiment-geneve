// ═══════════════════════════════════════════════════════════
// Business data — Edit this file to customize all site content
// ═══════════════════════════════════════════════════════════

export const site = {
  name: "(Nom Entreprise)",
  siteUrl: "https://example.com",
  tagline: "Plâtrerie · Peinture",
  description:
    "Entreprise genevoise spécialisée en plâtrerie, peinture, gypserie, isolation et rénovation. Devis gratuit sous 48h.",
  phone: "+41 76 394 42 18",
  phoneHref: "tel:+41763944218",
  whatsapp: "41763944218",
  email: "(ton email)",
  address: "Genève, Suisse",
  postalCode: "1200",
  mapsUrl: "https://maps.google.com/?q=Gen%C3%A8ve+Suisse",
  copyright: "© 2026 (Nom Entreprise) — Tous droits réservés",
  designCredit: "TESO",
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Processus" },
  { href: "#equipe", label: "Équipe" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#avis", label: "Avis" },
];

export const heroData = {
  label: "(Nom Entreprise)",
  titleStart: "Plâtrerie, peinture",
  titleEnd: "& rénovation",
  titleItalic: "à Genève",
  description:
    "Votre partenaire pour tous vos travaux de second œuvre. Qualité suisse, résultats impeccables, délais respectés.",
  image: "/images/hero-image.png",
};

export const heroStats = [
  { target: 15, suffix: "+", label: "Ans d'expérience" },
  { target: 500, suffix: "+", label: "Projets réalisés" },
  { target: 100, suffix: "%", label: "Satisfaction" },
  { target: 48, suffix: "h", label: "Devis gratuit" },
];

export const servicesHeader = {
  tag: "Nos Prestations",
  title: "Tous vos travaux de second œuvre",
};

export interface ServiceItem {
  num: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

export const services: ServiceItem[] = [
  {
    num: "01",
    title: "Peinture",
    description:
      "Peinture intérieure et extérieure pour appartements, villas, bureaux et immeubles dans tout le canton de Genève.",
    tags: ["Murs & plafonds", "Façades", "Effets décoratifs", "Laquage"],
    image: "/images/service-peinture.png",
  },
  {
    num: "02",
    title: "Plâtrerie & Gypserie",
    description:
      "Pose de cloisons, faux-plafonds et travaux de plâtrerie pour vos projets d'aménagement et de rénovation.",
    tags: ["Cloisons sèches", "Faux-plafonds", "Doublage", "Enduits"],
    image: "/images/service-platrerie.png",
  },
  {
    num: "03",
    title: "Isolation",
    description:
      "Solutions d'isolation thermique et acoustique pour un meilleur confort et des économies d'énergie durables.",
    tags: ["Thermique", "Acoustique", "Façades", "Combles"],
    image: "/images/service-isolation.png",
  },
  {
    num: "04",
    title: "Rénovation Complète",
    description:
      "Rénovation d'appartements, bureaux et locaux commerciaux de A à Z. Un seul interlocuteur pour tous vos travaux.",
    tags: ["Intérieur total", "Salle de bains", "Cuisine", "Combles"],
    image: "/images/service-renovation.png",
  },
  {
    num: "05",
    title: "Papier Peint & Revêtements",
    description:
      "Pose de papier peint, revêtements muraux décoratifs et tapisserie pour personnaliser vos intérieurs.",
    tags: ["Classique & design", "Textiles", "Toile de verre", "Crépi"],
    image: "/images/service-wallpaper.png",
  },
  {
    num: "06",
    title: "Façades & Crépissage",
    description:
      "Ravalement, crépissage et entretien de façades pour valoriser et protéger votre bien immobilier.",
    tags: ["Ravalement", "Crépissage", "Nettoyage HP", "Hydrofuge"],
    image: "/images/service-facades.png",
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Contact",
    description:
      "Appelez-nous ou envoyez un email. Visite sur place gratuite et sans engagement.",
  },
  {
    num: "02",
    title: "Devis",
    description:
      "Devis détaillé, transparent et complet sous 48 heures. Aucune surprise, aucun engagement.",
  },
  {
    num: "03",
    title: "Travaux",
    description:
      "Notre équipe réalise les travaux avec rigueur, propreté et respect absolu des délais convenus.",
  },
  {
    num: "04",
    title: "Garantie",
    description:
      "Vérification finale avec vous. Garantie complète sur tous nos travaux et suivi après-vente réactif.",
  },
];

export const aboutFeatures = [
  {
    icon: "Shield" as const,
    title: "Certifiée & assurée",
    text: "Entreprise enregistrée, travaux garantis et couverts.",
  },
  {
    icon: "Clock" as const,
    title: "Délais respectés",
    text: "Planning strict, communication proactive, zéro retard.",
  },
  {
    icon: "Users" as const,
    title: "Équipe locale",
    text: "Professionnels qualifiés basés dans le canton de Genève.",
  },
  {
    icon: "CheckCircle" as const,
    title: "Devis gratuit",
    text: "Estimation transparente sous 48h, sans engagement.",
  },
];

export const portfolioItems = [
  { title: "Rénovation appartement", location: "Genève centre — 120m²", image: "/images/portfolio-1.png" },
  { title: "Peinture & isolation", location: "Carouge — Villa", image: "/images/portfolio-2.png" },
  { title: "Bureaux commerciaux", location: "Lancy — 250m²", image: "/images/portfolio-3.png" },
  { title: "Plâtrerie complète", location: "Meyrin — Immeuble", image: "/images/portfolio-4.png" },
  { title: "Salle de bains", location: "Vernier — Appartement", image: "/images/portfolio-5.jpg" },
];

export const testimonials = [
  {
    text: "Travail soigné, équipe professionnelle et ponctuelle. La rénovation de notre appartement à Plainpalais a été réalisée dans les délais et avec une finition impeccable.",
    author: "Marie L.",
    initials: "ML",
    project: "Rénovation — Plainpalais",
  },
  {
    text: "Devis clair et respecté à la lettre. L'isolation de notre villa nous a permis de réduire significativement notre facture énergétique. Professionnalisme remarquable.",
    author: "Philippe D.",
    initials: "PD",
    project: "Isolation — Cologny",
  },
  {
    text: "Réactivité exemplaire pour les travaux de peinture de nos bureaux. Tout a été réalisé le week-end pour ne pas perturber notre activité. Je recommande vivement.",
    author: "Sophie B.",
    initials: "SB",
    project: "Peinture — Acacias",
  },
];

export const footerServices = [
  "Peinture",
  "Plâtrerie",
  "Gypserie",
  "Isolation",
  "Rénovation",
];

export const footerNav = [
  { label: "Accueil", href: "#top" },
  { label: "Équipe", href: "#equipe" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Témoignages", href: "#avis" },
  { label: "Contact", href: "#contact" },
];
