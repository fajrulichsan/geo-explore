---
name: build-peta-step-from-image
description: Turn one or more worksheet-page screenshots (image URLs) into fully wired Peta step components — split into app steps, continuous section lettering, illustration/mascot images sized and placed correctly, registry + page_images + migration SQL. Trigger phrases — "bikin page dari gambar ini", "buatkan step peta dari screenshot", "ini lanjutan yang sebelumnya cba tambahin", "split gambar ini jadi beberapa page".
---

# Build Peta step components from a worksheet image

Given one or more image URLs (screenshots of a printed/Canva-style worksheet page — usually
Bahasa Indonesia math learning material), reproduce the content as real Next.js step components
in this app's `belajar` flow, following the existing code pattern exactly for scaffolding but
free to redesign layout/illustration placement creatively (see Non-negotiables). Read this whole
file before starting.

## 0. Clarify scope first if any of this is unknown — don't guess

Ask the user (don't assume) whenever unclear:
- **Which materi + peta** these images belong to (e.g. "materi 2 peta 2"). Look at `stepRegistry.tsx`
  for what already exists there — if a peta folder for that materi+number already exists, this is
  a **continuation** (see §3); if not, it's a new peta.
- **Is this the final chunk** of this peta/tahap, or is more content coming later (e.g. "Tahap 2
  dari 6" not yet supplied)? This decides whether the last step's button says "SELESAI" (§6) or a
  provisional "LANJUTKAN"/"LANJUT KE TAHAP N" that will later need a real next step.
- If a screenshot's footer shows a stage indicator ("Tahap 1 dari 6", page dots "1 2 3 4 5 6"),
  treat every image with the **same stage number** as one logical unit (one "tahap") — they get
  continuous lettering and combine into one run of app steps, even if supplied in separate
  messages/turns.

## 1. Fetch and actually read every image

```bash
mkdir -p "$SCRATCHPAD"
curl -sL "<image-url>" -o "$SCRATCHPAD/refN.png"
```
Then use the Read tool on each downloaded file (it's multimodal — this is not optional, don't
skip to "reading" via WebFetch/OCR-guessing). Read every image fully before writing anything.

For each image, extract and write down (mentally or as a scratch note, not a permanent file):
- **Header/meta**: submateri number, tahap/stage indicator, module badge, page number in footer.
- **Section list in order**, each with its **letter** (A, B, C…), title, and body content —
  instructional text, questions (verbatim, numbered), tables (row labels + column headers), input
  fields, checklists (statement + options).
- **Every distinct illustration/character** (not UI icons): note a short description (e.g. "girl
  mascot with magnifying glass, portrait, top-left") and every place it (or a look-alike pose)
  appears. **Count distinct illustrations across ALL images together**, not per-image — the same
  named or lookalike character reappearing is still worth its own image slot per appearance
  (different pose = different slot; identical reused artwork = reuse the same slot/key). Decorative
  SVG-able icons (magnifying glass line icon, lightbulb, checkmark, arrows, target) don't count —
  those get inlined as SVG like the rest of this codebase does, not fetched as images.
- **Footer nav state**: label the "continue" button (e.g. "Lanjut ke halaman 2", "Lanjut ke Tahap 2")
  — this tells you what the *next* image/step should be, and whether the current image is the last
  in its tahap.

## 2. Study the existing pattern before writing anything

Read 2-3 existing step files that resemble this content's *shape* (not necessarily same peta):
- A single free-text "amati/berpikir" flow → `Peta2Step1Amati.tsx` / `Step2Berpikir.tsx` /
  `Step3IdeAwalku.tsx` (materi 1) is the reference for observe → questions → hypothesis.
- A comparison table + reflection checklist → look for the closest existing table/checklist
  pattern in other Peta folders (`Peta3`, `Peta5`) before inventing new markup from scratch.
- Also read `StepHeader.tsx`, `SubmitStepButton.tsx`, `BackLink.tsx`, `EditablePageImage.tsx`,
  `PhotoUpload.tsx`, `stepRegistry.tsx`, and `src/lib/pageImages.ts` so the new files use the
  exact same props/signatures — do not invent parallel helpers.

## 3. Continuation of an existing peta? Keep the lettering and step numbers continuous

If a peta folder for this materi already has steps 1..N from a prior image/session, **do not
restart section lettering at A**. The next image's Section A continues from wherever the last
image's sections left off (e.g. prior image ended at "C" → this image's "A" becomes "D", "B"
becomes "E", etc. — even though the *source* PDF/worksheet itself restarts its own lettering per
printed page, because in the app it's all one Peta). Step numbers likewise continue from
`N+1`, `N+2`, ... in `stepRegistry.tsx` — never renumber existing steps.

If two sections are visually paired/side-by-side in the source image (e.g. a table next to a
hypothesis box, or two question blocks in a 2-column layout), keep them paired in **one** app
step with a responsive 2-column layout — don't force a rigid 1-section-per-step rule when the
source itself groups them.

## 4. Map sections → app steps

One step per section is the default, but merge visually-paired sections (§3) into one step, and
split an unusually dense section into two if it would make one step's form too long. Each step
file:
- Lives at `src/app/belajar/_components/steps/Materi{M}Peta{P}/Materi{M}Peta{P}Step{N}<Name>.tsx`
  (or `Peta{P}Step{N}<Name>.tsx` under `steps/Peta{P}/` if this is materi "1" — match existing
  naming for that materi).
- Is an `async function` Server Component, `export default`, typed
  `StepComponentProps` (`materi, peta, step, editFoto, initialAnswers`).
- Starts with the hidden `materi`/`peta`/`step` inputs inside `<form action={submitStepAction}>`.
- Uses `StepHeader` (+ a "Tahap X dari Y" badge if the source shows one) and the title `<h1>`
  exactly as it appears in the source (keep it identical across every step of the same tahap —
  this is the one thing that must **not** vary, per explicit user instruction on this project).
- Ends with `BackLink` (href to the previous step; omit only on this peta's very first step) +
  `SubmitStepButton` in a `flex justify-between` row — except the peta's actual last step, see §6.
- Free-text/long-answer fields → `<textarea required>`; short single-line answers → `<input
  required>`; multi-choice reflection rows → grouped radios sharing one `name`, each `required`
  (see `Materi2Peta2Step6PemantikRefleksi.tsx` for the pill-radio pattern); optional evidence
  photo → `PhotoUpload`.
- **Layout is yours to design** (per explicit user direction on this project: navbar, footer,
  header pattern, and the peta's title must stay consistent — the rest of the body layout,
  card shapes, and illustration placement should be redesigned to look good, not copy-pasted
  boilerplate). Reuse this codebase's existing visual vocabulary (rounded-full letter badges,
  `#2563EB` blue / `#FEF9E7` amber tip boxes, gradient hero banners, bento-style image grids,
  connected-timeline question lists) rather than inventing a new design language per step.

## 5. Illustrations and mascots — size and place them deliberately

For every distinct illustration/character counted in §1:
- Add one `PageImageKey` union entry + `DEFAULT_IMAGES` placeholder in `src/lib/pageImages.ts`,
  named `M{materi}-P{peta}-L{step}-{urutan}` (reuse the langkah of the step it *first* appears in;
  a later step reusing the same artwork reuses the same key rather than minting a new one).
- Pick a size that matches the source's proportions, don't default every image to a square:
  - **Portrait mascot/character** (holds a prop, shown waist-up or full-body): ~`w-28 h-36` to
    `w-32 h-40`, `imageClassName="object-contain"` (never `object-cover` — cropping a character
    is wrong), transparent-friendly background (`bg-[#EFF4FF]` etc, no border).
  - **Landscape scene/diagram illustration**: `aspect-video` or a fixed `h-28`–`h-32` strip.
  - **Grid of many small reference images** (shape thumbnails, item catalogue): `aspect-square`
    tiles in a responsive grid, badge/label overlaid on a corner, not below the image.
- Place each illustration where the source places it *relative to the text it accompanies*
  (beside a speech-bubble/tip box, beside a reminder banner, inside a hero panel) even if the
  container styling around it is redesigned — don't drop illustrations the source clearly has
  just because a from-scratch layout didn't leave room for them. If in doubt whether something is
  a real illustration slot vs. a decorative icon, re-look at the source image at full resolution
  before deciding — don't guess from a downscaled mental impression.
- Write/extend the SQL migration at `supabase/migrations_manual/00{next}_step_images_materi{M}_peta{P}_<slug>.sql`
  (check the highest existing number first) with `placehold.co` dummy URLs sized to roughly the
  same aspect ratio as the slot, `on conflict (nama) do nothing`, following the exact format of
  `0012_step_images_materi2_peta1_eksplorasi.sql` / `0013_step_images_materi2_peta2_amati_berpikir.sql`.

## 6. Wire the registry and get the step count right

- Add every new component to `stepRegistry.tsx`: import, then `"{materi}-{peta}-{step}": Component`.
  Keep numbering contiguous from whatever already exists for that peta.
- **Step counts are per-materi**, not shared — `getPetaStructure(materi)` in
  `src/lib/learningStructure.ts` already resolves a materi's own step count for a peta it has
  built, falling back to the cross-materi template only for petas it hasn't touched yet. Do not
  pad a peta with filler steps just to match another materi's step count for "peta N" — build
  exactly what the source content supports.
- If this chunk is confirmed final for this peta (§0): the **last** step's submit button reads
  `SELESAI` with a green `#16A34A` background and a checkmark icon (not an arrow) instead of
  `LANJUTKAN` — `submitStepAction`'s `getNextStepUrl` already redirects to `/peta-belajar/{materi}`
  once `step === totalStepsInPeta`, so no extra routing work is needed, just the button label/color.
- If more tahap content is confirmed still coming later, say so explicitly in your final report
  (don't silently leave a dangling "Lanjut ke Tahap N" button pointing at a step that doesn't
  exist yet) and use a neutral `LANJUTKAN`/`LANJUT KE TAHAP N` label instead of `SELESAI`.

## 7. Verify, then report

```bash
npx tsc --noEmit -p .
npm run lint
```
Fix only errors/warnings in files you touched — this repo has pre-existing unrelated issues
(`page.tsx`'s dynamic-component pattern, `GeogebraCube.tsx`'s ref-in-render) that are out of scope.

Report back: which step files were created (with the section letters/titles they cover), the
registry keys added, the illustration keys added and where each is placed/sized, the migration
file path (user runs it manually, never run SQL yourself), and whether this peta is now complete
or still awaiting more tahap content.
