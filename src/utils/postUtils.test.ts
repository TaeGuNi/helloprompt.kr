import { describe, it, expect } from "vitest";
import { sortPostsByDate, filterPublishedPosts, type Post } from "./postUtils";

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
      file: "_template.md",
      frontmatter: { title: "Template", date: "2026-01-01" },
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

  it("템플릿 파일(_template.md)은 제외되어야 한다", () => {
    const filtered = filterPublishedPosts(mockPosts);
    expect(filtered.some((p) => p.file.includes("_template.md"))).toBe(false);
  });

  it("Draft(초안) 상태인 글은 제외되어야 한다", () => {
    const filtered = filterPublishedPosts(mockPosts);
    expect(filtered.some((p) => p.frontmatter.draft === true)).toBe(false);
  });
});
