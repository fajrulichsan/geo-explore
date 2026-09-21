-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 3 / Peta 3 (Ayo Berdiskusi) images: 6 steps, keys M3-P3-L1-1 .. M3-P3-L6-1.
-- M3-P3-L1-1, L2-1, L3-1 already exist from 0023 (on conflict do nothing keeps them).

insert into page_images (nama, url, keterangan) values
  ('M3-P3-L1-1', 'https://placehold.co/981x541?text=Tiga+Siswa+Berdiskusi', 'Materi 3 Peta 3 Langkah 1 - Tiga siswa berdiskusi di meja belajar (dummy)'),
  ('M3-P3-L1-2', 'https://placehold.co/384x451?text=Jaring-Jaring+Kubus', 'Materi 3 Peta 3 Langkah 1 - Jaring-jaring kubus dengan sisi s (dummy)'),
  ('M3-P3-L1-3', 'https://placehold.co/430x505?text=Jaring-Jaring+Balok', 'Materi 3 Peta 3 Langkah 1 - Jaring-jaring balok p, l, t (dummy)'),
  ('M3-P3-L1-4', 'https://placehold.co/316x292?text=Jaring-Jaring+Prisma', 'Materi 3 Peta 3 Langkah 1 - Jaring-jaring prisma segitiga a, b, c, t (dummy)'),
  ('M3-P3-L2-1', 'https://placehold.co/769x535?text=Maskot+Ingat', 'Materi 3 Peta 3 Langkah 2 - Maskot siswa menunjuk di Kotak Ingat (dummy)'),
  ('M3-P3-L3-1', 'https://placehold.co/1063x535?text=Tiga+Siswa+Berpendapat', 'Materi 3 Peta 3 Langkah 3 - Tiga siswa berdiskusi dengan balon bicara dan lampu (dummy)'),
  ('M3-P3-L5-1', 'https://placehold.co/478x535?text=Maskot+Ingat+2', 'Materi 3 Peta 3 Langkah 5 - Maskot siswa menunjuk dengan bintang di Kotak Ingat (dummy)'),
  ('M3-P3-L6-1', 'https://placehold.co/400x180?text=GeoGebra+3D+%26+AR', 'Materi 3 Peta 3 Langkah 6 - Laptop GeoGebra 3D dan tablet AR di Kotak Motivasi (dummy)')
on conflict (nama) do nothing;
