-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 3 / Peta 1 (Pendahuluan) images: 5 steps, keys M3-P1-L1-1 .. M3-P1-L5-4.
-- Old keys M3-P1-L1-2/L1-3/L2-* from 0021 are no longer used.

insert into page_images (nama, url, keterangan) values
  ('M3-P1-L1-1', 'https://placehold.co/600x400?text=Siswa+Berdiskusi', 'Materi 3 Peta 1 Langkah 1 - Ilustrasi tiga siswa berdiskusi (dummy)'),
  ('M3-P1-L2-1', 'https://placehold.co/800x290?text=Alur+Luas+Permukaan', 'Materi 3 Peta 1 Langkah 2 - Diagram alur bangun ruang menjadi luas permukaan (dummy)'),
  ('M3-P1-L3-1', 'https://placehold.co/350x230?text=GeoGebra+3D', 'Materi 3 Peta 1 Langkah 3 - Tangkapan layar GeoGebra 3D (dummy)'),
  ('M3-P1-L3-2', 'https://placehold.co/325x230?text=Augmented+Reality', 'Materi 3 Peta 1 Langkah 3 - Tangkapan layar Augmented Reality (dummy)'),
  ('M3-P1-L4-1', 'https://placehold.co/330x200?text=Maskot+Tujuan', 'Materi 3 Peta 1 Langkah 4 - Maskot siswi menunjuk (Tujuan Pembelajaran) (dummy)'),
  ('M3-P1-L5-1', 'https://placehold.co/400x335?text=Siswa+Menulis', 'Materi 3 Peta 1 Langkah 5 - Siswa menulis dengan jaring-jaring dan kalkulator (dummy)'),
  ('M3-P1-L5-2', 'https://placehold.co/300x300?text=Kubus', 'Materi 3 Peta 1 Langkah 5 - Gambar kubus (dummy)'),
  ('M3-P1-L5-3', 'https://placehold.co/300x300?text=Balok', 'Materi 3 Peta 1 Langkah 5 - Gambar balok (dummy)'),
  ('M3-P1-L5-4', 'https://placehold.co/300x300?text=Prisma', 'Materi 3 Peta 1 Langkah 5 - Gambar prisma segitiga (dummy)')
on conflict (nama) do nothing;
