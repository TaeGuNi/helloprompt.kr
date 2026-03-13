/**
 * fix-frontmatter-korean.ts
 *
 * 번역 파일의 프론트마터에서 한국어 category와 tags를 영어로 변환.
 * 글로벌 UX를 위해 카테고리/태그는 영어로 통일해야 함.
 *
 * Usage: pnpm tsx scripts/fix-frontmatter-korean.ts
 */

import fs from "node:fs/promises";
import { glob } from "glob";

// --- Category Mapping (Korean → English) ---
const CATEGORY_MAP: Record<string, string> = {
  "업무 자동화": "Work Automation",
  "업무 효율화": "Work Automation",
  "프롬프트 엔지니어링": "Prompt Engineering",
  "프롬프트 템플릿": "Prompt Templates",
  "프롬프트 꿀팁": "Prompt Tips",
  "여행 & 문화": "Travel & Culture",
  여행: "Travel & Culture",
  "라이프/여행": "Travel & Culture",
  "취업 & 이직": "Career & Job",
  "취업/이직": "Career & Job",
  "커리어/자기계발": "Career & Job",
  "육아 & 교육": "Parenting & Education",
  "건강 & 웰니스": "Health & Wellness",
  "건강/웰니스": "Health & Wellness",
  "건강/라이프": "Health & Wellness",
  건강: "Health & Wellness",
  "재테크 & 투자": "Finance & Investment",
  "재테크/투자": "Finance & Investment",
  "창작 및 취미": "Creative & Hobbies",
  "취미/라이프": "Creative & Hobbies",
  "크리에이티브/예술": "Creative & Hobbies",
  "코딩/개발": "Coding & Development",
  개발: "Coding & Development",
  "개발/코딩": "Coding & Development",
  "개발 생산성": "Coding & Development",
  "AI 개발": "AI Development",
  "AI/개발": "AI Development",
  "AI 활용": "AI Applications",
  "AI 트렌드": "AI Trends",
  "이미지 생성": "Image Generation",
  자기계발: "Self-Improvement",
  "자기계발/글쓰기": "Self-Improvement",
  "자기계발/학습": "Self-Improvement",
  "자기계발/회고": "Self-Improvement",
  "학습법/자기계발": "Self-Improvement",
  마케팅: "Marketing",
  "마케팅/카피라이팅": "Marketing",
  "마케팅/콘텐츠": "Marketing",
  "비즈니스 전략": "Business Strategy",
  "비즈니스/마케팅": "Business Strategy",
  "콘텐츠 제작": "Content Creation",
  "콘텐츠 크리에이팅": "Content Creation",
  글쓰기: "Content Creation",
  "기획/전략": "Planning & Strategy",
  "서비스 기획": "Planning & Strategy",
  "프로덕트 기획": "Planning & Strategy",
  "보안 자동화": "Security",
  "보안/윤리": "Security",
  "보안/프라이버시": "Security",
  개인정보보호: "Security",
  생활: "Lifestyle",
  "라이프/운세": "Lifestyle",
  "재미/엔터": "Entertainment",
  "인문/역사": "Humanities & History",
  "트렌드 분석": "Trend Analysis",
  시간관리: "Time Management",
  협업: "Collaboration",
  "모바일 개발": "Mobile Development",
  "백엔드/DB": "Backend & Database",
  프론트엔드: "Frontend",
  공지사항: "Announcements",
  業務自動화: "Work Automation",
};

// --- Common tag translations ---
const TAG_MAP: Record<string, string> = {
  업무효율: "Productivity",
  엑셀: "Excel",
  보고서: "Reports",
  프롬프트: "Prompt",
  프롬프트엔지니어링: "Prompt Engineering",
  사주: "Fortune",
  운세: "Horoscope",
  토정비결: "Tojeong Fortune",
  이지함: "Yi Ji-ham",
  병오년: "Year of Fire Horse",
  페르소나: "Persona",
  육아: "Parenting",
  교육: "Education",
  AI프롬프트: "AI Prompt",
  육아꿀팁: "Parenting Tips",
  여행: "Travel",
  문화: "Culture",
  건강: "Health",
  웰니스: "Wellness",
  재테크: "Finance",
  투자: "Investment",
  취업: "Job Hunting",
  이직: "Career Change",
  자기계발: "Self-Improvement",
  코딩: "Coding",
  개발: "Development",
  마케팅: "Marketing",
  카피라이팅: "Copywriting",
  글쓰기: "Writing",
  이미지생성: "Image Generation",
  창작: "Creation",
  취미: "Hobbies",
  보안: "Security",
  프라이버시: "Privacy",
  생활: "Lifestyle",
  트렌드: "Trends",
  협업: "Collaboration",
  시간관리: "Time Management",
  요리: "Cooking",
  레시피: "Recipe",
  다이어트: "Diet",
  명상: "Meditation",
  학습: "Learning",
  독서: "Reading",
  비즈니스: "Business",
  전략: "Strategy",
  기획: "Planning",
  업무자동화: "Work Automation",
  생산성: "Productivity",
  콘텐츠: "Content",
  크리에이티브: "Creative",
  디자인: "Design",
  데이터분석: "Data Analysis",
  데이터: "Data",
  인공지능: "AI",
  머신러닝: "Machine Learning",
  자연어처리: "NLP",
  챗봇: "Chatbot",
  블로그: "Blog",
  유튜브: "YouTube",
  소셜미디어: "Social Media",
  면접: "Interview",
  이력서: "Resume",
  자소서: "Cover Letter",
  스타트업: "Startup",
  창업: "Entrepreneurship",
  부동산: "Real Estate",
  주식: "Stocks",
  가상화폐: "Crypto",
  동화: "Fairy Tale",
  아이: "Children",
  수면: "Sleep",
  운동: "Exercise",
  헬스: "Fitness",
  루틴: "Routine",
  일기: "Diary",
  습관: "Habit",
  목표: "Goals",
  프론트엔드: "Frontend",
  백엔드: "Backend",
  풀스택: "Fullstack",
  리팩토링: "Refactoring",
  테스트: "Testing",
  디버깅: "Debugging",
  노코드: "No-code",
  로우코드: "Low-code",
  자동화: "Automation",
};

function translateTag(tag: string): string {
  // Exact match
  if (TAG_MAP[tag]) return TAG_MAP[tag];
  // Already English? Keep as-is
  if (!/[가-힣]/.test(tag)) return tag;
  // Try partial match by removing whitespace
  const normalized = tag.replace(/\s+/g, "");
  if (TAG_MAP[normalized]) return TAG_MAP[normalized];
  // Fallback: keep original (will be caught by QA)
  return tag;
}

async function fixFile(
  filePath: string,
): Promise<{ catFixed: boolean; tagsFixed: number }> {
  let content = await fs.readFile(filePath, "utf-8");
  let catFixed = false;
  let tagsFixed = 0;

  // Fix category
  const catMatch = content.match(/^category:\s*"?([^"\n]+)"?$/m);
  if (catMatch) {
    const korCat = catMatch[1].trim();
    const engCat = CATEGORY_MAP[korCat];
    if (engCat && korCat !== engCat) {
      content = content.replace(
        new RegExp(
          `^category:\\s*"?${korCat.replace(/[.*+?^${}()|[\]\\&]/g, "\\$&")}"?$`,
          "m",
        ),
        `category: "${engCat}"`,
      );
      catFixed = true;
    }
  }

  // Fix tags
  const tagsMatch = content.match(/^tags:\s*\[([^\]]*)\]/m);
  if (tagsMatch) {
    const tagsStr = tagsMatch[1];
    const tags = tagsStr
      .split(",")
      .map((t) => t.trim().replace(/^["']|["']$/g, ""));
    const newTags = tags.map((t) => {
      const translated = translateTag(t);
      if (translated !== t) tagsFixed++;
      return translated;
    });
    if (tagsFixed > 0) {
      const newTagsStr = newTags.map((t) => `"${t}"`).join(", ");
      content = content.replace(
        /^tags:\s*\[[^\]]*\]/m,
        `tags: [${newTagsStr}]`,
      );
    }
  }

  if (catFixed || tagsFixed > 0) {
    await fs.writeFile(filePath, content, "utf-8");
  }

  return { catFixed, tagsFixed };
}

async function main() {
  const files = await glob("src/content/posts/**/index.!(ko).md");
  console.log(`\n🏷️  Frontmatter Korean Fixer`);
  console.log(`============================`);
  console.log(`📄 Found ${files.length} localized files to process.\n`);

  let catCount = 0;
  let tagCount = 0;
  let fileCount = 0;

  for (const file of files) {
    const result = await fixFile(file);
    if (result.catFixed || result.tagsFixed > 0) {
      fileCount++;
      if (result.catFixed) catCount++;
      tagCount += result.tagsFixed;
    }
  }

  console.log(
    `\n📊 Complete: ${fileCount} files modified (${catCount} categories, ${tagCount} tags translated).`,
  );
}

main().catch(console.error);
