import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { LANGUAGES } from "../i18n/languages";

export const GET: APIRoute = async (context) => {
  const now = new Date();
  const allPosts = await getCollection("posts", ({ data }) => {
    return data.date <= now;
  });

  const site = (context.site || new URL("https://helloprompt.kr"))
    .toString()
    .replace(/\/$/, "");

  // Base paths to generate hreflang for
  const basePaths: string[] = [""];

  // Add post base paths
  allPosts.forEach((post) => {
    if (post.id.endsWith("index.ko.md") || post.id.endsWith("index.ko")) {
      const parts = post.id.split("/");
      const slug = parts[parts.length - 2];
      basePaths.push(`/posts/${slug}`);
    }
  });

  const getUrlForLang = (basePath: string, lang: string) => {
    const langPath = lang === "ko" ? "" : `/${lang}`;
    return `${site}${langPath}${basePath}`;
  };

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${basePaths
    .flatMap((basePath) => {
      // Create a <url> block for EACH language version
      return LANGUAGES.map((lang) => {
        const currentUrl = getUrlForLang(basePath, lang);

        // Generate alternate links for ALL languages
        const alternateLinks = LANGUAGES.map((altLang) => {
          return `<xhtml:link rel="alternate" hreflang="${altLang}" href="${getUrlForLang(basePath, altLang)}" />`;
        }).join("\\n    ");

        return `
  <url>
    <loc>${currentUrl}</loc>
    ${alternateLinks}
    <lastmod>${now.toISOString().split("T")[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${basePath === "" ? "1.0" : "0.8"}</priority>
  </url>`;
      });
    })
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
