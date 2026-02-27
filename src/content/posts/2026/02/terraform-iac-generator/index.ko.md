---
layout: /src/layouts/Layout.astro
title: " \"테라폼(Terraform) IaC 코드 생성기\""
author: "Zzabbis"
date: "2026-02-09"
updatedDate: "2026-02-09"
category: "DevOps"
description: " \"클라우드 인프라를 코드로 관리(IaC)하기 위한 프로덕션 레벨의 Terraform 모듈을 안전하고 빠르게 생성합니다.\""
tags: ["DevOps", "Terraform", "AWS"]
---

# 🏗️ 인프라, 이제 클릭질 그만! Terraform 코드 생성기

- **🎯 추천 대상:** AWS 콘솔에서 길을 잃은 개발자, 인프라 관리가 귀찮은 백엔드 개발자
- **⏱️ 소요 시간:** 공식 문서 뒤적이는 시간 1시간 → 3분으로 단축
- **🤖 추천 모델:** Claude 3.5 Sonnet (코딩 및 아키텍처 설계 특화)

- ⭐ **난이도:** ⭐⭐⭐☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐☆

> _"클릭 실수 한 번에 서버가 날아가는 아찔한 경험, 언제까지 콘솔 창만 붙잡고 계실 건가요?"_

인프라는 애완동물이 아니라 가축처럼 다뤄야 합니다. 서버에 문제가 생기면 밤새워 고치는 것이 아니라, 가차 없이 폐기하고 똑같은 서버를 1초 만에 새로 띄워야 하죠. 이를 가능하게 하는 것이 바로 **IaC(Infrastructure as Code)**입니다. 하지만 HCL(HashiCorp Configuration Language)의 복잡한 문법과 수많은 Provider 옵션을 매번 외우고 작성하기란 쉽지 않습니다.

이 프롬프트는 "AWS에 EC2 하나랑 DB 하나 연결해서 띄워줘"라는 막연한 요구사항을, 당장 실무에 투입 가능한 **보안 규정 및 모듈화가 적용된 완벽한 테라폼 코드**로 변환해 줍니다.

---

## ⚡️ 3줄 요약 (TL;DR)

1. 구구절절 문서 찾을 필요 없이 **표준 HCL 문법을 준수하는 코드**를 즉시 생성합니다.
2. 0.0.0.0/0 허용 같은 치명적 실수를 막기 위해 **최소 권한 보안 설정(SG, IAM)**을 강제합니다.
3. 하드코딩을 배제하고 `variables.tf`, `outputs.tf`로 분리하여 **재사용성 높은 모듈**을 설계합니다.

---

## 🚀 해결책: "인프라 마스터 빌더"

### 🥉 Basic Version (기본형)

테스트용 리소스 하나가 급하게 필요할 때 가볍게 사용하세요.

> **역할 (Role):** 너는 시니어 DevOps 엔지니어야.
> **요청 (Task):** AWS `[서비스명]` 리소스를 생성하기 위한 Terraform 코드를 작성해줘.
> **조건 (Constraints):** 최신 AWS Provider 버전을 사용하고, 하드코딩 없이 변수(variable) 처리를 해줘.


### 🥇 Pro Version (전문가형)

보안과 고가용성이 필수적인 실제 프로덕션(운영) 환경을 구축할 때 사용하세요.

> **역할 (Role):** 너는 클라우드 보안과 고가용성(HA) 설계에 정통한 10년 차 클라우드 아키텍트이자 Terraform 전문가야.
>
> **상황 (Context):**
>
> - 배경: 나는 현재 `[프로젝트 설명, 예: 초당 1만 건의 트래픽을 처리하는 글로벌 이커머스 백엔드]` 구축을 위한 인프라를 AWS에 설계하려고 해.
> - 목표: 보안, 고가용성, 그리고 철저한 모듈화가 적용된 프로덕션 레벨의 IaC(Infrastructure as Code) 코드를 확보하는 것.
>
> **요청 (Task):**
>
> 1. **아키텍처 구성:** 요청한 인프라를 구축하기 위한 메인 리소스 정의(`main.tf`)를 작성해줘.
> 2. **구조화 및 모듈화:** 하드코딩을 엄격히 배제하고, `variables.tf`와 `outputs.tf`를 명확히 분리해줘.
> 3. **보안 규칙 강화:** Security Group은 반드시 최소 권한 원칙(Least Privilege, 0.0.0.0/0 무조건 허용 금지)을 적용해줘.
> 4. **권한 관리:** 필요한 경우 최소 권한이 부여된 IAM Role과 Policy 코드를 함께 작성해줘.
>
> **제약사항 (Constraints):**
>
> - HashiCorp Configuration Language (HCL) 최신 문법 및 AWS Provider v5.0 이상을 기준으로 작성할 것.
> - 모든 리소스 이름과 태그(Tag)에는 `[프로젝트명]` 접두사를 포함할 것.
> - `terraform fmt` 기준의 들여쓰기와 스타일 가이드를 완벽히 준수할 것.
>
> **주의사항 (Warning):**
>
> - 실무에서 사용 불가능한 Deprecated 옵션이나 안전하지 않은 보안 기본값은 절대 사용하지 마. (환각 및 보안 사고 방지)

---

## 💡 작성자 코멘트 (Insight)

테라폼 코드를 AI에게 전적으로 맡길 때 가장 무서운 점은 바로 **'보안(Security)'**입니다. 일반적인 프롬프트로 생성된 코드는 편의를 위해 방화벽 포트를 전부 열어버리거나(0.0.0.0/0), 불필요하게 넓은 권한의 IAM Role을 부여하는 경우가 매우 잦습니다.

위 Pro 버전 프롬프트의 핵심은 바로 **'최소 권한 원칙'과 '모듈화'를 AI에게 강제**하는 데 있습니다. 실무에서는 이 프롬프트로 튼튼한 뼈대를 먼저 잡은 뒤, `tfsec`이나 `checkov` 같은 정적 보안 분석 도구를 CI/CD 파이프라인에 태워 한 번 더 검증하는 방식을 강력히 추천합니다. 초기 인프라 세팅에 들어가던 며칠의 시간이 단 3분으로 줄어드는 마법을 경험하실 수 있을 겁니다.

---

## 🙋 자주 묻는 질문 (FAQ)

- **Q: AWS 말고 GCP나 Azure 환경에서도 쓸 수 있나요?**
  - A: 네, 당연합니다. `[상황]`과 `[제약사항]`에서 Provider를 'Google Cloud' 또는 'AzureRM'으로 변경하고, 요청하는 서비스명만 각 클라우드 벤더의 명칭에 맞게 수정해주시면 완벽하게 동작합니다.

- **Q: AI가 자꾸 구버전(v0.11 등) 문법으로 코드를 짜줘서 에러가 납니다.**
  - A: 구형 AI 모델(예: GPT-3.5)을 사용하실 때 자주 발생하는 문제입니다. 프롬프트에 'Terraform 최신 문법 사용'을 명시해 두었으나, 인프라 코드 생성 시에는 가급적 코딩에 특화된 **Claude 3.5 Sonnet**이나 최신 **GPT-4o** 사용을 권장합니다. 훨씬 안정적이고 트렌디한 HCL 코드를 뱉어냅니다.

---

## 🧬 프롬프트 해부 (Why it works?)

1. **Role 부여:** '10년 차 클라우드 아키텍트'라는 페르소나를 통해, 단순한 리소스 띄우기를 넘어 보안과 가용성을 고려한 엔터프라이즈급 아키텍처 코드를 유도했습니다.
2. **Constraints(제약):** HCL 최신 문법과 `terraform fmt` 준수를 강제하여, 복사 후 즉시 실행(`terraform init && terraform apply`)이 가능한 깔끔하고 표준화된 결과물을 보장합니다.
3. **보안 및 예외 통제:** '최소 권한 원칙'과 '안전하지 않은 기본값 사용 금지'를 명시하여 프로덕션 환경에서 치명적일 수 있는 방화벽(SG) 및 권한(IAM) 남용 사고를 원천 차단했습니다.

---

## 📊 증명: Before & After

단순히 "만들어줘"라고 했을 때와, 구조화된 프롬프트를 사용했을 때 AI가 출력하는 HCL 코드의 품질 차이는 극명합니다.

### ❌ Before (단순한 입력)

```text
AWS에 VPC 만들고 퍼블릭 서브넷 2개랑 프라이빗 2개 만들어줘.
```

**결과 (하드코딩 및 보안 취약):**

```hcl
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}
# 변수 처리 없이 하드코딩됨, 태깅(Tags) 누락, 확장이 불가능한 단일 파일 구조
```

### ✅ After (Pro 프롬프트 사용 결과)

**결과 (모듈화 및 실무 표준 적용):**

```hcl
# main.tf
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"

  name = "${var.project_name}-vpc"
  cidr = var.vpc_cidr

  azs             = var.availability_zones
  private_subnets = var.private_subnets
  public_subnets  = var.public_subnets

  enable_nat_gateway     = true
  single_nat_gateway     = false # 고가용성을 위해 AZ별 NAT 구성
  one_nat_gateway_per_az = true

  tags = {
    Environment = var.environment
    Project     = var.project_name
    ManagedBy   = "Terraform"
  }
}
```

_(※ 이 외에도 variables.tf, outputs.tf가 완벽하게 분리되어 출력됩니다.)_

---

## 🎯 결론

인프라 구성은 마우스 클릭으로 하는 것이 아닙니다. 코드로 기록하고, 리뷰 받고, 버전 관리를 해야 합니다.
이제 복잡한 테라폼 문법에 얽매이지 말고, AI의 힘을 빌려 견고하고 안전한 클라우드 성을 구축해 보세요.

안전하게 인프라 배포하시고, 이제 칼퇴하세요! 🍷
