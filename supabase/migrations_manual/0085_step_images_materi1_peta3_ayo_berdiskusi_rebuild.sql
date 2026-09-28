-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 1 / Peta 3 (Ayo Berdiskusi): 8 steps.
-- Old placeholder rows for M1-P3-* may already exist; on conflict they are kept (real uploads overwrite them).

insert into page_images (nama, url, keterangan) values
  ('M1-P3-L1-1', 'https://placehold.co/500x360?text=Siswa+Berdiskusi', 'Materi 1 Peta 3 Langkah 1 - Tiga siswa berdiskusi (dipakai juga di Langkah 5) (dummy)'),
  ('M1-P3-L2-1', 'https://placehold.co/300x300?text=Kubus', 'Materi 1 Peta 3 Langkah 2 - Kubus (dummy)'),
  ('M1-P3-L2-2', 'https://placehold.co/300x300?text=Balok', 'Materi 1 Peta 3 Langkah 2 - Balok (dummy)'),
  ('M1-P3-L2-3', 'https://placehold.co/300x300?text=Limas+Segiempat', 'Materi 1 Peta 3 Langkah 2 - Limas segiempat (dummy)'),
  ('M1-P3-L2-4', 'https://placehold.co/300x300?text=Prisma+Segitiga', 'Materi 1 Peta 3 Langkah 2 - Prisma segitiga (dummy)'),
  ('M1-P3-L2-5', 'https://placehold.co/300x300?text=Limas+Segitiga', 'Materi 1 Peta 3 Langkah 2 - Limas segitiga (dummy)'),
  ('M1-P3-L8-1', 'https://placehold.co/280x400?text=Siswa+Menunjuk', 'Materi 1 Peta 3 Langkah 8 - Maskot siswa menunjuk (dummy)')
on conflict (nama) do nothing;
