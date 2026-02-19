const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // 1. Fetch Remote (to compare)
  console.log('🔄 Checking remote version...');
  try {
    execSync('git fetch origin main', { stdio: 'ignore' });
  } catch (e) {
    console.warn('⚠️ Warning: Could not fetch origin. Skipping version check (offline or no remote).');
    process.exit(0);
  }

  // 2. Get Remote Version
  let remoteJson;
  try {
    remoteJson = execSync('git show origin/main:package.json', { encoding: 'utf-8' });
  } catch (e) {
    console.log('✨ No remote package.json found (first push?). Skipping check.');
    process.exit(0);
  }

  const remoteVersion = JSON.parse(remoteJson).version;
  
  // 3. Get Local Version
  const packageJsonPath = path.resolve(__dirname, '../package.json');
  const localVersion = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8')).version;

  console.log(`📡 Remote: ${remoteVersion} | 🏠 Local: ${localVersion}`);

  // 4. Compare Versions (Semantic Versioning Check)
  // simple check: local must be strictly greater than remote
  // or at least different if specifically asked "force bump"
  if (localVersion === remoteVersion) {
    console.error(`❌ Error: Local version (${localVersion}) is the SAME as remote.`);
    console.error(`   You must bump the version before pushing!`);
    console.error(`   (Hint: 'npm version patch' or ensure pre-commit hooks ran)`);
    process.exit(1);
  }
  
  // Also check if local is accidentally LOWER (e.g. reverted)
  // This is a naive check; for strict semver, use 'semver' package if installed.
  // Here we assume standard x.y.z format.
  const v1 = localVersion.split('.').map(Number);
  const v2 = remoteVersion.split('.').map(Number);
  
  for (let i = 0; i < 3; i++) {
    if (v1[i] > v2[i]) break; // OK
    if (v1[i] < v2[i]) {
      console.error(`❌ Error: Local version (${localVersion}) is LOWER than remote (${remoteVersion}).`);
      console.error(`   Please PULL first to sync changes!`);
      process.exit(1);
    }
  }

  console.log('✅ Version check passed. Pushing...');
  process.exit(0);

} catch (error) {
  console.error('❌ Version check failed:', error.message);
  process.exit(1);
}
