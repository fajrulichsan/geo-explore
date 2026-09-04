-- Run this in the Supabase SQL editor.
-- Adds Materi 3 / Peta 6 (Ayo Verifikasi - Submateri 3, Luas Permukaan Kubus, Balok, dan Prisma)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M3-P6-L1-1', 'https://placehold.co/416x320?text=Tiga+Siswa+Verifikasi', 'Materi 3 Peta 6 Langkah 1 - Tiga siswa memverifikasi hasil dengan GeoGebra dan AR (dummy)'),
  ('M3-P6-L3-1', 'https://placehold.co/160x192?text=Maskot+Semangat', 'Materi 3 Peta 6 Langkah 3 - Maskot Kotak Motivasi (dummy)'),
  ('M3-P6-L3-2', 'https://placehold.co/280x360?text=Tiga+Siswa+Refleksi', 'Materi 3 Peta 6 Langkah 3 - Tiga siswa merefleksikan hasil verifikasi (dummy)')
on conflict (nama) do nothing;
