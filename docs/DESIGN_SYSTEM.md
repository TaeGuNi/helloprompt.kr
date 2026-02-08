# 🎨 Hello Prompt 디자인 시스템 (Design System)

Hello Prompt의 시각적 정체성(Visual Identity)을 유지하기 위한 가이드라인입니다.
모든 UI 수정 시 이 규칙을 준수해야 합니다.

## 1. 컬러 팔레트 (Color Palette)

### Primary (네온 포인트)

- **Cyan:** `#00f3ff` (메인 강조, 버튼 테두리, 링크)
- **Purple:** `#a29bfe` (보조 강조, 그라데이션)

### Background (다크 모드)

- **Deep Black:** `#030303` (메인 배경)
- **Card Bg:** `rgba(10, 20, 30, 0.6)` (반투명 카드 배경)
- **Overlay:** `rgba(0, 0, 0, 0.5)` (검색창 배경)

### Text (가독성)

- **Heading:** `#ffffff` (제목)
- **Body:** `#e0e0e0` (본문)
- **Muted:** `#aaa` (메타 정보)

## 2. 타이포그래피 (Typography)

### Font Family

- **Display (제목):** `'Orbitron', sans-serif` (SF, 미래적인 느낌)
- **Body (본문):** `'Noto Sans KR', sans-serif` (가독성 최적화)
- **Code (코드):** `'JetBrains Mono', monospace` (개발자 감성)

## 3. UI 컴포넌트 (Components)

### 버튼 (Button)

- **스타일:** 투명 배경 + Cyan 테두리 + Hover 시 네온 Glow 효과
- **코드 예시:**
  ```css
  border: 1px solid #00f3ff;
  color: #00f3ff;
  box-shadow: 0 0 10px rgba(0, 243, 255, 0.3); /* Hover 시 */
  ```

### 카드 (Card)

- **스타일:** Glassmorphism (유리 질감) + 얇은 테두리
- **코드 예시:**
  ```css
  background: rgba(10, 20, 30, 0.6);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  ```

### 프롬프트 박스 (Prompt Box)

- **Role:** 독자가 복사해야 할 내용을 담음
- **Style:** 왼쪽 파란색(`4a90e2`) 테두리, 상단 `PROMPT` 라벨

### 날짜 표시 (Date Display)

- **목록(Card):** 날짜만 간결하게 표시 (예: `2026. 2. 8.`) -> `formatDate(date, lang, { dateOnly: true })`
- **상세(Detail):** 날짜와 시간을 모두 표시하여 정확한 정보 제공 (예: `2026년 2월 8일 오후 8:30`) -> `formatDate(date, lang)`
- **Locale:** 사용자 언어 환경(Locale)에 맞는 포맷을 자동으로 적용

## 4. 아이콘 시스템 (Icon System)

- **Library:** [Lucide Icons](https://lucide.dev) 또는 SVG 직접 사용
- **Style:** Stroke width 2px, Round cap/join
- **Color:** 본문 텍스트 색상(`#e0e0e0`)을 기본으로 하되, 강조 시 Cyan(`#00f3ff`) 사용

## 5. 반응형 브레이크포인트 (Responsive Breakpoints)

다양한 기기에서 최적의 경험을 제공하기 위해 다음 기준을 따릅니다.

- **Mobile:** `< 600px` (1열 레이아웃, 폰트 사이즈 축소)
- **Tablet:** `600px ~ 1024px` (2열 그리드, 여백 조정)
- **Desktop:** `> 1024px` (최대 너비 제한, 중앙 정렬)

## 6. 애니메이션 (Animation)

- **Scan Effect:** 타이틀에 흐르는 빛줄기 효과 (`@keyframes cyberScan`)
- **Hover:** 카드나 버튼 호버 시 살짝 떠오르며(`translateY(-5px)`) 빛남
