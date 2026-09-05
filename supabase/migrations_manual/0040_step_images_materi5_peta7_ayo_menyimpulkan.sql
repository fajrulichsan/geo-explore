-- Run this in the Supabase SQL editor.
-- Adds Materi 5 / Peta 7 (Ayo Menyimpulkan - Submateri 5, Skala dan Luas Bangun Ruang Sisi Datar, Tahap 6)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M5-P7-L1-1', 'https://placehold.co/416x320?text=Tiga+Siswa+Menyimpulkan+Skala', 'Materi 5 Peta 7 Langkah 1 - Ilustrasi tiga siswa menyusun kesimpulan dengan laptop dan buku (dummy)'),
  ('M5-P7-L4-1', 'https://placehold.co/480x320?text=Kubus+%26+Jaring-Jaring+Diskalakan', 'Materi 5 Peta 7 Langkah 4 - Diagram kubus dan jaring-jaring kubus yang diskalakan dengan faktor k (dummy)'),
  ('M5-P7-L5-1', 'https://placehold.co/220x280?text=Maskot+Kesimpulan', 'Materi 5 Peta 7 Langkah 5 - Siswa laki-laki menunjuk ke atas menyampaikan kesimpulan (dummy)'),
  ('M5-P7-L5-2', 'https://placehold.co/416x224?text=Tiga+Siswa+Membandingkan', 'Materi 5 Peta 7 Langkah 5 - Tiga siswa berdiskusi membandingkan kesimpulan (dummy)'),
  ('M5-P7-L6-1', 'https://placehold.co/200x260?text=Maskot+Jempol', 'Materi 5 Peta 7 Langkah 6 - Siswi memberi jempol tanda semangat (dummy)')
on conflict (nama) do nothing;
