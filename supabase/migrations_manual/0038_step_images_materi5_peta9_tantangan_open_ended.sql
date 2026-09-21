-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 9 (Tantangan Open-Ended - Submateri 5, Skala dan Luas Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P9-L1-1', 'https://placehold.co/871x538?text=Tiga+Siswa+Strategi', 'Materi 5 Peta 9 Langkah 1 - Tiga siswa berdiskusi di depan laptop (dummy)'),
  ('M5-P9-L1-2', 'https://placehold.co/880x505?text=Diagram+Skala+Limas', 'Materi 5 Peta 9 Langkah 1 - Diagram model awal, faktor skala k, model hasil penskalaan (dummy)'),
  ('M5-P9-L3-1', 'https://placehold.co/814x507?text=Bangun+Ruang+Lampu', 'Materi 5 Peta 9 Langkah 3 - Banner limas, kubus, balok, prisma dan lampu ide (dummy)'),
  ('M5-P9-L4-1', 'https://placehold.co/538x493?text=Kubus+x+k', 'Materi 5 Peta 9 Langkah 4 - Kubus kecil diperbesar faktor skala k beserta jaring-jaring kubus (dummy)'),
  ('M5-P9-L4-2', 'https://placehold.co/741x457?text=Prisma+Balok+Limas+x4', 'Materi 5 Peta 9 Langkah 4 - Prisma, balok, limas diperbesar faktor skala 4 (dummy)'),
  ('M5-P9-L5-1', 'https://placehold.co/888x535?text=Dua+Siswa+Merayakan', 'Materi 5 Peta 9 Langkah 5 - Dua siswa merayakan keberhasilan (dummy)'),
  ('M5-P9-L5-2', 'https://placehold.co/411x538?text=Siswi+Ide', 'Materi 5 Peta 9 Langkah 5 - Siswi menunjuk ke atas dengan lampu ide (dummy)')
on conflict (nama) do nothing;
