/**
 * Series Hub Definitions
 *
 * Each series groups related posts by matching any of the specified tags.
 * Used by the series hub pages to create curated collections.
 */

export interface SeriesDefinition {
  /** URL slug: /[lang]/series/[id] */
  id: string;
  /** Display titles per language */
  title: Record<string, string>;
  /** Description per language */
  description: Record<string, string>;
  /** Posts matching ANY of these tags are included */
  tags: string[];
}

export const SERIES: SeriesDefinition[] = [
  {
    id: "office-productivity",
    title: {
      ko: "직장인 업무 자동화 시리즈",
      en: "Office Productivity Automation",
      ja: "仕事自動化シリーズ",
      zh: "办公自动化系列",
      es: "Automatización de Productividad",
      fr: "Automatisation au Bureau",
      de: "Büro-Produktivitäts-Automatisierung",
      it: "Automazione Produttività",
      pt: "Automação de Produtividade",
      ru: "Автоматизация Офисной Работы",
    },
    description: {
      ko: "엑셀, 이메일, 프레젠테이션, 회의록 등 매일 반복되는 업무를 AI로 자동화하는 프롬프트 모음",
      en: "AI prompts to automate daily office tasks: Excel, emails, presentations, and meeting notes",
      ja: "Excel、メール、プレゼン、議事録など、日常業務をAIで自動化するプロンプト集",
      zh: "用AI自动化日常办公任务：Excel、邮件、演示文稿和会议记录的提示词合集",
      es: "Prompts de IA para automatizar tareas diarias: Excel, correos, presentaciones y actas",
      fr: "Prompts IA pour automatiser les tâches quotidiennes : Excel, emails, présentations et comptes-rendus",
      de: "KI-Prompts zur Automatisierung täglicher Büroaufgaben: Excel, E-Mails, Präsentationen und Protokolle",
      it: "Prompt AI per automatizzare le attività quotidiane: Excel, email, presentazioni e verbali",
      pt: "Prompts de IA para automatizar tarefas diárias: Excel, e-mails, apresentações e atas",
      ru: "ИИ-промпты для автоматизации ежедневных задач: Excel, электронная почта, презентации и протоколы",
    },
    tags: [
      "엑셀",
      "스프레드시트",
      "이메일",
      "프레젠테이션",
      "업무자동화",
      "회의록",
      "보고서",
      "이메일작성",
      "영어이메일",
      "비즈니스영어",
      "구글시트",
      "PPT",
      "VBA",
    ],
  },
  {
    id: "investment-analysis",
    title: {
      ko: "AI 투자 분석 시리즈",
      en: "AI Investment Analysis",
      ja: "AI投資分析シリーズ",
      zh: "AI投资分析系列",
      es: "Análisis de Inversión con IA",
      fr: "Analyse d'Investissement par IA",
      de: "KI-Investitionsanalyse",
      it: "Analisi degli Investimenti con IA",
      pt: "Análise de Investimentos com IA",
      ru: "ИИ-Анализ Инвестиций",
    },
    description: {
      ko: "주식, 코인, 원유 등 투자 자산을 AI로 분석하는 프롬프트 모음",
      en: "AI prompts for analyzing stocks, crypto, and commodities",
      ja: "株式、仮想通貨、原油などの投資資産をAIで分析するプロンプト集",
      zh: "AI分析股票、加密货币和大宗商品的提示词合集",
      es: "Prompts de IA para analizar acciones, criptomonedas y materias primas",
      fr: "Prompts IA pour analyser actions, cryptos et matières premières",
      de: "KI-Prompts zur Analyse von Aktien, Krypto und Rohstoffen",
      it: "Prompt AI per analizzare azioni, criptovalute e materie prime",
      pt: "Prompts de IA para analisar ações, criptomoedas e commodities",
      ru: "ИИ-промпты для анализа акций, криптовалют и сырьевых товаров",
    },
    tags: [
      "주식",
      "투자",
      "코인",
      "원유",
      "AAPL",
      "MSFT",
      "NVDA",
      "TSLA",
      "AMZN",
      "GOOGL",
      "AMD",
      "PLTR",
    ],
  },
  {
    id: "self-improvement",
    title: {
      ko: "AI 자기 계발 시리즈",
      en: "AI Self-Improvement",
      ja: "AI自己啓発シリーズ",
      zh: "AI自我提升系列",
      es: "Automejora con IA",
      fr: "Développement Personnel par IA",
      de: "KI-Selbstverbesserung",
      it: "Auto-Miglioramento con IA",
      pt: "Autoaperfeiçoamento com IA",
      ru: "Саморазвитие с ИИ",
    },
    description: {
      ko: "독서, 학습, 면접, 이력서 등 자기 계발을 AI로 가속하는 프롬프트 모음",
      en: "AI prompts to accelerate self-improvement: reading, learning, interviews, and resumes",
      ja: "読書、学習、面接、履歴書など自己啓発をAIで加速するプロンプト集",
      zh: "AI加速自我提升：阅读、学习、面试和简历的提示词合集",
      es: "Prompts de IA para acelerar el crecimiento personal: lectura, aprendizaje, entrevistas y currículum",
      fr: "Prompts IA pour accélérer le développement personnel : lecture, apprentissage, entretiens et CV",
      de: "KI-Prompts für Selbstverbesserung: Lesen, Lernen, Interviews und Lebensläufe",
      it: "Prompt AI per accelerare la crescita personale: lettura, apprendimento, colloqui e curriculum",
      pt: "Prompts de IA para acelerar o crescimento pessoal: leitura, aprendizagem, entrevistas e currículos",
      ru: "ИИ-промпты для саморазвития: чтение, обучение, собеседования и резюме",
    },
    tags: [
      "독서",
      "독서노트",
      "자기계발",
      "면접",
      "이력서",
      "독서법",
      "커버레터",
      "학습",
    ],
  },
  {
    id: "developer-tools",
    title: {
      ko: "개발자를 위한 AI 프롬프트",
      en: "AI Prompts for Developers",
      ja: "開発者のためのAIプロンプト",
      zh: "面向开发者的AI提示词",
      es: "Prompts de IA para Desarrolladores",
      fr: "Prompts IA pour Développeurs",
      de: "KI-Prompts für Entwickler",
      it: "Prompt AI per Sviluppatori",
      pt: "Prompts de IA para Desenvolvedores",
      ru: "ИИ-промпты для Разработчиков",
    },
    description: {
      ko: "코드 리뷰, 디버깅, 테스트 생성 등 개발 생산성을 극대화하는 AI 프롬프트",
      en: "AI prompts for code review, debugging, test generation, and developer productivity",
      ja: "コードレビュー、デバッグ、テスト生成など開発生産性を最大化するAIプロンプト",
      zh: "代码审查、调试、测试生成等开发者生产力提示词",
      es: "Prompts de IA para revisión de código, depuración y generación de pruebas",
      fr: "Prompts IA pour revue de code, débogage et génération de tests",
      de: "KI-Prompts für Code-Review, Debugging und Testgenerierung",
      it: "Prompt AI per code review, debugging e generazione di test",
      pt: "Prompts de IA para revisão de código, depuração e geração de testes",
      ru: "ИИ-промпты для код-ревью, отладки и генерации тестов",
    },
    tags: [
      "코드리뷰",
      "디버깅",
      "테스트",
      "코딩",
      "프로그래밍",
      "prompt-engineering",
      "ai-agent",
    ],
  },
];
