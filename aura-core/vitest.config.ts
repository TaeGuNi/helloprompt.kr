import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // describe, it, expect 등을 전역 변수로 사용 (Jest 호환)
    environment: 'node',
    include: ['tests/**/*.{test,spec}.ts'],
    coverage: {
      provider: 'v8', // Node.js 내장 V8 엔진 사용 (빠름)
      reporter: ['text', 'json', 'html'],
      include: ['engine/**/*.ts'], // 커버리지 측정 대상
      exclude: ['**/*.d.ts', '**/index.ts', '**/types.ts', '**/*.test.ts'],
    },
    passWithNoTests: true,
  },
});
