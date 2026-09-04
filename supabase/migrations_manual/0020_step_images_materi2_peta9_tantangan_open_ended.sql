-- Run this in the Supabase SQL editor.
-- Adds Materi 2 / Peta 9 (Tantangan Open-Ended - Submateri 2, Jaring-Jaring Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M2-P9-L1-1', 'https://placehold.co/280x360?text=Maskot+Tantangan', 'Materi 2 Peta 9 Langkah 1 - Maskot menunjukkan kemampuan (dummy)'),
  ('M2-P9-L1-2', 'https://placehold.co/320x320?text=Kubus', 'Materi 2 Peta 9 Langkah 1 - Bangun ruang kubus untuk masalah open-ended (dummy)'),
  ('M2-P9-L4-1', 'https://placehold.co/280x360?text=Maskot+Refleksi', 'Materi 2 Peta 9 Langkah 4 - Maskot merefleksikan tantangan (dummy)')
on conflict (nama) do nothing;
