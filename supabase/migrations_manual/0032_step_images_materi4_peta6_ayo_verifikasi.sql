-- Run this in the Supabase SQL editor.
-- Adds Materi 4 / Peta 6 (Ayo Verifikasi - Submateri 4, Tahap 5, Luas Permukaan Limas)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M4-P6-L1-1', 'https://placehold.co/416x320?text=Tiga+Siswa+Verifikasi', 'Materi 4 Peta 6 Langkah 1 - Tiga siswa memverifikasi hasil penemuan dengan laptop dan AR (dummy)'),
  ('M4-P6-L2-1', 'https://placehold.co/192x224?text=Dua+Siswa+Jempol', 'Materi 4 Peta 6 Langkah 2 - Dua siswa memberi jempol tanda semangat (dummy)'),
  ('M4-P6-L3-1', 'https://placehold.co/192x224?text=Ilustrasi+Limas', 'Materi 4 Peta 6 Langkah 3 - Ilustrasi bangun limas pada kotak Hasil Verifikasi (dummy)'),
  ('M4-P6-L4-1', 'https://placehold.co/256x320?text=Tiga+Siswa+Refleksi', 'Materi 4 Peta 6 Langkah 4 - Tiga siswa merefleksikan hasil verifikasi (dummy)'),
  ('M4-P6-L4-2', 'https://placehold.co/160x192?text=Trofi', 'Materi 4 Peta 6 Langkah 4 - Ilustrasi piala penghargaan pada banner Hebat (dummy)')
on conflict (nama) do nothing;
