const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Arguments: node update-docs-version.js <old_version> <new_version>
const oldVersion = process.argv[2];
const newVersion = process.argv[3];

if (!oldVersion || !newVersion) {
  console.error('❌ Usage: node update-docs-version.js <old_version> <new_version>');
  process.exit(1);
}

console.log(`📝 Updating docs version from ${oldVersion} to ${newVersion}...`);

try {
  // 1. Get staged files (modified docs only)
  // We check .md and .mermaid files
  const stagedFiles = execSync('git diff --name-only --cached', { encoding: 'utf-8' })
    .split('\n')
    .filter(file => file && (file.endsWith('.md') || file.endsWith('.mermaid')));

  if (stagedFiles.length === 0) {
    console.log('   No staged documentation files found. Skipping.');
    process.exit(0);
  }

  let updatedCount = 0;

  // 2. Replace version strings
  stagedFiles.forEach(file => {
    if (!fs.existsSync(file)) return; // Deleted files check

    const content = fs.readFileSync(file, 'utf-8');
    
    // Replace logic:
    // Matches "1.0.0", "v1.0.0", "V1.0.0"
    // We strictly replace the exact old version string to avoid accidents
    if (content.includes(oldVersion)) {
      const newContent = content.split(oldVersion).join(newVersion);
      fs.writeFileSync(file, newContent);
      
      // 3. Re-stage the file
      execSync(`git add "${file}"`);
      console.log(`   ✅ Updated: ${file}`);
      updatedCount++;
    }
  });

  if (updatedCount > 0) {
    console.log(`✨ Successfully updated version in ${updatedCount} document(s).`);
  } else {
    console.log('   No version strings found in staged docs.');
  }

} catch (error) {
  console.error('❌ Error updating docs:', error.message);
  process.exit(1);
}
