-- Run this in the Supabase SQL editor.
-- Materi 5 / Peta 10 (Rangkuman - Skala dan Luas Bangun Ruang Sisi Datar) step images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P10-L1-1', 'https://placehold.co/703x478?text=Tiga+Siswa+Berdiskusi', 'Materi 5 Peta 10 Langkah 1 - Tiga siswa berdiskusi dengan laptop (dummy)'),
  ('M5-P10-L2-1', 'https://placehold.co/955x448?text=Persegi+a+ke+k.a', 'Materi 5 Peta 10 Langkah 2 - Diagram persegi a menjadi k.a (dummy)'),
  ('M5-P10-L2-2', 'https://placehold.co/400x200?text=Buku+Terbuka', 'Materi 5 Peta 10 Langkah 2 - Buku terbuka pada kotak Ingat (dummy)'),
  ('M5-P10-L4-1', 'https://placehold.co/409x199?text=Luas+Awal+ke+Luas+Baru', 'Materi 5 Peta 10 Langkah 4 - Luas awal ke luas baru kata kunci (dummy)'),
  ('M5-P10-L5-1', 'https://placehold.co/331x529?text=Siswa+Semangat', 'Materi 5 Peta 10 Langkah 5 - Siswa laki-laki semangat pada kotak Hebat (dummy)'),
  ('M5-P10-L5-2', 'https://placehold.co/1222x487?text=Selanjutnya+Volume+k3', 'Materi 5 Peta 10 Langkah 5 - Siswi dan gelembung pikiran volume k3 (dummy)')
on conflict (nama) do nothing;
