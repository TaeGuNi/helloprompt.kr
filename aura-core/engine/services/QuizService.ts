import * as fs from 'fs';
import * as path from 'path';

export class QuizService {
  // Assuming compiled output preserves structure or running via ts-node
  // Path: projects/aura-core/engine/services/QuizService.ts
  // Data: projects/aura-core/data/baumann_quiz.json
  // Relative: ../../../data/baumann_quiz.json
  private static readonly DATA_PATH = path.join(
    process.cwd(),
    'data/baumann_quiz.json',
  );

  public static getQuiz(locale: 'en' | 'kr' = 'en') {
    try {
      if (!fs.existsSync(this.DATA_PATH)) {
        throw new Error(`Quiz data not found at: ${this.DATA_PATH}`);
      }

      const rawData = fs.readFileSync(this.DATA_PATH, 'utf-8');
      const quiz = JSON.parse(rawData);

      return {
        meta: { ...quiz.meta, locale },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sections: quiz.sections.map((section: any) => ({
          id: section.id,
          title: section.title,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          questions: section.questions.map((q: any) => {
            const content = q.locales[locale] || q.locales['en']; // Fallback to EN
            return {
              id: q.id,
              trapKey: q.trapKey, // Preserve trapKey if exists
              text: content.text,
              options: content.options,
            };
          }),
        })),
      };
    } catch (error) {
      console.error('Failed to load quiz:', error);
      return null;
    }
  }
}
