-- Run this in the Supabase SQL editor.
-- Adds Materi 4 / Peta 6 (Ayo Verifikasi - Submateri 4, Tahap 5, Luas Permukaan Limas)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M4-P6-L1-1', 'https://placehold.co/560x440?text=Tiga+Siswa+Verifikasi', 'Materi 4 Peta 6 Langkah 1 - Tiga siswa memverifikasi hasil penemuan dengan laptop dan AR (dummy)'),
  ('M4-P6-L2-1', 'https://placehold.co/780x515?text=Dua+Siswa+Jempol', 'Materi 4 Peta 6 Langkah 2 - Dua siswa memberi jempol pada banner Catatan Penting (dummy)'),
  ('M4-P6-L5-1', 'https://placehold.co/675x538?text=Tiga+Siswa+Refleksi', 'Materi 4 Peta 6 Langkah 5 - Tiga siswa merefleksikan hasil verifikasi (dummy)')
on conflict (nama) do nothing;
