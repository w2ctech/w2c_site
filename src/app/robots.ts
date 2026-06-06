import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/seo";

/**
 * robots.txt — production rules.
 *
 * Strategy:
 *  - Allow all standard search and shopping crawlers.
 *  - Allow major AI/LLM training crawlers explicitly so the brand and
 *    knowledge surfaces in AI answers (set to disallow per provider
 *    if/when policy requires it).
 *  - Disallow internal API and Next internals.
 *  - Reference both sitemap.xml and AI-discovery files.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "Anthropic-AI",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "GoogleOther",
    "Applebot",
    "Applebot-Extended",
    "Bytespider",
    "CCBot",
    "Diffbot",
    "FacebookBot",
    "Meta-ExternalAgent",
    "Meta-ExternalFetcher",
    "cohere-ai",
    "DuckAssistBot",
    "Amazonbot",
    "MistralAI-User",
    "YouBot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/private/", "/*?*"],
      },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/", "/_next/"],
      })),
    ],
    sitemap: [`${BASE_URL}/sitemap.xml`],
    host: BASE_URL,
  };
}
