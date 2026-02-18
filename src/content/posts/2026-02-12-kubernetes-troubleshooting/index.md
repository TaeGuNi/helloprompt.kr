---
layout: /src/layouts/Layout.astro
title: "Kubernetes(K8s) 트러블슈팅: 파드(Pod)가 죽었을 때 3분 대처법"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "DevOps/인프라"
description: "CrashLoopBackOff, Pending... 쿠버네티스 에러 로그를 해석하고 복구하는 실전 가이드."
tags: ["쿠버네티스", "K8s", "DevOps", "트러블슈팅", "서버관리"]
---

# (Updated) (Updated) ☸️ Kubernetes(K8s) 트러블슈팅: 파드(Pod)가 죽었을 때 3분 대처법 {#k8s}

- **🎯 추천 대상:** "쿠버네티스는 너무 어려워요"라며 도커 컴포즈만 쓰는 개발자, 새벽 3시에 서버 알람 받고 깬 당직자
- **⏱️ 소요 시간:** 3분 (로그 분석)
- **🤖 추천 모델:** ChatGPT-4o (로그 패턴 매칭에 강함)

- ⭐ **난이도:** ⭐⭐⭐☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐☆

_"Pod 상태가 `CrashLoopBackOff`입니다. 로그를 봐도 모르겠어요."_

쿠버네티스는 복잡합니다. 하지만 에러 패턴은 뻔합니다. 파드가 왜 죽었는지, 왜 안 뜨는지, AI에게 로그를 던져보세요. **쿠버네티스 자격증(CKA) 보유자**보다 더 빠르게 원인을 찾아줍니다.

---

## (Updated) (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1.  `kubectl describe pod [파드명]` 과 `kubectl logs [파드명]` 실행.
2.  나온 외계어 같은 텍스트를 긁어서 AI에게 던진다.
3.  **"원인이 뭐고 명령어 뭐 치면 돼?"** 라고 묻는다.

---

## (Updated) (Updated) 🚀 해결책: "K8s Doctor Prompt" {#updated}

### (Updated) (Updated) 🥉 Basic Version (에러 해석) {#updated}

로그가 무슨 말인지 모를 때.

> **역할:** 너는 데브옵스 엔지니어야.
> **로그:** `[Error: OOMKilled ... exit code 137]`
> **질문:** 이 에러가 무슨 뜻이야? 아주 쉽게 설명해줘. (메모리 부족? 설정 오류?)

<br>

### (Updated) (Updated) 🥇 Pro Version (복구 스크립트 생성) {#updated}

장애를 빠르게 복구하고 싶을 때.

> **역할 (Role):** 너는 구글 SRE(Site Reliability Engineer) 팀장이야. 장애 복구(Incident Response) 전문가이지.
>
> **증상 (Symptoms):**
>
> - 파드 상태: `Pending` (10분째 안 뜸)
> - `kubectl describe` 결과: `[여기에 내용 붙여넣기]` (예: Insufficient cpu)
>
> **요청 (Task):**
>
> 1. **원인 분석:** 왜 스케줄링이 안 되고 있는지 정확히 짚어줘.
> 2. **해결책:** 당장 실행할 수 있는 `kubectl` 명령어 또는 `deployment.yaml` 수정본을 줘.
> 3. **재발 방지:** 앞으로 이런 일이 없으려면 `resources.requests`를 어떻게 설정해야 할까?
>
> **주의사항 (Warning):**
>
> - `kubectl delete pod` 같은 무식한 방법 말고, 근본적인 해결책을 줘.

---

## (Updated) (Updated) 💡 작성자 코멘트 (Insight) {#insight}

가장 무서운 건 **`OOMKilled` (메모리 부족)**입니다.
이건 로그에도 안 남고 그냥 조용히 죽습니다.
AI에게 "이 파드가 죽은 이유를 `dmesg`나 `kubectl get events`로 찾는 법 알려줘"라고 물어보면 탐정처럼 찾아줍니다.

---

## (Updated) (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

- **Q: 로그가 너무 길어서 복사가 안 돼요.**
  - A: `kubectl logs --tail=50`으로 뒤쪽 50줄만 잘라서 복사하세요. 핵심은 항상 끝에 있습니다.

- **Q: AI가 시킨 명령어 쳤는데 서버 날아갔어요.**
  - A: `delete all` 같은 위험한 명령어는 AI도 경고를 주지만, 항상 `--dry-run=client` 옵션을 붙여서 테스트 먼저 하세요.

---

## (Updated) (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **SRE 페르소나:** "구글 SRE"라고 지정하면, 단순히 "재시작하세요"가 아니라 **"근본 원인(Root Cause)"**과 **"재발 방지 대책"**까지 알려줍니다.
2.  **증상 구체화:** `Pending`, `CrashLoopBackOff`, `ImagePullBackOff` 등 상태 메시지를 정확히 주면, AI가 해당 에러에 맞는 솔루션(리소스 증설, 시크릿 확인 등)을 딱 내놓습니다.

---

## (Updated) (Updated) 📊 증명: Before & After {#updated}

### (Updated) (Updated) ❌ Before (무한 삽질) {#updated}

"어... 왜 안 뜨지? 노드 재부팅 해볼까?" (서비스 중단 🚨)

### (Updated) (Updated) ✅ After (AI 진단) {#ai}

**AI:** "로그를 보니 `Insufficient cpu`네요. 현재 노드에 CPU 자원이 꽉 찼습니다.

1. 불필요한 파드를 끄거나,
2. 오토스케일링(Cluster Autoscaler)을 켜세요.
3. 임시 조치로 이 파드의 `requests.cpu`를 500m에서 200m로 낮춰서 배포해보세요."
   (결과: YAML 수정 후 1분 만에 정상 가동 ✅)

---

## (Updated) (Updated) 🎯 결론 {#conclusion}

인프라는 '무서운 것'이 아닙니다. '로그를 읽을 줄 모르는 것'이 무서운 겁니다.
AI는 최고의 로그 번역기입니다.

새벽에 서버 터지면 당황하지 마세요.
프롬프트부터 켜세요. **"살려줘."** 🍷

## (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) Conclusion

Wait, there is more...
