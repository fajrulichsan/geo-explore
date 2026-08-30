-- Run this in the Supabase SQL editor.
-- Adds Materi 1 / Peta 9 step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  -- Langkah 1 (MengelompokkanBangunRuang)
  ('M1-P9-L1-1', 'https://placehold.co/200x200?text=Kubus', 'Peta 9 Langkah 1 - Ilustrasi Kubus (dummy)'),
  ('M1-P9-L1-2', 'https://placehold.co/200x200?text=Balok', 'Peta 9 Langkah 1 - Ilustrasi Balok (dummy)'),
  ('M1-P9-L1-3', 'https://placehold.co/200x200?text=Prisma+Segitiga', 'Peta 9 Langkah 1 - Ilustrasi Prisma Segitiga (dummy)'),
  ('M1-P9-L1-4', 'https://placehold.co/200x200?text=Prisma+Segi+Lima', 'Peta 9 Langkah 1 - Ilustrasi Prisma Segi Lima (dummy)'),
  ('M1-P9-L1-5', 'https://placehold.co/200x200?text=Limas+Segitiga', 'Peta 9 Langkah 1 - Ilustrasi Limas Segitiga (dummy)'),
  ('M1-P9-L1-6', 'https://placehold.co/200x200?text=Limas+Segiempat', 'Peta 9 Langkah 1 - Ilustrasi Limas Segiempat (dummy)'),
  -- Langkah 2 (SatuBangunBanyakKelompok)
  ('M1-P9-L2-1', 'https://placehold.co/96x96?text=Kubus', 'Peta 9 Langkah 2 - Ilustrasi kubus pada pertanyaan 1 (dummy)'),
  ('M1-P9-L2-2', 'https://placehold.co/80x80?text=Ilustrasi', 'Peta 9 Langkah 2 - Ilustrasi bangun lain pada pertanyaan 2 (dummy)')
on conflict (nama) do nothing;
