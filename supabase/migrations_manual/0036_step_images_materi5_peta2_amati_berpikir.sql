-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 2 (Ayo Mengamati dan Berpikir - Submateri 5, Skala dan Luas Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P2-L1-1', 'https://placehold.co/280x224?text=Dua+Siswa+Mengamati+Bangun+Ruang', 'Materi 5 Peta 2 Langkah 1 - Siswa laki-laki dengan kaca pembesar dan siswa perempuan memegang penggaris (dummy)'),
  ('M5-P2-L9-1', 'https://placehold.co/160x200?text=Maskot+Jempol', 'Materi 5 Peta 2 Langkah 9 - Maskot memberi jempol tanda semangat (dummy)')
on conflict (nama) do nothing;
