import os
import json

CONTENT_DIR = 'src/content/posts'
QUEUE_FILE = 'qa_queue.json'

def build_queue():
    print("🏗️ Building QA Queue...")
    
    # 1. Scan all posts
    all_posts = []
    if os.path.exists(CONTENT_DIR):
        for item in os.listdir(CONTENT_DIR):
            item_path = os.path.join(CONTENT_DIR, item)
            
            # Check if it's a valid post folder
            if os.path.isdir(item_path):
                # We need to process 'index.md' inside
                index_path = os.path.join(item_path, 'index.md')
                if os.path.exists(index_path):
                    all_posts.append({
                        "slug": item,
                        "path": index_path,
                        "status": "PENDING",
                        "retries": 0,
                        "last_error": None
                    })
    
    # 2. Check existing queue to preserve status
    existing_queue = {}
    if os.path.exists(QUEUE_FILE):
        try:
            with open(QUEUE_FILE, 'r') as f:
                data = json.load(f)
                for item in data:
                    existing_queue[item['slug']] = item
        except json.JSONDecodeError:
            pass

    # 3. Merge (Preserve existing status, add new)
    final_queue = []
    for post in all_posts:
        if post['slug'] in existing_queue:
            final_queue.append(existing_queue[post['slug']])
        else:
            final_queue.append(post)
            
    # 4. Save
    with open(QUEUE_FILE, 'w') as f:
        json.dump(final_queue, f, indent=2)
        
    print(f"✅ Queue Built: {len(final_queue)} items total.")
    print(f"   - PENDING: {len([x for x in final_queue if x['status'] == 'PENDING'])}")
    print(f"   - DONE: {len([x for x in final_queue if x['status'] == 'DONE'])}")

if __name__ == "__main__":
    build_queue()
