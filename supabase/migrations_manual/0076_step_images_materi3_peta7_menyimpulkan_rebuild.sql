-- Run this in the Supabase SQL editor.
-- Rebuild of Materi 3 / Peta 7 (Ayo Menyimpulkan): 4 steps, keys M3-P7-L1-1, L2-1, L3-1, L4-1, L4-2.
-- Old placeholder M3-P7-L2-1 (Maskot Jempol) is now the jaring-jaring diagram in step 2; mascot moved to M3-P7-L4-2.

insert into page_images (nama, url, keterangan) values
  ('M3-P7-L1-1', 'https://placehold.co/820x530?text=Tiga+Siswa+Menyimpulkan', 'Materi 3 Peta 7 Langkah 1 - Tiga siswa menyusun kesimpulan (dummy)'),
  ('M3-P7-L2-1', 'https://placehold.co/680x185?text=Bangun+Ruang+Jaring-Jaring', 'Materi 3 Peta 7 Langkah 2 - Diagram bangun ruang > jaring-jaring > luas (dummy)'),
  ('M3-P7-L3-1', 'https://placehold.co/820x530?text=Tiga+Siswa+Kesimpulan+Kelompok', 'Materi 3 Peta 7 Langkah 3 - Tiga siswa berdiskusi kesimpulan kelompok (dummy)'),
  ('M3-P7-L4-1', 'https://placehold.co/690x190?text=Bangun+Ruang+Jaring-Jaring', 'Materi 3 Peta 7 Langkah 4 - Diagram Pesan Penting (dummy)'),
  ('M3-P7-L4-2', 'https://placehold.co/760x530?text=Maskot+Jempol', 'Materi 3 Peta 7 Langkah 4 - Siswi maskot jempol (dummy)')
on conflict (nama) do nothing;
