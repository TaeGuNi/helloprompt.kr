import { describe, expect, it } from "vitest";
import { filterPublishedPosts, type Post, sortPostsByDate } from "./postUtils";

describe("Post Utils: 정렬 및 필터링", () => {
  // 더미 데이터
  const mockPosts: Post[] = [
    {
      file: "post1.md",
      frontmatter: { title: "Old Post", date: "2025-01-01" },
    },
    {
      file: "post2.md",
      frontmatter: { title: "New Post", date: "2026-02-04" },
    },
    {
      file: "draft.md",
      frontmatter: { title: "Draft", date: "2026-02-01", draft: true },
    },
  ];

  it("날짜 내림차순(최신순)으로 정렬되어야 한다", () => {
    const sorted = sortPostsByDate([mockPosts[0], mockPosts[1]]);
    expect(sorted[0].frontmatter.title).toBe("New Post");
    expect(sorted[1].frontmatter.title).toBe("Old Post");
  });

  it("Draft(초안) 상태인 글은 제외되어야 한다", () => {
    const filtered = filterPublishedPosts(mockPosts);
    expect(filtered.some((p) => p.frontmatter.draft === true)).toBe(false);
  });

  // ==========================================
  // 💣 Chaos Monkey Test Suite (Disaster Scenarios)
  // ==========================================

  describe("[Chaos Monkey] sortPostsByDate 파괴 시뮬레이션", () => {
    it("Date 문자열이 완전히 깨져있거나(invalid-date), 없어도 크래시되지 않고 끝으로 밀어내거나 정렬해야 한다", () => {
      const chaosPosts: Post[] = [
        ...mockPosts,
        {
          file: "chaos1.md",
          frontmatter: { title: "No Date", date: "" },
        },
        {
          file: "chaos2.md",
          // 비정상적인 쓰레기 값 주입 (NaN 발생 유발)
          frontmatter: {
            title: "Garbage Date",
            date: "invalid-date-format-1234",
          },
        },
      ];

      // 실행 중 에러(Throw)가 발생하지 않는지 방어력 검증
      expect(() => sortPostsByDate(chaosPosts)).not.toThrow();

      const sorted = sortPostsByDate(chaosPosts);
      // 완전히 파괴된 데이터들도 배열 안에서 유실되지 않고 컴파일되어 반환되어야 함
      expect(sorted.length).toBe(chaosPosts.length);
    });
  });

  describe("[Chaos Monkey] filterPublishedPosts 파괴 시뮬레이션", () => {
    it("필수 객체가 날아가거나 런타임에 오염된 frontmatter 객체가 들어와도 필터가 터지지 않아야 한다", () => {
      // TypeScript 컴파일러를 속이고 런타임 환경처럼 극단적인 파괴 객체 생성
      const maliciousData = [
        { file: "broken1.md", frontmatter: null as unknown as any },
        { file: "broken2.md" } as unknown as Post, // frontmatter 자체가 없음
        {
          file: "broken3.md",
          frontmatter: {
            draft: "true_as_string" as unknown as boolean,
            title: "Weird",
            date: "2026",
          },
        },
      ];

      // 안전하게 에러 안나고 빈 배열 혹은 필터링된 배열이 뜨는지 검증
      expect(() => filterPublishedPosts(maliciousData)).not.toThrow();
    });
  });
});
