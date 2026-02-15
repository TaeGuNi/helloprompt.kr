#!/bin/bash
# Remove set -e to allow continuation after errors
# set -e

# Topics: slug:title:insight:image
TOPICS=(
    "prompt-engineering-zero-shot-vs-few-shot:Zero-Shot vs Few-Shot Prompting:Few-shot prompting drastically improves reliability for complex reasoning tasks:https://picsum.photos/seed/prompt1/800/600"
    "optimizing-context-windows:Optimizing Context Windows:Effectively managing token usage is key to reducing costs and improving LLM focus:https://picsum.photos/seed/prompt2/800/600"
    "chain-of-thought-reasoning:Chain-of-Thought Reasoning:Asking models to 'think step by step' unlocks significantly higher performance on logic puzzles:https://picsum.photos/seed/prompt3/800/600"
    "prompt-injection-security:Prompt Injection Security Risks:As LLMs integrate with tools, prompt injection becomes a critical security vulnerability:https://picsum.photos/seed/prompt4/800/600"
    "role-playing-personas:Effective Role Prompting:Assigning specific personas helps models adopt the right tone and domain expertise:https://picsum.photos/seed/prompt5/800/600"
)

SCRIPT_DIR=$(pwd)
WORKER_BASE="../workers"
mkdir -p "$WORKER_BASE"

echo "Syncing remote..."
git fetch origin

for i in "${!TOPICS[@]}"; do
    IFS=':' read -r SLUG TITLE INSIGHT IMG <<< "${TOPICS[$i]}"
    WORKER_DIR="$WORKER_BASE/worker-$i"
    BRANCH="feature/$SLUG"
    
    echo "=== [Worker $i] Processing: $SLUG ==="
    
    # Clean previous worktree if exists
    if [ -d "$WORKER_DIR" ]; then
        git worktree remove --force "$WORKER_DIR" 2>/dev/null || rm -rf "$WORKER_DIR"
    fi
    
    # Create worktree
    git worktree add --detach "$WORKER_DIR" origin/develop || { echo "Failed to create worktree"; continue; }
    
    # Enter worker context
    pushd "$WORKER_DIR" > /dev/null
    
    # Checkout feature branch
    git checkout -b "$BRANCH"
    
    # Copy generator
    cp "$SCRIPT_DIR/generate_batch.py" .
    
    # Run generation
    python3 generate_batch.py "$SLUG" "${TITLE//-/ }" "${INSIGHT//-/ }" "$IMG"
    
    # Commit
    git add src/content/posts
    git commit -m "feat($SLUG): add content for $TITLE"
    
    # Push
    echo "Pushing..."
    git push -u origin "$BRANCH" || echo "Push failed (maybe no changes or network)"
    
    # PR
    echo "Creating PR..."
    gh pr create --base develop --head "$BRANCH" --title "feat($SLUG): $TITLE" --body "Auto-generated content for $SLUG. Insight: $INSIGHT" || echo "PR creation failed (might exist)"
    
    # Merge
    echo "Merging..."
    # Sleep to allow GitHub to register the PR state
    sleep 5
    gh pr merge --squash --auto --delete-branch || echo "Merge failed or deferred for $SLUG"
    
    echo "=== [Worker $i] Step Complete ==="
    
    popd > /dev/null
    
    # Cleanup worktree
    git worktree remove --force "$WORKER_DIR"
done

git worktree prune
echo "All tasks completed."
