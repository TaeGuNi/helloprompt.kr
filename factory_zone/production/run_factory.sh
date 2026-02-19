#!/bin/bash
# Remove set -e to allow continuation after errors
# set -e

# Topics: slug:title:insight:image
TOPICS=(
    "ai-agent-swarms-2026:AI Agent Swarms:Multi-agent collaboration is the new standard for complex problem solving:https://picsum.photos/seed/swarm/800/600"
    "multimodal-reasoning-2026:Multimodal Reasoning:Models now reason across video audio and text simultaneously in real-time:https://picsum.photos/seed/multimodal/800/600"
    "edge-ai-privacy-2026:Privacy-First Edge AI:Running powerful LLMs locally on devices is now mainstream enhancing privacy:https://picsum.photos/seed/edge/800/600"
    "generative-ui-2026:Generative UI Patterns:Interfaces that adapt and generate themselves based on user intent are replacing static menus:https://picsum.photos/seed/genui/800/600"
    "quantum-ai-hybrids-2026:Quantum-AI Hybrids:Early experiments with quantum processors are speeding up specific AI training tasks:https://picsum.photos/seed/quantum/800/600"
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
