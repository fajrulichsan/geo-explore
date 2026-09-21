-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 3 / Peta 6 (Ayo Verifikasi): 4 steps, keys M3-P6-L1-1, L2-1, L4-1.
-- Old keys M3-P6-L3-1 / M3-P6-L3-2 are no longer used.

insert into page_images (nama, url, keterangan) values
  ('M3-P6-L1-1', 'https://placehold.co/540x310?text=Tiga+Siswa+Verifikasi', 'Materi 3 Peta 6 Langkah 1 - Ilustrasi tiga siswa memverifikasi dengan tablet, laptop, dan bangun ruang (dummy)'),
  ('M3-P6-L2-1', 'https://placehold.co/160x192?text=Maskot+Motivasi', 'Materi 3 Peta 6 Langkah 2 - Maskot siswi jempol (Kotak Motivasi) (dummy)'),
  ('M3-P6-L4-1', 'https://placehold.co/540x360?text=Tiga+Siswa+Refleksi', 'Materi 3 Peta 6 Langkah 4 - Tiga siswa dengan kaca pembesar dan jaring-jaring (dummy)')
on conflict (nama) do nothing;
