-- Run this in the Supabase SQL editor.
-- Adds Materi 2 / Peta 6 (Ayo Verifikasi - Submateri 2, Jaring-Jaring Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M2-P6-L1-1', 'https://placehold.co/280x360?text=Maskot+Verifikasi', 'Materi 2 Peta 6 Langkah 1 - Maskot mengajak memverifikasi dugaan (dummy)'),
  ('M2-P6-L1-2', 'https://placehold.co/480x300?text=GeoGebra+3D', 'Materi 2 Peta 6 Langkah 1 - Tampilan model GeoGebra 3D untuk verifikasi (dummy)'),
  ('M2-P6-L1-3', 'https://placehold.co/220x220?text=QR+GeoGebra', 'Materi 2 Peta 6 Langkah 1 - QR code menuju GeoGebra 3D (dummy)'),
  ('M2-P6-L1-4', 'https://placehold.co/480x300?text=Proses+AR', 'Materi 2 Peta 6 Langkah 1 - Ilustrasi proses membuka bangun ruang menjadi jaring-jaring via AR (dummy)'),
  ('M2-P6-L1-5', 'https://placehold.co/220x220?text=QR+AR', 'Materi 2 Peta 6 Langkah 1 - QR code menuju pengalaman AR (dummy)'),
  ('M2-P6-L3-1', 'https://placehold.co/280x360?text=Maskot+Refleksi', 'Materi 2 Peta 6 Langkah 3 - Maskot mengajak refleksi singkat (dummy)')
on conflict (nama) do nothing;
