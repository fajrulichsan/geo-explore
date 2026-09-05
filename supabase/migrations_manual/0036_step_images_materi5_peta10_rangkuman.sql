-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 10 (Rangkuman - Submateri 5, Skala dan Luas Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P10-L1-1', 'https://placehold.co/440x320?text=Tiga+Siswa+Berdiskusi+Skala', 'Materi 5 Peta 10 Langkah 1 - Tiga siswa berdiskusi tentang faktor skala menggunakan laptop (dummy)'),
  ('M5-P10-L4-1', 'https://placehold.co/200x280?text=Maskot+Jempol', 'Materi 5 Peta 10 Langkah 4 - Maskot memberi jempol pada penutup rangkuman (dummy)')
on conflict (nama) do nothing;
