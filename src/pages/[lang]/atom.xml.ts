import type { APIRoute } from "astro";
import { uiStrings } from "../../utils/ui-translation";
import { getLangStaticPaths } from "../../i18n/languages";

export const getStaticPaths = getLangStaticPaths;

export const GET: APIRoute = async (context) => {
  const lang = context.params.lang as string;
  const allPosts = import.meta.glob("../*/posts/*.md");
  let posts: any[] = [];

  for (const path in allPosts) {
    if (path.includes(`/${lang}/posts/`)) {
      const post: any = await allPosts[path]();
      posts.push({
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        pubDate: new Date(post.frontmatter.date),
        updatedDate: post.frontmatter.updatedDate
          ? new Date(post.frontmatter.updatedDate)
          : null,
        link: `${context.site}${lang}${post.url}`,
        author: post.frontmatter.author,
      });
    }
  }

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
