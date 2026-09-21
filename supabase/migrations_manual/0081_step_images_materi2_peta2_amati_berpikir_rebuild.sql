-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 2 / Peta 2 (Ayo Mengamati dan Berpikir): 5 steps.
-- Old placeholder rows for M2-P2-* may already exist; on conflict they are kept (real uploads overwrite them).

insert into page_images (nama, url, keterangan) values
  ('M2-P2-L1-1', 'https://placehold.co/280x240?text=Siswi+Mengamati', 'Materi 2 Peta 2 Langkah 1 - Siswi berhijab mengamati buku dengan kaca pembesar (dummy)'),
  ('M2-P2-L1-2', 'https://placehold.co/400x300?text=Susunan+A', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar A (dummy)'),
  ('M2-P2-L1-3', 'https://placehold.co/400x300?text=Susunan+B', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar B (dummy)'),
  ('M2-P2-L1-4', 'https://placehold.co/400x300?text=Susunan+C', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar C (dummy)'),
  ('M2-P2-L1-5', 'https://placehold.co/400x300?text=Susunan+D', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar D (dummy)'),
  ('M2-P2-L1-6', 'https://placehold.co/400x300?text=Susunan+E', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar E (dummy)'),
  ('M2-P2-L1-7', 'https://placehold.co/400x300?text=Susunan+F', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar F (dummy)'),
  ('M2-P2-L1-8', 'https://placehold.co/400x300?text=Susunan+G', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar G (dummy)'),
  ('M2-P2-L1-9', 'https://placehold.co/400x300?text=Susunan+H', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar H (dummy)'),
  ('M2-P2-L1-10', 'https://placehold.co/400x300?text=Susunan+I', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar I (dummy)'),
  ('M2-P2-L1-11', 'https://placehold.co/400x300?text=Susunan+J', 'Materi 2 Peta 2 Langkah 1 - Susunan bidang datar J (dummy)'),
  ('M2-P2-L2-1', 'https://placehold.co/140x240?text=Siswi+Berpikir', 'Materi 2 Peta 2 Langkah 2 - Siswi berhijab menunjuk ke atas (Ayo Berpikir) (dummy)'),
  ('M2-P2-L3-1', 'https://placehold.co/256x241?text=Siswa+Kaca+Pembesar', 'Materi 2 Peta 2 Langkah 3 - Siswa laki-laki memegang kaca pembesar (dummy)'),
  ('M2-P2-L3-2', 'https://placehold.co/400x300?text=Susunan+A', 'Materi 2 Peta 2 Langkah 3 - Susunan bidang datar A (dummy)'),
  ('M2-P2-L3-3', 'https://placehold.co/400x300?text=Susunan+B', 'Materi 2 Peta 2 Langkah 3 - Susunan bidang datar B (dummy)'),
  ('M2-P2-L3-4', 'https://placehold.co/400x300?text=Susunan+C', 'Materi 2 Peta 2 Langkah 3 - Susunan bidang datar C (dummy)'),
  ('M2-P2-L3-5', 'https://placehold.co/400x300?text=Susunan+D', 'Materi 2 Peta 2 Langkah 3 - Susunan bidang datar D (dummy)'),
  ('M2-P2-L3-6', 'https://placehold.co/400x300?text=Susunan+E', 'Materi 2 Peta 2 Langkah 3 - Susunan bidang datar E (dummy)'),
  ('M2-P2-L3-7', 'https://placehold.co/400x300?text=Susunan+F', 'Materi 2 Peta 2 Langkah 3 - Susunan bidang datar F (dummy)'),
  ('M2-P2-L3-8', 'https://placehold.co/400x300?text=Susunan+G', 'Materi 2 Peta 2 Langkah 3 - Susunan bidang datar G (dummy)'),
  ('M2-P2-L3-9', 'https://placehold.co/400x300?text=Susunan+H', 'Materi 2 Peta 2 Langkah 3 - Susunan bidang datar H (dummy)'),
  ('M2-P2-L3-10', 'https://placehold.co/400x300?text=Susunan+I', 'Materi 2 Peta 2 Langkah 3 - Susunan bidang datar I (dummy)'),
  ('M2-P2-L3-11', 'https://placehold.co/400x300?text=Susunan+J', 'Materi 2 Peta 2 Langkah 3 - Susunan bidang datar J (dummy)')
on conflict (nama) do nothing;
