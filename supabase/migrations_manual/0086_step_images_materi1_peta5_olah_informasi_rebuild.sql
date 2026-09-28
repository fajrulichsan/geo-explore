-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 1 / Peta 5 (Ayo Mengolah Informasi): 9 steps.
-- Old placeholder rows M1-P5-L5-1 and M1-P5-L7-1 are no longer used; they can stay or be deleted.

insert into page_images (nama, url, keterangan) values
  ('M1-P5-L1-1', 'https://placehold.co/300x300?text=Kubus', 'Materi 1 Peta 5 Langkah 1 - Kubus (dummy)'),
  ('M1-P5-L1-2', 'https://placehold.co/300x300?text=Balok', 'Materi 1 Peta 5 Langkah 1 - Balok (dummy)'),
  ('M1-P5-L1-3', 'https://placehold.co/300x300?text=Prisma+Segitiga', 'Materi 1 Peta 5 Langkah 1 - Prisma segitiga (dummy)'),
  ('M1-P5-L1-4', 'https://placehold.co/300x300?text=Limas+Segiempat', 'Materi 1 Peta 5 Langkah 1 - Limas segiempat (dummy)'),
  ('M1-P5-L1-5', 'https://placehold.co/300x300?text=Limas+Segitiga', 'Materi 1 Peta 5 Langkah 1 - Limas segitiga (dummy)'),
  ('M1-P5-L1-6', 'https://placehold.co/560x360?text=Siswa+Berdiskusi', 'Materi 1 Peta 5 Langkah 1 - Tiga siswa berdiskusi (dipakai juga di Langkah 5) (dummy)')
on conflict (nama) do nothing;
