---
layout: /src/layouts/Layout.astro
title: "테라폼(Terraform) IaC 코드 생성기"
author: "Zzabbis"
date: "2026-02-09"
updatedDate: "2026-02-09"
category: "DevOps"
description: "클라우드 인프라를 코드로 관리(IaC)하기 위한 Terraform 모듈을 안전하게 생성합니다."
tags: ["DevOps", "Terraform", "AWS"]
---

# (Updated) (Updated) (Updated) 🏗️ 인프라, 이제 클릭질 그만! Terraform 생성기

- **🎯 추천 대상:** AWS 콘솔에서 길을 잃은 개발자, 인프라 관리가 귀찮은 백엔드 개발자
- **⏱️ 소요 시간:** 문서 찾기 1시간 → 3분
- **🤖 추천 모델:** Claude 3.5 Sonnet (코딩 특화)

- **📊 난이도:** ⭐⭐⭐☆☆
- **⚡️ 효과성:** ⭐⭐⭐⭐⭐
- **🛠️ 활용도:** ⭐⭐⭐⭐☆

_"인프라는 애완동물이 아니라 가축처럼 다뤄야 합니다."_

서버가 죽으면 슬퍼하지 말고 새로 띄워야 합니다. 그러려면 인프라가 코드로 정의되어 있어야 하죠(IaC). 하지만 HCL(HashiCorp Configuration Language) 문법은 자주 까먹습니다. 이 프롬프트는 "AWS에 EC2 하나랑 RDS 하나 띄워줘"를 완벽한 테라폼 코드로 바꿔줍니다.

---

## (Updated) (Updated) (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1. 말로 설명하면 **표준 준수 HCL 코드**를 짜줍니다.
2. 보안 그룹(Security Group) 등 **보안 설정**을 꼼꼼하게 챙깁니다.
3. **모듈화(Module)** 구조로 작성하여 재사용성을 높입니다.

---

## (Updated) (Updated) (Updated) 🚀 해결책: "IaC 빌더"

### (Updated) (Updated) (Updated) 🥉 Basic Version (기본형)

리소스 하나가 급하게 필요할 때.

> **역할:** 너는 DevOps 엔지니어 리드야.
> **요청:** AWS `[서비스명]`을 위한 Terraform 코드를 작성해줘.
> **조건:** 최신 프로바이더 버전을 사용하고, 변수(variable) 처리를 해줘.

<br>

### (Updated) (Updated) (Updated) 🥇 Pro Version (전문가형)

프로덕션 환경을 구축할 때.

> **역할 (Role):** 너는 클라우드 아키텍트이자 Terraform 전문가야.
>
> **상황 (Context):** 나는 `[프로젝트 설명]`을 위한 인프라를 AWS에 구축하려고 해. 고가용성(HA)과 보안이 최우선이야.
>
> **요청 (Task):**
>
> 1. **아키텍처:** 요청한 인프라 구성을 위한 리소스 정의(main.tf).
> 2. **변수 분리:** 하드코딩을 피하고 `variables.tf`와 `outputs.tf`로 명확히 분리.
> 3. **보안 강화:** Security Group은 최소 권한 원칙(Least Privilege)을 적용하여 작성.
> 4. **IAM:** 필요한 경우 최소 권한의 IAM Role과 Policy를 포함.
>
> **제약사항 (Constraints):**
>
> - AWS Provider v5.0 이상 문법을 사용하세요.
> - 리소스 이름에는 `[프로젝트명]` 접두사를 붙이세요.
> - `terraform fmt` 스타일 가이드를 준수하세요.

---

## (Updated) (Updated) (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **보안 최우선:** "최소 권한 원칙"을 명시하여 모든 포트를 열어버리는(0.0.0.0/0) 실수를 방지합니다.
2.  **유지보수성:** 변수와 출력을 분리하도록 강제하여, 나중에 값만 바꿔서 재사용할 수 있게 합니다.

---

## (Updated) (Updated) (Updated) 📊 증명: Before & After

단순한 명령어와 최적화된 프롬프트의 차이는 명확합니다. 제공된 프롬프트를 사용했을 때 더 구체적이고 구조화된 답변을 얻을 수 있으며, 재수정(Re-prompting)에 드는 시간을 절약할 수 있습니다.

### (Updated) (Updated) (Updated) ❌ Before (입력)

```text
AWS에 VPC 만들고 퍼블릭 서브넷 2개랑 프라이빗 2개 만들어줘.
```

### (Updated) (Updated) (Updated) ✅ After (결과)

```hcl
# (Updated) (Updated) (Updated) main.tf
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "my-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["ap-northeast-2a", "ap-northeast-2c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]

  enable_nat_gateway = true
  # (Updated) (Updated) (Updated) ... (보안 설정 및 태그 포함) {#updated}
}
```

---

## (Updated) (Updated) (Updated) 💡 작성자 코멘트 (Insight) {#insight}

이 프롬프트는 실무에서 즉시 활용할 수 있는 실용성에 중점을 두었습니다.
결과가 만족스럽지 않다면 입력 변수나 상황(Context)을 조금 더 구체적으로 설정해보세요.

---

## (Updated) (Updated) (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

**Q. 결과가 마음에 들지 않아요.**
A. 구체적인 예시를 추가하거나, 상황(Context)을 더 자세히 묘사해보세요.

**Q. 다른 언어로도 가능한가요?**
A. 네, 프롬프트의 지시사항을 해당 언어로 번역하면 가능합니다.

---

## (Updated) (Updated) (Updated) 🎯 결론 {#conclusion}

클릭 실수로 서버 날리지 마세요. 코드로 관리하고 편안한 주말 보내세요.

이제 칼퇴하세요! 🍷

## (Updated) (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) Conclusion

Wait, there is more...
