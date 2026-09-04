-- Run this in the Supabase SQL editor.
-- Adds Materi 2 / Peta 2 (Ayo Mengamati dan Berpikir - Submateri 2, Jaring-Jaring Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M2-P2-L1-1', 'https://placehold.co/300x300?text=Susunan+A', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar A (dummy)'),
  ('M2-P2-L1-2', 'https://placehold.co/300x300?text=Susunan+B', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar B (dummy)'),
  ('M2-P2-L1-3', 'https://placehold.co/300x300?text=Susunan+C', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar C (dummy)'),
  ('M2-P2-L1-4', 'https://placehold.co/300x300?text=Susunan+D', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar D (dummy)'),
  ('M2-P2-L1-5', 'https://placehold.co/300x300?text=Susunan+E', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar E (dummy)'),
  ('M2-P2-L1-6', 'https://placehold.co/300x300?text=Susunan+F', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar F (dummy)'),
  ('M2-P2-L1-7', 'https://placehold.co/300x300?text=Susunan+G', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar G (dummy)'),
  ('M2-P2-L1-8', 'https://placehold.co/300x300?text=Susunan+H', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar H (dummy)'),
  ('M2-P2-L1-9', 'https://placehold.co/300x300?text=Susunan+I', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar I (dummy)'),
  ('M2-P2-L1-10', 'https://placehold.co/300x300?text=Susunan+J', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar J (dummy)'),
  ('M2-P2-L1-12', 'https://placehold.co/280x360?text=Maskot+Mengamati', 'Materi 2 Peta 2 Langkah 1 - Maskot mengamati dengan kaca pembesar (dummy)'),
  ('M2-P2-L2-1', 'https://placehold.co/280x360?text=Maskot+Berpikir', 'Materi 2 Peta 2 Langkah 2 - Maskot menunjuk (Ayo Berpikir) (dummy)'),
  ('M2-P2-L4-1', 'https://placehold.co/280x360?text=Maskot+Lanjutkan', 'Materi 2 Peta 2 Langkah 4 - Maskot mengamati (Lanjutkan Pengamatanmu) (dummy)')
on conflict (nama) do nothing;
