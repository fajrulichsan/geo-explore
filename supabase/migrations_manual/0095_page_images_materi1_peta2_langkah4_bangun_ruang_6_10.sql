-- Run this in the Supabase SQL editor.
-- Materi 1 / Peta 2 / Langkah 4: tambah bangun ruang 6-10 (total 10, grid 2 baris x 5 kolom).

insert into page_images (nama, url, keterangan) values
  ('M1-P2-L4-6', 'https://placehold.co/400x300?text=Prisma+Miring', 'Materi 1 Peta 2 Langkah 4 - Bangun ruang 6 (dummy)'),
  ('M1-P2-L4-7', 'https://placehold.co/400x300?text=Prisma+Segilima', 'Materi 1 Peta 2 Langkah 4 - Bangun ruang 7 (dummy)'),
  ('M1-P2-L4-8', 'https://placehold.co/400x300?text=Prisma+Segienam', 'Materi 1 Peta 2 Langkah 4 - Bangun ruang 8 (dummy)'),
  ('M1-P2-L4-9', 'https://placehold.co/400x300?text=Limas+Segilima', 'Materi 1 Peta 2 Langkah 4 - Bangun ruang 9 (dummy)'),
  ('M1-P2-L4-10', 'https://placehold.co/400x300?text=Limas+Terpancung', 'Materi 1 Peta 2 Langkah 4 - Bangun ruang 10 (dummy)')
on conflict (nama) do nothing;
