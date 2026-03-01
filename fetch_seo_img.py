import urllib.request
import urllib.parse
import sys

prompt = "A high-quality 3D isometric illustration of a professional office worker looking frustrated at a computer screen showing falling graph lines and SEO failure. Subtle cyberpunk, dark mode, neon cyan color palette, clean aesthetic, no text"
url = "https://image.pollinations.ai/prompt/" + urllib.parse.quote(prompt) + "?width=1024&height=1024&nologo=true"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

try:
    with urllib.request.urlopen(req) as response, open('temp_seo_img.jpg', 'wb') as out_file:
        out_file.write(response.read())
    print("Success")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
