import { describe, it, expect } from 'vitest';
import { EngineFactory } from '../engine/EngineFactory.js';
import { SkinnEngine } from '../engine/CoreLogic.js';

describe('EngineFactory', () => {
  it('should create a SkinnEngine instance', () => {
    const engine = EngineFactory.create();
    expect(engine).toBeInstanceOf(SkinnEngine);
  });
});
