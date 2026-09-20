-- Run this in the Supabase SQL editor.
-- Adds Materi 7 / Peta 5 (Ayo Mengolah Informasi - Tahap 4, Volume Limas) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M7-P5-L1-1', 'https://placehold.co/1194x625?text=Hero+tiga+siswa+analisis+data', 'Materi 7 Peta 5 Langkah 1 - Hero tiga siswa analisis data (dummy)'),
  ('M7-P5-L2-1', 'https://placehold.co/348x163?text=Prisma+limas+luas+alas+kecil', 'Materi 7 Peta 5 Langkah 2 - Prisma limas luas alas kecil (dummy)'),
  ('M7-P5-L2-2', 'https://placehold.co/505x214?text=Prisma+limas+luas+alas+sedang', 'Materi 7 Peta 5 Langkah 2 - Prisma limas luas alas sedang (dummy)'),
  ('M7-P5-L2-3', 'https://placehold.co/586x240?text=Prisma+limas+luas+alas+besar', 'Materi 7 Peta 5 Langkah 2 - Prisma limas luas alas besar (dummy)'),
  ('M7-P5-L2-4', 'https://placehold.co/432x210?text=Prisma+limas+tinggi+rendah', 'Materi 7 Peta 5 Langkah 2 - Prisma limas tinggi rendah (dummy)'),
  ('M7-P5-L2-5', 'https://placehold.co/501x276?text=Prisma+limas+tinggi+sedang', 'Materi 7 Peta 5 Langkah 2 - Prisma limas tinggi sedang (dummy)'),
  ('M7-P5-L2-6', 'https://placehold.co/531x342?text=Prisma+limas+tinggi+tinggi', 'Materi 7 Peta 5 Langkah 2 - Prisma limas tinggi tinggi (dummy)'),
  ('M7-P5-L2-7', 'https://placehold.co/1606x334?text=Penuangan+limas+berulang+ke+prisma', 'Materi 7 Peta 5 Langkah 2 - Penuangan limas berulang ke prisma (dummy)'),
  ('M7-P5-L3-1', 'https://placehold.co/373x612?text=Maskot+laki-laki+gunakan+data', 'Materi 7 Peta 5 Langkah 3 - Maskot laki-laki gunakan data (dummy)'),
  ('M7-P5-L4-1', 'https://placehold.co/403x616?text=Maskot+perempuan+jempol', 'Materi 7 Peta 5 Langkah 4 - Maskot perempuan jempol (dummy)'),
  ('M7-P5-L5-1', 'https://placehold.co/1192x625?text=Hero+tiga+siswa+susun+dugaan', 'Materi 7 Peta 5 Langkah 5 - Hero tiga siswa susun dugaan (dummy)'),
  ('M7-P5-L5-2', 'https://placehold.co/1050x556?text=Diagram+prisma+dan+limas+L+dan+t', 'Materi 7 Peta 5 Langkah 5 - Diagram prisma dan limas L dan t (dummy)'),
  ('M7-P5-L6-1', 'https://placehold.co/354x601?text=Maskot+laki-laki+alasan+dugaan', 'Materi 7 Peta 5 Langkah 6 - Maskot laki-laki alasan dugaan (dummy)'),
  ('M7-P5-L7-1', 'https://placehold.co/370x616?text=Maskot+perempuan+langkah+pemahaman', 'Materi 7 Peta 5 Langkah 7 - Maskot perempuan langkah pemahaman (dummy)')
on conflict (nama) do nothing;
