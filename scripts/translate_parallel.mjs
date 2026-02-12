import { exec } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { promisify } from 'util';

const execAsync = promisify(exec);
const langs = ["en", "ja", "zh", "es", "fr", "de", "it", "pt", "ru"];
const sourceFile = "src/pages/posts/excel-to-sql.md";
const sourceContent = readFileSync(sourceFile, 'utf-8');

async function translate(lang) {
  console.log(`Starting ${lang}...`);
  const outDir = `src/pages/${lang}/posts`;
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  
  const instruction = `Translate the following Markdown blog post to language code '${lang}'. 
  Keep Frontmatter keys in English. Translate values for 'title', 'description', 'category'.
  Keep 'layout', 'author', 'date', 'updatedDate' values as is.
  Translate 'tags' values.
  Keep code blocks exactly as they are.
  Do not translate the prompt 'Role', 'Context', 'Task' keys if they are in English in the source, but translate the content.
  Output ONLY the translated markdown.`;

  const tempFile = `temp_prompt_${lang}.txt`;
  writeFileSync(tempFile, instruction + "\n\n" + sourceContent);
  
  try {
    const { stdout } = await execAsync(`gemini "$(cat ${tempFile})"`);
    let cleanOutput = stdout.trim();
    if (cleanOutput.startsWith("```markdown")) cleanOutput = cleanOutput.substring(11);
    if (cleanOutput.startsWith("```")) cleanOutput = cleanOutput.substring(3);
    if (cleanOutput.endsWith("```")) cleanOutput = cleanOutput.substring(0, cleanOutput.length - 3);
    
    writeFileSync(`${outDir}/excel-to-sql.md`, cleanOutput.trim());
    console.log(`Finished ${lang}`);
  } catch (e) {
    console.error(`Error ${lang}:`, e.message);
  }
}

async function run() {
    const batchSize = 4; // Increased to 4 to speed up
    for (let i = 0; i < langs.length; i += batchSize) {
        const batch = langs.slice(i, i + batchSize);
        await Promise.all(batch.map(translate));
    }
}

run();
