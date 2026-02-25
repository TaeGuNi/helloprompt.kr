import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { LANGUAGES } from "../i18n/languages";

export const GET: APIRoute = async (context) => {
  const now = new Date();
  const allPosts = await getCollection("posts", ({ data }) => {
    return data.date <= now;
  });

  const site = context.site || new URL("https://helloprompt.kr");

  const urls: string[] = [];

  // 1. Add index pages for all languages
  LANGUAGES.forEach((lang) => {
    urls.push(`${site}${lang}/`);
  });

  // 2. Add post pages
  allPosts.forEach((post) => {
    LANGUAGES.forEach((lang) => {
      if (post.id.endsWith(`index${lang}`)) {
        const parts = post.id.split("/");
        const slug = parts[parts.length - 2];
        urls.push(`${site}${lang}/posts/${slug}`);
      }
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${now.toISOString().split("T")[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`,
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
