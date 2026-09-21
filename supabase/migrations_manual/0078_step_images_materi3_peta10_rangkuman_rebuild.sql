-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 3 / Peta 10 (Rangkuman) images: 4 steps, keys M3-P10-L1-1 .. M3-P10-L4-4.

insert into page_images (nama, url, keterangan) values
  ('M3-P10-L1-1', 'https://placehold.co/440x320?text=Tiga+Siswa+GeoGebra+%26+AR', 'Materi 3 Peta 10 Langkah 1 - Tiga siswa dengan GeoGebra 3D dan AR (dummy)'),
  ('M3-P10-L2-1', 'https://placehold.co/150x200?text=Kubus+ke+Jaring', 'Materi 3 Peta 10 Langkah 2 - Kubus dan jaring-jaringnya (dummy)'),
  ('M3-P10-L2-2', 'https://placehold.co/120x220?text=Balok+ke+Jaring', 'Materi 3 Peta 10 Langkah 2 - Balok dan jaring-jaringnya (dummy)'),
  ('M3-P10-L2-3', 'https://placehold.co/140x230?text=Prisma+ke+Jaring', 'Materi 3 Peta 10 Langkah 2 - Prisma dan jaring-jaringnya (dummy)'),
  ('M3-P10-L3-1', 'https://placehold.co/240x180?text=Jaring-jaring', 'Materi 3 Peta 10 Langkah 3 - Jaring-jaring bangun ruang (dummy)'),
  ('M3-P10-L4-1', 'https://placehold.co/200x280?text=Maskot+Jempol', 'Materi 3 Peta 10 Langkah 4 - Maskot siswi mengacungkan jempol (dummy)'),
  ('M3-P10-L4-2', 'https://placehold.co/200x200?text=Limas+Oranye', 'Materi 3 Peta 10 Langkah 4 - Limas oranye (dummy)'),
  ('M3-P10-L4-3', 'https://placehold.co/200x200?text=Limas+Biru', 'Materi 3 Peta 10 Langkah 4 - Limas biru (dummy)'),
  ('M3-P10-L4-4', 'https://placehold.co/240x200?text=Limas+Hijau', 'Materi 3 Peta 10 Langkah 4 - Limas segi lima hijau (dummy)')
on conflict (nama) do nothing;
