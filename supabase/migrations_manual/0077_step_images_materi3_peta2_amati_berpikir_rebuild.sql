-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 3 / Peta 2 (Ayo Mengamati dan Berpikir): 6 steps.
-- Old placeholder rows for M3-P2-* may already exist; on conflict they are kept.

insert into page_images (nama, url, keterangan) values
  ('M3-P2-L1-1', 'https://placehold.co/300x240?text=Siswa+Kaca+Pembesar', 'Materi 3 Peta 2 Langkah 1 - Siswa dengan kaca pembesar (dummy)'),
  ('M3-P2-L1-2', 'https://placehold.co/640x400?text=Kubus+dan+Jaring-Jaring', 'Materi 3 Peta 2 Langkah 1 - Kubus dan jaring-jaringnya (dummy)'),
  ('M3-P2-L1-3', 'https://placehold.co/640x400?text=Balok+dan+Jaring-Jaring', 'Materi 3 Peta 2 Langkah 1 - Balok dan jaring-jaringnya (dummy)'),
  ('M3-P2-L1-4', 'https://placehold.co/640x400?text=Prisma+dan+Jaring-Jaring', 'Materi 3 Peta 2 Langkah 1 - Prisma segitiga dan jaring-jaringnya (dummy)'),
  ('M3-P2-L2-1', 'https://placehold.co/280x360?text=Maskot+Berpikir', 'Materi 3 Peta 2 Langkah 2 (dipakai juga di langkah 5) - Siswi berpikir (dummy)'),
  ('M3-P2-L4-1', 'https://placehold.co/300x240?text=Siswa+Kaca+Pembesar', 'Materi 3 Peta 2 Langkah 4 - Siswa dengan kaca pembesar (dummy)'),
  ('M3-P2-L4-2', 'https://placehold.co/640x400?text=Jaring+Kubus+Ukuran', 'Materi 3 Peta 2 Langkah 4 - Jaring-jaring kubus dengan ukuran sisi (dummy)'),
  ('M3-P2-L4-3', 'https://placehold.co/640x400?text=Jaring+Balok+Ukuran', 'Materi 3 Peta 2 Langkah 4 - Jaring-jaring balok dengan ukuran sisi (dummy)'),
  ('M3-P2-L4-4', 'https://placehold.co/640x400?text=Jaring+Prisma+Ukuran', 'Materi 3 Peta 2 Langkah 4 - Jaring-jaring prisma dengan ukuran sisi (dummy)'),
  ('M3-P2-L6-1', 'https://placehold.co/300x260?text=Siswa+Menulis', 'Materi 3 Peta 2 Langkah 6 - Siswa menulis (dummy)'),
  ('M3-P2-L6-2', 'https://placehold.co/600x200?text=Dua+Siswa+Bintang', 'Materi 3 Peta 2 Langkah 6 - Dua siswa dengan bintang (dummy)')
on conflict (nama) do nothing;
