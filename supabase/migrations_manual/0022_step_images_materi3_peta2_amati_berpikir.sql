-- Run this in the Supabase SQL editor.
-- Adds Materi 3 / Peta 2 (Ayo Mengamati dan Berpikir - Submateri 3, Luas Permukaan Kubus, Balok, dan Prisma)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M3-P2-L1-1', 'https://placehold.co/280x360?text=Maskot+Mengamati', 'Materi 3 Peta 2 Langkah 1 - Maskot mengamati dengan kaca pembesar (dummy)'),
  ('M3-P2-L1-2', 'https://placehold.co/320x240?text=Jaring-Jaring+Kubus', 'Materi 3 Peta 2 Langkah 1 - Jaring-jaring kubus (dummy)'),
  ('M3-P2-L1-3', 'https://placehold.co/320x240?text=Jaring-Jaring+Balok', 'Materi 3 Peta 2 Langkah 1 - Jaring-jaring balok (dummy)'),
  ('M3-P2-L1-4', 'https://placehold.co/320x240?text=Jaring-Jaring+Prisma+Segitiga', 'Materi 3 Peta 2 Langkah 1 - Jaring-jaring prisma segitiga (dummy)'),
  ('M3-P2-L2-1', 'https://placehold.co/280x360?text=Maskot+Berpikir', 'Materi 3 Peta 2 Langkah 2 - Maskot berpikir dengan gelembung tanya (dummy)'),
  ('M3-P2-L4-1', 'https://placehold.co/320x240?text=Jaring-Jaring+Kubus+%28Ukuran%29', 'Materi 3 Peta 2 Langkah 4 - Jaring-jaring kubus dengan ukuran sisi (dummy)'),
  ('M3-P2-L4-2', 'https://placehold.co/320x240?text=Jaring-Jaring+Balok+%28Ukuran%29', 'Materi 3 Peta 2 Langkah 4 - Jaring-jaring balok dengan ukuran sisi (dummy)'),
  ('M3-P2-L4-3', 'https://placehold.co/320x240?text=Jaring-Jaring+Prisma+%28Ukuran%29', 'Materi 3 Peta 2 Langkah 4 - Jaring-jaring prisma segitiga dengan ukuran sisi (dummy)'),
  ('M3-P2-L6-1', 'https://placehold.co/280x280?text=Dua+Siswa+Jempol', 'Materi 3 Peta 2 Langkah 6 - Dua siswa memberi jempol penutup tahap (dummy)')
on conflict (nama) do nothing;
