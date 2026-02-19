#!/bin/bash

# Define topics and their directory names
topics=(
  "gpt5-3-codex-spark:2026-02-13-gpt5-3-codex-spark:GPT-5.3 Codex Spark"
  "gemini-3-deep-think:2026-02-13-gemini-3-deep-think:Gemini 3 Deep Think"
  "ai-journalism-ethics:2026-02-13-ai-journalism-ethics:AI Journalism Ethics"
  "waymo-gen6-autonomous:2026-02-13-waymo-gen6-autonomous:Waymo Gen 6"
  "anthropic-series-g:2026-02-13-anthropic-series-g:Anthropic Series G"
)

# Ensure we are on main and up to date
git checkout main
git pull origin main

for item in "${topics[@]}"; do
  IFS=':' read -r branch_suffix dir_name title <<< "$item"
  
  branch_name="feature/$branch_suffix"
  dir_path="src/content/posts/$dir_name"
  
  echo "Processing $title..."
  
  # Create and switch to branch
  git checkout -b "$branch_name"
  
  # Add specific directory
  git add "$dir_path"
  
  # Commit
  git commit -m "feat: Add $title content"
  
  # Push
  git push -u origin "$branch_name"
  
  # Create PR
  gh pr create --title "feat: Add $title" --body "Auto-generated content (Recovered Run)" --base main --head "$branch_name"
  
  # Merge PR
  gh pr merge "$branch_name" --squash --auto
  
  # Switch back to main for next iteration
  git checkout main
  git pull origin main
  
  echo "Completed $title"
  echo "--------------------------------"
done

echo "Recovery Deployment Complete."
