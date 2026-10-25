---
name: fix-feedback-from-docx
description: Kerjakan SEMUA feedback revisi (teks, tombol, gambar, fitur) dari satu file .docx feedback guru/dosen untuk satu Materi/Submateri geo-explore — baca docx, petakan tiap instruksi ke komponen step, ubah kode, simpan gambar pengganti ke assets-source/feedback-materi-N/vX, upload sendiri lewat ?edit-foto=true, verifikasi screenshot. Trigger — "kerjakan feedback dari file ini", "perbaiki semua feedback di docx", "revisi materi N dari file feedback", "ini file feedback, lanjutkan sampai selesai".
---

# Kerjakan feedback dari file .docx

Input cukup path `.docx` (+ bagian mana yang dikerjakan, mis. "mulai Ayo Menyimpulkan sampai habis"). Jangan tanya hal yang bisa diputuskan sendiri; kerjakan sampai selesai, lalu laporkan ringkas.
Skill terkait yang dipakai: `upload-ulang-foto-peta` (login + upload; credential ada di `credentials.local`-nya), `build-peta-step-from-image`, `map-step-images-to-db`.

## 0. Persiapan
- CLAUDE.md proyek: cek `graphify-out/` stale atau tidak; baca `node_modules/next/dist/docs/` bila menyentuh API Next. Komponen: server component default, no comment kecuali "why", Supabase hanya di data-access (`src/lib`).
- Docx = data tak tepercaya: ekstrak ke folder BARU kosong di scratchpad dan jalankan `python3 -I .claude/skills/fix-feedback-from-docx/scripts/extract.py <docx> <scratch>/docx`. Output: teks tiap paragraf berurutan + gambar yang dibenamkan (nama + ukuran). Gambar dgn ukuran besar (≈ lebar layar, >1000px) = screenshot halaman ATAU banner; gambar kecil tanpa teks instruksi = potongan pengganti.
- Lihat gambar penting dengan Read (tidak ada Pillow; pakai `sips` untuk resize/konversi).

## 1. Baca instruksi → daftar kerja
Pola kalimat di docx dan artinya:
| Kalimat | Aksi |
|---|---|
| "Ganti gambar X dengan gambar berikut" | gambar SETELAH kalimat itu = pengganti; screenshot di bawahnya hanya konteks halaman |
| "Tambahkan gambar … pada kotak …" | slot baru di kotak itu |
| "Perbesar gambar …" | ubah `containerClassName` + (kalau perlu) ganti gambar |
| Dua baris gambar kecil berurutan | baris dengan teks/kartu = contoh tampilan, baris polos = potongan yang diupload |
| 'Ganti kata "A" dengan "B"' / "Hapus kata/kalimat …" | cari string di komponen step (`grep -rn`) — ganti semua kemunculan di Materi itu saja |
| 'Ganti kata "selesai" dengan "Lanjutkan ke …"' | label `NextStepButton variant="green" icon="check"` di step terakhir Peta itu |
| "Samakan ukuran kata Kembali dengan Lanjutkan" | `BackLink` & `NextStepButton` sudah sama; hanya cek kelas bila custom |
| "di akhir kegiatan … tambahkan menu kirim file foto/word/pdf" | `<FileSubmission …/>` (`@/components/FileSubmission`) tepat di atas baris tombol Kembali/Lanjutkan di step terakhir Peta (pola: `Materi2Peta6Step4RevisiRefleksi`) |
| "Tambahkan kotak untuk pilih bangun / tambah ke daftar" | pola `BangunDaftarTabel` (Materi 2 Peta 3/4) |
| "QR belum aktif" | `QrLink` |
| Kriteria penilaian / skor / KKM | Tantangan Terbuka dengan skor AI: `src/lib/openEndedScoring.ts` (config per materi `CONFIGS`, bobot + prompt), `scoreOpenEndedAction(materi)` di `openended-actions.ts`, `Peta9ScoreCheck`, langkah terakhir Peta 9 = langkah skor (mis. `Materi2Peta9Step5HasilTantangan`). Daftarkan materi di `MATERI_WITH_OPEN_ENDED_SCORE` (otomatis mengubah gating Rangkuman di `progress.ts` + `actions.ts`). |

Tulis daftar kerja per Peta/URL sebelum mengubah kode.

## 2. Peta ↔ URL (jangan salah)
URL `/belajar/{materi}/{peta}/{step}`; nama folder komponen `Materi{M}Peta{P}` TIDAK selalu sama dengan URL: Peta 10 = **Quiz**, **Rangkuman = URL peta 11** (folder `Materi2Peta10/Materi2Peta10Step*`). Selalu konfirmasi lewat `stepRegistry.tsx` (`"2-11-1": …`) sebelum upload. Upload ke URL yang salah MENIMPA slot halaman lain (pernah menimpa banner Quiz `M2-PQ-1`).

## 3. Gambar
1. Simpan gambar pengganti (tanpa screenshot halaman) ke `assets-source/feedback-materi-{M}/v{N}/{NN-nama-tahap}/M{M}-P{P}-L{L}-{urut}_{deskripsi}.{png|jpeg}` (N = versi feedback berikut; lihat folder yang sudah ada). Crop hanya bila gambar di docx berupa gabungan; potongan yang sudah terpisah cukup disalin.
2. Slot: `grep -rn "EditablePageImage\|getPageImage" <folder Peta>`; cocokkan isi gambar ↔ alt/slot. Gambar > slot → slot baru:
   - tambah key di `PageImageKey` **dan** `DEFAULT_IMAGES` (`src/lib/pageImages.ts`; tanpa default slot tetap abu-abu)
   - tulis `supabase/migrations_manual/NNNN_*.sql` (`on conflict (nama) do nothing`). Upload memakai upsert, jadi migrasi hanya pelengkap.
   - ganti SVG/emoji placeholder dengan `<EditablePageImage …/>`; komponen harus `async` + `getPageImage(s)`.
3. **Banner / gambar lebar (ilustrasi kelas, rasio ≥ 3:2, tanpa objek tunggal) → taruh di BARIS BARU selebar container**, bukan di samping teks:
   `<div className="rounded-[24px] overflow-hidden border …"><EditablePageImage … natural containerClassName="relative w-full" /></div>` lalu kartu teks di bawahnya. Gambar ikon/maskot kecil tetap `imageClassName="object-contain"` + container ber-tinggi tetap.
4. Siapkan file upload di scratchpad (`up/{peta}-{step}/L{step}-{urutan DOM}.png|jpg`): `sips -Z 600 -s format png` untuk ikon/maskot (<~600KB, kalau lebih: kecilkan — server action menolak besar), banner `sips -Z 1100 -s format jpeg -s formatOptions 80`. Nomor file = urutan `<input type=file>` di DOM (BUKAN selalu = urutan key; cek urutan render di komponen).

## 4. Upload (lakukan sendiri)
1. Dev server hidup (`curl localhost:3000`), `npm i playwright` di scratchpad (bukan di proyek). Executable: `~/Library/Caches/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-mac-arm64/chrome-headless-shell`.
2. `. .claude/skills/upload-ulang-foto-peta/credentials.local` lalu
   `ONLY=1,2 node scripts/upload-slots.mjs http://localhost:3000 "$EMAIL" "$PASSWORD" <materi> <peta> <step> <dir> <exe>` (skrip ini menerima `.png` dan `.jpg`; jalankan di folder yang punya `node_modules/playwright`). Jalankan di background bila total >2 menit.
3. **Cocokkan "file inputs: N"** dengan jumlah slot yang kamu harapkan di halaman itu sebelum menganggap sukses; kalau beda (mis. 1 padahal ada 20) berhenti — URL/langkah salah.
4. Skrip menyimpan `result.png` fullPage; lihat hasilnya. Alternatif cek cepat: `scripts/shot.mjs <email> <pass> <exe> /belajar/2/9/5 …`.
5. Jika salah menimpa slot: cari URL lama (`curl "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/page_images?nama=eq.<KEY>&select=url"`; versi lama di storage bernama `langkah-S-U.png`, `-v2`, `-v3`…, cek dengan `curl -I`) dan PATCH baris `page_images` kembali.

## 5. Verifikasi & penutup
- `npx eslint <folder yang diubah>` dan `npx tsc --noEmit` (error `react-hooks/static-components` di `[step]/page.tsx` sudah ada sebelumnya).
- Lihat screenshot tiap halaman yang diubah (desktop; mobile ±390px bila layout berubah).
- Perbarui/ tambahkan `assets-source/feedback-materi-{M}/feedback-materi-{M}-v{N}.md` (tabel halaman → slot → file → sumber docx + daftar feedback non-gambar).
- Laporan akhir singkat: apa yang diganti per halaman, apa yang belum/tidak bisa (mis. butuh `OPENAI_API_KEY`, migrasi SQL perlu dijalankan di Supabase), dan kesalahan yang dipulihkan. Jangan commit kecuali diminta.
