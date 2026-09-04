-- Run this in the Supabase SQL editor.
-- Adds Materi 3 / Peta 8 (Refleksi Diri - Submateri 3, Luas Permukaan Kubus, Balok, dan Prisma)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M3-P8-L1-1', 'https://placehold.co/320x240?text=Tiga+Siswa+Berdiskusi', 'Materi 3 Peta 8 Langkah 1 - Tiga siswa berdiskusi hasil belajar pada intro Refleksi Diri (dummy)'),
  ('M3-P8-L3-1', 'https://placehold.co/160x224?text=Maskot+Jempol', 'Materi 3 Peta 8 Langkah 3 - Maskot memberi jempol pada Keyakinan Diriku (dummy)'),
  ('M3-P8-L5-1', 'https://placehold.co/128x128?text=Trofi', 'Materi 3 Peta 8 Langkah 5 - Ilustrasi trofi pada Pesan untuk Diriku (dummy)'),
  ('M3-P8-L5-2', 'https://placehold.co/220x220?text=Bintang', 'Materi 3 Peta 8 Langkah 5 - Ilustrasi bintang pada kotak Hebat! (dummy)')
on conflict (nama) do nothing;
