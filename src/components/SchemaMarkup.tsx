import { siteConfig, services, testimonials } from "@/lib/config";

export default function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressStreet,
      addressLocality: "Genève",
      postalCode: siteConfig.postalCode,
      addressRegion: "GE",
      addressCountry: "CH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.2044,
      longitude: 6.1432,
    },
    image: `${siteConfig.siteUrl}/images/hero-image.png`,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
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
      worstRating: "1",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: t.author,
      },
      reviewBody: t.text,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de bâtiment",
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
    name: s.title,
    description: s.description,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.name,
    },
    areaServed: {
      "@type": "State",
      name: "Canton de Genève",
    },
    ...(s.image && { image: `${siteConfig.siteUrl}${s.image}` }),
  }));

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: siteConfig.siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
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
    </>
  );
}
