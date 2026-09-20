-- Run this in the Supabase SQL editor.
-- Adds Materi 6 / Peta 7 (Ayo Menyimpulkan - Tahap 6) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M6-P7-L1-1', 'https://placehold.co/1165x628?text=Hero+Menyimpulkan', 'Materi 6 Peta 7 Langkah 1 - Tiga siswa dengan GeoGebra 3D, kubus, balok, prisma (dummy)'),
  ('M6-P7-L2-1', 'https://placehold.co/1374x579?text=Prisma+Segitiga', 'Materi 6 Peta 7 Langkah 2 - Model prisma segitiga (dummy)'),
  ('M6-P7-L2-2', 'https://placehold.co/816x621?text=Maskot+Rumus+Umum', 'Materi 6 Peta 7 Langkah 2 - Siswa: Ayo lanjut dan temukan rumus umumnya (dummy)'),
  ('M6-P7-L3-1', 'https://placehold.co/1164x628?text=Banner+Rumus', 'Materi 6 Peta 7 Langkah 3 - Tiga siswa: Kita temukan rumusnya (dummy)'),
  ('M6-P7-L4-1', 'https://placehold.co/819x624?text=Maskot+Tantangan', 'Materi 6 Peta 7 Langkah 4 - Siswa: Ayo lanjut dan hadapi tantangan (dummy)'),
  ('M6-P7-L5-1', 'https://placehold.co/939x624?text=Hero+Kesimpulan', 'Materi 6 Peta 7 Langkah 5 - Tiga siswa: Yuk, tulis kesimpulanmu (dummy)'),
  ('M6-P7-L6-1', 'https://placehold.co/844x553?text=Kubus+8+cm', 'Materi 6 Peta 7 Langkah 6 - Soal 1: kubus rusuk 8 cm (dummy)'),
  ('M6-P7-L6-2', 'https://placehold.co/1050x495?text=Balok+12x7x5', 'Materi 6 Peta 7 Langkah 6 - Soal 2: balok 12x7x5 cm (dummy)'),
  ('M6-P7-L6-3', 'https://placehold.co/475x190?text=Prisma+10+6+15', 'Materi 6 Peta 7 Langkah 6 - Soal 3: prisma segitiga (dummy)'),
  ('M6-P7-L6-4', 'https://placehold.co/900x583?text=Akuarium', 'Materi 6 Peta 7 Langkah 6 - Penerapan 1: akuarium (dummy)'),
  ('M6-P7-L6-5', 'https://placehold.co/894x565?text=Tenda', 'Materi 6 Peta 7 Langkah 6 - Penerapan 2: tenda prisma segitiga (dummy)'),
  ('M6-P7-L6-6', 'https://placehold.co/814x616?text=Maskot+Refleksi+Diri', 'Materi 6 Peta 7 Langkah 6 - Siswa: Ayo lanjut ke refleksi diri (dummy)')
on conflict (nama) do nothing;
