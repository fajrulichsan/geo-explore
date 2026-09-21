-- Run this in the Supabase SQL editor.
-- Materi 5 / Peta 4 (Ayo Bereksplorasi - Submateri 5 Tahap 3, Skala dan Luas Permukaan) step illustration images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P4-L1-1', 'https://placehold.co/625x538.png?text=Tiga+Siswa+Bereksplorasi+Skala', 'Materi 5 Peta 4 Langkah 1 - Tiga siswa mengamati bangun ruang di laptop dan tablet (dummy)'),
  ('M5-P4-L2-1', 'https://placehold.co/300x300.png?text=QR+GeoGebra+3D', 'Materi 5 Peta 4 Langkah 2 - QR code model GeoGebra 3D (dummy)'),
  ('M5-P4-L2-2', 'https://placehold.co/600x338.png?text=GeoGebra+3D+Faktor+Skala', 'Materi 5 Peta 4 Langkah 2 - Kubus pada GeoGebra 3D dengan slider k = 2, dipakai ulang di Langkah 6 (dummy)'),
  ('M5-P4-L3-1', 'https://placehold.co/300x300.png?text=QR+AR', 'Materi 5 Peta 4 Langkah 3 - QR code model Augmented Reality (dummy)'),
  ('M5-P4-L3-2', 'https://placehold.co/580x502.png?text=AR+Kubus+Faktor+Skala', 'Materi 5 Peta 4 Langkah 3 - Tablet menampilkan kubus biru dalam AR, dipakai ulang di Langkah 6 (dummy)'),
  ('M5-P4-L4-1', 'https://placehold.co/184x192.png?text=Kubus', 'Materi 5 Peta 4 Langkah 4 - Ilustrasi kubus hijau (dummy)'),
  ('M5-P4-L4-2', 'https://placehold.co/312x183.png?text=Balok', 'Materi 5 Peta 4 Langkah 4 - Ilustrasi balok biru (dummy)'),
  ('M5-P4-L4-3', 'https://placehold.co/420x250.png?text=Prisma+Segitiga', 'Materi 5 Peta 4 Langkah 4 - Ilustrasi prisma segitiga oranye (dummy)'),
  ('M5-P4-L4-4', 'https://placehold.co/323x280.png?text=Limas+Segiempat', 'Materi 5 Peta 4 Langkah 4 - Ilustrasi limas segiempat ungu (dummy)'),
  ('M5-P4-L4-5', 'https://placehold.co/252x280.png?text=Maskot+Ayo+Berpikir', 'Materi 5 Peta 4 Langkah 4 - Maskot siswa berpikir dengan tanda tanya (dummy)')
on conflict (nama) do nothing;
