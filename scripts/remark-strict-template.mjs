import { visit } from "unist-util-visit";

export function remarkStrictTemplate() {
  return (tree, file) => {
    // Only apply to files in the posts directory
    const filePath = file.history[0] || "";
    if (
      !filePath.includes("/src/content/posts/") &&
      !filePath.includes("POST_TEMPLATE.md")
    )
      return;

    visit(tree, "blockquote", (node) => {
      // Traverse inside the blockquote to find any fenced code blocks
      let hasFencedCode = false;

      visit(node, "code", (codeNode) => {
        // Use AST properties instead of raw source code to prevent undefined exceptions
        if (codeNode.lang !== null || codeNode.meta !== null) {
          hasFencedCode = true;
        }
      });

      if (hasFencedCode) {
        console.error(
          `\n[🔥 Strict Template Violation] \nFile: ${filePath}\n` +
            `Error: A fenced code block (\`\`\`) is nested inside a blockquote (>).\n` +
            `Remedy: Remove the \`\`\` markdown wrappers and write pure text directly inside the blockquote (>).\n`,
        );
        // Do not throw a hard error here as it deadlocks Astro's concurrent sync pool.
        // Instead, use file.message or just log loudly.
        file.message(
          "Strict Template Violation: Fenced code inside blockquote",
          node,
        );
      }
    });

    // Future validation rules can be added here easily
  };
}
