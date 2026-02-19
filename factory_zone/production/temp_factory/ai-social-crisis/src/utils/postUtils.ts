// 블로그 글 처리 관련 유틸리티

export interface Post {
  file: string;
  frontmatter: {
    title: string;
    date: string;
    category?: string;
    tags?: string[];
    description?: string;
    draft?: boolean;
  };
  url?: string;
}

/**
 * 글 목록을 날짜 내림차순(최신순)으로 정렬
 */
export function sortPostsByDate(posts: Post[]): Post[] {
  return posts.sort((a, b) => {
    return (
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf()
    );
  });
}

/**
 * 발행 가능한 글만 필터링 (템플릿 제외, draft 제외)
 */
export function filterPublishedPosts(posts: Post[]): Post[] {
  return posts.filter((post) => {
    // Draft(초안) 상태인 경우 제외
    if (post.frontmatter.draft === true) return false;

    return true;
  });
}

/**
 * 랜덤한 글 n개 추출
 */
export function getRandomPosts(posts: Post[], count: number): Post[] {
  const shuffled = [...posts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
