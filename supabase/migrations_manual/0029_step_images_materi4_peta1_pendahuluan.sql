-- Run this in the Supabase SQL editor.
-- Adds Materi 4 / Peta 1 (Pendahuluan - Submateri 4, Luas Permukaan Limas)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M4-P1-L1-1', 'https://placehold.co/400x300?text=Tiga+Siswa+Berpikir', 'Materi 4 Peta 1 Langkah 1 - Ilustrasi tiga siswa berpikir tentang bentuk rumah, tenda, dan piramida (dummy)'),
  ('M4-P1-L1-2', 'https://placehold.co/480x300?text=GeoGebra+3D', 'Materi 4 Peta 1 Langkah 1 - Tangkapan layar model limas 3D di GeoGebra (dummy)'),
  ('M4-P1-L1-3', 'https://placehold.co/300x400?text=Augmented+Reality', 'Materi 4 Peta 1 Langkah 1 - Model limas AR ditampilkan melalui kamera ponsel (dummy)'),
  ('M4-P1-L1-4', 'https://placehold.co/220x220?text=Maskot+Menulis', 'Materi 4 Peta 1 Langkah 1 - Maskot siswa bersiap mengeksplorasi limas (dummy)'),
  ('M4-P1-L1-5', 'https://placehold.co/160x160?text=Limas+Segitiga', 'Materi 4 Peta 1 Langkah 1 - Thumbnail limas segitiga (dummy)'),
  ('M4-P1-L1-6', 'https://placehold.co/160x160?text=Limas+Segiempat', 'Materi 4 Peta 1 Langkah 1 - Thumbnail limas segiempat (dummy)'),
  ('M4-P1-L1-7', 'https://placehold.co/160x160?text=Limas+Segilima', 'Materi 4 Peta 1 Langkah 1 - Thumbnail limas segilima (dummy)')
on conflict (nama) do nothing;
