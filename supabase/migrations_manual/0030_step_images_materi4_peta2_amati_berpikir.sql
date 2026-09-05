-- Run this in the Supabase SQL editor.
-- Adds Materi 4 / Peta 2 (Ayo Mengamati dan Berpikir - Tahap 1) step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M4-P2-L1-1', 'https://placehold.co/300x180?text=Tiga+Siswa+Mengamati+Limas', 'Materi 4 Peta 2 Langkah 1 - Ilustrasi tiga siswa mengamati bangun ruang limas dan jaring-jaringnya di laptop (dummy, dipakai ulang di langkah 6)'),
  ('M4-P2-L2-1', 'https://placehold.co/160x180?text=Maskot+Jempol', 'Materi 4 Peta 2 Langkah 2 - Maskot siswa memberi jempol setelah mengamati limas (dummy)')
on conflict (nama) do nothing;
