-- Run this in the Supabase SQL editor.
-- Adds icon images for the 4-card stepper on Materi 1 / Peta 6 Langkah 6 (SiapTahapBerikutnya).
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M1-P6-L6-2', 'https://placehold.co/80x80?text=1', 'Peta 6 Langkah 6 - Kartu 1: Data Hasil Pengamatan (dummy)'),
  ('M1-P6-L6-3', 'https://placehold.co/80x80?text=2', 'Peta 6 Langkah 6 - Kartu 2: Hasil Pengolahan (dummy)'),
  ('M1-P6-L6-4', 'https://placehold.co/80x80?text=3', 'Peta 6 Langkah 6 - Kartu 3: Verifikasi (dummy)'),
  ('M1-P6-L6-5', 'https://placehold.co/80x80?text=4', 'Peta 6 Langkah 6 - Kartu 4: Siap Menyusun Kesimpulan (dummy)')
on conflict (nama) do nothing;
