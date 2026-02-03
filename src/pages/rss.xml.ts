import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  return rss({
    title: 'Hello Prompt (헬로 프롬프트)',
    description: 'AI가 낯선 당신을 위한 가장 친절한 가이드',
    site: context.site!,
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/*.{md,mdx}'),
    ),
    customData: `<language>ko-KR</language>`,
  });
}
