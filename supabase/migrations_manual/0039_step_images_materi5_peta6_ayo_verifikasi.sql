-- Run this in the Supabase SQL editor.
-- Materi 5 / Peta 6 (Ayo Verifikasi - Submateri 5, Tahap 5) step illustration images (dummy placeholders).
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}
-- M5-P6-L1-1 is reused on Langkah 3 (same artwork on page 2 of the worksheet).

insert into page_images (nama, url, keterangan) values
  ('M5-P6-L1-1', 'https://placehold.co/666x535?text=Tiga+Siswa+Verifikasi', 'Materi 5 Peta 6 Langkah 1 - Tiga siswa memverifikasi hasil dengan tablet (dipakai juga di Langkah 3) (dummy)'),
  ('M5-P6-L4-1', 'https://placehold.co/262x528?text=Siswa+Jempol', 'Materi 5 Peta 6 Langkah 4 - Siswa memberi jempol pada Refleksi Singkat (dummy)'),
  ('M5-P6-L4-2', 'https://placehold.co/240x320?text=Maskot+Semangat', 'Materi 5 Peta 6 Langkah 4 - Maskot siswi pada kotak Motivasi (dummy)'),
  ('M5-P6-L4-3', 'https://placehold.co/224x224?text=Kaca+Pembesar+Grafik', 'Materi 5 Peta 6 Langkah 4 - Kaca pembesar dan grafik batang pada Pesan Penting (dummy)')
on conflict (nama) do nothing;
