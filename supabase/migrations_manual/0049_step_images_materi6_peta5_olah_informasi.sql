-- Run this in the Supabase SQL editor.
-- Adds Materi 6 / Peta 5 (Ayo Mengolah Informasi - Tahap 4) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M6-P5-L1-1', 'https://placehold.co/1152x628?text=Hero+Olah+Data', 'Materi 6 Peta 5 Langkah 1 - Tiga siswa mengelompokkan data dengan GeoGebra dan AR (dummy)'),
  ('M6-P5-L2-1', 'https://placehold.co/594x609?text=Maskot+Lanjut+Halaman', 'Materi 6 Peta 5 Langkah 2 & 4 - Siswa menunjuk: Ayo lanjut ke halaman berikutnya (dummy)'),
  ('M6-P5-L3-1', 'https://placehold.co/1150x625?text=Hero+Pola+Data', 'Materi 6 Peta 5 Langkah 3 - Tiga siswa mencari pola data (dummy)'),
  ('M6-P5-L3-2', 'https://placehold.co/579x571?text=Kubus', 'Materi 6 Peta 5 Langkah 3 & 4 - Ikon kubus (dummy)'),
  ('M6-P5-L3-3', 'https://placehold.co/850x436?text=Balok', 'Materi 6 Peta 5 Langkah 3 & 4 - Ikon balok (dummy)'),
  ('M6-P5-L5-1', 'https://placehold.co/1165x627?text=Hero+Dugaan', 'Materi 6 Peta 5 Langkah 5 - Tiga siswa menyusun dugaan (dummy)'),
  ('M6-P5-L6-1', 'https://placehold.co/697x612?text=Maskot+Tahap+Berikutnya', 'Materi 6 Peta 5 Langkah 6 - Siswa: Ayo lanjut ke tahap berikutnya (dummy)')
on conflict (nama) do nothing;
