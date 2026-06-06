export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "W2C Tech",
    legalName: "W2C Tech Solution Private Limited",
    alternateName: "Web to Cloud",
    url: "https://w2ctech.com",
    logo: "https://w2ctech.com/assets/w2c-logo.png",
    description:
      "Custom software, AI systems, and cloud for ambitious companies across the EU, US and India. Founded 2020.",
    email: "admin@w2ctech.com",
    telephone: "+91-9626222140",
    address: {
      "@type": "PostalAddress",
      streetAddress: "G-4/38, Block-G, Rohini Sector 15",
      addressLocality: "Delhi",
      addressRegion: "Delhi",
      postalCode: "110089",
      addressCountry: "IN",
    },
    foundingDate: "2020",
    sameAs: [
      "https://wa.me/919626222140",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "admin@w2ctech.com",
        telephone: "+91-9626222140",
        availableLanguage: ["English", "German", "French"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "w2ctechsolution@gmail.com",
        telephone: "+91-9626222140",
        availableLanguage: ["English", "German", "French"],
      },
    ],
    knowsAbout: [
      "Software Development",
      "Artificial Intelligence",
      "Cloud Computing",
      "DevOps",
      "Staff Augmentation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
