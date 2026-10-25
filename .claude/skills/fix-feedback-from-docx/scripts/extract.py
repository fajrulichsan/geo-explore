"""Usage: python3 -I extract.py <file.docx> <out_dir>
Unzips the docx into <out_dir> (must be a NEW empty dir) and prints, in document order, every paragraph's text
plus the media file(s) it embeds, e.g.  `Ganti gambar siswa dengan gambar berikut` / `[image58.jpeg 1382x907]`.
No Pillow needed (sizes via macOS sips)."""
import re, subprocess, sys, zipfile, pathlib

src, out = sys.argv[1], pathlib.Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
zipfile.ZipFile(src).extractall(out)
rels = open(out / "word/_rels/document.xml.rels", encoding="utf8").read()
media = {}
for t in re.findall(r"<Relationship [^>]*/>", rels):
    i, g = re.search(r'Id="(rId\d+)"', t), re.search(r'Target="(media/[^"]+)"', t)
    if i and g:
        media[i.group(1)] = g.group(1)

def size(f):
    o = subprocess.run(["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(out / "word" / f)], capture_output=True, text=True).stdout.split()
    return f"{o[-3]}x{o[-1]}"

xml = open(out / "word/document.xml", encoding="utf8").read()
for p in re.findall(r"<w:p[ >].*?</w:p>", xml, flags=re.S):
    text = "".join(re.findall(r"<w:t[^>]*>([^<]*)</w:t>", p)).strip()
    imgs = [media[r] for r in re.findall(r'r:embed="(rId\d+)"', p) if r in media]
    if text:
        print(text)
    if imgs:
        print("  " + " ".join(f"[{pathlib.Path(f).name} {size(f)}]" for f in imgs))
