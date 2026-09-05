-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 9 (Tantangan Open-Ended - Submateri 5, Skala dan Luas Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P9-L1-1', 'https://placehold.co/416x320?text=Tiga+Siswa+Berdiskusi+Strategi', 'Materi 5 Peta 9 Langkah 1 - Tiga siswa berdiskusi strategi menyelesaikan tantangan (dummy)'),
  ('M5-P9-L4-1', 'https://placehold.co/280x280?text=Dua+Siswa+Merayakan', 'Materi 5 Peta 9 Langkah 4 - Dua siswa merayakan keberhasilan menyelesaikan tantangan (dummy)')
on conflict (nama) do nothing;
