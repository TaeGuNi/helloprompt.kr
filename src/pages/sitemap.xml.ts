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

  // Base paths and associated dates to generate hreflang and dynamic properties for
  const basePathsInfo: Array<{ path: string; isHome: boolean; date: Date }> = [
    { path: "", isHome: true, date: now },
  ];

  // Add post base paths with dates for dynamic priority computing
  allPosts.forEach((post) => {
    if (post.id.endsWith("index.ko.md") || post.id.endsWith("index.ko")) {
      const parts = post.id.split("/");
      const slug = parts.slice(0, -1).join("/");
      basePathsInfo.push({
        path: `/posts/${slug}`,
        isHome: false,
        date: post.data.date,
      });
    }
  });

  const getUrlForLang = (basePath: string, lang: string) => {
    const langPath = lang === "ko" ? "" : `/${lang}`;
    return `${site}${langPath}${basePath}`;
  };

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${basePathsInfo
    .flatMap((info) => {
      // Calculate dynamic SEO properties based on recency
      const daysOld =
        (now.getTime() - info.date.getTime()) / (1000 * 3600 * 24);
      let priority = "0.5";
      let changefreq = "monthly";

      if (info.isHome) {
        priority = "1.0";
        changefreq = "daily";
      } else if (daysOld <= 7) {
        priority = "0.9";
        changefreq = "daily";
      } else if (daysOld <= 30) {
        priority = "0.7";
        changefreq = "weekly";
      }

      // Create a <url> block for EACH language version
      return LANGUAGES.map((lang) => {
        const currentUrl = getUrlForLang(info.path, lang);

        // Generate alternate links for ALL languages
        const alternateLinks = LANGUAGES.map((altLang) => {
          return `<xhtml:link rel="alternate" hreflang="${altLang}" href="${getUrlForLang(info.path, altLang)}" />`;
        }).join("\n    ");

        return `
  <url>
    <loc>${currentUrl}</loc>
    ${alternateLinks}
    <lastmod>${info.date.toISOString().split("T")[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
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
