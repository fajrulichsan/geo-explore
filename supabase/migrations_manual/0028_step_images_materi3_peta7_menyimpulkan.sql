-- Run this in the Supabase SQL editor.
-- Adds Materi 3 / Peta 7 (Ayo Menyimpulkan - Submateri 3, Tahap 6, Luas Permukaan Bangun Ruang)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M3-P7-L1-1', 'https://placehold.co/280x360?text=Tiga+Siswa+Menyimpulkan', 'Materi 3 Peta 7 Langkah 1 - Tiga siswa menyusun kesimpulan bersama (dummy, dipakai ulang di Langkah 2)'),
  ('M3-P7-L2-1', 'https://placehold.co/140x160?text=Maskot+Jempol', 'Materi 3 Peta 7 Langkah 2 - Maskot memberi jempol pada kotak Kamu Luar Biasa! (dummy)')
on conflict (nama) do nothing;
