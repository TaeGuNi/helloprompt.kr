# Google AdSense Integration Guide (Manual Strategy)

`helloprompt.kr`는 레이아웃 안정성과 사용자 경험을 위해 **100% 수동 광고(Manual Placement)** 전략을 사용합니다.

## 1. 전략 개요

-   **자동 광고(Auto Ads):** **OFF** (AdSense 콘솔에서 비활성화 권장)
-   **수동 광고(Manual Units):** 필요한 위치에 `<AdUnit />` 컴포넌트를 직접 배치하여 디자인을 제어합니다.
-   **배치 위치:**
    1.  **Top (`container-ad-top`):** 헤더 직후, 본문 시작 전 (높은 주목도)
    2.  **Bottom (`article-ad-bottom`):** 본문 끝, 댓글/공유 섹션 위 (전환 유도)

## 2. 주요 설정 파일

### A. `public/ads.txt`
Google AdSense 승인을 위한 필수 파일입니다. (현재 설정 완료됨)
```text
google.com, pub-3431175239292021, DIRECT, f08c47fec0942fa0
```

### B. `src/components/AdUnit.astro`
재사용 가능한 광고 단위 컴포넌트입니다.
-   **기능:** 개발 환경(`dev`)에서는 Placeholder 표시, 배포 환경(`prod`)에서는 실제 광고 표시.
-   **CLS 방지:** `min-height: 280px` 설정으로 광고 로딩 전 레이아웃 밀림 방지.
-   **Props:**
    -   `slotId`: AdSense 광고 단위 ID (필수)
    -   `label`: 광고 라벨 텍스트 (기본값: "ADVERTISEMENT")
    -   `format`: 광고 포맷 (기본값: "auto")

## 3. 광고 단위 ID 정보

현재 사용 중인 광고 단위(Slot ID)입니다. **수정 시 `src/layouts/Layout.astro`를 변경하세요.**

| 위치 | 이름 | Slot ID | 형식 |
| :--- | :--- | :--- | :--- |
| **Top** | `HP_Post_Top` | `7945897337` | Display (Responsive) |
| **Bottom** | `HP_Post_Bottom` | `8812266186` | Display (Responsive) |

## 4. 사용 방법

페이지나 레이아웃 파일에서 다음과 같이 사용합니다.

```astro
---
import AdUnit from '../components/AdUnit.astro';
---

<!-- 상단 광고 -->
<AdUnit slotId="7945897337" className="container-ad-top" />

<slot />

<!-- 하단 광고 -->
<AdUnit slotId="8812266186" className="article-ad-bottom" />
```

## 5. 트러블슈팅

-   **개발 서버에서 광고가 안 보여요:** 정상입니다. 개발 중 클릭 방지를 위해 회색 박스만 표시됩니다.
-   **배포 후 빈 공간만 나와요:**
    -   `ads.txt`가 올바른지 확인하세요.
    -   신규 광고 단위는 활성화까지 최대 1시간이 걸릴 수 있습니다.
    -   브라우저의 **광고 차단(AdBlock)** 확장 프로그램을 끄고 확인하세요.
-   **자동 광고가 계속 떠요:** Google AdSense 콘솔 > 사이트 기준 > 설정에서 [자동 광고]가 켜져 있는지 확인하고 끄세요.
