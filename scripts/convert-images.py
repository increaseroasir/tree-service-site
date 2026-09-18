# Downloads generated images (URL list in scripts/image-urls.txt: "name url")
# and writes optimized WebP to public/images/<name>.webp at 1600px wide.
import sys, os, urllib.request
from PIL import Image
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
raw = os.path.join(root, "scripts", "raw-images")
out = os.path.join(root, "public", "images")
os.makedirs(raw, exist_ok=True); os.makedirs(out, exist_ok=True)
for line in open(os.path.join(root, "scripts", "image-urls.txt")):
    line = line.strip()
    if not line or line.startswith("#"): continue
    name, url = line.split(" ", 1)
    src = os.path.join(raw, name + ".jpeg")
    if not os.path.exists(src):
        urllib.request.urlretrieve(url, src)
    im = Image.open(src).convert("RGB")
    w = 1600 if name == "hero" else 1200
    if im.width > w:
        im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    dst = os.path.join(out, name + ".webp")
    im.save(dst, "WEBP", quality=70, method=6)
    print(f"{name:16s} {im.width}x{im.height} {os.path.getsize(dst)//1024} KB")
