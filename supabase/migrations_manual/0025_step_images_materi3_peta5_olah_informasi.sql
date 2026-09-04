-- Run this in the Supabase SQL editor.
-- Adds Materi 3 / Peta 5 (Ayo Mengolah Informasi - Submateri 3, Tahap 4, Luas Permukaan Kubus, Balok, dan Prisma)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M3-P5-L1-1', 'https://placehold.co/416x320?text=Tiga+Siswa+Mengolah+Data', 'Materi 3 Peta 5 Langkah 1 - Tiga siswa mengolah data hasil eksplorasi (dummy)'),
  ('M3-P5-L3-1', 'https://placehold.co/240x240?text=Kubus+3D', 'Materi 3 Peta 5 Langkah 3 - Ilustrasi kubus 3D pada kotak Ingat! (dummy)'),
  ('M3-P5-L6-1', 'https://placehold.co/280x280?text=Maskot+Jempol', 'Materi 3 Peta 5 Langkah 6 - Maskot memberi jempol pada Kotak Motivasi (dummy)')
on conflict (nama) do nothing;
