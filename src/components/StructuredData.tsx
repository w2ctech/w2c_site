export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "w2ctech",
    url: "https://w2ctech.com",
    description:
      "Digital agency providing web design, development, and marketing services. Team of 40 experts with 12+ years of experience.",
    email: "info@w2ctech.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1234 N Spring St",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90012",
      addressCountry: "US",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 40,
    },
    foundingDate: "2014",
    sameAs: [
      "https://twitter.com/w2ctech",
      "https://facebook.com/w2ctech",
      "https://linkedin.com/company/w2ctech",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@w2ctech.com",
      availableLanguage: ["English"],
    },
    offers: [
      {
        "@type": "Service",
        name: "Web Design",
        description:
          "Professional web design services with years of experience",
      },
      {
        "@type": "Service",
        name: "Web Development",
        description: "Customized website development solutions",
      },
      {
        "@type": "Service",
        name: "Digital Marketing",
        description: "Research-based digital marketing to grow your business",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
