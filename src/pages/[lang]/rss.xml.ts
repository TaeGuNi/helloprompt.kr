import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { uiStrings } from "../../utils/ui-translation";

// 지원하는 언어 목록 (한국어 제외)
export function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "de" } },
    { params: { lang: "es" } },
    { params: { lang: "fr" } },
    { params: { lang: "it" } },
    { params: { lang: "ja" } },
    { params: { lang: "pt" } },
    { params: { lang: "ru" } },
    { params: { lang: "zh" } },
  ];
}

export const GET: APIRoute = async (context) => {
  const lang = context.params.lang as string;

  // 해당 언어의 포스트만 글로빙
  // 참고: import.meta.glob은 동적 변수를 사용할 수 없어서 전체를 가져온 뒤 필터링해야 함
  // 하지만 Astro 5에서는 pagesGlobToRssItems가 glob 결과를 요구하므로,
  // 여기서는 각 언어별로 별도 처리하거나, 전체를 가져와서 수동으로 RSS 아이템을 빌드해야 함.

  // 수동 빌드 방식 채택
  const allPosts = import.meta.glob("../*/posts/*.md"); // [lang]/posts/*.md
  const posts = [];

  for (const path in allPosts) {
    if (path.includes(`/${lang}/posts/`)) {
      const post: any = await allPosts[path]();
      posts.push({
        link: `/${lang}${post.url}`, // 언어별 경로
        title: post.frontmatter.title,
        pubDate: new Date(post.frontmatter.date),
        description: post.frontmatter.description,
        customData: `<author>${post.frontmatter.author}</author>`,
      });
    }
  }

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
