import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const lang = context.params.lang as string;
  const now = new Date();
  const allPosts = await getCollection("posts", ({ data }) => {
    return data.date <= now;
  });
  const langPosts = allPosts.filter((post) => post.id.endsWith(`index${lang}`));

  interface SearchItem {
    title: string;
    description: string;
    tags?: string[];
    category?: string;
    url: string;
    date: string;
  }

  const posts: SearchItem[] = langPosts.map((post) => {
    const parts = post.id.split("/");
    const slug = parts.slice(0, -1).join("/");
    return {
      title: post.data.title,
      description: post.data.description || "",
      tags: post.data.tags,
      category: post.data.category,
      url: `/${lang}/posts/${slug}`,
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
