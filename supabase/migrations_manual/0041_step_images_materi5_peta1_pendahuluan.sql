-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 1 (Pendahuluan - Submateri 5, Skala dan Luas Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P1-L1-1', 'https://placehold.co/400x300?text=Tiga+Siswa+Skala+3D', 'Materi 5 Peta 1 Langkah 1 - Ilustrasi tiga siswa mengamati bangun ruang berskala dengan laptop dan tablet (dummy)'),
  ('M5-P1-L2-1', 'https://placehold.co/480x300?text=GeoGebra+3D+Slider+Skala', 'Materi 5 Peta 1 Langkah 2 - Tangkapan layar slider faktor skala pada model kubus di GeoGebra 3D (dummy)'),
  ('M5-P1-L2-2', 'https://placehold.co/480x300?text=Augmented+Reality+Skala', 'Materi 5 Peta 1 Langkah 2 - Model asli dan model hasil skala limas ditampilkan melalui Augmented Reality (dummy)'),
  ('M5-P1-L2-3', 'https://placehold.co/220x220?text=Maskot+Menulis', 'Materi 5 Peta 1 Langkah 2 - Maskot siswa laki-laki menulis catatan sambil memegang kubus (dummy)'),
  ('M5-P1-L2-4', 'https://placehold.co/160x160?text=Kubus', 'Materi 5 Peta 1 Langkah 2 - Ilustrasi kubus dengan faktor skala k=2 (dummy)'),
  ('M5-P1-L2-5', 'https://placehold.co/160x160?text=Balok', 'Materi 5 Peta 1 Langkah 2 - Ilustrasi balok dengan faktor skala k=2 (dummy)'),
  ('M5-P1-L2-6', 'https://placehold.co/160x160?text=Prisma+Segitiga', 'Materi 5 Peta 1 Langkah 2 - Ilustrasi prisma segitiga dengan faktor skala k=2 (dummy)'),
  ('M5-P1-L2-7', 'https://placehold.co/160x160?text=Limas+Segiempat', 'Materi 5 Peta 1 Langkah 2 - Ilustrasi limas segiempat dengan faktor skala k=2 (dummy)')
on conflict (nama) do nothing;
