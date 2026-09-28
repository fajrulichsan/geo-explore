-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 1 / Peta 10 (Rangkuman) images: 6 steps, keys M1-P10-L1-1, M1-P10-L2-1, M1-P10-L3-1, M1-P10-L6-1.

insert into page_images (nama, url, keterangan) values
  ('M1-P10-L1-1', 'https://placehold.co/160x160?text=Limas+Segilima', 'Materi 1 Peta 10 Langkah 1 - Ikon limas segilima pada kartu bangun Limas (dummy)'),
  ('M1-P10-L2-1', 'https://placehold.co/900x500?text=Peta+Konsep', 'Materi 1 Peta 10 Langkah 2 - Peta konsep bangun ruang sisi datar (dummy, tidak dipakai lagi - diganti diagram HTML)'),
  ('M1-P10-L3-1', 'https://placehold.co/80x80?text=Prisma+Miring', 'Materi 1 Peta 10 Langkah 3 - Ikon prisma miring pada peta konsep jenis prisma (dummy)'),
  ('M1-P10-L6-1', 'https://placehold.co/320x180?text=Jaring+ke+Kubus', 'Materi 1 Peta 10 Langkah 6 - Jaring-jaring kubus dilipat menjadi kubus (dummy)')
on conflict (nama) do nothing;
