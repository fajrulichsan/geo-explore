-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 3 (Tahap 2 Ayo Berdiskusi - Submateri 5, Skala dan Luas Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P3-L1-1', 'https://placehold.co/816x546?text=Tiga+Siswa+Berdiskusi', 'Materi 5 Peta 3 Langkah 1 - Tiga siswa berdiskusi mengelilingi meja tabel hasil pengamatan (dummy)'),
  ('M5-P3-L1-2', 'https://placehold.co/468x138?text=Kubus+Awal+ke+Hasil+Skala', 'Materi 5 Peta 3 Langkah 1 - Kubus sebelum dan sesudah skala k=2 (dummy)'),
  ('M5-P3-L1-3', 'https://placehold.co/468x165?text=Balok+Awal+ke+Hasil+Skala', 'Materi 5 Peta 3 Langkah 1 - Balok sebelum dan sesudah skala k=2 (dummy)'),
  ('M5-P3-L1-4', 'https://placehold.co/468x140?text=Prisma+Awal+ke+Hasil+Skala', 'Materi 5 Peta 3 Langkah 1 - Prisma segitiga sebelum dan sesudah skala k=2 (dummy)'),
  ('M5-P3-L1-5', 'https://placehold.co/468x133?text=Limas+Awal+ke+Hasil+Skala', 'Materi 5 Peta 3 Langkah 1 - Limas segiempat sebelum dan sesudah skala k=2 (dummy)'),
  ('M5-P3-L3-1', 'https://placehold.co/160x155?text=Laptop+Kubus+GeoGebra', 'Materi 5 Peta 3 Langkah 3 - Laptop menampilkan kubus 3D untuk pembuktian dugaan (dummy)'),
  ('M5-P3-L7-1', 'https://placehold.co/234x223?text=Siswa+Menyampaikan+Pendapat', 'Materi 5 Peta 3 Langkah 7 - Siswa menunjuk ke atas sambil menyampaikan pendapat (dummy)'),
  ('M5-P3-L7-2', 'https://placehold.co/348x231?text=Siswa+Mendengarkan', 'Materi 5 Peta 3 Langkah 7 - Dua siswa saling mendengarkan pendapat (dummy)'),
  ('M5-P3-L7-3', 'https://placehold.co/607x520?text=Siswa+Membawa+Catatan', 'Materi 5 Peta 3 Langkah 7 - Siswa menunjukkan catatan hasil pengamatan (dummy)'),
  ('M5-P3-L7-4', 'https://placehold.co/646x496?text=Siswa+Siap+Membuktikan', 'Materi 5 Peta 3 Langkah 7 - Siswa dengan kaca pembesar dan dugaan siap membuktikan (dummy)')
on conflict (nama) do nothing;
