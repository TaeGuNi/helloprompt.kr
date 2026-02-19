import type { ClientProfile, Treatment } from '../types/index.js';

export class FutureSimulator {
  public simulate(client: ClientProfile, recs: Treatment[]): string {
    return recs.length > 0
      ? `저와 함께 관리하신다면, 5년 뒤에는 지금보다 더 건강하고 맑은 피부(${
          client.age + 2
        }세 예상)를 만나보실 수 있어요!`
      : '아직 딱 맞는 방법을 찾지 못했지만, 걱정 마세요. 조금 더 안전하고 편안한 방법을 계속 찾아드릴게요.';
  }
}
