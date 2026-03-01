import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { LANGUAGES } from "../../i18n/languages";
import { getKstNow } from "../../utils/dateUtils";
import { uiStrings } from "../../utils/ui-translation";

export const GET: APIRoute = async (context) => {
  const lang = context.params.lang as string;

  if (!LANGUAGES.includes(lang)) {
    return new Response("Language not supported", { status: 404 });
  }

  const kstNow = getKstNow();
  const allPosts = await getCollection("posts", ({ data }) => {
    return data.date <= kstNow;
  });

  interface AtomPost {
    title: string;
    description: string;
    pubDate: Date;
    updatedDate?: Date | null;
    link: string;
    author: string;
  }

  const posts: AtomPost[] = allPosts
    .filter(
      (post) =>
        post.id.endsWith(`index${lang}`) ||
        post.id.endsWith(`index.${lang}`) ||
        post.id.endsWith(`index.${lang}.md`),
    )
    .map((post) => {
      const parts = post.id.split("/");
      const slug = parts.slice(0, -1).join("/");

      // Fix Korean routing (no /ko prefix)
      const siteStr = (context.site || new URL("https://helloprompt.kr"))
        .toString()
        .replace(/\/$/, "");
      const langPath = `/${lang}`;

      return {
        title: post.data.title,
        description: post.data.description || "",
        pubDate: new Date(post.data.date),
        updatedDate: post.data.updatedDate
          ? new Date(post.data.updatedDate)
          : null,
        link: `${siteStr}${langPath}/posts/${slug}`,
        author: post.data.author || "Hello Prompt",
      };
    })
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  const escapeXml = (unsafe: string) => {
    return unsafe.replace(/[<>&'"]/g, (c) => {
      switch (c) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "&":
          return "&amp;";
        case "'":
          return "&apos;";
        case '"':
          return "&quot;";
      }
      return c;
    });
  };

  const slogan = uiStrings[lang]?.slogan || "AI Prompt Guide";
  const siteStr = (context.site || new URL("https://helloprompt.kr"))
    .toString()
    .replace(/\/$/, "");
  const langPath = lang === "ko" ? "" : `/${lang}`;
  const xmlBaseUrl = `${siteStr}${langPath}`;

  // Minified M2M XML Output
  const atom = `<?xml version="1.0" encoding="utf-8"?><feed xmlns="http://www.w3.org/2005/Atom" xml:lang="${lang}"><title>Hello Prompt (${lang.toUpperCase()})</title><subtitle>${escapeXml(slogan)}</subtitle><link href="${xmlBaseUrl}/atom.xml" rel="self"/><link href="${xmlBaseUrl}/"/><id>${xmlBaseUrl}/</id><updated>${posts[0]?.pubDate.toISOString() || new Date().toISOString()}</updated><author><name>Jay</name></author>${posts.map((post) => `<entry><title>${escapeXml(post.title)}</title><link href="${post.link}"/><id>${post.link}</id><updated>${(post.updatedDate || post.pubDate).toISOString()}</updated><published>${post.pubDate.toISOString()}</published><summary>${escapeXml(post.description)}</summary><author><name>${escapeXml(post.author)}</name></author></entry>`).join("")}</feed>`;

  return new Response(atom, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
