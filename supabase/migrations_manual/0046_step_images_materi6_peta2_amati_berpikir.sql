-- Run this in the Supabase SQL editor.
-- Adds Materi 6 / Peta 2 (Ayo Mengamati dan Berpikir - Tahap 1) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M6-P2-L1-1', 'https://placehold.co/880x496?text=Hero+Tiga+Siswa+Amati', 'Materi 6 Peta 2 Langkah 1 - Tiga siswa mengamati kubus, balok, dan prisma (dummy)'),
  ('M6-P2-L1-2', 'https://placehold.co/727x502?text=Kubus+dan+Lapisan', 'Materi 6 Peta 2 Langkah 1 - Kubus beserta tiga lapisan penyusunnya (dummy)'),
  ('M6-P2-L1-3', 'https://placehold.co/804x499?text=Balok+dan+Lapisan', 'Materi 6 Peta 2 Langkah 1 - Balok beserta tiga lapisan penyusunnya (dummy)'),
  ('M6-P2-L1-4', 'https://placehold.co/922x520?text=Prisma+dan+Penampang', 'Materi 6 Peta 2 Langkah 1 - Prisma segitiga beserta penampang sejajar alas pada beberapa posisi (dummy)'),
  ('M6-P2-L3-1', 'https://placehold.co/1246x625?text=Alur+Lapisan+ke+Bangun', 'Materi 6 Peta 2 Langkah 3 - Alur satu lapisan, beberapa lapisan, hingga bangun utuh (dummy)'),
  ('M6-P2-L3-2', 'https://placehold.co/619x508?text=Maskot+Berpikir', 'Materi 6 Peta 2 Langkah 3 - Maskot siswa laki-laki berpikir dengan tanda tanya (dummy)'),
  ('M6-P2-L3-3', 'https://placehold.co/408x513?text=Maskot+Ide', 'Materi 6 Peta 2 Langkah 3 - Maskot siswa berhijab dengan lampu ide (dummy)'),
  ('M6-P2-L4-1', 'https://placehold.co/376x334?text=Kubus', 'Materi 6 Peta 2 Langkah 4 - Kubus biru tersusun dari kubus satuan (dummy)'),
  ('M6-P2-L4-2', 'https://placehold.co/447x229?text=Satu+Lapisan+Kubus', 'Materi 6 Peta 2 Langkah 4 - Satu lapisan kubus (dummy)'),
  ('M6-P2-L4-3', 'https://placehold.co/357x273?text=Balok', 'Materi 6 Peta 2 Langkah 4 - Balok hijau tersusun dari kubus satuan (dummy)'),
  ('M6-P2-L4-4', 'https://placehold.co/922x385?text=Satu+Lapisan+Balok', 'Materi 6 Peta 2 Langkah 4 - Satu lapisan balok (dummy)'),
  ('M6-P2-L4-5', 'https://placehold.co/787x390?text=Prisma', 'Materi 6 Peta 2 Langkah 4 - Prisma segitiga (dummy)'),
  ('M6-P2-L4-6', 'https://placehold.co/576x166?text=Posisi+Penampang', 'Materi 6 Peta 2 Langkah 4 - Penampang prisma pada posisi 1 sampai 4 (dummy)'),
  ('M6-P2-L6-1', 'https://placehold.co/456x520?text=Maskot+Refleksi', 'Materi 6 Peta 2 Langkah 6 - Maskot siswa laki-laki mengajak refleksi (dummy)'),
  ('M6-P2-L6-2', 'https://placehold.co/274x402?text=Lapisan+Kubus', 'Materi 6 Peta 2 Langkah 6 - Beberapa lapisan kubus (dummy)'),
  ('M6-P2-L6-3', 'https://placehold.co/283x355?text=Lapisan+Balok', 'Materi 6 Peta 2 Langkah 6 - Beberapa lapisan balok (dummy)'),
  ('M6-P2-L6-4', 'https://placehold.co/196x175?text=Penampang+Prisma', 'Materi 6 Peta 2 Langkah 6 - Satu penampang prisma (dummy)'),
  ('M6-P2-L6-5', 'https://placehold.co/1444x318?text=Penampang+Beberapa+Posisi', 'Materi 6 Peta 2 Langkah 6 - Penampang prisma pada beberapa posisi (dummy)'),
  ('M6-P2-L7-1', 'https://placehold.co/373x504?text=Maskot+Menulis', 'Materi 6 Peta 2 Langkah 7 - Maskot siswa berhijab memegang pensil (dummy)')
on conflict (nama) do nothing;
