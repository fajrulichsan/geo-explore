---
name: upload-ulang-foto-peta
description: Ekstrak gambar dari .docx, petakan ke slot page_images satu langkah Peta (mis. /belajar/1/2/1), tambah slot/migrasi bila gambar lebih banyak dari slot, lalu upload ulang lewat ?edit-foto=true (Playwright) memakai akun yang tersimpan. Trigger — "upload ulang foto", "ekstrak gambar docx ke halaman /belajar/M/P/S", "perbaiki foto di page ini".
---

# Upload ulang foto satu halaman Peta dari .docx

Pakai bersama `build-peta-step-from-image` (§8–9) dan `wire-edit-foto-upload`. Skill ini hanya merangkum alur "docx -> slot -> upload".

## Credential

Dibaca dari `.claude/skills/upload-ulang-foto-peta/credentials.local` (di-gitignore, jangan di-commit):

```
EMAIL=fajrulichsan0208@gmail.com
PASSWORD=123123
```

File tidak ada / login ditolak -> tanya user, jangan menebak password atau membuat akun.

## Langkah

1. `unzip` docx ke folder kosong di scratchpad. Urutan gambar = urutan `rId` di `word/document.xml` dipetakan lewat `word/_rels/document.xml.rels`. Buat contact sheet Pillow berlabel nama file; gambar yang berupa layout/ringkasan seluruh halaman jangan di-upload ke slot.
2. Baca komponen step (`src/app/belajar/_components/steps/Peta<P>/...`) dan cocokkan tiap gambar ke slot `M{materi}-P{peta}-L{step}-{urutan}` berdasarkan isinya. Jika gambar > slot: tambah entri array di komponen, tambah key di `PageImageKey` **dan** entri di `DEFAULT_IMAGES` (`src/lib/pageImages.ts`; tanpa default, `getPageImages` mengabaikan row DB-nya sehingga slot tetap abu-abu), dan tulis migrasi `supabase/migrations_manual/NNNN_*.sql` (`on conflict (nama) do nothing`).
3. Konversi ke PNG (sisi terpanjang <=600px; file ~>600KB sering ditolak server action dengan 500 "Maximum array nesting exceeded", dan slot hanya tampil ~200px) bernama `L{step}-{urutan}.png` di scratchpad (urutan = urutan slot di DOM).
4. `npm i playwright` di scratchpad (bukan di project). Executable: `~/Library/Caches/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-mac-arm64/chrome-headless-shell`.
5. Pastikan dev server hidup (`curl localhost:3000`), lalu:
   `node scripts/upload-crops.mjs http://localhost:3000 $EMAIL $PASSWORD <materi> <peta> <step> <dir> <exe>`
   (`ONLY=11,12` untuk subset). Hasil screenshot: `<dir>/result-step<step>.png`.
6. Cek screenshot (desktop + ~390px): gambar benar di slot benar, tidak terpotong, label sejajar. Perbaiki lalu ulangi hanya urutan yang bermasalah.
7. `npx eslint <file yang diubah>`.

Note: jika `ONLY=` dipakai ulang, tiap upload membuat versi baru (`-v2`, `-v3`) di S3; itu normal.
