-- Run this in the Supabase SQL editor.
-- Materi 4 / Peta 3 (Ayo Berdiskusi - Tahap 2, Luas Permukaan Limas) rebuilt as 6 steps.
-- Replaces the old M4-P3-L2-* and M4-P3-L4-* slots (delete them manually if they exist).

insert into page_images (nama, url, keterangan) values
  ('M4-P3-L1-1', 'https://placehold.co/520x390?text=Tiga+Siswa+Diskusi', 'Materi 4 Peta 3 Langkah 1 - Tiga siswa berdiskusi di meja belajar (dipakai ulang di langkah 2, 4, 6) (dummy)'),
  ('M4-P3-L1-2', 'https://placehold.co/382x192?text=Jaring+Limas+Segitiga', 'Materi 4 Peta 3 Langkah 1 - Limas dan jaring-jaring segitiga (dummy)'),
  ('M4-P3-L1-3', 'https://placehold.co/379x183?text=Jaring+Limas+Segiempat', 'Materi 4 Peta 3 Langkah 1 - Limas dan jaring-jaring segiempat (dummy)'),
  ('M4-P3-L1-4', 'https://placehold.co/367x178?text=Jaring+Limas+Segilima', 'Materi 4 Peta 3 Langkah 1 - Limas dan jaring-jaring segilima (dummy)'),
  ('M4-P3-L3-1', 'https://placehold.co/400x300?text=Laptop+dan+Ponsel+GeoGebra+AR', 'Materi 4 Peta 3 Langkah 3 - Laptop dan ponsel GeoGebra 3D & AR (dipakai ulang di langkah 5) (dummy)'),
  ('M4-P3-L6-1', 'https://placehold.co/480x270?text=Laptop+dan+Tablet+AR', 'Materi 4 Peta 3 Langkah 6 - Laptop dan tablet AR (dummy)')
on conflict (nama) do nothing;
