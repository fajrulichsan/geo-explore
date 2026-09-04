-- Run this in the Supabase SQL editor.
-- Adds Materi 3 / Peta 1 (Pendahuluan - Submateri 3, Luas Permukaan Kubus, Balok, dan Prisma)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M3-P1-L1-1', 'https://placehold.co/400x300?text=Siswa+Berdiskusi', 'Materi 3 Peta 1 Langkah 1 - Ilustrasi tiga siswa berdiskusi (dummy)'),
  ('M3-P1-L1-2', 'https://placehold.co/600x338?text=Alur+Luas+Permukaan', 'Materi 3 Peta 1 Langkah 1 - Ilustrasi alur bangun ruang dibuka menjadi jaring-jaring (dummy)'),
  ('M3-P1-L1-3', 'https://placehold.co/280x360?text=Maskot+Membaca', 'Materi 3 Peta 1 Langkah 1 - Maskot siswa membaca buku catatan (dummy)'),
  ('M3-P1-L2-1', 'https://placehold.co/300x180?text=GeoGebra+3D', 'Materi 3 Peta 1 Langkah 2 - Ilustrasi eksplorasi GeoGebra 3D (dummy)'),
  ('M3-P1-L2-2', 'https://placehold.co/300x180?text=Augmented+Reality', 'Materi 3 Peta 1 Langkah 2 - Ilustrasi eksplorasi Augmented Reality (dummy)'),
  ('M3-P1-L2-3', 'https://placehold.co/220x220?text=Maskot+Ingat', 'Materi 3 Peta 1 Langkah 2 - Maskot siswa menunjuk catatan pada bagian Ingat! (dummy)')
on conflict (nama) do nothing;
