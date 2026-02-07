# Google AdSense Integration Guide

`helloprompt.kr`에 Google AdSense를 적용하기 위한 가이드입니다.

## 1. `ads.txt` 설정 (필수)

Google AdSense 승인 및 수익 창출을 위해 `ads.txt` 파일 설정이 필수적입니다.
현재 프로젝트의 `public/ads.txt` 파일은 **임시 값(Placeholder)**으로 설정되어 있습니다.

### 설정 방법

1.  **Google AdSense 로그인:** [AdSense 계정](https://www.google.com/adsense)에 로그인합니다.
2.  **게시자 ID 확인:**
    - `계정` > `설정` > `계정 정보` 메뉴로 이동합니다.
    - `게시자 ID` (예: `pub-1234567890123456`)를 복사합니다.
3.  **파일 수정:**
    - 프로젝트 루트의 `public/ads.txt` 파일을 엽니다.
    - 아래 내용을 본인의 정보로 수정합니다.

```text
google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0
```

> **변경 예시:**
> `google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0`

4.  **배포:** 수정된 파일을 커밋하고 배포합니다.

## 2. 자동 광고 설정 (선택)

Astro 프로젝트의 공통 레이아웃에 AdSense 스크립트를 추가하면 사이트 전역에 자동 광고가 노출됩니다.

**파일:** `src/layouts/Layout.astro` 또는 `src/components/BaseHtml.astro`

```html
<head>
  <!-- Google AdSense -->
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
    crossorigin="anonymous"
  ></script>
</head>
```

> **Note:** `ca-pub-...` 부분을 본인의 게시자 ID로 변경하세요.

## 3. 검증

배포 후 브라우저에서 `https://helloprompt.kr/ads.txt`로 접속하여 본인의 게시자 ID가 올바르게 표시되는지 확인합니다.
