-- Run this in the Supabase SQL editor.
-- Adds illustration images for Materi 1 / Peta 7 (Ayo Menyimpulkan) rebuild across both worksheet
-- pages (hal1 + hal2), Tahap 6 dari 6.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M1-P7-L1-1', 'https://placehold.co/560x360?text=Siswa+Berdiskusi', 'Peta 7 Langkah 1 & 6 - Tiga siswa di meja berdiskusi sambil menunjuk ke atas (dummy)'),
  ('M1-P7-L11-1', 'https://placehold.co/300x360?text=Anak+Berpikir', 'Peta 7 Langkah 11 - Anak laki-laki berpikir dengan gelembung pikiran bola lampu (dummy)')
on conflict (nama) do nothing;
