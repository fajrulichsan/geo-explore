---
name: remove-image-background
description: Make the solid background of an illustration/banner/mascot PNG transparent so it sits cleanly on any page color, then re-upload it to its page_images slot. Trigger — "hapus background gambar", "bikin transparan", "remove bg banner", "hilangkan background belakang banner".
---

# Remove image background

Use when a step illustration (banner, mascot) has a baked-in solid backdrop that clashes with the page.

1. Find the original file in `assets-source/materi-{M}/peta-*/` (or download the current `page_images` URL to the scratchpad).
2. Run: `python3 .claude/skills/remove-image-background/scripts/remove_bg.py in.png out.png [tolerance=28] [feather=1]`
   - Flood-fills from the borders only, so same-colored pixels inside the artwork are kept.
   - Raise `tolerance` for gradient/noisy backdrops; set `feather` to 0 for hard pixel edges.
3. Open `out.png` and check edges on both a white and a dark background.
4. Upload via the `?edit-foto=true` flow (see `upload-ulang-foto-peta`).
5. In the component, the image should use `natural` or `object-contain` with no wrapper `bg-*` class.

Pillow only; no new dependencies.
