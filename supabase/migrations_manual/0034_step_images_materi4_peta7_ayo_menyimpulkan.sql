-- Run this in the Supabase SQL editor.
-- Adds Materi 4 / Peta 7 (Ayo Menyimpulkan - Submateri 4, Luas Permukaan Limas, Tahap 6)
-- step illustration images to the existing page_images table.
-- Naming convention for `nama`: M{materi}-P{peta}-L{langkah}-{urutan gambar dalam langkah}

insert into page_images (nama, url, keterangan) values
  ('M4-P7-L1-1', 'https://placehold.co/416x320?text=Tiga+Siswa+Menyimpulkan', 'Materi 4 Peta 7 Langkah 1 - Ilustrasi tiga siswa menyusun kesimpulan dengan laptop, buku, dan AR (dummy)'),
  ('M4-P7-L1-2', 'https://placehold.co/480x270?text=Diagram+Jaring-Jaring+Limas', 'Materi 4 Peta 7 Langkah 1 - Diagram hubungan limas, jaring-jaring, luas alas, dan luas sisi tegak menjadi luas permukaan (dummy)'),
  ('M4-P7-L3-1', 'https://placehold.co/300x300?text=Limas+8cm+10cm', 'Materi 4 Peta 7 Langkah 3 - Limas segiempat dengan sisi alas 8 cm dan tinggi sisi tegak 10 cm (dummy)'),
  ('M4-P7-L4-1', 'https://placehold.co/300x300?text=Limas+ke+Jaring-Jaring', 'Materi 4 Peta 7 Langkah 4 - Diagram limas berubah menjadi jaring-jaring limas (dummy)'),
  ('M4-P7-L6-1', 'https://placehold.co/560x224?text=Barisan+Alas+Limas', 'Materi 4 Peta 7 Langkah 6 - Barisan limas dengan alas segitiga, persegi, segilima, segienam, dan segi-n (dummy)'),
  ('M4-P7-L7-1', 'https://placehold.co/160x192?text=Dua+Siswa+Jempol', 'Materi 4 Peta 7 Langkah 7 - Dua siswa memberi jempol tanda semangat (dummy)')
on conflict (nama) do nothing;
