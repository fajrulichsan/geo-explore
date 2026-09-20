-- Run this in the Supabase SQL editor.
-- Adds Materi 6 / Peta 9 (Tantangan Open-Ended) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M6-P9-L1-1', 'https://placehold.co/1246x625?text=Hero+Tantangan', 'Materi 6 Peta 9 Langkah 1 - Tiga siswa dengan GeoGebra, model kubus/balok/prisma, dan AR (dummy)'),
  ('M6-P9-L2-1', 'https://placehold.co/666x624?text=Maskot+Berpikir', 'Materi 6 Peta 9 Langkah 2 - Siswa berpikir dengan gelembung kubus tanda tanya (dummy)'),
  ('M6-P9-L4-1', 'https://placehold.co/934x625?text=Hero+Analisis+Strategi', 'Materi 6 Peta 9 Langkah 4 - Tiga siswa menganalisis strategi: Strateginya bisa berbeda (dummy)'),
  ('M6-P9-L4-2', 'https://placehold.co/936x624?text=Diskusi+Open-Ended', 'Materi 6 Peta 9 Langkah 4 - Tiga siswa berdiskusi dengan gelembung kubus, balok, prisma (dummy)'),
  ('M6-P9-L5-1', 'https://placehold.co/592x604?text=Maskot+Kesimpulan', 'Materi 6 Peta 9 Langkah 5 - Siswa menunjuk ke atas dengan bintang (dummy)'),
  ('M6-P9-L5-2', 'https://placehold.co/687x601?text=Maskot+Selanjutnya', 'Materi 6 Peta 9 Langkah 5 - Siswa mengepalkan tangan: Selanjutnya (dummy)')
on conflict (nama) do nothing;
