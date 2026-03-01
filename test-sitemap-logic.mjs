import fs from "fs";
import path from "path";

function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findFiles(fullPath, fileList);
    } else if (fullPath.endsWith(".md")) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const posts = findFiles("./src/content/posts");
let validPosts = 0;
let lottoFound = false;

posts.forEach((postPath) => {
  // Mock Astro ID
  const id = postPath.replace("./src/content/posts/", "");
  if (id.endsWith("index.ko.md") || id.endsWith("index.ko")) {
    validPosts++;
    if (id.includes("lotto")) lottoFound = true;
  }
});

console.log(`Valid Base Paths Found: ${validPosts}`);
console.log(`Lotto Post Detected: ${lottoFound}`);
