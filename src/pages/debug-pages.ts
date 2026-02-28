export const GET = async () => {
  const { getCollection } = await import("astro:content");
  const pages = await getCollection("pages");
  return new Response(JSON.stringify(pages.map((p) => p.id)));
};
