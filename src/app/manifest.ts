import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "W2C Tech — Web to Cloud · Software, AI & Cloud",
    short_name: "W2C Tech",
    description:
      "Custom software, AI systems, and cloud for ambitious companies across the EU, US and India.",
    start_url: "/en",
    display: "standalone",
    background_color: "#1a1a2e",
    theme_color: "#d4a83a",
    categories: ["technology", "software", "business"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/favicon.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
  };
}
