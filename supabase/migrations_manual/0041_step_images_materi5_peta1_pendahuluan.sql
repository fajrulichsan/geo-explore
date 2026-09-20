-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 1 (Pendahuluan - Submateri 5, Skala dan Luas Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P1-L1-1', 'https://placehold.co/800x536?text=Tiga+Siswa+Skala+3D', 'Materi 5 Peta 1 Langkah 1 - Tiga siswa mengamati kubus dan balok berskala dengan laptop dan tablet (dummy)'),
  ('M5-P1-L1-2', 'https://placehold.co/1350x400?text=Skala+1+ke+Skala+2', 'Materi 5 Peta 1 Langkah 1 - Kubus skala 1 (100%) menjadi skala 2 (200%) dengan k=2 (dummy)'),
  ('M5-P1-L2-1', 'https://placehold.co/990x535?text=Alur+Skala+dan+Luas', 'Materi 5 Peta 1 Langkah 2 - Alur enam langkah bagaimana skala mempengaruhi luas (dummy)'),
  ('M5-P1-L2-2', 'https://placehold.co/480x340?text=GeoGebra+3D+Slider+Skala', 'Materi 5 Peta 1 Langkah 2 - Laptop dengan slider faktor skala GeoGebra 3D (dummy)'),
  ('M5-P1-L2-3', 'https://placehold.co/480x340?text=Augmented+Reality+Skala', 'Materi 5 Peta 1 Langkah 2 - Ponsel menampilkan model limas dalam AR (dummy)'),
  ('M5-P1-L3-1', 'https://placehold.co/580x530?text=Maskot+Menulis', 'Materi 5 Peta 1 Langkah 3 - Siswa mengukur balok dengan penggaris sambil mencatat (dummy)'),
  ('M5-P1-L3-2', 'https://placehold.co/460x430?text=Kaca+Pembesar+Kubus', 'Materi 5 Peta 1 Langkah 3 - Kaca pembesar di atas kubus biru (dummy)'),
  ('M5-P1-L3-3', 'https://placehold.co/1190x450?text=Siap+Mengeksplorasi', 'Materi 5 Peta 1 Langkah 3 - Kubus, balok, prisma segitiga, limas segiempat dengan k=2 (dummy)')
on conflict (nama) do nothing;
