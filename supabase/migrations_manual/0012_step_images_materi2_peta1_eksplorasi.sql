-- Run this in the Supabase SQL editor.
-- Adds Materi 2 / Peta 1 (Eksplorasi Proses & Alat Digital) step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M2-P1-L2-1', 'https://placehold.co/600x338?text=Proses+Jaring-Jaring', 'Materi 2 Peta 1 Langkah 2 - Ilustrasi proses bangun ruang menjadi jaring-jaring dan kembali (dummy)'),
  ('M2-P1-L2-2', 'https://placehold.co/300x180?text=GeoGebra+3D', 'Materi 2 Peta 1 Langkah 2 - Ilustrasi eksplorasi GeoGebra 3D (dummy)'),
  ('M2-P1-L2-3', 'https://placehold.co/300x180?text=Augmented+Reality', 'Materi 2 Peta 1 Langkah 2 - Ilustrasi eksplorasi Augmented Reality (dummy)')
on conflict (nama) do nothing;
