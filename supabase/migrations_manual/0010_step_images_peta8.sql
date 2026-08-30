-- Run this in the Supabase SQL editor.
-- Adds Materi 1 / Peta 8 step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  -- Langkah 4 (KotakMotivasi)
  ('M1-P8-L4-1', 'https://placehold.co/120x120?text=Ilustrasi', 'Peta 8 Langkah 4 - Ilustrasi kotak motivasi (dummy)')
on conflict (nama) do nothing;
