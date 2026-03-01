import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { DEFAULT_LANGUAGE, LANGUAGES } from "../i18n/languages";

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
    if (
      post.id.endsWith("indexko") ||
      post.id.endsWith("index.ko") ||
      post.id.endsWith("index.ko.md")
    ) {
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
    const langPath = `/${lang}`;
    return `${site}${langPath}${basePath}`;
  };

  /**
   * Helper: Calculates SEO properties (priority, changefreq) based on content age.
   */
  const getSeoProperties = (isHome: boolean, date: Date) => {
    const daysOld = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);
    if (isHome) return { priority: "1.0", changefreq: "daily" };
    if (daysOld <= 7) return { priority: "0.9", changefreq: "daily" };
    if (daysOld <= 30) return { priority: "0.7", changefreq: "weekly" };
    return { priority: "0.5", changefreq: "monthly" };
  };

  /**
   * Helper: Generates a complete <url> XML block for a specific path & language.
   * Outputs minified XML string.
   */
  const createXmlUrlBlock = (
    info: { path: string; isHome: boolean; date: Date },
    targetLang: string,
  ) => {
    const { priority, changefreq } = getSeoProperties(info.isHome, info.date);
    const currentUrl = getUrlForLang(info.path, targetLang);
    const lastMod = info.date.toISOString().split("T")[0];

    // Build the alternate hreflang links for ALL supported languages
    const alternateLinks = LANGUAGES.map(
      (altLang) =>
        `<xhtml:link rel="alternate" hreflang="${altLang}" href="${getUrlForLang(info.path, altLang)}"/>`,
    ).join("");

    return `<url><loc>${currentUrl}</loc>${alternateLinks}<lastmod>${lastMod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
  };

  // Generate the massive minified XML string efficiently
  const sitemapBody = basePathsInfo
    .flatMap((info) => createXmlUrlBlock(info, DEFAULT_LANGUAGE))
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${sitemapBody}</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
