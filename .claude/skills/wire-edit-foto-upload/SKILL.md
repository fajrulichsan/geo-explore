---
name: wire-edit-foto-upload
description: Wire the `?edit-foto=true` in-browser photo upload UI onto a step page's `page_images` slots, so a teacher/admin can replace each illustration by clicking an overlay button instead of running SQL. Applies the pattern already built for Peta1 (`Peta1Step2TujuanPersiapan`). Trigger phrases — "aktifkan edit foto peta <N>", "bikin fitur upload foto peta <N>", "wire edit-foto peta <N>", "tambahin upload foto ke langkah <N>".
---

# Wire `edit-foto` upload UI onto a step's `page_images` slots

Extends a step component that already fetches images from `page_images` (via `getPageImage`, see `map-step-images-to-db` skill — **run that skill first if the target step doesn't fetch its images from the DB yet**, this skill does not create new image slots) so that visiting the page with `?edit-foto=true` shows an "Upload Foto" overlay on each image, letting a logged-in user replace it directly — S3 upload + `page_images` row update, no manual SQL. Read this whole file before starting.

## Non-negotiables — do not violate

- **Never re-introduce a browser→S3 `fetch(presignedUrl, {method:"PUT"})` flow.** It was tried first and broke with a CORS preflight failure on `is3.cloudhost.id` (checksum headers force a preflight the bucket's CORS policy doesn't allow, and PUT itself may not even be allowed cross-origin). The working design uploads **server-side**: the browser sends base64 file data to a Server Action, which calls `s3Client.send(new PutObjectCommand(...))` directly. No browser-to-S3 request ever happens, so there is no CORS surface at all.
- **Reuse the existing plumbing, don't duplicate it:**
  - `src/lib/s3.ts` — shared `s3Client` / `S3_BUCKET` / `buildPublicUrl`. Don't add a second client or `aws-sdk` v2.
  - `src/app/belajar/upload-actions.ts` — `uploadPageImage(materi, peta, step, urutan, fileName, contentType, base64Data, imageKey)` already uploads to S3 (`ACL: "public-read"`, key `materi-{materi}/peta-{peta}/langkah-{step}-{urutan}.{ext}`) **and** upserts `page_images` in one call. Call this, don't hand-roll a new action.
  - `src/app/belajar/_components/EditablePageImage.tsx` — the client component with the file input, base64 conversion, upload call, and overlay button. Reuse it for every slot; don't build a bespoke uploader per step.
  - `next.config.ts` `experimental.serverActions.bodySizeLimit` is already raised to `"10mb"` for base64 photo payloads — don't lower it.
- **`step` and `editFoto` are already threaded globally** through `StepComponentProps` (`stepRegistry.tsx`) and `src/app/belajar/[materi]/[peta]/[step]/page.tsx` (reads `?edit-foto=true` from `searchParams`, passes `step`/`editFoto` to every `StepComponent`). Don't re-add that plumbing per-Peta — only the target step *component* needs updating to accept and use the props.
- **`urutan` must match the existing `page_images` key's trailing number** (`M{materi}-P{peta}-L{langkah}-{urutan}` — see `map-step-images-to-db`'s convention). Get this from the `imageKey` you're already passing to `getPageImage`, don't invent a new counter.
- **Don't make the overlay always visible.** `editable` must be `editFoto` (falsy by default) so normal students never see an upload button — this is an admin/teacher-only affordance gated purely by the URL query param, not a role check (matches the existing minimal-auth pattern in this app; flag to the user if this ever needs real role-gating).

## Algorithm

1. **Confirm the target step already sources images from the DB.** Open the step file (`src/app/belajar/_components/steps/Peta<N>/Peta<N>Step<M>...tsx`) and check it calls `getPageImage("M{materi}-P{N}-L{M}-{i}")` for each slot. If it still renders a static placeholder box instead, run `map-step-images-to-db` on that Peta first — this skill only adds the upload affordance on top of already-DB-backed slots.

2. **Update the component's props destructuring** to accept `step` and `editFoto` from `StepComponentProps`, defaulting `step` to the step's own literal number as a string (matches the existing hardcoded `step="2"` pattern already in the `<input type="hidden" name="step" value="2">` of these forms):
   ```tsx
   export default async function Peta<N>Step<M>Whatever({
     materi,
     peta,
     step = "<M>",
     editFoto,
   }: StepComponentProps) {
   ```

3. **For each image slot**, replace:
   ```tsx
   <div className="<sizing/rounding/bg classes> relative overflow-hidden">
     <Image src={gambarX} alt="..." fill className="object-cover" />
   </div>
   ```
   with:
   ```tsx
   <EditablePageImage
     imageKey="M1-P<N>-L<M>-<i>"
     materi={materi}
     peta={peta}
     step={step}
     urutan="<i>"
     src={gambarX}
     alt="..."
     editable={editFoto}
     containerClassName="<same sizing/rounding/bg classes> relative overflow-hidden"
   />
   ```
   Keep every sizing/rounding/background class exactly as it was — `EditablePageImage` renders the `<Image fill>` internally and needs `relative` + `overflow-hidden` on the container it's given, same requirement as the plain `<Image fill>` pattern.
   Add the import: `import EditablePageImage from "@/app/belajar/_components/EditablePageImage";` and drop the now-unused `import Image from "next/image";` if nothing else in the file still uses `<Image>` directly.

4. **Mapped-array slots** (multiple images from a `.map()`, e.g. Peta2's L1/L4 grids): pass `imageKey={item.imageKey}` and `urutan={String(i + 1)}` (or whatever field already encodes the per-item index used to build that `imageKey`) inside the `.map()` callback — same substitution as step 3, just parameterized per item.

5. **Verify, once, across all touched files:**
   ```bash
   npx eslint <touched files, space separated>
   npx tsc --noEmit -p .
   ```
   Fix only errors in files you touched — this repo has pre-existing unrelated lint/type errors (`page.tsx` dynamic-component-in-render, `GeogebraCube.tsx` ref-in-render) that are out of scope; confirm via `git stash` + re-lint if unsure whether an error predates your change.

6. **Report back**: which step file(s) were wired, the exact `?edit-foto=true` URL to test each on (`/belajar/{materi}/{peta}/{step}?edit-foto=true`), and remind the user this needs a real browser session (logged in) to actually test the upload — you cannot verify the upload succeeds without driving a browser.

## Worked example (already applied — use as reference diff)

- **Peta1** (`Peta1Step2TujuanPersiapan.tsx`, materi 1 peta 1 step 2): 2 slots, `M1-P1-L1-2` (GeoGebra 3D illustration, `urutan="2"`) and `M1-P1-L1-3` (AR illustration, `urutan="3"`), both single static slots (not mapped arrays). Test URL: `/belajar/1/1/2?edit-foto=true`.
