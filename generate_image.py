import urllib.request
import urllib.parse
import os

prompt = "A high-quality 3D isometric illustration of a professional worker staring blankly at a screen, stressed about social media content and delaying leaving work. subtle cyberpunk, dark mode, neon cyan color palette. clean aesthetic. no text"
url = "https://image.pollinations.ai/prompt/" + urllib.parse.quote(prompt) + "?width=800&height=450&nologo=true"

req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response, open('temp_image.jpg', 'wb') as out_file:
        out_file.write(response.read())
    print("Downloaded successfully to temp_image.jpg")
except Exception as e:
    print(f"Error downloading: {e}")
