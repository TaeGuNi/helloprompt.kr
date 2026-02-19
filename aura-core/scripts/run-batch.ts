import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const target = args[0] || 'all'; // Default to 'all' if no arg provided

const runnerPath = path.resolve(__dirname, '../jobs/runner.ts');

// Use tsx directly
const command = `npx tsx ${runnerPath} --target=${target}`;

try {
  execSync(command, { stdio: 'inherit', cwd: path.resolve(__dirname, '..') });
} catch {
  // Error is already logged by inherited stdio
  process.exit(1);
}
