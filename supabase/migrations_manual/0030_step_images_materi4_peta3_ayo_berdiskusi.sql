-- Run this in the Supabase SQL editor.
-- Adds Materi 4 / Peta 3 (Ayo Berdiskusi - Submateri 4, Luas Permukaan Limas)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M4-P3-L1-1', 'https://placehold.co/280x360?text=Tiga+Siswa+Diskusi', 'Materi 4 Peta 3 Langkah 1 - Ilustrasi tiga siswa berdiskusi di meja belajar (dummy)'),
  ('M4-P3-L1-2', 'https://placehold.co/400x300?text=Jaring+Limas+Segitiga', 'Materi 4 Peta 3 Langkah 1 - Jaring-jaring limas segitiga (dummy)'),
  ('M4-P3-L1-3', 'https://placehold.co/400x300?text=Jaring+Limas+Segiempat', 'Materi 4 Peta 3 Langkah 1 - Jaring-jaring limas segiempat (dummy)'),
  ('M4-P3-L1-4', 'https://placehold.co/400x300?text=Jaring+Limas+Segilima', 'Materi 4 Peta 3 Langkah 1 - Jaring-jaring limas segilima (dummy)'),
  ('M4-P3-L2-1', 'https://placehold.co/480x270?text=Dua+Siswa+Dugaan', 'Materi 4 Peta 3 Langkah 2 - Dua siswa menyusun dugaan bersama (dummy)'),
  ('M4-P3-L2-2', 'https://placehold.co/480x270?text=GeoGebra+3D+%26+AR', 'Materi 4 Peta 3 Langkah 2 - Laptop dan ponsel menampilkan GeoGebra 3D dan Augmented Reality (dummy)'),
  ('M4-P3-L4-1', 'https://placehold.co/480x270?text=Limas+Segitiga', 'Materi 4 Peta 3 Langkah 4 - Ilustrasi bangun ruang limas segitiga (dummy)')
on conflict (nama) do nothing;
