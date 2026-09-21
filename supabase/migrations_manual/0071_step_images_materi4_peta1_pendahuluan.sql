-- Run this in the Supabase SQL editor.
-- Materi 4 / Peta 1 (Pendahuluan - Submateri 4, Luas Permukaan Limas) rebuilt: replaces the old
-- M4-P1-L1-* slots with the new 3-step layout.

insert into page_images (nama, url, keterangan) values
  ('M4-P1-L1-1', 'https://placehold.co/520x340?text=Tiga+Siswa+Berpikir', 'Materi 4 Peta 1 Langkah 1 - Tiga siswa berpikir tentang atap rumah, tenda, dan piramida (dummy)'),
  ('M4-P1-L2-1', 'https://placehold.co/260x269?text=Model+Limas', 'Materi 4 Peta 1 Langkah 2 - Model limas segiempat (dummy)'),
  ('M4-P1-L2-2', 'https://placehold.co/526x442?text=Limas+Terbuka', 'Materi 4 Peta 1 Langkah 2 - Limas mulai terbuka (dummy)'),
  ('M4-P1-L2-3', 'https://placehold.co/364x328?text=Jaring-Jaring', 'Materi 4 Peta 1 Langkah 2 - Jaring-jaring limas (dummy)'),
  ('M4-P1-L2-4', 'https://placehold.co/679x472?text=Sisi+Tegak+dan+Alas', 'Materi 4 Peta 1 Langkah 2 - Jaring-jaring berlabel alas dan sisi tegak (dummy)'),
  ('M4-P1-L2-5', 'https://placehold.co/1102x435?text=GeoGebra+3D', 'Materi 4 Peta 1 Langkah 2 - Tangkapan layar GeoGebra 3D (dummy)'),
  ('M4-P1-L2-6', 'https://placehold.co/250x240?text=Augmented+Reality', 'Materi 4 Peta 1 Langkah 2 - Limas AR melalui kamera ponsel (dummy)'),
  ('M4-P1-L3-1', 'https://placehold.co/130x130?text=Maskot+Mulai', 'Materi 4 Peta 1 Langkah 3 - Maskot siswa semangat memulai (dummy)'),
  ('M4-P1-L3-2', 'https://placehold.co/193x193?text=Limas+Segitiga', 'Materi 4 Peta 1 Langkah 3 - Limas segitiga (dummy)'),
  ('M4-P1-L3-3', 'https://placehold.co/547x525?text=Limas+Segiempat', 'Materi 4 Peta 1 Langkah 3 - Limas segiempat (dummy)'),
  ('M4-P1-L3-4', 'https://placehold.co/238x202?text=Limas+Segilima', 'Materi 4 Peta 1 Langkah 3 - Limas segilima (dummy)')
on conflict (nama) do nothing;
