import type { APIRoute } from "astro";

export const GET: APIRoute = async (_context) => {
  const allPosts = import.meta.glob("./posts/*.md");
  const posts: any[] = [];

  for (const path in allPosts) {
    const post: any = await allPosts[path]();
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
