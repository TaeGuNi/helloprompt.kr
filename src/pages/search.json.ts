import type { APIRoute } from "astro";

export const GET: APIRoute = async (_context) => {
  const allPosts = import.meta.glob("./posts/*.md");

  interface SearchItem {
    title: string;
    description: string;
    tags?: string[];
    category?: string;
    url: string;
    date: string;
  }

  const posts: SearchItem[] = [];

  for (const path in allPosts) {
    const post = (await allPosts[path]()) as {
      frontmatter: {
        title: string;
        description: string;
        tags?: string[];
        category?: string;
        date: string;
      };
      url: string;
    };
    posts.push({
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      tags: post.frontmatter.tags,
      category: post.frontmatter.category,
      url: post.url,
      date: post.frontmatter.date,
    });
  }

  return new Response(JSON.stringify(posts), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
