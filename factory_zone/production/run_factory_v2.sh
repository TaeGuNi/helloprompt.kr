#!/bin/bash
# Topics: slug:title:insight:image
TOPICS=(
    "smart-sleep-mask-privacy-leak:Smart Sleep Masks Broadcasting Brainwaves:IoT privacy remains a critical vulnerability in 2026; biometric data leaks are the new password leaks:https://picsum.photos/seed/brainwaves/800/600"
    "openai-should-build-slack:Why OpenAI Should Build Slack:The consolidation of AI and communication platforms is the next logical step for enterprise productivity:https://picsum.photos/seed/slackai/800/600"
    "newpipe-algorithm-free:The Rise of Algorithm-Free Media:User demand for quiet media consumption without algorithmic feeds is growing:https://picsum.photos/seed/quietmedia/800/600"
    "breaking-vibe-coding-spell:Breaking the Spell of Vibe Coding:Moving beyond vibe based AI coding to rigorous engineering practices is the trend for 2026:https://picsum.photos/seed/coding/800/600"
    "offline-edge-ai-mobile:True Offline AI on Mobile:Local AI models on phones are finally powerful enough to replace cloud services for daily tasks:https://picsum.photos/seed/edgeai/800/600"
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
    sleep 5
    gh pr merge --squash --auto --delete-branch || echo "Merge failed or deferred for $SLUG"
    
    echo "=== [Worker $i] Step Complete ==="
    
    popd > /dev/null
    
    # Cleanup worktree
    git worktree remove --force "$WORKER_DIR"
done

git worktree prune
echo "All tasks completed."
