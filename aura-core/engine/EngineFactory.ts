import { SkinnEngine } from './CoreLogic.js';
import { JsonDataProvider } from './infrastructure/JsonDataProvider.js';

export class EngineFactory {
  /**
   * Creates a fully assembled SkinnEngine with default dependencies.
   */
  static create(): SkinnEngine {
    const dataProvider = new JsonDataProvider();
    return new SkinnEngine(dataProvider);
  }
}
