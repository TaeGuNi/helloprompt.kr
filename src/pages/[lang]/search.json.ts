import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getLangStaticPaths } from "../../i18n/languages";

export const getStaticPaths = getLangStaticPaths;

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
    const slug = parts[parts.length - 2];
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
    },
  });
};
