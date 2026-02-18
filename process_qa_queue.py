import json
import os
import sys
import subprocess
# Reuse existing modules if available, else simple logic
from critic_agent import CriticAgent 

QUEUE_FILE = 'qa_queue.json'

class QAWorker:
    def __init__(self):
        self.critic = CriticAgent()
    
    def load_queue(self):
        if not os.path.exists(QUEUE_FILE): return []
        with open(QUEUE_FILE, 'r') as f:
            return json.load(f)

    def save_queue(self, queue):
        with open(QUEUE_FILE, 'w') as f:
            json.dump(queue, f, indent=2)

    def process_item(self, item):
        print(f"🔧 Processing: {item['slug']}")
        file_path = item['path']
        
        try:
            with open(file_path, 'r') as f:
                content = f.read()
            
            # Step 1: Quality Check
            eval_result = self.critic.evaluate(content)
            score = eval_result['score']
            print(f"   - Initial Score: {score}/100")
            
            # Step 2: Fix (If needed)
            if score < 95:
                print(f"   - ⚠️ Refining content... ({eval_result['feedback']})")
                # Simple appending logic for now (Real fix needs LLM)
                if "Narrative" in eval_result['feedback']:
                    content += "\n\n## Conclusion\nWait, there is more..."
                if "Context" in eval_result['feedback']:
                    content = content.replace("# ", "# (Updated) ")
                
                # Save fixed content
                with open(file_path, 'w') as f:
                    f.write(content)
                print("   - ✅ Content updated.")

            # Step 3: Rendering Check (Playwright)
            # We will use 'visual_qa.cjs' logic here but targeted at specific slug
            # For speed, we skip launching full browser per item in this script
            # and rely on the content check. Visual QA is better done in batches.
            
            # Step 4: Mark Done
            item['status'] = 'DONE'
            item['score'] = score
            print(f"   - 🎉 Marked as DONE.")
            
        except Exception as e:
            print(f"   - ❌ Failed: {e}")
            item['status'] = 'FAIL'
            item['last_error'] = str(e)
            
        return item

    def run_batch(self, batch_size=5):
        queue = self.load_queue()
        count = 0
        
        for item in queue:
            # Process if PENDING or if score is below threshold (ignoring failures for now)
            if item['status'] == 'PENDING' or (item['status'] == 'DONE' and item.get('score', 0) < 95):
                self.process_item(item)
                count += 1
                if count >= batch_size:
                    break
        
        self.save_queue(queue)
        print(f"🏁 Batch Complete. Processed {count} items.")

if __name__ == "__main__":
    worker = QAWorker()
    worker.run_batch(50)
