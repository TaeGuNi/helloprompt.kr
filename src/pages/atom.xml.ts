import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const allPosts = await import.meta.glob("./posts/*.md");
  let posts: any[] = [];

  for (const path in allPosts) {
    if (path.includes("_template.md")) continue;
    const post: any = await allPosts[path]();
    posts.push({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: new Date(post.frontmatter.date),
      link: context.site + post.url,
      author: post.frontmatter.author,
    });
  }

  // 날짜순 정렬
  posts.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  // 특수문자 이스케이프 함수
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

  const atom = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Hello Prompt</title>
  <subtitle>AI가 낯선 당신을 위한 가장 친절한 가이드</subtitle>
  <link href="${context.site}atom.xml" rel="self" />
  <link href="${context.site}" />
  <id>${context.site}</id>
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
    <updated>${post.pubDate.toISOString()}</updated>
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
