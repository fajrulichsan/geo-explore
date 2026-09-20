#!/usr/bin/env python3
"""Usage: organize-docx-assets.py <extractedDocxDir> <materi> '<json pages>' [notes-json]
<extractedDocxDir> holds word/media, order.json ([[file,w,h],...] in document first-appearance order).
pages = {"image1.png":[peta,halaman], ...} — the full-page renders, identified by reading their headers.
Copies every image into assets-source/materi-{materi}/peta-{NN}-<slug>/ (run from repo root) and writes README.md.
Everything after a page render belongs to that render's peta; images before the first render go to peta 1."""
import json, os, shutil, sys
src, materi, pages = sys.argv[1], sys.argv[2], json.loads(sys.argv[3])
slug = {1:"pendahuluan",2:"amati-berpikir",3:"ayo-berdiskusi",4:"eksplorasi",5:"olah-informasi",6:"ayo-verifikasi",7:"menyimpulkan",8:"refleksi-diri",9:"tantangan-open-ended",10:"rangkuman"}
info = json.load(open(f"{src}/order.json"))
root = f"assets-source/materi-{materi}"
cur = 1
rows = {p: [] for p in range(1, 11)}
for f, w, h in info:
    if f in pages:
        cur, hal = pages[f]
        dst = f"page-render-hal{hal}-{f}"
    else:
        dst = f
    d = f"{root}/peta-{cur:02d}-{slug[cur]}"
    os.makedirs(d, exist_ok=True)
    shutil.copy(f"{src}/word/media/{f}", f"{d}/{dst}")
    rows[cur].append((dst, w, h))
md = [f"# Materi {materi} — sumber gambar dari client\n",
"Diekstrak dari .docx (`word/media/`), resolusi asli, dikelompokkan per peta sesuai urutan dokumen.\n",
"- `page-render-*` = render halaman worksheet penuh (referensi layout/teks, bukan untuk diupload ke slot).",
"- `imageN.png` = ilustrasi/aset satuan dari client.",
"- Gambar yang dipakai ulang hanya disimpan di peta tempat ia pertama muncul.",
"- Tahap worksheet -> peta app: Pendahuluan=1, Tahap1=2, Tahap2=3, Tahap3=4, Tahap4=5, Tahap5=6, Tahap6=7, Refleksi=8, Open-Ended=9, Rangkuman=10.\n"]
for p in range(1, 11):
    md.append(f"## Peta {p} — {slug[p]}\n\n| file | ukuran | keterangan |\n|---|---|---|")
    md += [f"| {d} | {w}×{h} | |" for d, w, h in rows[p]]
    md.append("")
open(f"{root}/README.md", "w").write("\n".join(md))
print({p: len(v) for p, v in rows.items()})
