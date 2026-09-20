-- Run this in the Supabase SQL editor.
-- Adds Materi 8 / Peta 10 (Rangkuman) step illustration images to page_images.

insert into page_images (nama, url, keterangan) values
  ('M8-P10-L1-1', 'https://placehold.co/936x333?text=Banner+Bangun+Ruang', 'Materi 8 Peta 10 Langkah 1 - Banner bangun ruang dengan lampu ide (dummy)'),
  ('M8-P10-L1-2', 'https://placehold.co/936x616?text=Tiga+Siswa+GeoGebra+AR', 'Materi 8 Peta 10 Langkah 1 - Tiga siswa dengan laptop, GeoGebra 3D dan AR (dummy)'),
  ('M8-P10-L3-1', 'https://placehold.co/573x127?text=Empat+Bangun+Ruang', 'Materi 8 Peta 10 Langkah 3 - Kubus, balok, prisma, limas (Ingat) (dummy)'),
  ('M8-P10-L6-1', 'https://placehold.co/633x580?text=Target+Poin+Penting', 'Materi 8 Peta 10 Langkah 6 - Papan target (Poin Penting) (dummy)'),
  ('M8-P10-L7-1', 'https://placehold.co/495x586?text=Siswa+Hebat', 'Materi 8 Peta 10 Langkah 7 - Siswa mengepalkan tangan (Hebat) (dummy)'),
  ('M8-P10-L7-2', 'https://placehold.co/580x589?text=Matematika+Lebih+Hebat', 'Materi 8 Peta 10 Langkah 7 - Bangun ruang Matematika membuatmu lebih hebat (dummy)')
on conflict (nama) do nothing;
