-- Run this in the Supabase SQL editor.
-- Adds Materi 2 / Peta 8 (Refleksi Diri - Submateri 2, Jaring-Jaring Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M2-P8-L1-1', 'https://placehold.co/280x360?text=Maskot+Refleksi+Diri', 'Materi 2 Peta 8 Langkah 1 - Maskot mengajak refleksi diri (dummy)'),
  ('M2-P8-L1-2', 'https://placehold.co/320x280?text=Jaring-Jaring+Bangun+Ruang', 'Materi 2 Peta 8 Langkah 1 - Ilustrasi bangun ruang dan jaring-jaringnya (dummy)'),
  ('M2-P8-L3-1', 'https://placehold.co/480x280?text=Siswa+Berdiskusi', 'Materi 2 Peta 8 Langkah 3 - Ilustrasi siswa berdiskusi (dummy)')
on conflict (nama) do nothing;
