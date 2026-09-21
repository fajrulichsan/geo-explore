-- Run this in the Supabase SQL editor.
-- Materi 4 / Peta 2 (Ayo Mengamati dan Berpikir) rebuilt: replaces old M4-P2-L1/L2 slots.

insert into page_images (nama, url, keterangan) values
  ('M4-P2-L1-1', 'https://placehold.co/520x340?text=Tiga+Siswa+Mengamati', 'Materi 4 Peta 2 Langkah 1 Urutan 1 - Tiga siswa mengamati limas (dummy)'),
  ('M4-P2-L1-2', 'https://placehold.co/454x424?text=Limas+Segitiga', 'Materi 4 Peta 2 Langkah 1 Urutan 2 - Limas segitiga (dummy)'),
  ('M4-P2-L1-3', 'https://placehold.co/547x507?text=Jaring+Segitiga', 'Materi 4 Peta 2 Langkah 1 Urutan 3 - Jaring-jaring limas segitiga (dummy)'),
  ('M4-P2-L1-4', 'https://placehold.co/480x418?text=Limas+Segiempat', 'Materi 4 Peta 2 Langkah 1 Urutan 4 - Limas segiempat (dummy)'),
  ('M4-P2-L1-5', 'https://placehold.co/487x481?text=Jaring+Segiempat', 'Materi 4 Peta 2 Langkah 1 Urutan 5 - Jaring-jaring limas segiempat (dummy)'),
  ('M4-P2-L1-6', 'https://placehold.co/469x424?text=Limas+Segilima', 'Materi 4 Peta 2 Langkah 1 Urutan 6 - Limas segilima (dummy)'),
  ('M4-P2-L1-7', 'https://placehold.co/543x504?text=Jaring+Segilima', 'Materi 4 Peta 2 Langkah 1 Urutan 7 - Jaring-jaring limas segilima (dummy)'),
  ('M4-P2-L2-1', 'https://placehold.co/120x120?text=Maskot+Siswa', 'Materi 4 Peta 2 Langkah 2 Urutan 1 - Maskot siswa pertanyaan pengamatan (dummy)'),
  ('M4-P2-L2-2', 'https://placehold.co/180x240?text=Maskot+Hebat', 'Materi 4 Peta 2 Langkah 2 Urutan 2 - Maskot Hebat (dummy)'),
  ('M4-P2-L3-1', 'https://placehold.co/235x175?text=Jaring+Segitiga+Berlabel', 'Materi 4 Peta 2 Langkah 3 Urutan 1 - Jaring-jaring segitiga berlabel (dummy)'),
  ('M4-P2-L3-2', 'https://placehold.co/238x151?text=Jaring+Segiempat+Berlabel', 'Materi 4 Peta 2 Langkah 3 Urutan 2 - Jaring-jaring segiempat berlabel (dummy)'),
  ('M4-P2-L3-3', 'https://placehold.co/193x145?text=Jaring+Segilima+Berlabel', 'Materi 4 Peta 2 Langkah 3 Urutan 3 - Jaring-jaring segilima berlabel (dummy)'),
  ('M4-P2-L6-1', 'https://placehold.co/480x300?text=Tiga+Siswa+Belajar', 'Materi 4 Peta 2 Langkah 6 Urutan 1 - Tiga siswa belajar bersama (dummy)')
on conflict (nama) do nothing;
