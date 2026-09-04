-- Run this in the Supabase SQL editor.
-- Adds Materi 2 / Peta 10 (Rangkuman - Submateri 2, Jaring-Jaring Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M2-P10-L1-1', 'https://placehold.co/280x360?text=Maskot+Rangkuman', 'Materi 2 Peta 10 Langkah 1 - Maskot menjelaskan rangkuman submateri (dummy)'),
  ('M2-P10-L2-1', 'https://placehold.co/200x280?text=Maskot+Semangat', 'Materi 2 Peta 10 Langkah 2 - Maskot memberi pesan motivasi penutup (dummy)')
on conflict (nama) do nothing;
