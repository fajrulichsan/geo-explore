-- Run this in the Supabase SQL editor.
-- Adds Materi 6 / Peta 10 (Rangkuman) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M6-P10-L1-1', 'https://placehold.co/1504x625?text=Hero+Rangkuman', 'Materi 6 Peta 10 Langkah 1 - Tiga siswa merangkum konsep volume dengan GeoGebra, model bangun, dan AR (dummy)'),
  ('M6-P10-L2-1', 'https://placehold.co/937x343?text=Hubungan+Ketiga+Bangun', 'Materi 6 Peta 10 Langkah 2 - Kubus, balok, prisma segitiga, prisma segi-n mengikuti pola volume sama (dummy)'),
  ('M6-P10-L2-2', 'https://placehold.co/963x427?text=Prisma+Segitiga', 'Materi 6 Peta 10 Langkah 2 - Prisma segitiga (dummy)'),
  ('M6-P10-L2-3', 'https://placehold.co/451x417?text=Prisma+Segi-n', 'Materi 6 Peta 10 Langkah 2 - Prisma segi-n (dummy)'),
  ('M6-P10-L2-4', 'https://placehold.co/700x612?text=Maskot+Selanjutnya', 'Materi 6 Peta 10 Langkah 2 - Siswa mengepalkan tangan (Selanjutnya) (dummy)'),
  ('M6-P10-L5-1', 'https://placehold.co/697x358?text=Generalisasi+Prisma', 'Materi 6 Peta 10 Langkah 5 - Prisma segitiga hingga segi-n dengan V = L alas x p (dummy)'),
  ('M6-P10-L5-2', 'https://placehold.co/1608x601?text=Pesan+Akhir', 'Materi 6 Peta 10 Langkah 5 - Siswa dengan pesan akhir (dummy)')
on conflict (nama) do nothing;
