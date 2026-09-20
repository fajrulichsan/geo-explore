-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 2 (Ayo Mengamati dan Berpikir - Submateri 5, Skala dan Luas Bangun Ruang Sisi Datar)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}
-- Langkah 5 memakai ulang gambar M5-P2-L1-2 s/d L1-5.

insert into page_images (nama, url, keterangan) values
  ('M5-P2-L1-1', 'https://placehold.co/800x520?text=Dua+Siswa+Mengamati+Bangun+Ruang', 'Materi 5 Peta 2 Langkah 1 - Siswa laki-laki dengan kaca pembesar dan siswa perempuan memegang penggaris (dummy)'),
  ('M5-P2-L1-2', 'https://placehold.co/800x400?text=Kubus+Kecil+ke+Besar', 'Materi 5 Peta 2 Langkah 1 - Kubus rusuk 4 cm ke 8 cm, k = 2 (dummy)'),
  ('M5-P2-L1-3', 'https://placehold.co/1000x300?text=Balok+Kecil+ke+Besar', 'Materi 5 Peta 2 Langkah 1 - Balok 6x4x3 ke 12x8x6, k = 2 (dummy)'),
  ('M5-P2-L1-4', 'https://placehold.co/800x330?text=Prisma+Kecil+ke+Besar', 'Materi 5 Peta 2 Langkah 1 - Prisma segitiga kecil ke besar, k = 2 (dummy)'),
  ('M5-P2-L1-5', 'https://placehold.co/900x420?text=Limas+Kecil+ke+Besar', 'Materi 5 Peta 2 Langkah 1 - Limas segiempat kecil ke besar, k = 2 (dummy)'),
  ('M5-P2-L2-1', 'https://placehold.co/900x420?text=Luas+Satu+Sisi+Kubus', 'Materi 5 Peta 2 Langkah 2 - Satu sisi kubus kecil (4x4) dan besar (8x8) (dummy)'),
  ('M5-P2-L9-1', 'https://placehold.co/270x260?text=Maskot+Jempol', 'Materi 5 Peta 2 Langkah 9 - Maskot memberi jempol tanda semangat (dummy)')
on conflict (nama) do nothing;
