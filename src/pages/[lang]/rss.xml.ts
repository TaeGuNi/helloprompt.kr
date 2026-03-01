import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { LANGUAGES } from "../../i18n/languages";
import { getKstNow } from "../../utils/dateUtils";
import { uiStrings } from "../../utils/ui-translation";

export const GET: APIRoute = async (context) => {
  const lang = context.params.lang as string;

  if (!LANGUAGES.includes(lang)) {
    return new Response("Language not supported", { status: 404 });
  }

  // 수동 빌드 방식 채택 (Content Collections 기반)
  const kstNow = getKstNow();
  const allPosts = await getCollection("posts", ({ data }) => {
    return data.date <= kstNow;
  });
  // 1. Filter and Map in a single pipeline
  const posts = allPosts
    .filter(
      (post) =>
        post.id.endsWith(`index${lang}`) ||
        post.id.endsWith(`index.${lang}`) ||
        post.id.endsWith(`index.${lang}.md`),
    )
    .map((post) => {
      const parts = post.id.split("/");
      const slug = parts.slice(0, -1).join("/");
      const langPath = `/${lang}`;

      return {
        link: `${langPath}/posts/${slug}`, // 언어별 최적화된 경로
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.description || "",
        customData: `<author>${post.data.author}</author>`,
      };
    })
    .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  const response = await rss({
    title: `Hello Prompt (${lang.toUpperCase()})`,
    description: uiStrings[lang]?.slogan || "AI Prompt Guide",
    site: context.site || new URL("https://helloprompt.kr"),
    items: posts,
    customData: `<language>${lang}</language>`,
  });

  response.headers.set(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );
  return response;
};
