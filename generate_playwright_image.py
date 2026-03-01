import urllib.request
import urllib.parse
from PIL import Image
import io
import os

prompt = "A high-quality 3D isometric illustration of a professional worker looking stressed at a glowing red error screen on their monitor, caused by a broken E2E test due to a changed CSS class. Subtle cyberpunk, dark mode, and neon cyan color palette. Clean aesthetic. No text."
url = "https://image.pollinations.ai/prompt/" + urllib.parse.quote(prompt)

output_path = "/Users/jay/Documents/Projects/helloprompt.kr/public/images/hooks/playwright-auto-heal.jpg"

print(f"Downloading image for prompt: {prompt}")

try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        img_data = response.read()
    
    # Load image from memory
    img = Image.open(io.BytesIO(img_data))
    
    # Convert to RGB in case it's RGBA (PNG)
    if img.mode != 'RGB':
        img = img.convert('RGB')

    # Resize if width > 800
    max_width = 800
    if img.width > max_width:
        ratio = max_width / float(img.width)
        new_height = int((float(img.height) * float(ratio)))
        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        print(f"Resized image to {max_width}x{new_height}")
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # Save as compressed JPG
    img.save(output_path, "JPEG", optimize=True, quality=80)
    print(f"Success: Image saved to {output_path}")

except Exception as e:
    print(f"Error: {e}")
