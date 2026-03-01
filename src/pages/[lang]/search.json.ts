import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const lang = context.params.lang as string;
  const now = new Date();
  const allPosts = await getCollection("posts", ({ data }) => {
    return data.date <= now;
  });
  // 1. Filter valid content based on Astro 5 ID formats
  const langPosts = allPosts.filter(
    (post) =>
      post.id.endsWith(`index${lang}`) ||
      post.id.endsWith(`index.${lang}`) ||
      post.id.endsWith(`index.${lang}.md`),
  );

  interface SearchItem {
    title: string;
    description: string;
    tags?: string[];
    category?: string;
    url: string;
    date: string;
  }

  // 2. Map directly without throwaway loops, fixing URL for 'ko' baseline
  const posts: SearchItem[] = langPosts.map((post) => {
    const parts = post.id.split("/");
    const slug = parts.slice(0, -1).join("/");
    const langPath = `/${lang}`;

    return {
      title: post.data.title,
      description: post.data.description || "",
      tags: post.data.tags,
      category: post.data.category,
      url: `${langPath}/posts/${slug}`,
      date:
        post.data.date instanceof Date
          ? post.data.date.toISOString().split("T")[0]
          : String(post.data.date),
    };
  });

  return new Response(JSON.stringify(posts), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
};
