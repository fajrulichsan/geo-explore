-- Run this in the Supabase SQL editor.
-- Adds Materi 8 / Peta 2 (Tahap 1 - Ayo Mengamati dan Berpikir) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M8-P2-L1-1', 'https://placehold.co/933x603?text=Hero+Dua+Siswa+Amati', 'Materi 8 Peta 2 Langkah 1 - Dua siswa mengamati bangun ruang di atas meja (dummy)'),
  ('M8-P2-L1-2', 'https://placehold.co/607x222?text=Kubus+k2', 'Materi 8 Peta 2 Langkah 1 - Kubus kecil dan kubus besar k = 2 (dummy)'),
  ('M8-P2-L1-3', 'https://placehold.co/607x196?text=Balok+k2', 'Materi 8 Peta 2 Langkah 1 - Balok kecil dan balok besar k = 2 (dummy)'),
  ('M8-P2-L1-4', 'https://placehold.co/609x216?text=Prisma+k2', 'Materi 8 Peta 2 Langkah 1 - Prisma segitiga kecil dan besar k = 2 (dummy)'),
  ('M8-P2-L1-5', 'https://placehold.co/472x244?text=Limas+k2', 'Materi 8 Peta 2 Langkah 1 - Limas segiempat kecil dan besar k = 2 (dummy)'),
  ('M8-P2-L2-1', 'https://placehold.co/388x196?text=Kubus+Kecil+Besar', 'Materi 8 Peta 2 Langkah 2 - Pasangan kubus kecil dan kubus besar dengan panah (dummy)'),
  ('M8-P2-L4-1', 'https://placehold.co/400x260?text=Maket+Rumah', 'Materi 8 Peta 2 Langkah 4 - Maket rumah dengan mobil dan pepohonan (Tahukah Kamu) (dummy)'),
  ('M8-P2-L5-1', 'https://placehold.co/1087x598?text=Hero+Siswa+Kaca+Pembesar', 'Materi 8 Peta 2 Langkah 5 - Dua siswa dengan kaca pembesar dan penggaris (dummy)'),
  ('M8-P2-L5-2', 'https://placehold.co/1543x481?text=Kubus+Dimensi+k2', 'Materi 8 Peta 2 Langkah 5 - Kubus kecil 2 cm dan kubus besar 4 cm dengan dimensi (dummy)'),
  ('M8-P2-L8-1', 'https://placehold.co/138x258?text=Siswa+Jempol', 'Materi 8 Peta 2 Langkah 8 - Siswa laki-laki mengacungkan jempol (dummy)')
on conflict (nama) do nothing;
