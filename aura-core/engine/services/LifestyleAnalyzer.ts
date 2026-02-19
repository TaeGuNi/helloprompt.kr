import type { ClientProfile } from '../types/index.js';

export class LifestyleAnalyzer {
  public analyze(client: ClientProfile): string {
    if (!client.lifestyle) return '생활 습관이 양호합니다.';

    const issues: string[] = [];
    if (client.lifestyle.sleepHours < 6) {
      issues.push(
        '요즘 많이 피곤하시죠? 충분한 수면은 피부가 스스로 회복하는 데 꼭 필요해요. (재생력 저하 우려)',
      );
    }
    if (client.lifestyle.waterIntake < 1) {
      issues.push(
        '피부도 목이 마를 수 있어요. 물을 조금만 더 자주 챙겨주시면 훨씬 맑아질 거예요.',
      );
    }

    return issues.length > 0
      ? issues.join(' ')
      : '생활 습관이 아주 훌륭하세요! 이대로만 유지해 주세요.';
  }
}
