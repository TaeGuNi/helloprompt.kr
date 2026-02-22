import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { uiStrings } from "../../utils/ui-translation";
import { getLangStaticPaths } from "../../i18n/languages";

export const getStaticPaths = getLangStaticPaths;

export const GET: APIRoute = async (context) => {
  const lang = context.params.lang as string;
  const now = new Date();
  const allPosts = await getCollection("posts", ({ data }) => {
    return data.date <= now;
  });

  interface AtomPost {
    title: string;
    description: string;
    pubDate: Date;
    updatedDate?: Date | null;
    link: string;
    author: string;
  }

  const posts: AtomPost[] = [];

  allPosts.forEach((post) => {
    if (post.id.endsWith(`index${lang}`)) {
      const parts = post.id.split("/");
      const slug = parts[parts.length - 2];
      posts.push({
        title: post.data.title,
        description: post.data.description || "",
        pubDate: new Date(post.data.date),
        updatedDate: post.data.updatedDate
          ? new Date(post.data.updatedDate)
          : null,
        link: `${context.site}${lang}/posts/${slug}`,
        author: post.data.author || "Hello Prompt",
      });
    }
  });

  // 날짜순 정렬
  posts.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

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

  const atom = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="${lang}">
  <title>Hello Prompt (${lang.toUpperCase()})</title>
  <subtitle>${escapeXml(slogan)}</subtitle>
  <link href="${context.site}${lang}/atom.xml" rel="self" />
  <link href="${context.site}${lang}/" />
  <id>${context.site}${lang}/</id>
  <updated>${posts[0]?.pubDate.toISOString() || new Date().toISOString()}</updated>
  <author>
    <name>Jay &amp; Zzabbis</name>
  </author>
  ${posts
    .map(
      (post) => `
  <entry>
    <title>${escapeXml(post.title)}</title>
    <link href="${post.link}" />
    <id>${post.link}</id>
    <updated>${(post.updatedDate || post.pubDate).toISOString()}</updated>
    <published>${post.pubDate.toISOString()}</published>
    <summary>${escapeXml(post.description)}</summary>
    <author>
      <name>${escapeXml(post.author)}</name>
    </author>
  </entry>`,
    )
    .join("")}
</feed>`;

  return new Response(atom, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
