-- Run this in the Supabase SQL editor.
-- Adds Materi 6 / Peta 6 (Ayo Verifikasi - Tahap 5) step illustration images to page_images.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M6-P6-L1-1', 'https://placehold.co/1164x628?text=Hero+Verifikasi+Kubus+Balok', 'Materi 6 Peta 6 Langkah 1 - Tiga siswa memeriksa hasil perhitungan kubus dan balok (dummy)'),
  ('M6-P6-L1-2', 'https://placehold.co/508x505?text=Kubus', 'Materi 6 Peta 6 Langkah 1 - Ikon/model kubus tersusun kubus satuan (juga dipakai di tabel langkah 2, 4, 5) (dummy)'),
  ('M6-P6-L1-3', 'https://placehold.co/436x528?text=Balok', 'Materi 6 Peta 6 Langkah 1 - Ikon/model balok tersusun kubus satuan (juga dipakai di tabel langkah 2, 4, 5) (dummy)'),
  ('M6-P6-L3-1', 'https://placehold.co/1164x625?text=Hero+Verifikasi+Prisma', 'Materi 6 Peta 6 Langkah 3 - Tiga siswa memeriksa hasil perhitungan prisma segitiga (dummy)'),
  ('M6-P6-L3-2', 'https://placehold.co/1375x592?text=Prisma+Segitiga', 'Materi 6 Peta 6 Langkah 3 - Prisma segitiga 5 lapisan (juga dipakai di tabel langkah 4, 5) (dummy)'),
  ('M6-P6-L4-1', 'https://placehold.co/783x598?text=Maskot+Lanjut+Halaman', 'Materi 6 Peta 6 Langkah 4 - Siswa: Ayo lanjut ke halaman berikutnya (dummy)'),
  ('M6-P6-L5-1', 'https://placehold.co/1162x628?text=Hero+Rekap+Hasil', 'Materi 6 Peta 6 Langkah 5 - Tiga siswa merekap hasil verifikasi (dummy)'),
  ('M6-P6-L6-1', 'https://placehold.co/669x615?text=Maskot+Lanjut+Tahap+6', 'Materi 6 Peta 6 Langkah 6 - Siswa: Ayo lanjut ke Tahap 6 (dummy)')
on conflict (nama) do nothing;
