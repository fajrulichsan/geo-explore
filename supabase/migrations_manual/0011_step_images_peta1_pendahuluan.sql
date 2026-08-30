-- Run this in the Supabase SQL editor.
-- Adds Materi 1 / Peta 1 (Pendahuluan) step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M1-P1-L1-2', 'https://placehold.co/300x180?text=GeoGebra+3D', 'Peta 1 Langkah 1 - Ilustrasi eksplorasi GeoGebra 3D (dummy)'),
  ('M1-P1-L1-3', 'https://placehold.co/300x180?text=Augmented+Reality', 'Peta 1 Langkah 1 - Ilustrasi eksplorasi Augmented Reality (dummy)')
on conflict (nama) do nothing;
