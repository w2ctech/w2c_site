import Script from "next/script";

type JsonLdGraph = Record<string, unknown> | Record<string, unknown>[];

export function JsonLd({ data, id }: { data: JsonLdGraph; id?: string }) {
  return (
    <Script
      id={id ?? "jsonld"}
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
