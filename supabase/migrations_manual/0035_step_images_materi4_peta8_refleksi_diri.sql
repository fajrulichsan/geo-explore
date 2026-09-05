-- Run this in the Supabase SQL editor.
-- Adds Materi 4 / Peta 8 (Refleksi Diri - Submateri 4, Luas Permukaan Limas)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M4-P8-L1-1', 'https://placehold.co/320x240?text=Tiga+Siswa+Berdiskusi', 'Materi 4 Peta 8 Langkah 1 - Tiga siswa berdiskusi hasil belajar pada intro Refleksi Diri (dummy)')
on conflict (nama) do nothing;
