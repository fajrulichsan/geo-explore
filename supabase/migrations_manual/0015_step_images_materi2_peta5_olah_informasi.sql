-- Run this in the Supabase SQL editor.
-- Adds Materi 2 / Peta 5 (Ayo Mengolah Informasi - Submateri 2, Jaring-Jaring Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M2-P5-L1-1', 'https://placehold.co/280x360?text=Maskot+Mengolah+Informasi', 'Materi 2 Peta 5 Langkah 1 - Maskot mengolah informasi (dummy)')
on conflict (nama) do nothing;
