-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 6 (Ayo Verifikasi - Submateri 5, Tahap 5, Skala dan Luas Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P6-L1-1', 'https://placehold.co/416x320?text=Tiga+Siswa+Verifikasi', 'Materi 5 Peta 6 Langkah 1 - Tiga siswa memverifikasi hasil penemuan dengan laptop dan AR (dummy)'),
  ('M5-P6-L3-1', 'https://placehold.co/416x320?text=Tiga+Siswa+Verifikasi', 'Materi 5 Peta 6 Langkah 3 - Tiga siswa melakukan pemeriksaan terakhir hasil verifikasi (dummy)'),
  ('M5-P6-L4-1', 'https://placehold.co/256x320?text=Siswa+Jempol', 'Materi 5 Peta 6 Langkah 4 - Siswa memberi jempol tanda semangat pada bagian Refleksi Singkat (dummy)'),
  ('M5-P6-L4-2', 'https://placehold.co/112x128?text=Maskot+Semangat', 'Materi 5 Peta 6 Langkah 4 - Maskot memberi semangat pada kotak Motivasi (dummy)')
on conflict (nama) do nothing;
