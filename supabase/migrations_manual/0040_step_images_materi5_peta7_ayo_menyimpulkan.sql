-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 7 (Ayo Menyimpulkan - Submateri 5, Skala dan Luas Bangun Ruang Sisi Datar, Tahap 6)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P7-L1-1', 'https://placehold.co/520x320?text=Tiga+Siswa+Menyimpulkan', 'Materi 5 Peta 7 Langkah 1 - Ilustrasi tiga siswa menyusun kesimpulan dengan tablet dan buku (dummy)'),
  ('M5-P7-L3-1', 'https://placehold.co/560x180?text=Kubus+Balok+Limas+Prisma', 'Materi 5 Peta 7 Langkah 3 - Deretan kubus, balok, limas, dan prisma (dummy)'),
  ('M5-P7-L4-1', 'https://placehold.co/480x160?text=Kubus+Awal+x+k', 'Materi 5 Peta 7 Langkah 4 - Kubus awal dikali k menjadi kubus hasil penskalaan (dummy)'),
  ('M5-P7-L4-2', 'https://placehold.co/480x160?text=Jaring-Jaring+x+k', 'Materi 5 Peta 7 Langkah 4 - Jaring-jaring kubus awal dikali k (dummy)'),
  ('M5-P7-L5-1', 'https://placehold.co/220x300?text=Maskot+Kesimpulan', 'Materi 5 Peta 7 Langkah 5 - Siswa laki-laki menunjuk ke atas dengan lampu ide (dummy)'),
  ('M5-P7-L5-2', 'https://placehold.co/416x224?text=Tiga+Siswa+Membandingkan', 'Materi 5 Peta 7 Langkah 5 - Tiga siswa berdiskusi membandingkan kesimpulan (dummy)'),
  ('M5-P7-L6-1', 'https://placehold.co/220x220?text=Maskot+Hebat', 'Materi 5 Peta 7 Langkah 6 - Siswi mengepalkan tangan tanda semangat (dummy)'),
  ('M5-P7-L6-2', 'https://placehold.co/120x120?text=Kubus', 'Materi 5 Peta 7 Langkah 6 - Kubus (dummy)'),
  ('M5-P7-L6-3', 'https://placehold.co/120x120?text=Balok', 'Materi 5 Peta 7 Langkah 6 - Balok (dummy)'),
  ('M5-P7-L6-4', 'https://placehold.co/120x120?text=Prisma', 'Materi 5 Peta 7 Langkah 6 - Prisma (dummy)'),
  ('M5-P7-L6-5', 'https://placehold.co/120x120?text=Limas', 'Materi 5 Peta 7 Langkah 6 - Limas (dummy)')
on conflict (nama) do nothing;
