"""Make the solid backdrop of an illustration transparent (edge flood-fill, Pillow only).

Usage: python3 remove_bg.py in.png out.png [tolerance=28] [feather=1]
"""
import sys
from collections import deque
from PIL import Image, ImageFilter


def remove_background(src: str, dst: str, tolerance: int = 28, feather: int = 1) -> None:
    img = Image.open(src).convert("RGBA")
    w, h = img.size
    px = img.load()

    corners = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]
    bg = tuple(sorted(c[i] for c in corners)[len(corners) // 2] for i in range(3))

    def is_bg(p):
        return p[3] == 0 or max(abs(p[i] - bg[i]) for i in range(3)) <= tolerance

    seen = bytearray(w * h)
    queue = deque()
    for x in range(w):
        queue.extend([(x, 0), (x, h - 1)])
    for y in range(h):
        queue.extend([(0, y), (w - 1, y)])

    while queue:
        x, y = queue.popleft()
        if not (0 <= x < w and 0 <= y < h) or seen[y * w + x]:
            continue
        seen[y * w + x] = 1
        if not is_bg(px[x, y]):
            continue
        px[x, y] = (0, 0, 0, 0)
        queue.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])

    if feather:
        alpha = img.getchannel("A").filter(ImageFilter.GaussianBlur(feather))
        img.putalpha(alpha)
    img.save(dst)


if __name__ == "__main__":
    args = sys.argv[1:]
    remove_background(args[0], args[1], *(int(a) for a in args[2:4]))
