-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 3 (Ayo Berdiskusi - Submateri 5, Skala dan Luas Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P3-L1-1', 'https://placehold.co/256x320?text=Tiga+Siswa+Berdiskusi', 'Materi 5 Peta 3 Langkah 1 - Tiga siswa berdiskusi membandingkan hasil pengamatan (dummy)'),
  ('M5-P3-L1-2', 'https://placehold.co/360x200?text=Kubus+Awal+ke+Hasil+Skala', 'Materi 5 Peta 3 Langkah 1 - Kubus sebelum dan sesudah skala k=2 (dummy)'),
  ('M5-P3-L1-3', 'https://placehold.co/360x200?text=Balok+Awal+ke+Hasil+Skala', 'Materi 5 Peta 3 Langkah 1 - Balok sebelum dan sesudah skala k=2 (dummy)'),
  ('M5-P3-L1-4', 'https://placehold.co/360x200?text=Prisma+Awal+ke+Hasil+Skala', 'Materi 5 Peta 3 Langkah 1 - Prisma segitiga sebelum dan sesudah skala k=2 (dummy)'),
  ('M5-P3-L1-5', 'https://placehold.co/360x200?text=Limas+Awal+ke+Hasil+Skala', 'Materi 5 Peta 3 Langkah 1 - Limas segiempat sebelum dan sesudah skala k=2 (dummy)'),
  ('M5-P3-L2-1', 'https://placehold.co/200x200?text=Laptop+Kubus+GeoGebra', 'Materi 5 Peta 3 Langkah 2 - Laptop menampilkan kubus 3D untuk pembuktian dugaan (dummy)')
on conflict (nama) do nothing;
