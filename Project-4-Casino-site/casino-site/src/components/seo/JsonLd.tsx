import type { Game } from "@/lib/games-data";

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CasinoGuide",
    description:
      "Expert reviews, download guides, and strategies for India's top online casino games.",
    url: "https://casinoguide.example.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://casinoguide.example.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CasinoGuide",
    url: "https://casinoguide.example.com",
    logo: "https://casinoguide.example.com/logo.png",
    description:
      "Independent casino game reviews, download guides, and responsible gambling resources.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@casinoguide.example.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function GamePageJsonLd({ game }: { game: Game }) {
  const baseUrl = "https://casinoguide.example.com";
  const pageUrl = `${baseUrl}/games/${game.slug}`;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${game.name} Review – Download Guide & Expert Tips`,
    description: game.description,
    url: pageUrl,
    dateModified: game.lastUpdated,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Games", item: `${baseUrl}/games` },
        { "@type": "ListItem", position: 3, name: game.name, item: pageUrl },
      ],
    },
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${game.name} Expert Review`,
    reviewBody: game.expertReview,
    reviewRating: {
      "@type": "Rating",
      ratingValue: game.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      "@type": "Person",
      name: game.expertName,
      jobTitle: game.expertTitle,
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: game.name,
      applicationCategory: "GameApplication",
      operatingSystem: game.platforms.join(", "),
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: game.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
