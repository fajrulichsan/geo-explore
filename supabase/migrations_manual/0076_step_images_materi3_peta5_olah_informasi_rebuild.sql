-- Run this in the Supabase SQL editor.
-- Materi 3 / Peta 5 (Ayo Mengolah Informasi - Tahap 4) rebuilt as 6 steps.
-- Replaces the old M3-P5-* placeholders (M3-P5-L6-1 changes meaning: now the three-student reflection scene).

insert into page_images (nama, url, keterangan) values
  ('M3-P5-L1-1', 'https://placehold.co/811x537?text=Tiga+Siswa+Mengolah+Data', 'Materi 3 Peta 5 Langkah 1 - Tiga siswa mengolah data dengan laptop (dummy)'),
  ('M3-P5-L1-2', 'https://placehold.co/196x208?text=Kubus', 'Materi 3 Peta 5 Langkah 1 - Ikon kubus pada tabel (dummy)'),
  ('M3-P5-L1-3', 'https://placehold.co/682x388?text=Balok', 'Materi 3 Peta 5 Langkah 1 - Ikon balok pada tabel (dummy)'),
  ('M3-P5-L1-4', 'https://placehold.co/219x127?text=Prisma', 'Materi 3 Peta 5 Langkah 1 - Ikon prisma pada tabel (dummy)'),
  ('M3-P5-L3-1', 'https://placehold.co/196x208?text=Kubus', 'Materi 3 Peta 5 Langkah 3 - Kubus pada kotak Ingat! (dummy)'),
  ('M3-P5-L6-1', 'https://placehold.co/946x538?text=Tiga+Siswa+Refleksi', 'Materi 3 Peta 5 Langkah 6 - Tiga siswa menulis jaring-jaring (dummy)'),
  ('M3-P5-L6-2', 'https://placehold.co/726x535?text=Maskot+Jempol', 'Materi 3 Peta 5 Langkah 6 - Maskot berjilbab memberi jempol (dummy)'),
  ('M3-P5-L6-3', 'https://placehold.co/196x208?text=Kubus', 'Materi 3 Peta 5 Langkah 6 - Kubus pada kotak Ingat! (dummy)')
on conflict (nama) do nothing;
