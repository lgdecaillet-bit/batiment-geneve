import { site, services, testimonials } from "@/lib/config";

export default function SchemaMarkup() {
  const business = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: site.description,
    url: site.siteUrl,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Genève",
      postalCode: site.postalCode,
      addressRegion: "GE",
      addressCountry: "CH",
    },
    geo: { "@type": "GeoCoordinates", latitude: 46.2044, longitude: 6.1432 },
    image: `${site.siteUrl}/images/hero-image.png`,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    areaServed: {
      "@type": "State",
      name: "Canton de Genève",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(testimonials.length),
      bestRating: "5",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: t.author },
      reviewBody: t.text,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((s, i) => ({
        "@type": "OfferCatalog",
        name: s.title,
        description: s.description,
        position: i + 1,
      })),
    },
  };

  const serviceSchemas = services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.title,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: site.name,
      telephone: site.phone,
      url: site.siteUrl,
    },
    areaServed: {
      "@type": "State",
      name: "Canton de Genève",
    },
    description: s.description,
  }));

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: site.siteUrl,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quels services proposez-vous à Genève ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous proposons des services de plâtrerie, peinture, gypserie, isolation thermique et acoustique, rénovation complète, papier peint et revêtements, ainsi que le ravalement et crépissage de façades dans tout le canton de Genève.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte un devis ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le devis est entièrement gratuit et sans engagement. Nous nous déplaçons sur place et vous recevez un devis détaillé sous 48 heures.",
        },
      },
      {
        "@type": "Question",
        name: "Dans quelles communes de Genève intervenez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons dans tout le canton de Genève : Genève centre, Carouge, Lancy, Meyrin, Vernier, Onex, Thônex, Chêne-Bougeries, Cologny, Grand-Saconnex et toutes les communes environnantes.",
        },
      },
      {
        "@type": "Question",
        name: "Comment nous contacter ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Vous pouvez nous contacter par téléphone au ${site.phone}, par email à ${site.email}, ou via WhatsApp pour une réponse rapide.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
