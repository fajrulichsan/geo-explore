-- Run this in the Supabase SQL editor.
-- Adds Materi 3 / Peta 3 (Ayo Berdiskusi - Submateri 3, Luas Permukaan Kubus, Balok, dan Prisma)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M3-P3-L1-1', 'https://placehold.co/280x360?text=Tiga+Siswa+Berdiskusi', 'Materi 3 Peta 3 Langkah 1 - Tiga siswa berdiskusi di meja belajar (dummy)'),
  ('M3-P3-L2-1', 'https://placehold.co/220x220?text=Maskot+Ingat', 'Materi 3 Peta 3 Langkah 2 - Maskot anak laki-laki menunjuk kotak ingat (dummy)'),
  ('M3-P3-L3-1', 'https://placehold.co/320x280?text=Tiga+Siswa+Berpendapat', 'Materi 3 Peta 3 Langkah 3 - Tiga siswa menyampaikan pendapat (dummy)')
on conflict (nama) do nothing;
