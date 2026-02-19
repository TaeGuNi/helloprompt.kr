import os
import sys
import datetime
from critic_agent import CriticAgent

def generate_content(slug, insight, image_url):
    base_dir = f"src/content/posts/2026-02-14-{slug}"
    os.makedirs(base_dir, exist_ok=True)

    critic = CriticAgent()
    
    # ... (Language dict remains same) ...
    langs = {
        'index.md': 'Korean',
        'index.en.md': 'English',
        # ... other langs ...
    }
    
    # ... (Titles dict remains same, assume populated) ...
    titles = {
        'ai-fatigue': {'ko': "AI 피로감의 시대", 'en': "The Age of AI Fatigue"},
        # ... fallback logic ...
    }

    def get_improved_body(lang_name, topic_slug, attempt=1, feedback=""):
        # Simulation of LLM Generation with Feedback Loop
        base_text = f"""
## The Problem
This post explores the critical issue of **{topic_slug}**. 
> "{insight}"

## The Reality
{lang_name} speakers are rejecting the hype. 
"""
        
        # Improvement Logic based on Feedback
        if "Missing contextual keywords" in feedback:
            base_text += f"\n\n**[Refined Context]** Imagine you are in a meeting at 9 AM. Your boss asks about AI..."
            base_text += f"\n**[Workflow]** Use this command right after your morning coffee."
            base_text += f"\n**[Resolution]** Finally, you can leave work on time."

        return base_text

    for filename, lang_name in langs.items():
        # ... (Title logic) ...
        title_map = titles.get(slug, {})
        lang_code = filename.split('.')[1] if 'index.' in filename and filename != 'index.md' else 'ko'
        title = title_map.get(lang_code, f"{slug} ({lang_name})")

        # --- CRITIC LOOP START ---
        best_content = ""
        best_score = 0
        
        for attempt in range(1, 4): # Max 3 attempts
            print(f"[{lang_name}] Attempt {attempt} generating...")
            
            # Generate (Simulated)
            current_body = get_improved_body(lang_name, slug, attempt, feedback=critic.evaluate(best_content)['feedback'] if attempt > 1 else "")
            
            # Critique
            eval_result = critic.evaluate(current_body)
            score = eval_result['score']
            
            print(f"  -> Score: {score}/100. Passed: {eval_result['passed']}")
            
            if score > best_score:
                best_score = score
                best_content = current_body
            
            if eval_result['passed']:
                break # Success!
        
        # --- CRITIC LOOP END ---

        final_content = f"""---
title: "{title}"
description: "Critical analysis of {slug}: {insight}"
date: "2026-02-14"
image: "{image_url}"
tags: ["AI", "Trend", "2026"]
---

{best_content}
"""
        with open(os.path.join(base_dir, filename), 'w') as f:
            f.write(final_content)

    print(f"Generated 10 files for {slug} with Critic Loop.")


if __name__ == "__main__":
    generate_content(sys.argv[1], sys.argv[2], sys.argv[3])
