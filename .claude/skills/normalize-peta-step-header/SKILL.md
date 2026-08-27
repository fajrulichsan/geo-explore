---
name: normalize-peta-step-header
description: Normalize the step header (materi name + N/total step indicator) and sequential lettered section badges (A, B, C...) across all step pages of one Peta folder in geo-explore. Trigger phrases — "rapikan header Peta<N>", "samain kayak Peta1", "normalize step header peta <N>", "benerin urutan huruf A B C peta <N>".
---

# Normalize Peta step header + lettering

Applies the exact pattern already implemented in `Peta1` (see git log / `src/app/belajar/_components/StepHeader.tsx`) to another `Peta<N>` folder. Read this whole file before touching anything — it is written to minimize token spend, so follow it literally instead of re-deriving the approach from scratch.

## Token-budget rules — do not violate

- **No subagents.** This is a small, mechanical, single-folder task — do it inline with Bash/Read/Edit. Do not spawn `Agent`/`Explore`.
- **`grep -n` first, `Read` second.** Never `Read` a file to "see what's there" — grep for the exact markers below to get line numbers, then Read only if you need surrounding context to write a correct `Edit`. Read each target file at most once.
- **No exploration of unrelated folders.** Everything you need lives in `src/app/belajar/_components/steps/Peta<N>/` plus the two shared files referenced below. Don't scan the rest of the repo.
- **One lint/tsc pass at the end**, not after every file.

## Shared pieces (already built — do not recreate)

- `src/lib/materiMeta.ts` — exports `MATERI_META` and `getMateriTitle(materi)`. Reuse as-is.
- `src/app/belajar/_components/StepHeader.tsx` — the shared header component:
  ```tsx
  <StepHeader materi={materi} currentStep={N} totalSteps={TOTAL} />
  ```
  Renders the materi-name pill (top) + "Langkah N/TOTAL" pill (dynamic step counter), replacing whatever eyebrow/"Tahap X dari Y" text existed before. Import it as `import StepHeader from "@/app/belajar/_components/StepHeader";` — never duplicate this component inside a Peta folder again.

## Algorithm

1. **Resolve scope.** `PETA=Peta<N>` (e.g. `Peta3`). List its step files in step order:
   ```bash
   ls src/app/belajar/_components/steps/$PETA/ | sort
   ```
   `TOTAL` = number of `Step*.tsx` files in that folder (each Peta so far = one file per step, in filename order = step order).

2. **Find every header block in one pass** (avoids reading files blind):
   ```bash
   grep -n "SUBMATERI\|MODUL \|LANGKAH [0-9]\|Tahap [0-9].*dari\|rounded-full bg-\[#2563EB\]" src/app/belajar/_components/steps/$PETA/Step*.tsx
   ```
   This surfaces: the eyebrow div text, any "Tahap X dari Y – ..." pill, and every circular letter/number badge div in one grep call across the whole folder.

3. **Per file, in step order (1, 2, 3, ...):**
   - `Read` the file once.
   - Replace the eyebrow div (whatever its text — "SUBMATERI N", "MODUL N", "LANGKAH N – ...") **together with** the adjacent "Tahap X dari Y – ..." pill div (if present) with a single line:
     ```tsx
     <StepHeader materi={materi} currentStep={<step number>} totalSteps={TOTAL} />
     ```
     Keep the `h1`/title block immediately below it untouched.
   - Add the import if not already present: `import StepHeader from "@/app/belajar/_components/StepHeader";`
   - **Do not** touch the h1 text itself, form fields, or anything below the header block unless it's a badge (next point).

4. **Sequential lettering across the whole Peta folder.** Section badges are the small circular divs matching:
   ```
   w-[34px] h-[34px] rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] flex-shrink-0
   ```
   containing a single letter, each paired with a white pill label right after it (the section name, e.g. "Tahukah Kamu?", "Langkah 1 – Amati"). Numeric badges (1, 2, 3... for repeated items like "Cara 1"/"Cara 2" or question numbers) are **not** part of this sequence — leave them alone.

   - Walk the Peta folder's files in step order and collect every lettered section badge, in the order it appears in the JSX (top to bottom, file by file).
   - Relabel them `A, B, C, D, ...` continuing across file boundaries — i.e. if Step1 ends on `B`, Step2's first badge becomes `C`, etc., regardless of what letter (or number, or nothing) it had before.
   - If a step's file has an identifiable content section that other steps mark with a badge+pill (e.g. every step's first content block after the header) but that section currently has **no** badge, add one: a copy of the badge div above with the next sequential letter, plus a white pill (`bg-white border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.04)] rounded-full py-2 px-5 text-sm font-bold text-[#2563EB]`) containing a short label for that section (infer from the nearest heading/eyebrow text you're removing, or the section's own h2/h3).
   - If an eyebrow line embedded a letter in its text (e.g. `"D. LANGKAH 3 – IDE AWALKU"`), that letter is not a real badge — drop it when replacing the eyebrow (step 3 above) and add a proper badge+pill per this rule instead.

5. **Verify, once:**
   ```bash
   npm run lint
   ```
   Compare the error list against a `git stash` baseline if any errors show up outside the files you touched — this repo has pre-existing unrelated lint errors (`page.tsx` dynamic-component pattern, `GeogebraCube.tsx` ref-in-render); don't try to fix those.

## Worked example (Peta1, already applied — use as the reference diff)

- Eyebrow "SUBMATERI 1" / "MODUL 1" / "LANGKAH 4 – AMATI" / etc. + "Tahap 1 dari 6 – Discovery Learning" → `<StepHeader materi={materi} currentStep={1..7} totalSteps={7} />` in every one of the 7 files.
- Letters before: Step1 had A,B — Step2 had C — Step3 had none (letter baked into eyebrow text "D. LANGKAH 3...") — Step4 had none — Step5 had none — Step6 had C,D (reused) — Step7 had E.
- Letters after: Step1 A,B — Step2 C — Step3 **D** (added, label "Ide Awalku") — Step4 **E** (added, label "Amati Media") — Step5 **F** (added, label "Pilih Media") — Step6 **G,H** (renumbered from C,D) — Step7 **I** (renumbered from E).

## Scope

Only touch the `Peta<N>` folder requested. Do not modify `StepHeader.tsx` or `materiMeta.ts` unless the materi mapping is genuinely missing an entry (check `MATERI_META` in `src/lib/materiMeta.ts` — it's keyed "1".."8" already covering all materi; you should not need to touch it).
