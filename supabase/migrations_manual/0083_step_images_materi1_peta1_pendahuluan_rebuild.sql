-- Run this in the Supabase SQL editor.
-- Rebuild Materi 1 / Peta 1 (Pendahuluan - Klasifikasi Bangun Ruang Sisi Datar), 3 langkah.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

delete from page_images where nama in ('M1-P1-L1-2', 'M1-P1-L1-3');

insert into page_images (nama, url, keterangan) values
  ('M1-P1-L1-1', 'https://placehold.co/745x410?text=Benda+Sekitar', 'Materi 1 Peta 1 Langkah 1 - Benda-benda di teras (dummy)'),
  ('M1-P1-L2-1', 'https://placehold.co/280x400?text=Maskot+Tujuan', 'Materi 1 Peta 1 Langkah 2 - Maskot siswi berhijab dengan tablet (dummy)'),
  ('M1-P1-L2-2', 'https://placehold.co/470x380?text=GeoGebra+3D', 'Materi 1 Peta 1 Langkah 2 - Laptop GeoGebra 3D (dummy)'),
  ('M1-P1-L2-3', 'https://placehold.co/350x380?text=Augmented+Reality', 'Materi 1 Peta 1 Langkah 2 - Ponsel AR kubus hijau (dummy)'),
  ('M1-P1-L3-1', 'https://placehold.co/690x210?text=Kubus+Balok+Prisma+Limas', 'Materi 1 Peta 1 Langkah 3 - Kubus, balok, prisma, limas (dummy)'),
  ('M1-P1-L3-2', 'https://placehold.co/430x350?text=Maskot+Siap', 'Materi 1 Peta 1 Langkah 3 - Maskot siswa berpikir bola lampu (dummy)')
on conflict (nama) do nothing;
