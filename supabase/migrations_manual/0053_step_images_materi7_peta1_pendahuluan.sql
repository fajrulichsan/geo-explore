-- Run this in the Supabase SQL editor.
-- Adds Materi 7 / Peta 1 (Pendahuluan - Submateri 7, Volume Limas) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M7-P1-L1-1', 'https://placehold.co/1104x619?text=Hero+Tiga+Siswa+Limas', 'Materi 7 Peta 1 Langkah 1 - Tiga siswa di perpustakaan membahas hubungan volume limas dan prisma (dummy)'),
  ('M7-P1-L1-2', 'https://placehold.co/1263x321?text=Limas+dalam+Prisma', 'Materi 7 Peta 1 Langkah 1 - Limas di dalam prisma dan tiga limas dengan luas alas L dan tinggi t sama (dummy)'),
  ('M7-P1-L1-3', 'https://placehold.co/400x300?text=Atap+Rumah', 'Materi 7 Peta 1 Langkah 1 - Atap rumah berbentuk limas (dummy)'),
  ('M7-P1-L1-4', 'https://placehold.co/400x300?text=Tenda', 'Materi 7 Peta 1 Langkah 1 - Tenda berbentuk limas (dummy)'),
  ('M7-P1-L1-5', 'https://placehold.co/400x300?text=Piramida+Mesir', 'Materi 7 Peta 1 Langkah 1 - Piramida Mesir (dummy)'),
  ('M7-P1-L1-6', 'https://placehold.co/1419x615?text=Jenis+Limas', 'Materi 7 Peta 1 Langkah 1 - Tiga jenis limas: segiempat, segitiga, segi-n (dummy)'),
  ('M7-P1-L2-1', 'https://placehold.co/480x270?text=GeoGebra+3D+Limas', 'Materi 7 Peta 1 Langkah 2 - Tangkapan layar GeoGebra 3D limas (dummy)'),
  ('M7-P1-L2-2', 'https://placehold.co/200x200?text=QR+GeoGebra+3D', 'Materi 7 Peta 1 Langkah 2 - Kode QR GeoGebra 3D (dummy)'),
  ('M7-P1-L2-3', 'https://placehold.co/480x270?text=AR+Limas', 'Materi 7 Peta 1 Langkah 2 - Model limas melalui AR (dummy)'),
  ('M7-P1-L2-4', 'https://placehold.co/200x200?text=QR+AR+Viewer', 'Materi 7 Peta 1 Langkah 2 - Kode QR AR Viewer (dummy)'),
  ('M7-P1-L3-1', 'https://placehold.co/1021x300?text=Dugaan+Limas+Prisma', 'Materi 7 Peta 1 Langkah 3 - 3 limas dengan luas alas L dan tinggi t sama dibanding 1 prisma (dummy)'),
  ('M7-P1-L3-2', 'https://placehold.co/336x262?text=Maskot+Ayo+Mulai', 'Materi 7 Peta 1 Langkah 3 - Maskot siswa laki-laki 'Ayo, mulai!' (dummy)')
on conflict (nama) do nothing;
