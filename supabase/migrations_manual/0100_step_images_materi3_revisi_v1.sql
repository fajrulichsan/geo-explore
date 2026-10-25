-- Run this in the Supabase SQL editor.
-- Revisi Submateri 3 v1: new image slots (roket, ikon bentuk sisi, tabel bangun ruang, alur, peta konsep, siswa).

insert into page_images (nama, url, keterangan) values
  ('M3-P1-L5-5', 'https://placehold.co/214x253?text=Roket', 'Materi 3 Peta 1 Langkah 5 - Roket di samping Siap Mengeksplorasi'),
  ('M3-P2-L4-5', 'https://placehold.co/300x240?text=M3-P2-L4-5', 'Materi 3 Peta 2 Langkah 4 - Ikon persegi panjang balok'),
  ('M3-P2-L4-6', 'https://placehold.co/300x240?text=M3-P2-L4-6', 'Materi 3 Peta 2 Langkah 4 - Ikon segitiga prisma'),
  ('M3-P2-L5-1', 'https://placehold.co/300x240?text=M3-P2-L5-1', 'Materi 3 Peta 2 Langkah 5 - Kubus pada tabel Cari Pola'),
  ('M3-P2-L5-2', 'https://placehold.co/300x240?text=M3-P2-L5-2', 'Materi 3 Peta 2 Langkah 5 - Balok pada tabel Cari Pola'),
  ('M3-P2-L5-3', 'https://placehold.co/300x240?text=M3-P2-L5-3', 'Materi 3 Peta 2 Langkah 5 - Prisma segitiga pada tabel Cari Pola'),
  ('M3-P4-L1-2', 'https://placehold.co/1380x460?text=Alur+Eksplorasi', 'Materi 3 Peta 4 Langkah 1 - Alur GeoGebra, AR, Catatan Hasil'),
  ('M3-P4-L1-3', 'https://placehold.co/981x361?text=Kubus+Jaring-Jaring', 'Materi 3 Peta 4 Langkah 1 - Kubus dan jaring-jaring di samping Langkah Kegiatan'),
  ('M3-P4-L5-1', 'https://placehold.co/1379x532?text=Alur+Lanjutan', 'Materi 3 Peta 4 Langkah 5 - Alur Ayo lanjutkan hasil eksplorasimu'),
  ('M3-P7-L1-2', 'https://placehold.co/1380x461?text=Alur+Kegiatan', 'Materi 3 Peta 7 Langkah 1 - Alur kegiatan'),
  ('M3-P10-L3-2', 'https://placehold.co/813x745?text=Bangun+dan+Jaring-Jaring', 'Materi 3 Peta 10 Langkah 3 - Bangun ruang dan jaring-jaring'),
  ('M3-P10-L3-3', 'https://placehold.co/667x444?text=Sisi+Kongruen', 'Materi 3 Peta 10 Langkah 3 - Strategi 2 mengelompokkan sisi kongruen'),
  ('M3-P10-L4-5', 'https://placehold.co/517x775?text=Siswa+Semangat', 'Materi 3 Peta 10 Langkah 4 - Siswa pada kotak Hebat'),
  ('M3-P10-L4-6', 'https://placehold.co/1378x775?text=Peta+Konsep+Mini', 'Materi 3 Peta 10 Langkah 4 - Peta konsep mini')
on conflict (nama) do nothing;
