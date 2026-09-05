-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 8 (Refleksi Diri - Submateri 5, Skala dan Luas Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P8-L1-1', 'https://placehold.co/320x240?text=Dua+Siswa+Mencatat', 'Materi 5 Peta 8 Langkah 1 - Dua siswa mencatat hasil belajar pada intro Refleksi Diri (dummy)')
on conflict (nama) do nothing;
