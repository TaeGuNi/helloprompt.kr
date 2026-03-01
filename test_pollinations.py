import urllib.request
import urllib.parse
prompt = "A high-quality 3D isometric illustration of a professional worker facing the exact problem of a lottery machine spitting out generic soul-less numbers instead of strategic ones. subtle cyberpunk, dark mode, neon cyan color palette. clean aesthetic. no text"
url = "https://image.pollinations.ai/prompt/" + urllib.parse.quote(prompt)
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response, open('temp_lotto.jpg', 'wb') as out_file:
        out_file.write(response.read())
    print("Success")
except Exception as e:
    print(f"Error: {e}")
