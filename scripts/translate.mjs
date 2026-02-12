import { exec } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

const langs = ["en", "ja", "zh", "es", "fr", "de", "it", "pt", "ru"];
const sourceFile = "src/pages/posts/excel-to-sql.md";
const sourceContent = readFileSync(sourceFile, 'utf-8');

async function translate(lang) {
  console.log(`Translating to ${lang}...`);
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
  The source has prompts in Korean. Translate them to the target language (${lang}).
  Output ONLY the translated markdown. Do not include ' \`\`\`markdown ' fences.`;

  // Escape double quotes in content for shell command
  const safeContent = sourceContent.replace(/"/g, '\\"').replace(/`/g, '\\`');
  const prompt = `${instruction}\n\n${safeContent}`;
  
  // This is still risky with shell length limits and complex escaping.
  // Better to write prompt to a temp file and cat it? 
  // If gemini supports input from file... 
  // Let's assume we can pass it as arg, but escaping is key.
  
  // Actually, passing huge arg is bad.
  // Let's try to write to a temp file and use $(cat temp) style but strictly quoted?
  // Or: gemini "$(cat temp_file)"
  
  const tempFile = `temp_prompt_${lang}.txt`;
  writeFileSync(tempFile, instruction + "\n\n" + sourceContent);
  
  try {
    // We use shell cat to read the file into the argument.
    // This avoids JS escaping issues, but we depend on shell's ability to handle "$(cat file)".
    // Bash handles it fine even with quotes inside, as long as we quote the expansion: "$(cat file)"
    const { stdout, stderr } = await execAsync(`gemini "$(cat ${tempFile})"`);
    if (stderr) console.error(`Stderr for ${lang}:`, stderr);
    
    // Clean up output (sometimes LLMs add markdown fences)
    let cleanOutput = stdout.trim();
    if (cleanOutput.startsWith("```markdown")) cleanOutput = cleanOutput.substring(11);
    if (cleanOutput.startsWith("```")) cleanOutput = cleanOutput.substring(3);
    if (cleanOutput.endsWith("```")) cleanOutput = cleanOutput.substring(0, cleanOutput.length - 3);
    
    writeFileSync(`${outDir}/excel-to-sql.md`, cleanOutput.trim());
    console.log(`Saved ${lang}`);
  } catch (e) {
    console.error(`Error translating ${lang}:`, e);
  }
}

// Run sequentially
async function run() {
  for (const lang of langs) {
    await translate(lang);
  }
}

run();
