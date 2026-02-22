import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { uiStrings } from "../../utils/ui-translation";
import { getLangStaticPaths } from "../../i18n/languages";

export const getStaticPaths = getLangStaticPaths;

export const GET: APIRoute = async (context) => {
  const lang = context.params.lang as string;

  // 수동 빌드 방식 채택 (Content Collections 기반)
  const now = new Date();
  const allPosts = await getCollection("posts", ({ data }) => {
    return data.date <= now;
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts: any[] = [];

  allPosts.forEach((post) => {
    if (post.id.endsWith(`index${lang}`)) {
      const parts = post.id.split("/");
      const slug = parts[parts.length - 2];
      posts.push({
        link: `/${lang}/posts/${slug}`, // 언어별 경로
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.description || "",
        customData: `<author>${post.data.author}</author>`,
      });
    }
  });

  // 날짜순 정렬
  posts.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: `Hello Prompt (${lang.toUpperCase()})`,
    description: uiStrings[lang]?.slogan || "AI Prompt Guide",
    site: context.site!,
    items: posts,
    customData: `<language>${lang}</language>`,
  });
};
