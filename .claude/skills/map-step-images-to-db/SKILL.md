---
name: map-step-images-to-db
description: Find image/illustration placeholder slots in one Peta's step components, back them with the existing `page_images` Supabase table using the M{materi}-P{peta}-L{langkah}-{urutan} naming convention, write a dummy-data migration SQL, and wire the components to fetch from DB via `next/image`. Trigger phrases — "bikin sql dummy image peta <N>", "mapping image ke database peta <N>", "lanjut ke peta <N> untuk gambar", "mapping image url ke database".
---

# Map step images to `page_images` DB

Applies the pattern already implemented in Peta1–Peta4 (see git log) to another `Peta<N>` folder: replace hardcoded gray "Ilustrasi" placeholder boxes / labeled item grids with images fetched from the existing `page_images` Supabase table, and generate the SQL to seed dummy URLs for them. Read this whole file before starting.

## Non-negotiables — do not violate

- **Never create a new table.** `page_images` (see `supabase/migrations_manual/0002_page_images.sql`) already exists and is the single source of truth for all image URLs in this app (page heroes, materi covers, step illustrations). Adding `step_images` or similar is a mistake that has already been made and reverted once — don't repeat it.
- **Naming convention for `nama`:** `M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}`, e.g. `M1-P3-L2-1`. `materi`/`peta`/`langkah` are 1-indexed integers matching the app's own routing (`stepRegistry.tsx` keys `"{materi}-{peta}-{step}"`). `urutan` restarts at 1 for each langkah's own image count — it is not a running total across the whole Peta.
- **Never guess placeholder count.** Read every step file in the target Peta folder fully before writing any SQL or key. Undercounting silently drops images the UI needs; overcounting adds dead DB rows.
- **Only real photo/illustration slots count**, not:
  - plain SVG icons (checkmarks, magnifying glass, lightbulb, arrows)
  - colored icon circles/squares used as decoration
  - QR code boxes (these already have their own convention — `qr-geogebra`, `qr-ar` keys in `pageImages.ts` — don't touch them)
  - swatch-style colored boxes standing in for a shape's color (e.g. a mapped array rendering `<div style={{background: item.color}}>` with no "Ilustrasi"/photo intent)
  A real slot looks like a light-gray/tinted box (`bg-[#F3F4F6]`, `bg-[#EFF4FF]`, `bg-[#F9FAFB]`, etc.) containing placeholder text like "Ilustrasi", "Ilustrasi AR", "Ilustrasi GeoGebra 3D", or a grid of items each labeled with a real-world object/thing name (e.g. "Rumah", "Akuarium", "Kelompok A") that's clearly meant to become a photo/diagram.
- **Ambiguous slots → ask the user**, don't decide unilaterally. If a Peta has grid-of-many-items slots (10+ items) as well as single "Ilustrasi" boxes, ask whether the user wants full coverage (every grid item gets its own DB row) or just the single per-langkah illustrations — this changes row count by an order of magnitude and was worth a clarifying question in every Peta done so far.

## Algorithm

1. **Resolve scope.** `PETA=Peta<N>`. List its step files in step order:
   ```bash
   ls src/app/belajar/_components/steps/$PETA/ | sort
   ```
   Cross-check against `stepRegistry.tsx` for the `"1-{N}-*"` keys to confirm step count and file-to-step mapping (don't assume filename order always matches registry order).

2. **Audit every file for image slots.** Read each file fully (a background `Explore` agent is fine here if there are many files — this was done via Agent in Peta3/Peta4 and worked well; for 1-3 files just read them directly). For each file record:
   - step number
   - slot count (0 if none)
   - for each slot: the exact label/name (from mapped array `label`/`title` field, or the surrounding heading if it's a single static box), and the JSX line range

3. **Report counts to the user before writing anything**, in the shape:
   ```
   L1 (StepName): N slots — [label1, label2, ...]
   L2 (StepName): 0 slots
   ...
   ```
   If any step has a grid with many (5+) items, ask the clarifying question from the Non-negotiables section above before proceeding.

4. **Assign keys.** For each slot in step order, in the order it appears top-to-bottom in the JSX: `M1-P{N}-L{step}-{i}` where `i` starts at 1 per step.

5. **Update `src/lib/pageImages.ts`:**
   - Add every new key to the `PageImageKey` union.
   - Add every new key to `DEFAULT_IMAGES` with a `https://placehold.co/{w}x{h}?text={label}` dummy URL sized to roughly match the slot's rendered aspect ratio (square slots → equal w/h, `aspect-video` → 16:9, card thumbnails → ~4:3).

6. **Write the migration SQL** at `supabase/migrations_manual/000{next}_step_images_peta{N}.sql` (check the highest existing number in that folder first — do not reuse or skip numbers):
   ```sql
   -- Run this in the Supabase SQL editor.
   -- Adds Materi 1 / Peta <N> step illustration images to the existing page_images table.
   -- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

   insert into page_images (nama, url, keterangan) values
     ('M1-P<N>-L<step>-<i>', 'https://placehold.co/...?text=...', 'Peta <N> Langkah <step> - <what it is> (dummy)'),
     ...
   on conflict (nama) do nothing;
   ```
   Group rows with a `-- Langkah X (StepName)` comment per step, matching the style of `0006_step_images_peta2.sql` / `0007_step_images_peta3_peta4.sql`.

7. **Wire each affected component:**
   - Add `import Image from "next/image";` and `import { getPageImage } from "@/lib/pageImages";` (add `type PageImageKey` too if the file has a mapped array of slots).
   - Make the exported step component `async` (Server Component — these are already Server Components rendering a `<form action={submitStepAction}>`, so `async function` is safe and matches Peta1Step1Pendahuluan/Peta2Step1Amati's existing pattern).
   - For a single static slot: `const gambarX = await getPageImage("M1-P<N>-L<step>-1");` near the top of the function body, before `return`.
   - For a mapped array of slots: add an `imageKey: "M1-P<N>-L<step>-<i>"` field to each array entry (typed `satisfies { ...; imageKey: PageImageKey }[]`), then `const xImages = await Promise.all(items.map((item) => getPageImage(item.imageKey)));` before `return`, and index into it in the `.map()` render with `(item, i) => ...` using `xImages[i]`.
   - Replace the placeholder `<div className="... bg-[#F3F4F6] flex items-center justify-center text-xs text-[#9CA3AF]">Ilustrasi</div>` with:
     ```tsx
     <div className="relative <same sizing classes> overflow-hidden <same bg color>">
       <Image src={gambarX} alt="<descriptive alt text>" fill className="object-cover" />
     </div>
     ```
     Drop the `flex items-center justify-center text-xs text-[#9CA3AF]` centering/text classes (no longer needed), keep every sizing/rounding/background class, add `relative` (required for `fill`) and `overflow-hidden` (keeps rounded corners clipping the image).
   - If a slot has an absolutely-positioned badge/tag overlay (e.g. Peta2's thumbnail number badge, Peta3's kelompok label pill), keep that overlay div as a sibling after `<Image>` inside the same `relative` container — do not remove it.

8. **Check `next.config.ts`** already allowlists `placehold.co` in `images.remotePatterns` (it does, added in the Peta1 pass) — only touch this file if a different dummy image host is used.

9. **Verify, once, across all touched files:**
   ```bash
   npx eslint <touched files, space separated>
   npx tsc --noEmit
   ```
   Fix only errors in files you touched — this repo has pre-existing unrelated lint/type issues elsewhere (dynamic-component pattern in `page.tsx`, ref-in-render in `GeogebraCube.tsx`) that are out of scope.

10. **Report back** (do not run the SQL yourself — the user executes migrations manually): list the migration file path, the new keys added, and which component files were changed vs. left untouched (with a one-line reason for each untouched step, e.g. "form/text only, no image slot").

## Worked examples (already applied — use as reference diffs)

- **Peta1** (`0005_step_images.sql`): 1 step, 1 slot (`M1-P1-L1-1`, hero image in "Sebelum Memulai" section of `Peta1Step1Pendahuluan.tsx`).
- **Peta2** (`0006_step_images_peta2.sql`): 7 steps; user opted for full grid coverage — L1 = 10 thumbnails + 1 "Ilustrasi" box = 11 slots, L4 = 10 item grid, L7 = 1 slot. L2/L3/L5/L6 = 0 slots (forms/icons only).
- **Peta3 & Peta4** (`0007_step_images_peta3_peta4.sql`): Peta3 L1 = 1 slot, L2 = 3 slots (mapped `kelompok` array); Peta4 L1/L3/L4/L5 = 1 slot each, L6 = 4 slots (mapped `langkah` array), L10 = 1 slot. Peta4's L3 QR-code box was explicitly left alone (different convention, not a photo illustration). Peta4L2's colored shape swatches were excluded as decorative, not photo slots.
