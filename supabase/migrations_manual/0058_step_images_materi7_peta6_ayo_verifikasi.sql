-- Run this in the Supabase SQL editor.
-- Adds Materi 7 / Peta 6 (Ayo Verifikasi - Tahap 5, Volume Limas) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M7-P6-L1-1', 'https://placehold.co/1171x625?text=Hero+tiga+siswa+verifikasi+dugaan', 'Materi 7 Peta 6 Langkah 1 - Hero tiga siswa verifikasi dugaan (dummy)'),
  ('M7-P6-L2-1', 'https://placehold.co/440x420?text=Model+GeoGebra+3D+limas', 'Materi 7 Peta 6 Langkah 2 - Model GeoGebra 3D limas (dummy)'),
  ('M7-P6-L2-2', 'https://placehold.co/440x420?text=Model+AR+limas', 'Materi 7 Peta 6 Langkah 2 - Model AR limas (dummy)'),
  ('M7-P6-L4-1', 'https://placehold.co/379x601?text=Maskot+perempuan+setiap+data', 'Materi 7 Peta 6 Langkah 4 - Maskot perempuan setiap data (dummy)'),
  ('M7-P6-L4-2', 'https://placehold.co/592x610?text=Maskot+laki-laki+semangat', 'Materi 7 Peta 6 Langkah 4 - Maskot laki-laki semangat (dummy)'),
  ('M7-P6-L5-1', 'https://placehold.co/1671x564?text=Hero+dua+siswa+simpulkan+verifikasi', 'Materi 7 Peta 6 Langkah 5 - Hero dua siswa simpulkan verifikasi (dummy)'),
  ('M7-P6-L6-1', 'https://placehold.co/898x252?text=Ilustrasi+tiga+limas+memenuhi+prisma', 'Materi 7 Peta 6 Langkah 6 - Ilustrasi tiga limas memenuhi prisma (dummy)'),
  ('M7-P6-L7-1', 'https://placehold.co/384x558?text=Maskot+laki-laki+gunakan+data+pola+model', 'Materi 7 Peta 6 Langkah 7 - Maskot laki-laki gunakan data pola model (dummy)'),
  ('M7-P6-L7-2', 'https://placehold.co/381x577?text=Maskot+perempuan+terus+semangat', 'Materi 7 Peta 6 Langkah 7 - Maskot perempuan terus semangat (dummy)'),
  ('M7-P6-L8-1', 'https://placehold.co/382x583?text=Maskot+laki-laki+lanjut+tahap+berikutnya', 'Materi 7 Peta 6 Langkah 8 - Maskot laki-laki lanjut tahap berikutnya (dummy)')
on conflict (nama) do nothing;
